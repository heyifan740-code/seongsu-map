/* Site settings.
   naverKeyId: paste your NAVER Cloud Platform "Maps" Client ID here to switch the base map to Naver Maps
   (register https://heyifan740-code.github.io under Web service URL). Leave empty to use OpenStreetMap.
   supabaseUrl / supabaseKey: Supabase "Project URL" and "anon public" key — turns on shared, live comments and
   queue reports (set-up: supabase.sql). Leave empty for demo mode (saved on each visitor's own device only). */
window.SEONGSU_CONFIG = {
  naverKeyId: '',
  kakaoJsKey: '',   // Kakao Developers → JavaScript key (domain-locked to heyifan740-code.github.io); turns on "All shops"
  supabaseUrl: 'https://qgnuvrogvvnjczxsromy.supabase.co',
  supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFnbnV2cm9ndnZuamN6eHNyb215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzNzk0NzcsImV4cCI6MjExMDk1NTQ3N30.iF0ncYXZlOpsuCTwKgtnbGHAK9cWakc1P1GNjCziKww'  // anon public key (safe to publish)
};
