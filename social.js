/* 圣水快闪线 · comments + live queue reports.
   With supabaseUrl + supabaseKey in config.js: shared by everyone, live (Supabase Realtime). Set-up SQL: supabase.sql.
   Without them: demo mode, everything stays on this device only (localStorage). */
(function(){
'use strict';
const CFG=window.SEONGSU_CONFIG||{};
const QWIN=2*60*60*1000;                       // queue reports count for 2 hours
const store={get(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v;}catch(e){return d;}},
             set(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};

/* ---------- this device: nickname, liked comments, rate limits ---------- */
const me={
  nick(){return store.get('ss_nick','');},
  setNick(n){store.set('ss_nick',String(n||'').trim().slice(0,12));},
  liked(id){return !!store.get('ss_liked',{})[id];},
  setLiked(id,v){const m=store.get('ss_liked',{});if(v)m[id]=1;else delete m[id];store.set('ss_liked',m);},
  hidden(id){return !!store.get('ss_hide',{})[id];},
  hide(id){const m=store.get('ss_hide',{});m[id]=1;store.set('ss_hide',m);},
  lastPost(){return store.get('ss_lastpost',0);},
  posted(){store.set('ss_lastpost',Date.now());},
  lastRep(place){return store.get('ss_qrep',{})[place]||0;},
  reported(place){const m=store.get('ss_qrep',{});m[place]=Date.now();store.set('ss_qrep',m);}
};

/* ---------- demo backend (this device only) ---------- */
function demoBackend(){
  const subs={c:[],q:[]};
  const all=()=>store.get('ss_demo_c',[]);
  const allQ=()=>store.get('ss_demo_q',[]);
  return {live:false,
    async list(place){return all().filter(c=>c.place===place&&c.reports<3);},
    async counts(){const m={};all().forEach(c=>{if(c.reports<3)m[c.place]=(m[c.place]||0)+1;});return m;},
    async add(place,nick,body){const c={id:Date.now(),place,nick,body,likes:0,reports:0,created_at:new Date().toISOString()};
      const a=all();a.push(c);store.set('ss_demo_c',a);subs.c.forEach(f=>f(c));return c;},
    async like(id,v){const a=all(),c=a.find(x=>x.id===id);if(c){c.likes=Math.max(0,c.likes+(v?1:-1));store.set('ss_demo_c',a);}},
    async report(id){const a=all(),c=a.find(x=>x.id===id);if(c){c.reports++;store.set('ss_demo_c',a);}},
    async queue(place){const since=Date.now()-QWIN;return allQ().filter(r=>r.place===place&&Date.parse(r.created_at)>since);},
    async addQueue(place,level){const r={place,level,created_at:new Date().toISOString()};const a=allQ().filter(x=>Date.now()-Date.parse(x.created_at)<QWIN);a.push(r);store.set('ss_demo_q',a);subs.q.forEach(f=>f(r));},
    onComment(f){subs.c.push(f);},onQueue(f){subs.q.push(f);}};
}

/* ---------- shared backend (Supabase) ---------- */
function supaBackend(sb){
  const subs={c:[],q:[]};
  sb.channel('seongsu-live')
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'comments'},m=>subs.c.forEach(f=>f(m.new)))
    .on('postgres_changes',{event:'INSERT',schema:'public',table:'queue_reports'},m=>subs.q.forEach(f=>f(m.new)))
    .subscribe();
  const ok=r=>{if(r.error)throw r.error;return r.data;};
  return {live:true,
    async list(place){return ok(await sb.from('comments').select('id,place,nick,body,likes,created_at').eq('place',place).order('created_at',{ascending:false}).limit(200));},
    async counts(){const m={};ok(await sb.from('comment_counts').select('place,n')).forEach(r=>m[r.place]=r.n);return m;},
    async add(place,nick,body){return ok(await sb.from('comments').insert({place,nick,body}).select('id,place,nick,body,likes,created_at').single());},
    async like(id,v){ok(await sb.rpc(v?'like_comment':'unlike_comment',{cid:id}));},
    async report(id){ok(await sb.rpc('report_comment',{cid:id}));},
    async queue(place){return ok(await sb.from('queue_reports').select('place,level,created_at').eq('place',place).gte('created_at',new Date(Date.now()-QWIN).toISOString()).order('created_at',{ascending:false}).limit(100));},
    async addQueue(place,level){ok(await sb.from('queue_reports').insert({place,level}));},
    onComment(f){subs.c.push(f);},onQueue(f){subs.q.push(f);}};
}

let backend=demoBackend();
const ready=new Promise(res=>{
  if(!CFG.supabaseUrl||!CFG.supabaseKey){res();return;}
  const s=document.createElement('script');
  s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.js';
  s.onload=()=>{try{backend=supaBackend(window.supabase.createClient(CFG.supabaseUrl,CFG.supabaseKey,{auth:{persistSession:false}}));}catch(e){console.warn('comments: falling back to demo',e);}res();};
  s.onerror=()=>{console.warn('comments: could not load Supabase, using demo mode');res();};
  setTimeout(res,8000);
  document.head.appendChild(s);
});

/* simple text checks: length, links, repeated characters */
function clean(body){
  body=String(body||'').replace(/\s+\n/g,'\n').replace(/\n{3,}/g,'\n\n').trim();
  if(!body)return {err:'empty'};
  if(body.length>200)return {err:'long'};
  if(/https?:\/\/|www\.|\.com\b|微信号|vx[:：]|加我/i.test(body))return {err:'link'};
  if(/(.)\1{9,}/.test(body))return {err:'spam'};
  return {body};
}

window.SOCIAL={me,ready,clean,QWIN,
  get live(){return backend.live;},
  list:p=>backend.list(p),counts:()=>backend.counts(),add:(p,n,b)=>backend.add(p,n,b),
  like:(id,v)=>backend.like(id,v),report:id=>backend.report(id),
  queue:p=>backend.queue(p),addQueue:(p,l)=>backend.addQueue(p,l),
  onComment:f=>ready.then(()=>backend.onComment(f)),onQueue:f=>ready.then(()=>backend.onQueue(f))};
})();
