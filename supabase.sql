-- 圣水快闪线 · comments + live queue reports (Supabase)
-- 1) supabase.com → New project (region: Northeast Asia (Seoul))
-- 2) SQL Editor → paste this whole file → Run
-- 3) Project Settings → API: copy "Project URL" and the "anon public" key into config.js
-- The anon key is meant to be public; these policies decide what it may do.

create table if not exists public.comments (
  id          bigint generated always as identity primary key,
  place       text not null check (char_length(place) between 1 and 40),
  nick        text not null check (char_length(nick) between 1 and 12),
  body        text not null check (char_length(body) between 1 and 200),
  likes       int  not null default 0,
  reports     int  not null default 0,
  created_at  timestamptz not null default now()
);
create index if not exists comments_place_idx on public.comments (place, created_at desc);

create table if not exists public.queue_reports (
  id          bigint generated always as identity primary key,
  place       text not null check (char_length(place) between 1 and 40),
  level       smallint not null check (level between 0 and 2),   -- 0 short · 1 medium · 2 long
  created_at  timestamptz not null default now()
);
create index if not exists queue_place_idx on public.queue_reports (place, created_at desc);

alter table public.comments enable row level security;
alter table public.queue_reports enable row level security;

-- anyone can read comments that fewer than 3 people reported; anyone can post (likes/reports start at 0)
drop policy if exists "read comments" on public.comments;
create policy "read comments" on public.comments for select using (reports < 3);
drop policy if exists "post comments" on public.comments;
create policy "post comments" on public.comments for insert with check (likes = 0 and reports = 0);

drop policy if exists "read queue" on public.queue_reports;
create policy "read queue" on public.queue_reports for select using (created_at > now() - interval '1 day');
drop policy if exists "post queue" on public.queue_reports;
create policy "post queue" on public.queue_reports for insert with check (true);

-- slow down floods: at most 20 comments a minute per pop-up, 60 queue reports an hour per pop-up
create or replace function public.limit_comments() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from comments where place = new.place and created_at > now() - interval '1 minute') >= 20 then
    raise exception 'too many comments, try again in a minute';
  end if;
  return new;
end $$;
drop trigger if exists limit_comments on public.comments;
create trigger limit_comments before insert on public.comments for each row execute function public.limit_comments();

create or replace function public.limit_queue() returns trigger language plpgsql security definer set search_path = public as $$
begin
  if (select count(*) from queue_reports where place = new.place and created_at > now() - interval '1 hour') >= 60 then
    raise exception 'too many reports';
  end if;
  return new;
end $$;
drop trigger if exists limit_queue on public.queue_reports;
create trigger limit_queue before insert on public.queue_reports for each row execute function public.limit_queue();

-- likes and reports only through these functions (no direct updates)
create or replace function public.like_comment(cid bigint) returns void language sql security definer set search_path = public as
$$ update comments set likes = likes + 1 where id = cid $$;
create or replace function public.unlike_comment(cid bigint) returns void language sql security definer set search_path = public as
$$ update comments set likes = greatest(likes - 1, 0) where id = cid $$;
create or replace function public.report_comment(cid bigint) returns void language sql security definer set search_path = public as
$$ update comments set reports = reports + 1 where id = cid $$;
grant execute on function public.like_comment(bigint), public.unlike_comment(bigint), public.report_comment(bigint) to anon;

-- comment count per pop-up (for the list cards)
create or replace view public.comment_counts with (security_invoker = true) as
  select place, count(*)::int as n from public.comments where reports < 3 group by place;
grant select on public.comment_counts to anon;

-- table privileges for the public (anon) key — needed on projects that don't expose new tables automatically
grant usage on schema public to anon;
grant select, insert on public.comments, public.queue_reports to anon;
grant usage, select on all sequences in schema public to anon;

-- live updates
do $$ begin
  alter publication supabase_realtime add table public.comments;
exception when duplicate_object then null; end $$;
do $$ begin
  alter publication supabase_realtime add table public.queue_reports;
exception when duplicate_object then null; end $$;

-- To delete a comment: Table Editor → comments → delete the row (or set reports = 3 to hide it).

-- ===== visitor photos in comments (run this part too) =====
alter table public.comments add column if not exists img text
  check (img is null or img like 'https://%.supabase.co/storage/v1/object/public/photos/%');
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
  values ('photos', 'photos', true, 3145728, array['image/jpeg'])
  on conflict (id) do nothing;
drop policy if exists "upload photos" on storage.objects;
create policy "upload photos" on storage.objects for insert to anon with check (bucket_id = 'photos' and (storage.foldername(name))[1] = 'c');
drop policy if exists "read photos" on storage.objects;
create policy "read photos" on storage.objects for select to anon using (bucket_id = 'photos');
