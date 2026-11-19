(function(){
'use strict';
/* ================= i18n ================= */
const LANGS=['zh','en','ko'];
const LOCALE={zh:'zh-CN',en:'en',ko:'ko'};
const T={
zh:{photos:'图片',pk:{o:'外景',i:'店内',f:'产品',food:'美食',p:'活动图'},giftOnly:'有赠品',tbd:'结束日期未公布',from:s=>`${s} 起`,imgBy:'图片',filt:'筛选',fTitle:'按条件筛选',fSec:['福利','时间','入场','其他'],fOpt:{popup:'只看快闪',gift:'送礼',deal:'打折',taste:'试吃',draw:'抽奖',exp:'体验',new:'本周新开',ending:'3天内结束',perm:'常设店',walkin:'直接进',queue:'现场取号',book:'要预约/购票',tax:'可退税',r45:'评分 4.5+',r40:'评分 4.0+'},fClear:'清除',fShow:n=>`查看 ${n} 个结果`,fres:'筛选结果',title:'圣水快闪线',tag:'课堂原型 · 信息以官方为准',ph:'搜索快闪、美食、店铺或福利',all:'全部',
 grp:{pop:'快闪',eat:'美食',shop:'逛店'},
 near:n=>`附近 50m · <em>${n}</em> 家`,list:(l,n)=>`${l} · <em>${n}</em> 家`,demo:'演示位置 · 长按地图可移动',real:'当前定位 · 长按地图可移动',
 empty:'50m 内暂时没有',nearest:(n,d)=>`最近的是 ${n} · ${d} ›`,
 note:(p,e,s,d)=>`共收录圣水 ${p} 家快闪、${e} 家美食、${s} 家店铺 · 信息查询于 ${d}，以官方为准`,
 ends:'剩',perm:'常设',details:'详情 ›',nores:q=>`圣水暂时没有找到「${q}」`,moved:'已把你的位置移到这里（演示）',
 locating:'正在定位…',nogeo:'这个浏览器不支持定位，已使用圣水演示位置',far:'你现在不在圣水附近，先用圣水演示位置',located:'已定位到你的位置',denied:'没有拿到定位权限，已使用圣水演示位置',
 back:'返回地图',about:d=>`距你约 ${d}`,nav:'Naver 地图导航',book:'查看预约方式',perks:'福利',source:'信息来源',
 live:'现场',hours:'营业',queue:'现场排队',wait:'排队时长',norep:'暂无上报',here:'我在现场：',lv:['人少','一般','很多'],
 reported:'刚刚由你上报 · 正式版会汇总所有用户的上报',thanks:'感谢上报（演示）',
 entryT:'入场方式',method:'方式',endsIn:'距结束',ohours:'营业时间',daily:'每天',period:'快闪期间',dates:'日期',left:'剩余',kind:'类型',permStore:'常设店铺',
 rating:'评分',rnote:n=>`DiningCode 用户评分 · ${n} 条评价`,
 secPop:'福利与亮点',secEat:'招牌与价格',secShop:'店铺亮点',info:'基本信息',koaddr:'韩文地址',copy:'复制，给出租车司机看',copied:'韩文地址已复制',copyfail:'请长按地址手动复制',
 tax:'可退税',guideT:'怎么入场',guideS:'中文指引',
 lineT:'圣水线路图',lineS:'从首尔林到圣水站 · 点站点切换',stA:'首尔林站',stB:'圣水站',lnA:'水仁·盆唐线',lnB:'2号线',
 foot:d=>`课堂作业原型。快闪信息与坐标整理自 Popply，餐厅评分与坐标来自 DiningCode，店铺信息参考 Kakao Map（${d}），以官方公告为准。排队上报为演示功能。`,
 srcFrom:(s,d)=>`以上整理自 ${s}（查询于 ${d}），以官方公告为准`,srcNames:{popply:'Popply 活动页',diningcode:'DiningCode',instagram:'品牌 Instagram',other:'来源页面'},
 fav:'已收藏',unfav:'已取消收藏',refreshed:'已刷新',refresh:'刷新',star:'收藏',
 sortD:'按距离',sortR:'按评分',
 vipWhy:'细分类筛选是会员功能',vipH:'逛圣水，一场都不错过',vipP:'按细分类筛选，新快闪和快结束的快闪第一时间提醒你',
 plans:[['日包','单日逛圣水'],['周包','短期旅行'],['月包','在韩生活']],price:['¥9.9','¥29','¥59'],
 tbl:['功能','免费','会员'],rows:['地图 · 搜索 · 50m 内福利','快闪 / 美食 / 逛店 大类','单店详情 · 评分 · 导航 · 中文指引','细分类筛选（美妆、面包、贝果、饰品……）','新快闪 / 即将结束提醒'],
 buy:(n,p)=>`开通${n} ${p}（演示，不扣费）`,fine:'定价为示意，正式价格待验证后确定',bought:'已开通（演示）：细分类筛选已解锁',close:'关闭',
 tilewarn:'地图底图加载不出来，请检查网络后刷新',mapLabel:'圣水洞地图',locate:'定位到我',clear:'清除',
 left:(d,h,m)=>d?`${d}天${h}小时`:h?`${h}小时${m}分`:`${m}分钟`,km:'km',
 tags:{gift:'赠品',deal:'折扣',exp:'体验',sale:'售卖',sig:'招牌',menu:'菜单',tip:'提示',draw:'抽奖',taste:'试吃'},
 entry:{walkin:'现场排队',naver:'Naver 预约',ticket:'购票入场',queue:'现场登记排号'},
 guide:{walkin:['不用预约，直接到门口','人多时店员可能会让你登记手机号排号，留意短信或 KakaoTalk 通知','周末下午最挤，工作日或开门后一小时内去最省时间'],
  queue:['到门口找店员或平板，用手机号登记排号（没有韩国号码可以问店员）','登记后可以先去附近逛，留意短信 / KakaoTalk 叫号','叫到号后回到门口入场'],
  naver:['打开“信息来源”页面，找到 <span class="ko">네이버 예약</span> 链接','用 Naver 账号登录，选择日期和时段完成预约','按预约时间到店，出示预约确认页面入场'],
  ticket:['这是收费展览，需要购票入场','票价和购票方式请看“信息来源”页面里的官方链接','周末人多，建议工作日或开门时段去']},
 taxStep:'结账时出示护照办理退税',lang:'中文'},
en:{photos:'Photos',pk:{o:'Outside',i:'Inside',f:'Products',food:'Food',p:'Pop-up'},giftOnly:'Free gifts',tbd:'End date TBA',from:s=>`From ${s}`,imgBy:'Photo',filt:'Filters',fTitle:'Filter by',fSec:['Perks','When','Entry','Other'],fOpt:{popup:'Pop-ups only',gift:'Free gift',deal:'Discount',taste:'Tasting',draw:'Lucky draw',exp:'Experience',new:'New this week',ending:'Ends in 3 days',perm:'Permanent',walkin:'Walk in',queue:'Waiting list',book:'Booking / ticket',tax:'Tax refund',r45:'Rating 4.5+',r40:'Rating 4.0+'},fClear:'Clear',fShow:n=>`Show ${n} results`,fres:'Filtered',title:'Seongsu Pop-up Line',tag:'Class prototype · confirm with official sources',ph:'Search pop-ups, food, shops or freebies',all:'All',
 grp:{pop:'Pop-ups',eat:'Eat',shop:'Shops'},
 near:n=>`Within 50 m · <em>${n}</em>`,list:(l,n)=>`${l} · <em>${n}</em>`,demo:'Demo location · long-press the map to move',real:'Your location · long-press the map to move',
 empty:'Nothing within 50 m right now',nearest:(n,d)=>`Nearest: ${n} · ${d} ›`,
 note:(p,e,s,d)=>`${p} pop-ups, ${e} food spots and ${s} shops in Seongsu · checked ${d}; always confirm with official sources`,
 ends:'Ends in',perm:'Permanent',details:'Details ›',nores:q=>`No results for “${q}” in Seongsu`,moved:'Moved your location here (demo)',
 locating:'Locating…',nogeo:'Location isn’t supported here — using the Seongsu demo spot',far:'You’re not near Seongsu — using the demo spot',located:'Found your location',denied:'No location permission — using the Seongsu demo spot',
 back:'Back to map',about:d=>`About ${d} from you`,nav:'Directions (Naver Map)',book:'How to book',perks:'Perks',source:'Source',
 live:'Live',hours:'Hours',queue:'Queue',wait:'Wait',norep:'No reports yet',here:'I’m here:',lv:['Short','Medium','Long'],
 reported:'Reported by you just now · the full version will combine everyone’s reports',thanks:'Thanks for reporting (demo)',
 entryT:'Getting in',method:'Method',endsIn:'Ends in',ohours:'Opening hours',daily:'Daily',period:'Dates',dates:'Dates',left:'Left',kind:'Type',permStore:'Permanent store',
 rating:'Rating',rnote:n=>`DiningCode user rating · ${n} reviews`,
 secPop:'Perks & highlights',secEat:'Signatures & prices',secShop:'Highlights',info:'Info',koaddr:'Korean address',copy:'Copy to show a taxi driver',copied:'Korean address copied',copyfail:'Long-press the address to copy',
 tax:'Tax refund',guideT:'How to get in',guideS:'step by step',
 lineT:'Seongsu line map',lineS:'Seoul Forest → Seongsu Stn. · tap a stop',stA:'Seoul Forest',stB:'Seongsu',lnA:'Suin-Bundang',lnB:'Line 2',
 foot:d=>`Class-project prototype. Pop-up info and locations from Popply, restaurant ratings and locations from DiningCode, store info from Kakao Map (${d}). Always confirm with official sources. Queue reports are a demo.`,
 srcFrom:(s,d)=>`Compiled from ${s} (checked ${d}); confirm with official announcements`,srcNames:{popply:'the Popply page',diningcode:'DiningCode',instagram:'the brand’s Instagram',other:'the source page'},
 fav:'Saved',unfav:'Removed',refreshed:'Refreshed',refresh:'Refresh',star:'Save',
 sortD:'Nearest',sortR:'Top rated',
 vipWhy:'Detailed filters are a member feature',vipH:'Never miss a Seongsu pop-up',vipP:'Filter by detailed category and get alerts for new and ending pop-ups',
 plans:[['Day pass','One day in Seongsu'],['Week pass','Short trip'],['Month pass','Living in Korea']],price:['₩2,000','₩5,900','₩11,900'],
 tbl:['Feature','Free','Member'],rows:['Map · search · perks within 50 m','Pop-ups / Eat / Shops','Details · ratings · directions · how-to','Detailed filters (beauty, bakery, bagels, accessories…)','New / ending-soon alerts'],
 buy:(n,p)=>`Get the ${n} ${p} (demo, no charge)`,fine:'Prices are placeholders until tested',bought:'Activated (demo): detailed filters unlocked',close:'Close',
 tilewarn:'The map tiles didn’t load — check your connection and refresh',mapLabel:'Map of Seongsu-dong',locate:'Show my location',clear:'Clear',
 left:(d,h,m)=>d?`${d}d ${h}h`:h?`${h}h ${m}m`:`${m} min`,km:'km',
 tags:{gift:'Gift',deal:'Deal',exp:'Experience',sale:'On sale',sig:'Signature',menu:'Menu',tip:'Tip',draw:'Lucky draw',taste:'Tasting'},
 entry:{walkin:'Walk in',naver:'Naver booking',ticket:'Ticket',queue:'Waiting list'},
 guide:{walkin:['No booking needed — just go to the door','When it’s busy, staff may ask for your phone number to join a waiting list; watch for an SMS or KakaoTalk message','Weekend afternoons are busiest; weekdays or the first hour after opening are quickest'],
  queue:['Register your phone number with staff or the tablet at the door (ask staff if you don’t have a Korean number)','Browse nearby while you wait and watch for the SMS / KakaoTalk call','Come back to the door when your number is called'],
  naver:['Open the source page and find the <span class="ko">네이버 예약</span> (Naver booking) link','Sign in to Naver and pick a date and time','Show your booking confirmation at the door'],
  ticket:['This is a paid exhibition — you need a ticket','See the official link on the source page for prices and booking','Weekends are crowded; weekdays or opening time are best']},
 taxStep:'Show your passport at checkout for the tax refund',lang:'EN'},
ko:{photos:'사진',pk:{o:'외관',i:'내부',f:'상품',food:'메뉴',p:'팝업 이미지'},giftOnly:'증정 있음',tbd:'종료일 미정',from:s=>`${s}부터`,imgBy:'사진',filt:'필터',fTitle:'조건으로 찾기',fSec:['혜택','기간','입장','기타'],fOpt:{popup:'팝업만',gift:'증정',deal:'할인',taste:'시식',draw:'추첨',exp:'체험',new:'이번 주 오픈',ending:'3일 내 종료',perm:'상시 매장',walkin:'바로 입장',queue:'현장 웨이팅',book:'예약/티켓',tax:'택스리펀',r45:'평점 4.5+',r40:'평점 4.0+'},fClear:'초기화',fShow:n=>`결과 ${n}곳 보기`,fres:'필터 결과',title:'성수 팝업라인',tag:'수업 프로토타입 · 정보는 공식 안내를 확인하세요',ph:'팝업, 맛집, 매장, 혜택 검색',all:'전체',
 grp:{pop:'팝업',eat:'맛집',shop:'매장'},
 near:n=>`주변 50m · <em>${n}</em>곳`,list:(l,n)=>`${l} · <em>${n}</em>곳`,demo:'데모 위치 · 지도를 길게 눌러 이동',real:'현재 위치 · 지도를 길게 눌러 이동',
 empty:'50m 안에 아직 없어요',nearest:(n,d)=>`가장 가까운 곳: ${n} · ${d} ›`,
 note:(p,e,s,d)=>`성수 팝업 ${p}곳 · 맛집 ${e}곳 · 매장 ${s}곳 수록 · ${d} 확인, 공식 안내를 우선하세요`,
 ends:'종료까지',perm:'상시',details:'자세히 ›',nores:q=>`성수에서 「${q}」을(를) 찾지 못했어요`,moved:'내 위치를 여기로 옮겼어요 (데모)',
 locating:'위치 확인 중…',nogeo:'위치 기능을 쓸 수 없어 성수 데모 위치를 사용해요',far:'성수 근처가 아니라서 데모 위치를 사용해요',located:'현재 위치를 찾았어요',denied:'위치 권한이 없어 성수 데모 위치를 사용해요',
 back:'지도로 돌아가기',about:d=>`내 위치에서 약 ${d}`,nav:'네이버 지도 길찾기',book:'예약 방법',perks:'혜택',source:'출처',
 live:'현장',hours:'영업',queue:'현장 웨이팅',wait:'대기 시간',norep:'제보 없음',here:'지금 현장이에요:',lv:['여유','보통','많음'],
 reported:'방금 내가 제보함 · 정식 버전은 모든 사용자의 제보를 모아 보여줘요',thanks:'제보 감사합니다 (데모)',
 entryT:'입장 방법',method:'방법',endsIn:'종료까지',ohours:'영업시간',daily:'매일',period:'운영 기간',dates:'기간',left:'남은 시간',kind:'유형',permStore:'상시 매장',
 rating:'평점',rnote:n=>`다이닝코드 사용자 평점 · 리뷰 ${n}개`,
 secPop:'혜택과 볼거리',secEat:'대표 메뉴와 가격',secShop:'매장 포인트',info:'기본 정보',koaddr:'주소',copy:'주소 복사',copied:'주소를 복사했어요',copyfail:'주소를 길게 눌러 복사하세요',
 tax:'택스리펀',guideT:'입장 방법',guideS:'단계별 안내',
 lineT:'성수 노선도',lineS:'서울숲역 → 성수역 · 눌러서 이동',stA:'서울숲역',stB:'성수역',lnA:'수인분당선',lnB:'2호선',
 foot:d=>`수업 과제 프로토타입입니다. 팝업 정보와 위치는 Popply, 맛집 평점과 위치는 다이닝코드, 매장 정보는 카카오맵(${d}) 기준이며 공식 안내를 우선하세요. 웨이팅 제보는 데모 기능입니다.`,
 srcFrom:(s,d)=>`${s} 기준 정리 (${d} 확인), 공식 공지를 우선하세요`,srcNames:{popply:'Popply 페이지',diningcode:'다이닝코드',instagram:'브랜드 인스타그램',other:'출처 페이지'},
 fav:'저장했어요',unfav:'저장을 취소했어요',refreshed:'새로고침했어요',refresh:'새로고침',star:'저장',
 sortD:'가까운 순',sortR:'평점 순',
 vipWhy:'세부 카테고리 필터는 멤버십 기능이에요',vipH:'성수 팝업, 하나도 놓치지 마세요',vipP:'세부 카테고리로 골라 보고, 새 팝업과 곧 끝나는 팝업을 알려드려요',
 plans:[['1일권','하루 성수 투어'],['1주권','짧은 여행'],['1개월권','한국 거주']],price:['₩2,000','₩5,900','₩11,900'],
 tbl:['기능','무료','멤버십'],rows:['지도 · 검색 · 50m 내 혜택','팝업 / 맛집 / 매장 큰 분류','상세 정보 · 평점 · 길찾기 · 입장 안내','세부 카테고리 필터 (뷰티, 베이커리, 베이글, 액세서리…)','새 팝업 / 종료 임박 알림'],
 buy:(n,p)=>`${n} ${p} 시작하기 (데모, 결제 없음)`,fine:'가격은 예시이며 검증 후 정합니다',bought:'시작했어요 (데모): 세부 카테고리 필터가 열렸어요',close:'닫기',
 tilewarn:'지도를 불러오지 못했어요. 연결을 확인하고 새로고침하세요',mapLabel:'성수동 지도',locate:'내 위치 보기',clear:'지우기',
 left:(d,h,m)=>d?`${d}일 ${h}시간`:h?`${h}시간 ${m}분`:`${m}분`,km:'km',
 tags:{gift:'증정',deal:'할인',exp:'체험',sale:'판매',sig:'대표',menu:'메뉴',tip:'팁',draw:'추첨',taste:'시식'},
 entry:{walkin:'현장 입장',naver:'네이버 예약',ticket:'티켓 구매',queue:'현장 웨이팅 등록'},
 guide:{walkin:['예약 없이 바로 입구로 가면 돼요','붐빌 때는 전화번호로 웨이팅 등록을 요청할 수 있어요. 문자나 카카오톡 알림을 확인하세요','주말 오후가 가장 붐벼요. 평일이나 오픈 직후 1시간이 가장 빨라요'],
  queue:['입구 직원이나 태블릿에서 전화번호로 웨이팅 등록','기다리는 동안 근처를 둘러보고 문자 / 카카오톡 호출 확인','호출되면 입구로 돌아와 입장'],
  naver:['출처 페이지에서 <span class="ko">네이버 예약</span> 링크 찾기','네이버에 로그인해 날짜와 시간 선택','예약 확인 화면을 입구에서 보여주기'],
  ticket:['유료 전시라 티켓이 필요해요','가격과 예매 방법은 출처 페이지의 공식 링크에서 확인','주말은 붐벼요. 평일이나 오픈 시간대를 추천해요']},
 taxStep:'계산할 때 여권을 보여주고 택스리펀 받기',lang:'한국어'}
};
const SUBS={pop:['beauty','scent','fashion','eyewearpop','char','kpop','game','life','food'],eat:['korean','western','saltbread','bakery','bagel','donut','eggtart','dessert','cafe'],shop:['acc','eyewear','bstore','fstore']};
const SUBL={eyewear:['眼镜门店','Eyewear stores','아이웨어 매장'],eyewearpop:['眼镜快闪','Eyewear pop-ups','아이웨어 팝업'],beauty:['美妆护肤','Beauty','뷰티'],scent:['香水香氛','Fragrance','향수'],saltbread:['盐面包','Salt bread','소금빵'],fashion:['服饰','Fashion','패션'],char:['IP联名','Characters','캐릭터·콜라보'],kpop:['K-pop','K-pop','K-pop'],game:['展览游戏','Exhibits & games','전시·게임'],life:['生活市集','Lifestyle & local','라이프스타일·로컬'],food:['美食快闪','Food pop-ups','푸드 팝업'],
 korean:['韩餐','Korean','한식'],western:['西餐披萨','Western & pizza','양식·피자'],bakery:['面包烘焙','Bakery','베이커리'],bagel:['贝果','Bagels','베이글'],donut:['甜甜圈','Donuts','도넛'],eggtart:['蛋挞','Egg tarts','에그타르트'],dessert:['甜品','Desserts','디저트'],cafe:['咖啡','Cafés','카페'],
 acc:['饰品杂货','Accessories','액세서리'],bstore:['美妆集合店','Beauty stores','뷰티 매장'],fstore:['服装集合店','Fashion stores','패션 매장']};

const CATS=[
 ['beauty',['pop/beauty','shop/bstore'],['美妆','Beauty','뷰티']],
 ['scent',['pop/scent'],['香水','Fragrance','향수']],
 ['fashion',['pop/fashion','shop/fstore'],['服饰','Fashion','패션']],
 ['eyewear',['pop/eyewearpop','shop/eyewear'],['眼镜','Eyewear','안경']],
 ['acc',['shop/acc'],['饰品','Accessories','액세서리']],
 ['char',['pop/char'],['IP联名','Characters','캐릭터']],
 ['kpop',['pop/kpop'],['K-pop','K-pop','K-pop']],
 ['exhibit',['pop/game'],['展览体验','Exhibits','전시·체험']],
 ['life',['pop/life'],['地方好物','Local goods','로컬·라이프']],
 ['meal',['eat/korean','eat/western','pop/food'],['餐厅','Restaurants','식당']],
 ['bread',['eat/saltbread','eat/bakery','eat/bagel'],['面包','Bakery','빵']],
 ['sweet',['eat/donut','eat/eggtart','eat/dessert','pop/food'],['甜品','Desserts','디저트']],
 ['cafe',['eat/cafe'],['咖啡','Café','카페']]];
const catOf=p=>{const k=p.grp+'/'+p.sub;if(k==='pop/food')return p.type==='sweet'?'sweet':'meal';const c=CATS.find(c=>c[1].includes(k));return c?c[0]:'life';};
const CICON={
 beauty:'<path d="M9 21h6V11H9zM10 11V6l4-3v8"/>',
 scent:'<path d="M7 10h10v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM10 10V7h4v3M10 4h4v3h-4z"/>',
 fashion:'<path d="M8 3L3 6l2 4 3-1v12h8V9l3 1 2-4-5-3c-1 2-2 3-4 3S9 5 8 3z"/>',
 eyewear:'<circle cx="6.5" cy="14" r="3.5"/><circle cx="17.5" cy="14" r="3.5"/><path d="M10 14h4M3 13l2-6M21 13l-2-6"/>',
 acc:'<circle cx="12" cy="15" r="5"/><path d="M10 6l2-3 2 3-2 3z"/>',
 char:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
 kpop:'<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>',
 exhibit:'<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M14 7v10"/>',
 life:'<path d="M4 10h16l-2 10H6zM8 10l4-6 4 6"/>',
 meal:'<path d="M3 11h18a9 9 0 0 1-18 0zM8 7c0-2 2-2 2-4M13 7c0-2 2-2 2-4"/>',
 bread:'<path d="M4 13a8 5 0 0 1 16 0v6H4z"/><path d="M9 10v3M12 9v4M15 10v3"/>',
 sweet:'<path d="M4 13h16l-2 7H6zM6 13c0-4 2.7-7 6-7s6 3 6 7M12 6V3"/>',
 cafe:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 11h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3"/>'};
const GICON={
 lotion:'<path d="M9 8h6v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM10 8V5h4v3M12 2v3"/>',
 cleanser:'<path d="M8 3h8l-1 14H9zM10 17h4v4h-4z"/>',
 lip:'<path d="M9 21h6V11H9zM10 11V6l4-3v8"/>',
 bag:'<path d="M5 8h14l-1 13H6zM9 8V6a3 3 0 0 1 6 0v2"/>',
 keyring:'<circle cx="8" cy="8" r="4"/><path d="M11 11l7 7M15 15l2-2M17 17l2-2"/>',
 coffee:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM17 11h2a2 2 0 0 1 0 4h-2M8 3v3M12 3v3"/>',
 sample:'<path d="M5 10h5v10H5zM6 7h3v3H6zM14 8h5v12h-5zM15 5h3v3h-3z"/>',
 showerball:'<circle cx="12" cy="13" r="7"/><path d="M7 9c3 2 7 2 10 0M6 14c4 2 8 2 12 0M12 6V3"/>',
 draw:'<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M12 9.5l.9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z"/>',
 taste:'<path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 0-4 2-4 6v4h4"/>',
 gift:'<rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 13h16M12 9v11M12 9c-2-4-6-3-5-1s5 1 5 1zm0 0c2-4 6-3 5-1s-5 1-5 1z"/>'};
const gIcon=k=>`<svg viewBox="0 0 24 24">${GICON[k]||GICON.gift}</svg>`;
const GIFTBADGE='<span class="gb"><svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 13h16M12 9v11M12 9c-2-4-6-3-5-1s5 1 5 1zm0 0c2-4 6-3 5-1s-5 1-5 1z"/></svg></span>';
const cIcon=k=>`<svg viewBox="0 0 24 24">${CICON[k]||CICON.life}</svg>`;
let lang=(()=>{try{const q=new URLSearchParams(location.search).get('lang');if(LANGS.includes(q))return q;const s=localStorage.getItem('ss_lang');if(LANGS.includes(s))return s;}catch(e){}
  const n=(navigator.language||'en').toLowerCase();return n.startsWith('zh')?'zh':n.startsWith('ko')?'ko':'en';})();
let t=T[lang];
const tx=o=>o==null?'':typeof o==='string'?o:(o[lang]||o.en||o.zh||'');
const subL=k=>SUBL[k][LANGS.indexOf(lang)];
const catL=k=>CATS.find(c=>c[0]===k)[2][LANGS.indexOf(lang)];
const subKL=k=>subL(k.split('/')[1]);

/* ================= state ================= */
const M=60e3,H=60*M,D=24*H;
const FALLBACK=[37.54275,127.05420];
const ST_B=[37.54457,127.05571], ST_A=[37.54360,127.04460];
POPS.forEach(p=>{p.endTs=Date.parse(p.end);p.rep=null;p.cat=catOf(p);
  p.pics=(typeof PICS!=='undefined'&&PICS[p.id])||{};
  if(!p.img){const g=[...(p.pics.o||[]),...(p.pics.f||[]),...(p.pics.i||[]),...(p.pics.p||[])];if(g.length)p.img=g[0];}});
const gallery=p=>{const g=[];['o','i','f','p'].forEach(k=>(p.pics[k]||[]).forEach(u=>g.push({k,u})));if(!g.length&&p.img)g.push({k:'p',u:p.img});return g;};
const kindL=(p,k)=>k==='f'?(p.grp==='eat'?t.pk.food:t.pk.f):t.pk[k];
const live=POPS.filter(p=>p.endTs>Date.now());
// spread markers that share an address so none are hidden
(()=>{const g={};live.forEach(p=>{const k=p.ll[0].toFixed(5)+','+p.ll[1].toFixed(5);(g[k]=g[k]||[]).push(p);});
  Object.values(g).forEach(a=>a.forEach((p,i)=>{if(a.length<2){p.dl=p.ll;return;}const ang=2*Math.PI*i/a.length,r=0.00009;p.dl=[p.ll[0]+r*Math.cos(ang),p.ll[1]+r*1.26*Math.sin(ang)];}));})();
const S={f:{perk:[],time:'',entry:'',tax:false,rate:0},view:'home',cat:null,i:0,mode:'live',grp:'all',sub:null,sort:'dist',member:false,sel:1,sheet:null,fav:{},me:FALLBACK.slice(),q:'',real:false,clock:Date.now()};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LINE=live.slice().sort((a,b)=>a.ll[1]-b.ll[1]);
const P=()=>LINE[S.i];
function meters(a,b){const R=6371000,r=x=>x*Math.PI/180;const dLa=r(b[0]-a[0]),dLo=r(b[1]-a[1]);const h=Math.sin(dLa/2)**2+Math.cos(r(a[0]))*Math.cos(r(b[0]))*Math.sin(dLo/2)**2;return Math.round(2*R*Math.asin(Math.sqrt(h)));}
const distM=p=>meters(S.me,p.ll);
const fmtD=m=>m<1000?m+'m':(m/1000).toFixed(1)+t.km;
function left(ts){let x=Math.max(0,ts-Date.now());const d=Math.floor(x/D);x-=d*D;const h=Math.floor(x/H);x-=h*H;return t.left(d,h,Math.floor(x/M));}
const clock=ts=>new Date(ts).toLocaleTimeString(LOCALE[lang],{hour:'numeric',minute:'2-digit'});
const startTs=p=>{if(p.perm||!/^\d\d\.\d\d$/.test(p.start))return 0;const e=new Date(p.endTs),m=+p.start.slice(0,2),d=+p.start.slice(3);let y=e.getFullYear();if(m>e.getMonth()+1)y--;return Date.parse(`${y}-${p.start.slice(0,2)}-${p.start.slice(3)}T00:00:00+09:00`);};
const hasPerk=(p,k)=>k==='gift'?!!p.gk||p.perks.some(x=>x[1]==='gift'):(p.type===k||p.perks.some(x=>x[1]===k));
const fCount=()=>S.f.perk.length+(S.f.time?1:0)+(S.f.entry?1:0)+(S.f.tax?1:0)+(S.f.rate?1:0);
function fMatch(p){const f=S.f;
  if(f.perk.length&&!f.perk.some(k=>hasPerk(p,k)))return false;
  if(f.time==='new'){const s0=startTs(p);if(!s0||Date.now()-s0>7*D||Date.now()<s0-D)return false;}
  if(f.time==='ending'&&(p.perm||p.endUnk||p.endTs-Date.now()>3*D))return false;
  if(f.time==='perm'&&!p.perm)return false;
  if(f.time==='popup'&&p.perm)return false;
  if(f.entry==='walkin'&&p.entry!=='walkin')return false;
  if(f.entry==='queue'&&p.entry!=='queue')return false;
  if(f.entry==='book'&&!/naver|ticket/.test(p.entry))return false;
  if(f.tax&&!p.tax)return false;
  if(f.rate&&!(p.rate&&p.rate.s>=f.rate))return false;
  return true;}
const match=p=>(!S.cat||p.cat===S.cat)&&(!S.sub||p.grp+'/'+p.sub===S.sub)&&fMatch(p);
const visible=()=>live.filter(match);
const naverUrl=p=>'https://map.naver.com/p/search/'+encodeURIComponent(p.addr.replace(/\s*\(.*?\)\s*/g,' ').replace(/,.*$/,'').trim());
const stars=p=>p.rate?`<span class="rt-s">★ ${p.rate.s.toFixed(1)}</span>`:'';
const rangeTxt=p=>p.endUnk?t.from(p.start):`${p.start} – ${p.endTxt}`;
const leftHtml=p=>p.endUnk?`<b class="k">${t.tbd}</b>`:`<b data-end="${p.endTs}">${left(p.endTs)}</b>`;
const period=p=>p.perm?t.perm:rangeTxt(p);
const credit=u=>u.includes('d8nffddmkwqeq')?'Popply':u.includes('d12zq4w4guyljn')?'DiningCode':u.includes('kakaocdn')?'Kakao Map':'';
const thumb=(p,cls)=>`<span class="thumb ${cls||''} c-${p.cat}">${cIcon(p.cat)}${p.gk?`<span class="tg">${gIcon(p.gk)}</span>`:''}${p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}</span>`;
const hoursTxt=p=>(p.h==='24h'?(lang==='zh'?'24 小时':lang==='ko'?'24시간':'24 hours'):t.daily+' '+p.h)+(p.hx?' · '+tx(p.hx):'');
const ICON={
 back:'<svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>',
 star:'<svg viewBox="0 0 24 24"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
 pin:'<svg viewBox="0 0 24 24"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
 cal:'<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/></svg>',
 gift:'<svg viewBox="0 0 24 24"><rect x="4" y="9" width="16" height="11" rx="1"/><path d="M4 13h16M12 9v11M12 9c-2-4-6-3-5-1s5 1 5 1zm0 0c2-4 6-3 5-1s-5 1-5 1z"/></svg>',
 deal:'<svg viewBox="0 0 24 24"><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/></svg>',
 exp:'<svg viewBox="0 0 24 24"><path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z"/></svg>',
 info:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 11v5M12 8v.5"/></svg>',
 food:'<svg viewBox="0 0 24 24"><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10M17 21V3c-2 0-4 2-4 6v4h4"/></svg>',
 sweet:'<svg viewBox="0 0 24 24"><path d="M4 13h16l-2 7H6zM6 13c0-4 2.7-7 6-7s6 3 6 7M12 6V3"/></svg>',
 shop:'<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6zM9 8V6a3 3 0 0 1 6 0v2"/></svg>',
 ref:'<svg viewBox="0 0 24 24"><path d="M20 12a8 8 0 1 1-2.3-5.7M20 4v5h-5"/></svg>',
 door:'<svg viewBox="0 0 24 24"><path d="M6 21V4h12v17M3 21h18"/><circle cx="14.5" cy="12.5" r="1"/></svg>',
 clock:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg>',
 link:'<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
 copy:'<svg viewBox="0 0 24 24"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/></svg>',
 globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>'
};
let tt; function toast(s){const el=document.getElementById('toast');el.textContent=s;el.hidden=false;clearTimeout(tt);tt=setTimeout(()=>el.hidden=true,2600);}
const $=id=>document.getElementById(id);

/* ================= map adapters (Naver Maps when a key is set, OpenStreetMap otherwise) ================= */
const CFG=window.SEONGSU_CONFIG||{};
const coarse=()=>matchMedia('(pointer:coarse)').matches;
const BOUNDS=[[37.530,127.025],[37.556,127.075]];
function leafletAdapter(el){
  const map=L.map(el,{zoomControl:false,zoomSnap:.5,minZoom:14,maxZoom:19,maxBounds:BOUNDS,maxBoundsViscosity:.8}).setView(FALLBACK,17);
  let fail=0;
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,className:'osm-tiles',attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'})
   .on('tileerror',()=>{if(++fail===3)$('tilewarn').hidden=false;}).on('tileload',()=>{$('tilewarn').hidden=true;fail=-99;}).addTo(map);
  L.control.zoom({position:'bottomright'}).addTo(map);map.attributionControl.setPrefix(false);
  const layer=L.layerGroup().addTo(map);
  return {kind:'osm',destroy(){map.remove();},
   marker(o){const m=L.marker(o.ll,{icon:L.divIcon({className:'gm-wrap',html:o.html,iconSize:[o.w,o.h],iconAnchor:[o.ax,o.ay]}),title:o.title||'',interactive:!!o.onClick,zIndexOffset:o.z||0,riseOnHover:!!o.onClick});
     if(o.onClick)m.on('click',o.onClick);m.addTo(o.fixed?map:layer);return m;},
   clear(){layer.clearLayers();},
   circle(ll,r){const c=L.circle(ll,{radius:r,color:'#2ea84a',weight:2,dashArray:'6 5',fillColor:'#2ea84a',fillOpacity:.08,interactive:false}).addTo(map);return {move:x=>c.setLatLng(x)};},
   move(m,ll){m.setLatLng(ll);},
   onClick(cb){const f=e=>cb([e.latlng.lat,e.latlng.lng]);map.on('contextmenu',f);if(!coarse())map.on('click',f);},
   onDrag(cb){map.on('dragstart',cb);},
   px(ll){const p=map.latLngToContainerPoint(ll);return [p.x,p.y];},
   fit(lls,pad){const b=L.latLngBounds(lls),z=map.getBoundsZoom(b,false,L.point(pad[1]+pad[3],pad[0]+pad[2]));
     if(z>=16){map.fitBounds(b,{paddingTopLeft:[pad[3],pad[0]],paddingBottomRight:[pad[1],pad[2]],maxZoom:17.5,animate:true});return;}
     // results spread too far: centre on where most of them are instead of zooming out to street-name level
     const med=a=>{const x=a.slice().sort((p,q)=>p-q);return x[Math.floor(x.length/2)];};
     const c=[med(lls.map(x=>x[0])),med(lls.map(x=>x[1]))],off=(pad[2]-pad[0])/2;
     map.setView(map.unproject(map.project(c,16.5).add([0,off]),16.5),16.5,{animate:true});},
   onZoom(cb){map.on('zoomend',cb);},
   zoom(){return map.getZoom();},
   view(ll,z,off){map.setView(map.unproject(map.project(ll,z).add([0,off]),z),z,{animate:true});},
   resize(){map.invalidateSize();}};
}
function naverAdapter(el){
  const N=naver.maps,LL=a=>new N.LatLng(a[0],a[1]);
  const map=new N.Map(el,{center:LL(FALLBACK),zoom:17,minZoom:14,maxZoom:19,maxBounds:new N.LatLngBounds(LL(BOUNDS[0]),LL(BOUNDS[1])),
    zoomControl:matchMedia('(min-width:880px)').matches,zoomControlOptions:{position:N.Position.RIGHT_BOTTOM,style:N.ZoomControlStyle.SMALL},
    scaleControl:false,mapDataControl:false,logoControlOptions:{position:N.Position.BOTTOM_LEFT}});
  let ms=[];
  return {kind:'naver',destroy(){try{map.destroy();}catch(e){}},
   marker(o){const m=new N.Marker({position:LL(o.ll),map,icon:{content:o.html,size:new N.Size(o.w,o.h),anchor:new N.Point(o.ax,o.ay)},zIndex:100+(o.z||0),clickable:!!o.onClick,title:o.title||''});
     if(o.onClick)N.Event.addListener(m,'click',o.onClick);if(!o.fixed)ms.push(m);return m;},
   clear(){ms.forEach(m=>m.setMap(null));ms=[];},
   circle(ll,r){const c=new N.Circle({map,center:LL(ll),radius:r,strokeColor:'#2ea84a',strokeWeight:2,strokeStyle:'shortdash',fillColor:'#2ea84a',fillOpacity:.08,clickable:false});return {move:x=>c.setCenter(LL(x))};},
   move(m,ll){m.setPosition(LL(ll));},
   onClick(cb){const f=e=>cb([e.coord.lat(),e.coord.lng()]);N.Event.addListener(map,coarse()?'longtap':'click',f);N.Event.addListener(map,'rightclick',f);},
   onDrag(cb){N.Event.addListener(map,'dragstart',cb);},
   fit(lls,pad){const b=new N.LatLngBounds(LL(lls[0]),LL(lls[0]));lls.forEach(x=>b.extend(LL(x)));map.fitBounds(b,{top:pad[0],right:pad[1],bottom:pad[2],left:pad[3]});},
   onZoom(cb){N.Event.addListener(map,'zoom_changed',cb);},
   zoom(){return map.getZoom();},
   view(ll,z,off){map.setZoom(z,false);const pr=map.getProjection();const pt=pr.fromCoordToOffset(LL(ll));const c=pr.fromOffsetToCoord(new N.Point(pt.x,pt.y+off));map.panTo(c);},
   resize(){N.Event.trigger(map,'resize');}};
}
let MAP,ring,meDot;
function buildMap(adapter){
  const el=$('map');if(MAP&&MAP.destroy)MAP.destroy();el.innerHTML='';
  MAP=adapter(el);
  ring=MAP.circle(S.me,50);
  meDot=MAP.marker({ll:S.me,html:'<div class="me-host"><span class="me-pulse"></span><span class="me-dot"></span></div>',w:30,h:30,ax:15,ay:15,z:1000,fixed:true});
  MAP.marker({ll:ST_B,html:`<span class="stn"><b>2</b>${t.stB}</span>`,w:96,h:24,ax:48,ay:12,fixed:true});
  MAP.marker({ll:ST_A,html:`<span class="stn y"><b>水</b>${t.stA}</span>`,w:110,h:24,ax:55,ay:12,fixed:true});
  MAP.onClick(ll=>{setMe(ll,false);toast(t.moved);});
  MAP.onDrag(()=>{if(!wide()&&!S.min)setMin(true);});
  MAP.onZoom(()=>drawMarkers());
  drawMarkers();
  setTimeout(()=>{MAP.resize();centerMe();},60);
}
function startMap(){
  if(CFG.naverKeyId){
    let done=false;
    const fallback=()=>{if(MAP&&MAP.kind==='osm')return;done=true;buildMap(leafletAdapter);};
    window.navermap_authFailure=fallback;
    const s=document.createElement('script');
    s.src='https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId='+encodeURIComponent(CFG.naverKeyId)+'&language='+lang;
    s.onload=()=>{if(done)return;try{buildMap(naverAdapter);}catch(e){fallback();}};
    s.onerror=fallback;setTimeout(()=>{if(!MAP)fallback();},7000);
    document.head.appendChild(s);
  } else buildMap(leafletAdapter);
}
const pimg=p=>p.img?`<img src="${esc(p.img)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:'';
function pinHtml(p,near){
  const lab=esc(p.brand)+(p.rate?` <b>★${p.rate.s.toFixed(1)}</b>`:'');
  if(p.gk)return `<div class="pm gift${near?' on':''}"><div class="ph">${gIcon(p.gk)}${GIFTBADGE}<span class="gl">${esc(tx(p.g))}</span></div><i></i><em>${lab}</em></div>`;
  return `<div class="pm t-${p.type}${near?' on':''}"><div class="ph c-${p.cat}">${cIcon(p.cat)}${pimg(p)}<span class="gl">${esc(tx(p.g))}</span></div><i></i><em>${lab}</em></div>`;}
// full gift bubbles for places within 50 m, when a category is chosen, or when zoomed in; small dots otherwise (keeps the map readable)
function drawMarkers(){if(!MAP)return;MAP.clear();const zoomed=MAP.zoom()>=18.5,filtered=S.cat||S.sub||fCount();
  // nearest / best-rated first; a photo pin that would cover another becomes a small photo dot
  const vs=visible().map(p=>({p,d:distM(p)})).sort((a,b)=>a.d-b.d);const placed=[];
  vs.forEach(({p,d})=>{const near=d<=50;let full=near||zoomed||filtered;
    if(full&&MAP.px){const q=MAP.px(p.dl||p.ll);if(placed.some(o=>Math.abs(o[0]-q[0])<58&&Math.abs(o[1]-q[1])<70))full=false;else placed.push(q);}
    if(full)MAP.marker({ll:p.dl||p.ll,html:pinHtml(p,near),w:96,h:104,ax:48,ay:76,z:(near?500:100)+(p.gk?50:0),title:tx(p.t),onClick:()=>openPop(p.id)});
    else MAP.marker({ll:p.dl||p.ll,html:p.gk?`<div class="pdot gift">${gIcon(p.gk)}</div>`:`<div class="pdot t-${p.type} c-${p.cat}">${cIcon(p.cat)}${pimg(p)}</div>`,w:30,h:30,ax:15,ay:15,z:0,title:tx(p.t),onClick:()=>openPop(p.id)});});}
function setMe(ll,recenter){S.me=ll;if(ring)ring.move(ll);if(meDot)MAP.move(meDot,ll);drawMarkers();renderNear();if(recenter)centerMe();}
const wide=()=>matchMedia('(min-width:880px)').matches;
function setMin(v){S.min=v;homeEl.classList.toggle('min',v);}
function centerMe(){if(!MAP)return;const z=Math.max(MAP.zoom(),17);let off=0;if(!wide()){const sh=$('near').offsetHeight,tp=document.querySelector('.topov').offsetHeight;off=(sh-tp)/2;}MAP.view(S.me,z,off);}

/* ================= home ================= */
function card(p,d){
  return `<button class="nc has-th" data-act="open" data-id="${p.id}">${thumb(p)}<span class="ncb">
    <div class="t"><b>${esc(tx(p.t))}</b>${stars(p)}<span class="c">${catL(p.cat)}</span><span class="dm">${fmtD(d)}</span></div>
    <div class="gifts">${p.perks.slice(0,3).map(x=>`<span class="gift${/deal|menu|tip|sale/.test(x[1])?' a':''}">${ICON[p.grp==='eat'?p.type:p.grp==='shop'?'shop':'gift']}${esc(tx(x[0]))}</span>`).join('')}</div>
    <div class="ft"><span>${t.entry[p.entry]}${p.tax?' · '+t.tax:''}${p.perm?' · '+esc(p.h==='24h'?'24h':p.h):` · ${p.endUnk?t.tbd:`${t.ends} <b data-end="${p.endTs}">${left(p.endTs)}</b>`}`}</span><span class="more">${t.details}</span></div>${strip(p)}</span></button>`;}
function strip(p){const g=gallery(p);if(g.length<2)return '';const pick=[];['o','i','f','p'].forEach(k=>{const x=g.find(y=>y.k===k);if(x)pick.push(x);});g.forEach(x=>{if(pick.length<4&&!pick.includes(x))pick.push(x);});
  return `<span class="strip">${pick.slice(0,4).map(x=>`<span class="sp"><img src="${esc(x.u)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"><i>${kindL(p,x.k)}</i></span>`).join('')}</span>`;}
function nearList(){
  const vs=visible().map(p=>({p,d:distM(p)}));
  const cnt=g=>live.filter(p=>p.grp===g).length;
  const foot=`<p class="datanote">${t.note(cnt('pop'),cnt('eat'),cnt('shop'),DATA_DATE)}</p>`;
  if(!S.cat&&!S.sub&&!fCount()){
    vs.sort((a,b)=>a.d-b.d);const inR=vs.filter(x=>x.d<=50),nearest=vs[0];
    const empty=`<div class="emptyn">${t.empty}${nearest?`<button data-act="open" data-id="${nearest.p.id}">${esc(t.nearest(tx(nearest.p.t),fmtD(nearest.d)))}</button>`:''}</div>`;
    return `<button class="grabbtn" data-act="sheet" aria-label="${t.details}"><span class="grab"></span></button><div class="sh pad" data-act="sheet"><h2>${t.near(inR.length)}</h2><small>${S.real?t.real:t.demo}</small></div>
     <div class="near pad">${inR.length?inR.map(x=>card(x.p,x.d)).join(''):empty}${foot}</div>`;}
  const foodCat=['meal','bread','sweet','cafe'].includes(S.cat)||S.f.rate>0;
  const rated=foodCat&&S.sort==='rate';
  vs.sort(rated?(a,b)=>((b.p.rate?b.p.rate.s:0)-(a.p.rate?a.p.rate.s:0))||(b.p.rate?b.p.rate.n:0)-(a.p.rate?a.p.rate.n:0):(a,b)=>a.d-b.d);
  const label=S.sub?subKL(S.sub):S.cat?catL(S.cat):t.fres;
  const sortSeg=foodCat?`<div class="seg sm"><button class="${S.sort==='dist'?'on':''}" data-act="sort" data-v="dist">${t.sortD}</button><button class="${S.sort==='rate'?'on':''}" data-act="sort" data-v="rate">${t.sortR}</button></div>`:'';
  return `<button class="grabbtn" data-act="sheet" aria-label="${t.details}"><span class="grab"></span></button><div class="sh pad" data-act="sheet"><h2>${t.list(esc(label),vs.length)}</h2>${sortSeg}</div>
   <div class="near pad">${vs.map(x=>card(x.p,x.d)).join('')}${foot}</div>`;}
function renderNear(){$('near').innerHTML=nearList();}
function hay(p){return [p.name,p.brand,p.addr,CATS.find(c=>c[0]===p.cat)[2].join(' '),...LANGS.map(l=>[p.t[l],p.g[l],SUBL[p.sub].join(' '),T[l].grp[p.grp],...p.perks.map(x=>x[0][l])].join(' '))].join(' ').toLowerCase();}
POPS.forEach(p=>{p._h=null;});
function results(){
  const q=S.q.trim().toLowerCase(); if(!q)return '';
  const hit=live.filter(p=>(p._h||(p._h=hay(p))).includes(q)).sort((a,b)=>distM(a)-distM(b));
  const hl=s=>{const i=s.toLowerCase().indexOf(q);return i<0?esc(s):esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+q.length))+'</mark>'+esc(s.slice(i+q.length));};
  return `<div class="results" role="listbox">${hit.length?hit.slice(0,30).map(p=>`<button class="res" data-act="open" data-id="${p.id}">${thumb(p,'sm')}<span><b>${hl(tx(p.t))}</b><small>${catL(p.cat)} · ${esc(tx(p.g))}${p.rate?' · ★'+p.rate.s.toFixed(1):''} · ${period(p)}</small></span><span class="d">${fmtD(distM(p))}</span></button>`).join('')
    :`<div class="res" style="color:var(--muted)">${esc(t.nores(S.q))}</div>`}</div>`;}
function renderChips(){
  const n=fCount();
  $('chips').innerHTML=`<button class="fl${!S.cat&&!S.sub?' on':''}" data-act="cat" data-v="">${t.all}</button>`
   +CATS.map(([k])=>{const c=live.filter(p=>p.cat===k).length;if(!c)return '';return `<button class="fl cat${S.cat===k?' on':''}" data-act="cat" data-v="${k}">${cIcon(k)}${catL(k)}<small>${c}</small></button>`;}).join('');
  const s=$('subchips');
  const subs=S.cat?[...new Set(live.filter(p=>p.cat===S.cat).map(p=>p.grp+'/'+p.sub))]:[];
  s.hidden=false;
  const gOn=S.f.perk.includes('gift');
  s.innerHTML=`<button class="fl gq${gOn?' on':''}" data-act="facet" data-s="perk" data-v="gift">${gIcon('gift')}${t.giftOnly}<small>${live.filter(p=>p.gk).length}</small></button><button class="fl ff${n?' on':''}" data-act="facets"><svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>${t.filt}${n?`<small>${n}</small>`:''}</button>`
   +(subs.length>1?subs.map(k=>`<button class="fl sub${S.sub===k?' on':''}" data-act="sub" data-v="${k}">${subKL(k)}<small>${live.filter(p=>p.grp+'/'+p.sub===k&&p.cat===S.cat).length}</small></button>`).join(''):'');}
function locate(){
  if(!navigator.geolocation){toast(t.nogeo);setMe(FALLBACK,true);return;}
  toast(t.locating);
  navigator.geolocation.getCurrentPosition(pos=>{const ll=[pos.coords.latitude,pos.coords.longitude];
    if(meters(ll,ST_B)>2500){S.real=false;toast(t.far);setMe(FALLBACK,true);}else{S.real=true;toast(t.located);setMe(ll,true);}},
   ()=>{S.real=false;toast(t.denied);setMe(FALLBACK,true);},{enableHighAccuracy:true,timeout:8000});}

/* ================= detail ================= */
function srcName(u){return u.includes('popply')?t.srcNames.popply:u.includes('diningcode')?t.srcNames.diningcode:u.includes('instagram')?t.srcNames.instagram:t.srcNames.other;}
function head(p){
  return `<div class="backrow pad"><button data-act="home">${ICON.back}${t.back}</button></div>
   <div class="hero c-${p.cat}${p.img?'':' ill'}">${cIcon(p.cat)}${p.img?`<img src="${esc(p.img)}" alt="${esc(tx(p.t))}" referrerpolicy="no-referrer" onerror="this.remove()"><span class="credit">${t.imgBy}: ${credit(p.img)}</span>`:''}</div>
   <section class="head pad">
   <div style="display:flex;align-items:flex-start;gap:8px"><div style="flex:1;min-width:0">
    <div class="title"><h1>${esc(tx(p.t))}</h1><span class="cat">${subL(p.sub)}</span></div>
    <div class="addr ko-name">${esc(p.name)}</div>
    <div class="addr">${p.perm?t.permStore:rangeTxt(p)} · ${t.about(fmtD(distM(p)))}</div>
    ${p.rate||p.tax?`<div class="badges">${p.rate?`<a class="rbadge" href="https://www.diningcode.com/profile.php?rid=${p.rate.u}" target="_blank" rel="noopener">★ ${p.rate.s.toFixed(1)} <small>${esc(t.rnote(p.rate.n))}</small></a>`:''}${p.tax?`<span class="tbadge">${t.tax}</span>`:''}</div>`:''}</div>
    <button class="star${S.fav[p.id]?' on':''}" data-act="fav" aria-label="${t.star}">${ICON.star}</button></div>
   <div class="chiprow"><a class="chipb p" href="${naverUrl(p)}" target="_blank" rel="noopener">${ICON.pin}${t.nav}</a>
    ${p.entry==='naver'?`<a class="chipb s" href="${p.src}" target="_blank" rel="noopener">${ICON.cal}${t.book}</a>`:''}
    <button class="chipb" data-act="perks">${ICON.gift}${t.perks}</button><a class="chipb" href="${p.src}" target="_blank" rel="noopener">${ICON.link}${t.source}</a></div>
  </section>${galHtml(p)}<div class="sep"></div>`;}
function galHtml(p){const g=gallery(p);if(!g.length)return '';
  return `<section class="gal pad"><h2>${t.photos}<small>${g.length}</small></h2>${['o','i','f','p'].map(k=>{const xs=g.map((x,i)=>({...x,i})).filter(x=>x.k===k);if(!xs.length)return '';
    return `<div class="grow"><span class="gk">${kindL(p,k)}</span><div class="gscroll">${xs.map(x=>`<button class="gi" data-act="lb" data-v="${x.i}"><img src="${esc(x.u)}" alt="${esc(kindL(p,k))}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></button>`).join('')}</div></div>`;}).join('')}
   <p class="gcredit">${t.imgBy}: ${[...new Set(g.map(x=>credit(x.u)).filter(Boolean))].join(' · ')}</p></section>`;}
function lightbox(){const host=$('lbHost');if(S.lb==null){host.innerHTML='';return;}const p=P(),g=gallery(p),x=g[S.lb];if(!x){S.lb=null;host.innerHTML='';return;}
  host.innerHTML=`<div class="lb" data-act="lbclose"><img src="${esc(x.u)}" alt="" referrerpolicy="no-referrer"><div class="lbcap">${kindL(p,x.k)} · ${S.lb+1}/${g.length} · ${t.imgBy}: ${credit(x.u)}</div>
   <button class="lbx" data-act="lbclose" aria-label="${t.close}">×</button>${S.lb>0?`<button class="lbn l" data-act="lbstep" data-v="-1">‹</button>`:''}${S.lb<g.length-1?`<button class="lbn r" data-act="lbstep" data-v="1">›</button>`:''}</div>`;}
function lineBar(){const prev=LINE[S.i-1],next=LINE[S.i+1],p=P();
  return `<div class="lineb" role="group">
   <button class="side" data-act="step" data-v="-1" ${prev?'':'disabled'}>‹ <span>${prev?esc(prev.brand):t.stA}</span></button>
   <div class="cur"><span class="badge">${S.i+1}</span><b>${esc(p.brand)}</b></div>
   <button class="side r" data-act="step" data-v="1" ${next?'':'disabled'}><span>${next?esc(next.brand):t.stB}</span> ›</button></div>`;}
function cards(p){
  if(S.mode==='live'){
    const q=p.rep!=null?`<div class="kv"><span>${t.wait}</span><b class="${p.rep===0?'g':p.rep===1?'a':''}">${t.lv[p.rep]}</b></div><div class="src">${t.reported}</div>`
      :`<div class="kv"><span>${t.wait}</span><b class="k">${t.norep}</b></div><div class="rep2">${t.here}${t.lv.map((x,i)=>`<button data-act="report" data-v="${i}">${x}</button>`).join('')}</div>`;
    return `<div class="cards"><div class="card"><h3>${t.queue}</h3>${q}</div>
     <div class="card"><h3>${t.entryT}</h3><div class="kv"><span>${t.method}</span><b class="${p.entry==='walkin'?'g':'a'}">${t.entry[p.entry]}</b></div>${p.perm?'':`<div class="kv"><span>${t.endsIn}</span>${leftHtml(p)}</div>`}${p.note?`<div class="src">${esc(tx(p.note))}</div>`:''}</div></div>`;}
  return `<div class="cards"><div class="card"><h3>${t.ohours}</h3><div class="kv"><span style="white-space:normal">${esc(hoursTxt(p))}</span></div></div>
    <div class="card"><h3>${p.perm?t.kind:t.period}</h3>${p.perm?`<div class="kv"><span>${t.permStore}</span></div>`:`<div class="kv"><span>${t.dates}</span><b class="k">${rangeTxt(p)}</b></div><div class="kv"><span>${t.left}</span>${leftHtml(p)}</div>`}</div></div>`;}
function lineMap(){
  const st=LINE.map((p,i)=>`<button class="st${i===S.i?' cur':''}" data-act="go" data-v="${i}" aria-label="${esc(tx(p.t))}"><span class="dot"></span><span class="nm">${esc(p.brand)}</span><span class="q">${esc(tx(p.g))}</span></button>`).join('');
  return `<div class="mapbox"><div class="mapscroll"><div class="track">
    <div class="st term"><span class="sub subs">${t.lnA}</span><span class="dot"></span><span class="nm">${t.stA}</span></div>${st}
    <div class="st term"><span class="sub sub2">${t.lnB}</span><span class="dot"></span><span class="nm">${t.stB}</span></div></div></div></div>`;}
function guide(p){const g=t.guide[p.entry]||t.guide.walkin;return `<ol class="guide">${g.map(x=>`<li>${x}</li>`).join('')}${p.tax?`<li>${t.taxStep}</li>`:''}</ol>`;}
function info(p){
  const sec=p.grp==='eat'?t.secEat:p.grp==='shop'?t.secShop:t.secPop;
  return `<section class="sec pad" id="perks"><h2>${sec}</h2><div>${p.perks.map(x=>`<div class="perk">${esc(tx(x[0]))}<span class="tag ${/gift|sig|taste|draw/.test(x[1])?'t-g':'t-a'}">${t.tags[x[1]]}</span></div>`).join('')}</div>
    <p class="datanote">${t.srcFrom(`<a href="${p.src}" target="_blank" rel="noopener">${srcName(p.src)}</a>${p.src2?'、'+esc(p.src2):''}`,DATA_DATE)}</p></section><div class="sep"></div>
   <section class="sec pad"><h2>${t.info}</h2><div class="facts">
    <div class="fact"><span class="ic">${ICON.door}</span><div>${t.entryT}<small><span class="hl">${t.entry[p.entry]}</span></small></div></div>
    <div class="fact"><span class="ic">${ICON.clock}</span><div>${t.ohours}<small>${esc(hoursTxt(p))}</small></div></div>
    <div class="fact"><span class="ic">${ICON.cal}</span><div>${p.perm?t.kind:t.period}<small>${p.perm?t.permStore+' · '+subL(p.sub):rangeTxt(p)}</small></div></div>
    <div class="fact"><span class="ic">${ICON.pin}</span><div>${t.koaddr}<small>${esc(p.addr)}</small><button class="copy" data-act="copy" data-v="${esc(p.addr)}">${ICON.copy}${t.copy}</button></div></div>
   </div></section><div class="sep"></div>
   <section class="sec pad"><h2>${t.guideT}<small>${t.guideS}</small></h2>${guide(p)}</section>`;}
function vDetail(){const p=P();
  return `<div class="wrap grid"><main>${head(p)}<section class="pad" style="padding-bottom:22px">${lineBar()}
   <div class="rt"><div class="seg"><button class="${S.mode==='live'?'on':''}" data-act="mode" data-v="live">${t.live}</button><button class="${S.mode==='info'?'on':''}" data-act="mode" data-v="info">${t.hours}</button></div>
   <span class="clock">${clock(S.clock)}</span><button class="refresh" data-act="refresh" aria-label="${t.refresh}">${ICON.ref}</button></div>${cards(p)}</section>
   <div class="sep"></div>${info(p)}</main>
   <aside class="aside"><section class="sec pad"><h2>${t.lineT}<small>${t.lineS}</small></h2>${lineMap()}</section>
   <p class="foot pad">${t.foot(DATA_DATE)}</p></aside></div>`;}
function vSheet(){
  const pl=t.plans[S.sel];
  return `<div class="mask" data-act="close"><div class="vsheet" role="dialog">
   <div class="shead pad"><h3>${t.vipH}</h3><p>${t.vipP}</p><span class="why">${t.vipWhy}</span><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   <div class="pad"><div class="plans">${t.plans.map((x,i)=>`<button class="plan${S.sel===i?' on':''}" data-act="plan" data-v="${i}"><div>${x[0]}</div><div class="pr">${t.price[i]}</div><div class="ds">${x[1]}</div></button>`).join('')}</div>
    <table class="tbl"><tr><th>${t.tbl[0]}</th><th>${t.tbl[1]}</th><th>${t.tbl[2]}</th></tr>
     ${t.rows.map((r,i)=>`<tr><td>${r}</td><td${i<3?' class="y"':''}>${i<3?'✓':'—'}</td><td class="y">✓</td></tr>`).join('')}</table>
    <button class="buy" data-act="buy">${esc(t.buy(pl[0],t.price[S.sel]))}</button><div class="fine">${t.fine}</div></div></div></div>`;}
const homeEl=$('home'),detEl=$('detail');
function renderDetail(){detEl.innerHTML=vDetail();const c=document.querySelector('.st.cur');if(c){const sc=c.closest('.mapscroll');sc.scrollLeft=c.offsetLeft-sc.clientWidth/2+46;}}
function vFacets(){
  const f=S.f,on=(sec,k)=>sec==='perk'?f.perk.includes(k):sec==='tax'?f.tax:sec==='rate'?f.rate===(k==='r45'?4.5:4.0):f[sec]===k;
  const row=(sec,keys)=>`<div class="fopts">${keys.map(([s2,k])=>`<button class="fl${on(s2,k)?' on':''}" data-act="facet" data-s="${s2}" data-v="${k}">${t.fOpt[k]}</button>`).join('')}</div>`;
  const cnt=live.filter(match).length;
  return `<div class="mask" data-act="close"><div class="vsheet fsheet" role="dialog">
   <div class="fhead pad"><h3>${t.fTitle}</h3><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   <div class="pad">
    <h4>${t.fSec[0]}</h4>${row('perk',[['perk','gift'],['perk','deal'],['perk','taste'],['perk','draw'],['perk','exp']])}
    <h4>${t.fSec[1]}</h4>${row('time',[['time','popup'],['time','new'],['time','ending'],['time','perm']])}
    <h4>${t.fSec[2]}</h4>${row('entry',[['entry','walkin'],['entry','queue'],['entry','book']])}
    <h4>${t.fSec[3]}</h4>${row('other',[['tax','tax'],['rate','r45'],['rate','r40']])}
    <div class="fbtns"><button class="fclear" data-act="fclear">${t.fClear}</button><button class="buy" data-act="close" data-x="1">${t.fShow(cnt)}</button></div>
   </div></div></div>`;}
function renderSheet(){$('sheetHost').innerHTML=S.sheet==='facets'?vFacets():S.sheet!==null?vSheet():'';}
function fitResults(){if(!MAP||!MAP.fit||!(S.cat||S.sub||fCount()))return;const v=visible();if(!v.length)return;
  let top=20,bottom=20;if(!wide()){top=document.querySelector('.topov').offsetHeight+70;bottom=$('near').offsetHeight+20;}
  MAP.fit(v.map(p=>p.dl||p.ll),[top,40,bottom,40]);}
function refresh(){renderChips();drawMarkers();renderNear();setTimeout(fitResults,30);}
function rerender(){if(S.view==='detail'){const y=scrollY;renderDetail();scrollTo(0,y);}renderSheet();}
function openPop(id){S.i=LINE.findIndex(x=>x.id===id);if(S.i<0)return;S.view='detail';S.mode='live';S.sheet=null;renderSheet();homeEl.hidden=true;detEl.hidden=false;renderDetail();scrollTo(0,0);try{history.replaceState(null,'',location.pathname+location.search+'#'+id);}catch(e){}}
function goHome(){S.lb=null;lightbox();S.view='home';detEl.hidden=true;detEl.innerHTML='';homeEl.hidden=false;if(MAP)MAP.resize();drawMarkers();renderNear();try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}

/* ================= language ================= */
function applyStatic(){
  document.documentElement.lang=LOCALE[lang];document.title=t.title;
  $('brand').textContent=t.title;$('tagline').textContent=t.tag;$('q').placeholder=t.ph;
  $('tilewarn').textContent=t.tilewarn;$('map').setAttribute('aria-label',t.mapLabel);
  document.querySelector('.locate').setAttribute('aria-label',t.locate);$('clr').setAttribute('aria-label',t.clear);
  $('langs').innerHTML=LANGS.map(l=>`<button class="${l===lang?'on':''}" data-act="lang" data-v="${l}" lang="${LOCALE[l]}">${T[l].lang}</button>`).join('');}
function setLang(l){
  if(l===lang)return;lang=l;t=T[l];try{localStorage.setItem('ss_lang',l);}catch(e){}
  try{const u=new URL(location.href);u.searchParams.set('lang',l);history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(e){}
  applyStatic();renderChips();$('res').innerHTML=results();
  if(MAP){const keep=MAP.kind;buildMap(keep==='naver'?naverAdapter:leafletAdapter);}
  renderNear();rerender();}

/* ================= events ================= */
const qEl=$('q');
qEl.addEventListener('input',()=>{S.q=qEl.value;if(S.q&&!wide())setMin(true);$('res').innerHTML=results();$('clr').hidden=!S.q;});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]'); if(!el)return;
  const a=el.dataset.act, v=el.dataset.v, p=P();
  if(a==='open')openPop(el.dataset.id);
  else if(a==='home')goHome();
  else if(a==='lb'){S.lb=+v;lightbox();}
  else if(a==='lbstep'){S.lb+=+v;lightbox();}
  else if(a==='lbclose'){if(e.target===el||el.classList.contains('lbx')){S.lb=null;lightbox();}}
  else if(a==='locate')locate();
  else if(a==='lang')setLang(v);
  else if(a==='clear'){S.q='';qEl.value='';$('res').innerHTML='';el.hidden=true;}
  else if(a==='step'){const n=LINE[S.i+(+v)];if(n)openPop(n.id);}
  else if(a==='go')openPop(LINE[+v].id);
  else if(a==='mode'){S.mode=v;rerender();}
  else if(a==='refresh'){S.clock=Date.now();rerender();toast(t.refreshed);}
  else if(a==='report'){p.rep=+v;rerender();toast(t.thanks);}
  else if(a==='perks'){const x=$('perks');if(x)x.scrollIntoView({behavior:'smooth'});}
  else if(a==='copy'){(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast(t.copied),()=>toast(t.copyfail));}
  else if(a==='fav'){S.fav[p.id]=!S.fav[p.id];rerender();toast(S.fav[p.id]?t.fav:t.unfav);}
  else if(a==='cat'){setMin(false);S.cat=(!v||S.cat===v)?null:v;S.sub=null;if(!['meal','bread','sweet','cafe'].includes(S.cat))S.sort='dist';refresh();}
  else if(a==='sub'){setMin(false);S.sub=S.sub===v?null:v;refresh();}
  else if(a==='facets'){S.sheet='facets';renderSheet();}
  else if(a==='facet'){const s2=el.dataset.s,f=S.f;
    if(s2==='perk'){f.perk=f.perk.includes(v)?f.perk.filter(x=>x!==v):[...f.perk,v];}
    else if(s2==='tax')f.tax=!f.tax;
    else if(s2==='rate'){const r=v==='r45'?4.5:4.0;f.rate=f.rate===r?0:r;}
    else f[s2]=f[s2]===v?'':v;
    setMin(false);refresh();renderSheet();}
  else if(a==='fclear'){S.f={perk:[],time:'',entry:'',tax:false,rate:0};refresh();renderSheet();}
  else if(a==='sort'){S.sort=v;renderNear();}
  else if(a==='sheet'){if(!wide())setMin(!S.min);}
  else if(a==='close'){if(e.target===el||el.classList.contains('x')||el.dataset.x){S.sheet=null;renderSheet();}}
  else if(a==='plan'){S.sel=+v;renderSheet();}
  else if(a==='buy'){S.member=true;S.sheet=null;renderSheet();renderChips();toast(t.bought);}
});
document.addEventListener('keydown',e=>{if(S.lb==null)return;const n=gallery(P()).length;if(e.key==='Escape'){S.lb=null;lightbox();}else if(e.key==='ArrowRight'&&S.lb<n-1){S.lb++;lightbox();}else if(e.key==='ArrowLeft'&&S.lb>0){S.lb--;lightbox();}});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(LINE.some(x=>x.id===id))openPop(id);});
setInterval(()=>{document.querySelectorAll('[data-end]').forEach(el=>{el.textContent=left(+el.dataset.end);});},30000);
applyStatic();renderChips();renderNear();startMap();
const h0=location.hash.slice(1); if(LINE.some(x=>x.id===h0))openPop(h0);
})();
