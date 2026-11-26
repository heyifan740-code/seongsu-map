(function(){
'use strict';
/* ================= i18n ================= */
const LANGS=['zh','en','ko'];
const LOCALE={zh:'zh-CN',en:'en',ko:'ko'};
const T={
zh:{photos:'图片',pk:{o:'外景',i:'店内',f:'产品',food:'美食',p:'活动图',u:'网友实拍'},giftOnly:'有赠品',tbd:'结束日期未公布',from:s=>`${s} 起`,imgBy:'图片',filt:'筛选',fTitle:'按条件筛选',fSec:['福利','时间','入场','其他'],fOpt:{popup:'只看快闪',gift:'送礼',deal:'打折',taste:'试吃',draw:'抽奖',exp:'体验',new:'本周新开',ending:'3天内结束',perm:'常设店',walkin:'直接进',queue:'现场取号',book:'要预约/购票',tax:'可退税',r45:'评分 4.5+',r40:'评分 4.0+'},fClear:'清除',fShow:n=>`查看 ${n} 个结果`,fres:'筛选结果',title:'seopup',tag:'课堂原型 · 信息以官方为准',ph:'搜索快闪、美食、店铺或福利',all:'全部',
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
 entry:{walkin:'现场排队',naver:'Naver 预约',ticket:'购票入场',queue:'现场登记排号',unk:'未确认'},kHours:'营业时间未收录，点“Kakao 地图”查看',kSrc:'Kakao 地图',
 guide:{unk:['出发前点上面的“Kakao 地图”，看营业时间和是否要预约','到店后可以用下面的韩语卡问店员要不要登记排队','去过的话在评论区说说排队情况、发张照片，帮后来的人'],walkin:['不用预约，直接到门口','人多时店员可能会让你登记手机号排号，留意短信或 KakaoTalk 通知','周末下午最挤，工作日或开门后一小时内去最省时间'],
  queue:['到门口找店员或平板，用手机号登记排号（没有韩国号码可以问店员）','登记后可以先去附近逛，留意短信 / KakaoTalk 叫号','叫到号后回到门口入场'],
  naver:['打开“信息来源”页面，找到 <span class="ko">네이버 예약</span> 链接','用 Naver 账号登录，选择日期和时段完成预约','按预约时间到店，出示预约确认页面入场'],
  ticket:['这是收费展览，需要购票入场','票价和购票方式请看“信息来源”页面里的官方链接','周末人多，建议工作日或开门时段去']},
 taxStep:'结账时出示护照办理退税',lang:'中文',
 cmt:'评论',cmtN:n=>`${n} 条评论`,say:'说点什么…',hot:'最热',newest:'最新',send:'发送',nickL:'昵称',nickDef:'圣水路人',justNow:'刚刚',
 ago:(m,h,d)=>d?`${d} 天前`:h?`${h} 小时前`:`${m} 分钟前`,noCmt:'还没有评论，来说第一句吧',cmtDemo:'演示模式：评论只保存在这台设备上，接入后台后所有人可见',
 report:'举报',reportedC:'已举报，这条评论对你隐藏了',posted:'已发出',cmtRule:'友善发言 · 不发广告和联系方式 · 被 3 人举报会自动隐藏',
 cerr:{empty:'先写点内容',long:'最多 200 字',link:'不能发链接或联系方式',spam:'内容像是刷屏',fast:'发得太快了，稍等几秒',fail:'没发出去，请稍后再试'},
 qAgg:(n,lv)=>`最近 2 小时 ${n} 人上报，多数说「${lv}」`,qLast:a=>`最新一条 ${a}`,qDemo:'演示模式：上报只保存在这台设备上',qNote:'由现场用户上报，仅供参考',qWait:'30 分钟内只能上报一次',qThanks:'感谢上报',
 favT:'我的收藏',favEmpty:'还没有收藏。在店铺页点右上角的 ☆ 就能收藏',favN:n=>`收藏 ${n}`,rtGo:'规划最佳路线',rtFrom:'从哪出发',rtMe:'地图上的蓝点',rtFree:'不限，自动选',rtFirst:'从这里开始',rtStn:'圣水站',rtSF:'首尔林站',rtNeed:'至少收藏 2 家店才能规划路线',rtT:'最佳路线',rtSum:(n,km,min)=>`${n} 站 · 步行约 ${km} · ${min} 分钟`,rtLeg:(m,min)=>`步行约 ${m} · ${min} 分钟`,rtNav:'导航',rtExit:'退出路线',rtNote:'按直线距离估算的最短顺序，不走回头路；实际步行时间以导航为准',rtStart:'起点',rtClosed:'当前可能未营业',rtRemove:'移除',
 mtTag:'机器翻译',trBtn:'翻译',trOrig:'看原文',allT:'全部店铺',rvT:'街景',rvS:'Kakao 街景 · 可拖动看四周',rvNone:'这里没有街景',webT:'网络图片',webS:'来自网络搜索，点开看原文 · 可能有不相关的图',allKinds:{food:'餐厅',cafe:'咖啡甜品',shop:'服饰杂货',beauty:'美妆'},allZoom:'放大地图就能看到这一带所有店铺',allN:n=>`这一带 ${n} 家店 · 数据来自 Kakao 地图`,allLoading:'正在加载附近店铺…',allNoKey:'全部店铺功能还没接上 Kakao 地图',kakaoOpen:'Kakao 地图看照片和评价',callShop:'打电话',moreShops:'Kakao 地图上的更多店铺',kpNote:'店名、分类、地址来自 Kakao 地图，营业时间和排队情况请点进 Kakao 地图查看',addPhoto:'加图片',photoBig:'图片太大或格式不支持',uploading:'正在上传图片…',ugcBy:'网友',ugcHint:'去过现场？在评论里发张照片，帮后来的人看看真实样子',bookT:'排队 / 预约',bkS:{catchtable:'CatchTable',tabling:'Tabling'},bkW:{waiting:'远程排队',reserve:'预约',search:'搜索这家店'},bookHint:'CatchTable 有面向外国游客的国际版；Tabling 远程排队一般要韩国手机号收短信，没有的话到店问店员',phT:'给店员看',phS:'点一下放大韩文',spotT:'在哪排队',naverHint:'Naver 预约一般要登录 Naver 账号，付费项目要用 Naver Pay；约不上可以到现场问有没有现场名额',
 share:'分享',shared:'已复制，可以粘贴到小红书或微信',
 phr:[['不预约也能进吗？','예약 안 해도 들어갈 수 있어요?'],['在哪里登记排队？','웨이팅 등록은 어디서 해요?'],['现在排队大概要等多久？','지금 기다리면 얼마나 걸려요?'],['我没有韩国手机号，可以登记排队吗？','한국 전화번호가 없는데 웨이팅 등록할 수 있어요?'],['赠品还有吗？','사은품 아직 남아 있어요?'],['赠品要怎么领？','사은품은 어떻게 받아요?'],['可以拍照吗？','사진 찍어도 돼요?'],['可以退税吗？我带了护照。','택스리펀 돼요? 여권 있어요.'],['可以刷外国信用卡吗？','해외 카드로 결제돼요?'],['有会说英语或中文的店员吗？','영어나 중국어 하시는 직원분 계세요?']]},
en:{photos:'Photos',pk:{o:'Outside',i:'Inside',f:'Products',food:'Food',p:'Pop-up',u:'Visitor photos'},giftOnly:'Free gifts',tbd:'End date TBA',from:s=>`From ${s}`,imgBy:'Photo',filt:'Filters',fTitle:'Filter by',fSec:['Perks','When','Entry','Other'],fOpt:{popup:'Pop-ups only',gift:'Free gift',deal:'Discount',taste:'Tasting',draw:'Lucky draw',exp:'Experience',new:'New this week',ending:'Ends in 3 days',perm:'Permanent',walkin:'Walk in',queue:'Waiting list',book:'Booking / ticket',tax:'Tax refund',r45:'Rating 4.5+',r40:'Rating 4.0+'},fClear:'Clear',fShow:n=>`Show ${n} results`,fres:'Filtered',title:'seopup',tag:'Class prototype · confirm with official sources',ph:'Search pop-ups, food, shops or freebies',all:'All',
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
 entry:{walkin:'Walk in',naver:'Naver booking',ticket:'Ticket',queue:'Waiting list',unk:'Not confirmed'},kHours:'Hours not listed — check Kakao Map',kSrc:'Kakao Map',
 guide:{unk:['Before you go, open Kakao Map above for hours and whether booking is needed','At the door, use the phrase cards below to ask about the waiting list','Been there? Leave a comment or photo about the queue to help others'],walkin:['No booking needed — just go to the door','When it’s busy, staff may ask for your phone number to join a waiting list; watch for an SMS or KakaoTalk message','Weekend afternoons are busiest; weekdays or the first hour after opening are quickest'],
  queue:['Register your phone number with staff or the tablet at the door (ask staff if you don’t have a Korean number)','Browse nearby while you wait and watch for the SMS / KakaoTalk call','Come back to the door when your number is called'],
  naver:['Open the source page and find the <span class="ko">네이버 예약</span> (Naver booking) link','Sign in to Naver and pick a date and time','Show your booking confirmation at the door'],
  ticket:['This is a paid exhibition — you need a ticket','See the official link on the source page for prices and booking','Weekends are crowded; weekdays or opening time are best']},
 taxStep:'Show your passport at checkout for the tax refund',lang:'EN',
 cmt:'Comments',cmtN:n=>`${n} comment${n===1?'':'s'}`,say:'Add a comment…',hot:'Top',newest:'Newest',send:'Send',nickL:'Name',nickDef:'Visitor',justNow:'just now',
 ago:(m,h,d)=>d?`${d}d ago`:h?`${h}h ago`:`${m} min ago`,noCmt:'No comments yet — be the first',cmtDemo:'Demo mode: comments are saved on this device only until the backend is connected',
 report:'Report',reportedC:'Reported — hidden for you',posted:'Posted',cmtRule:'Be kind · no ads or contact details · hidden after 3 reports',
 cerr:{empty:'Write something first',long:'200 characters max',link:'No links or contact details',spam:'That looks like spam',fast:'Too fast — wait a few seconds',fail:'Couldn’t post, try again later'},
 qAgg:(n,lv)=>`${n} report${n===1?'':'s'} in the last 2 h, mostly “${lv}”`,qLast:a=>`latest ${a}`,qDemo:'Demo mode: reports are saved on this device only',qNote:'Reported by visitors on site; a rough guide only',qWait:'One report per 30 minutes',qThanks:'Thanks for reporting',
 favT:'Saved places',favEmpty:'Nothing saved yet. Tap ☆ on a place page to save it',favN:n=>`Saved ${n}`,rtGo:'Plan the best route',rtFrom:'Start from',rtMe:'Blue dot on the map',rtFree:'Anywhere (auto)',rtFirst:'Start here',rtStn:'Seongsu Stn.',rtSF:'Seoul Forest Stn.',rtNeed:'Save at least 2 places to plan a route',rtT:'Best route',rtSum:(n,km,min)=>`${n} stops · about ${km} on foot · ${min} min`,rtLeg:(m,min)=>`about ${m} · ${min} min walk`,rtNav:'Directions',rtExit:'Exit route',rtNote:'Shortest order by straight-line distance, no doubling back; follow the navigation app for real walking times',rtStart:'Start',rtClosed:'may be closed now',rtRemove:'Remove',
 mtTag:'Machine translated',trBtn:'Translate',trOrig:'Original',allT:'All shops',rvT:'Street view',rvS:'Kakao Roadview · drag to look around',rvNone:'No street view here',webT:'Web photos',webS:'From web search — tap to see the source; some may be unrelated',allKinds:{food:'Restaurants',cafe:'Cafés & desserts',shop:'Fashion & goods',beauty:'Beauty'},allZoom:'Zoom in to see every shop around here',allN:n=>`${n} places here · data from Kakao Map`,allLoading:'Loading nearby places…',allNoKey:'All-shops mode isn’t connected to Kakao Map yet',kakaoOpen:'Photos & reviews on Kakao Map',callShop:'Call',moreShops:'More places on Kakao Map',kpNote:'Name, category and address from Kakao Map; open Kakao Map for hours and waiting',addPhoto:'Add photo',photoBig:'That image is too large or not supported',uploading:'Uploading photo…',ugcBy:'Visitors',ugcHint:'Been there? Add a photo with your comment so others can see what it’s really like',bookT:'Waitlist / booking',bkS:{catchtable:'CatchTable',tabling:'Tabling'},bkW:{waiting:'Join the waitlist',reserve:'Book',search:'Search this place'},bookHint:'CatchTable has a global version for visitors; Tabling’s remote waitlist usually needs a Korean number for the SMS — if you don’t have one, ask staff at the door',phT:'Show the staff',phS:'tap to show the Korean in large type',spotT:'Where to queue',naverHint:'Naver booking usually needs a Naver account, and paid slots use Naver Pay; if you can’t book, ask on site about walk-in places',
 share:'Share',shared:'Copied — paste it anywhere',
 phr:[['Can I go in without a reservation?','예약 안 해도 들어갈 수 있어요?'],['Where do I sign up for the waiting list?','웨이팅 등록은 어디서 해요?'],['How long is the wait right now?','지금 기다리면 얼마나 걸려요?'],['I don’t have a Korean phone number. Can I still join the waiting list?','한국 전화번호가 없는데 웨이팅 등록할 수 있어요?'],['Are there any free gifts left?','사은품 아직 남아 있어요?'],['How do I get the free gift?','사은품은 어떻게 받아요?'],['May I take photos?','사진 찍어도 돼요?'],['Can I get a tax refund? I have my passport.','택스리펀 돼요? 여권 있어요.'],['Can I pay with a foreign card?','해외 카드로 결제돼요?'],['Is there anyone who speaks English or Chinese?','영어나 중국어 하시는 직원분 계세요?']]},
ko:{photos:'사진',pk:{o:'외관',i:'내부',f:'상품',food:'메뉴',p:'팝업 이미지',u:'방문자 사진'},giftOnly:'증정 있음',tbd:'종료일 미정',from:s=>`${s}부터`,imgBy:'사진',filt:'필터',fTitle:'조건으로 찾기',fSec:['혜택','기간','입장','기타'],fOpt:{popup:'팝업만',gift:'증정',deal:'할인',taste:'시식',draw:'추첨',exp:'체험',new:'이번 주 오픈',ending:'3일 내 종료',perm:'상시 매장',walkin:'바로 입장',queue:'현장 웨이팅',book:'예약/티켓',tax:'택스리펀',r45:'평점 4.5+',r40:'평점 4.0+'},fClear:'초기화',fShow:n=>`결과 ${n}곳 보기`,fres:'필터 결과',title:'seopup',tag:'수업 프로토타입 · 정보는 공식 안내를 확인하세요',ph:'팝업, 맛집, 매장, 혜택 검색',all:'전체',
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
 entry:{walkin:'현장 입장',naver:'네이버 예약',ticket:'티켓 구매',queue:'현장 웨이팅 등록',unk:'확인 안 됨'},kHours:'영업시간 정보 없음 — 카카오맵에서 확인하세요',kSrc:'카카오맵',
 guide:{unk:['출발 전에 위의 카카오맵에서 영업시간과 예약 여부를 확인하세요','다녀오셨다면 댓글로 웨이팅 상황이나 사진을 남겨 주세요'],walkin:['예약 없이 바로 입구로 가면 돼요','붐빌 때는 전화번호로 웨이팅 등록을 요청할 수 있어요. 문자나 카카오톡 알림을 확인하세요','주말 오후가 가장 붐벼요. 평일이나 오픈 직후 1시간이 가장 빨라요'],
  queue:['입구 직원이나 태블릿에서 전화번호로 웨이팅 등록','기다리는 동안 근처를 둘러보고 문자 / 카카오톡 호출 확인','호출되면 입구로 돌아와 입장'],
  naver:['출처 페이지에서 <span class="ko">네이버 예약</span> 링크 찾기','네이버에 로그인해 날짜와 시간 선택','예약 확인 화면을 입구에서 보여주기'],
  ticket:['유료 전시라 티켓이 필요해요','가격과 예매 방법은 출처 페이지의 공식 링크에서 확인','주말은 붐벼요. 평일이나 오픈 시간대를 추천해요']},
 taxStep:'계산할 때 여권을 보여주고 택스리펀 받기',lang:'한국어',
 cmt:'댓글',cmtN:n=>`댓글 ${n}개`,say:'댓글을 남겨 보세요…',hot:'인기순',newest:'최신순',send:'등록',nickL:'닉네임',nickDef:'성수방문자',justNow:'방금',
 ago:(m,h,d)=>d?`${d}일 전`:h?`${h}시간 전`:`${m}분 전`,noCmt:'아직 댓글이 없어요. 첫 댓글을 남겨 보세요',cmtDemo:'데모 모드: 백엔드 연결 전까지 댓글은 이 기기에만 저장돼요',
 report:'신고',reportedC:'신고했어요. 이 댓글은 숨겨져요',posted:'등록했어요',cmtRule:'서로 배려해 주세요 · 광고·연락처 금지 · 신고 3회 시 자동 숨김',
 cerr:{empty:'내용을 입력하세요',long:'최대 200자',link:'링크나 연락처는 쓸 수 없어요',spam:'도배로 보여요',fast:'너무 빨라요. 잠시 후 다시 시도하세요',fail:'등록하지 못했어요. 잠시 후 다시 시도하세요'},
 qAgg:(n,lv)=>`최근 2시간 제보 ${n}건 · 대부분 「${lv}」`,qLast:a=>`최근 제보 ${a}`,qDemo:'데모 모드: 제보는 이 기기에만 저장돼요',qNote:'현장 방문자 제보 · 참고용',qWait:'30분에 한 번만 제보할 수 있어요',qThanks:'제보 감사합니다',
 favT:'저장한 장소',favEmpty:'아직 저장한 곳이 없어요. 장소 페이지에서 ☆를 눌러 저장하세요',favN:n=>`저장 ${n}`,rtGo:'최적 경로 만들기',rtFrom:'출발 위치',rtMe:'지도의 파란 점',rtFree:'자동으로 선택',rtFirst:'여기서 시작',rtStn:'성수역',rtSF:'서울숲역',rtNeed:'경로를 만들려면 2곳 이상 저장하세요',rtT:'최적 경로',rtSum:(n,km,min)=>`${n}곳 · 도보 약 ${km} · ${min}분`,rtLeg:(m,min)=>`도보 약 ${m} · ${min}분`,rtNav:'길찾기',rtExit:'경로 닫기',rtNote:'직선거리 기준 최단 순서, 되돌아가지 않아요. 실제 도보 시간은 지도 앱을 확인하세요',rtStart:'출발',rtClosed:'지금 영업하지 않을 수 있어요',rtRemove:'삭제',
 mtTag:'기계 번역',trBtn:'번역',trOrig:'원문',allT:'모든 매장',rvT:'로드뷰',rvS:'카카오 로드뷰 · 드래그해서 둘러보기',rvNone:'이 위치는 로드뷰가 없어요',webT:'웹 이미지',webS:'웹 검색 결과 · 눌러서 원문 보기 · 관련 없는 이미지가 있을 수 있어요',allKinds:{food:'음식점',cafe:'카페·디저트',shop:'패션·소품',beauty:'뷰티'},allZoom:'지도를 확대하면 이 근처 모든 매장이 보여요',allN:n=>`이 근처 ${n}곳 · 카카오맵 데이터`,allLoading:'주변 매장 불러오는 중…',allNoKey:'모든 매장 기능이 아직 카카오맵과 연결되지 않았어요',kakaoOpen:'카카오맵에서 사진·리뷰 보기',callShop:'전화',moreShops:'카카오맵 검색 결과',kpNote:'매장명·분류·주소는 카카오맵 기준이에요. 영업시간과 웨이팅은 카카오맵에서 확인하세요',addPhoto:'사진 추가',photoBig:'사진이 너무 크거나 지원하지 않는 형식이에요',uploading:'사진 올리는 중…',ugcBy:'방문자',ugcHint:'다녀오셨나요? 댓글에 사진을 남겨 실제 모습을 공유해 주세요',bookT:'웨이팅 / 예약',bkS:{catchtable:'캐치테이블',tabling:'테이블링'},bkW:{waiting:'원격 웨이팅',reserve:'예약',search:'매장 검색'},bookHint:'',phT:'직원에게 보여주기',phS:'눌러서 크게 보기',spotT:'줄 서는 곳',naverHint:'네이버 예약은 보통 네이버 로그인이 필요하고, 유료 예약은 네이버페이로 결제해요',
 share:'공유',shared:'복사했어요',
 phr:[]}
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
const small=u=>u.replace('/750_750_','/300_300_').replace('/C544x408.q60/','/C280x280.q50/');
const gallery=p=>{const g=[];['o','i','f','p'].forEach(k=>(p.pics[k]||[]).forEach(u=>g.push({k,u})));((window.__UGC||{})[p.id]||[]).forEach(u=>g.push({k:'u',u}));if(!g.length&&p.img)g.push({k:'p',u:p.img});return g;};
const kindL=(p,k)=>k==='f'?(p.grp==='eat'?t.pk.food:t.pk.f):t.pk[k];
const live=POPS.filter(p=>p.endTs>Date.now());
// spread markers that share an address so none are hidden
(()=>{const g={};live.forEach(p=>{const k=p.ll[0].toFixed(5)+','+p.ll[1].toFixed(5);(g[k]=g[k]||[]).push(p);});
  Object.values(g).forEach(a=>a.forEach((p,i)=>{if(a.length<2){p.dl=p.ll;return;}const ang=2*Math.PI*i/a.length,r=0.00009;p.dl=[p.ll[0]+r*Math.cos(ang),p.ll[1]+r*1.26*Math.sin(ang)];}));})();
const S={f:{perk:[],time:'',entry:'',tax:false,rate:0},view:'home',cat:null,i:0,mode:'live',grp:'all',sub:null,sort:'dist',member:false,sel:1,sheet:null,fav:{},me:FALLBACK.slice(),q:'',real:false,clock:Date.now(),cc:{},qr:{},cm:null,all:false,allK:['food','cafe','shop','beauty'],kp:null};
const SO=window.SOCIAL;
const FAV=(()=>{let m={};try{m=JSON.parse(localStorage.getItem('ss_fav2'))||{};}catch(e){}
  const save=()=>{try{localStorage.setItem('ss_fav2',JSON.stringify(m));}catch(e){}};
  return {has:id=>!!m[id],all:()=>Object.values(m),
    toggle(p){if(m[p.id])delete m[p.id];else m[p.id]={id:p.id,kk:!!p.kk,name:p.name,t:p.t,ll:p.ll,cat:p.cat,raw:p.kk?p.raw:null,at:Date.now()};save();return !!m[p.id];},
    drop(id){delete m[id];save();}};})();
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const LINE=live.slice().sort((a,b)=>a.ll[1]-b.ll[1]);
const P=()=>S.xp||LINE[S.i];
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
const credit=u=>/supabase\.co|^data:/.test(u)?t.ugcBy:u.includes('d8nffddmkwqeq')?'Popply':u.includes('d12zq4w4guyljn')?'DiningCode':u.includes('kakaocdn')?'Kakao Map':'';
const thumb=(p,cls)=>`<span class="thumb ${cls||''} c-${p.cat}">${cIcon(p.cat)}${p.gk?`<span class="tg">${gIcon(p.gk)}</span>`:''}${p.img?`<img src="${esc(small(p.img))}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}</span>`;
const hoursTxt=p=>p.kk?t.kHours:(p.h==='24h'?(lang==='zh'?'24 小时':lang==='ko'?'24시간':'24 hours'):t.daily+' '+p.h)+(p.hx?' · '+tx(p.hx):'');
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
 globe:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
 cam:'<svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
 chat:'<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/></svg>',
 heart:'<svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
 share:'<svg viewBox="0 0 24 24"><path d="M12 15V4M8 8l4-4 4 4M5 12v7h14v-7"/></svg>',
 talk:'<svg viewBox="0 0 24 24"><path d="M5 5h14v10h-6l-4 4v-4H5z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/></svg>'
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
   onIdle(cb){map.on('moveend',cb);},
   bounds(){const b=map.getBounds();return [[b.getSouth(),b.getWest()],[b.getNorth(),b.getEast()]];},
   remove(m){m.remove();},
   line(lls){return L.polyline(lls,{color:'#2ea84a',weight:5,opacity:.85,dashArray:'1 9',lineCap:'round'}).addTo(map);},
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
   onIdle(cb){N.Event.addListener(map,'idle',cb);},
   bounds(){const b=map.getBounds();return [[b.getMin().y,b.getMin().x],[b.getMax().y,b.getMax().x]];},
   remove(m){m.setMap(null);},
   line(lls){return new N.Polyline({map,path:lls.map(LL),strokeColor:'#2ea84a',strokeWeight:5,strokeOpacity:.85,strokeStyle:'shortdot'});},
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
  if(MAP.onIdle)MAP.onIdle(()=>ALL.idle());
  RT={line:null,ms:[]};setTimeout(drawRoute,80);
  ALL.reset();
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
const pimg=p=>p.img?`<img src="${esc(small(p.img))}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:'';
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

/* ================= all shops (Kakao Local, loaded in the visitor's browser) ================= */
const KIND={food:{c:'FD6',col:'#d4552f'},cafe:{c:'CE7',col:'#7a5a3d'},shop:{kw:['옷가게','편집숍','소품샵','액세서리'],col:'#4366c9'},beauty:{kw:['화장품','뷰티'],col:'#d24d7e'}};
const ALL=(()=>{let svc=null,ready=null,ms=new Map(),timer=0;const cache={},places={};
  const key=CFG.kakaoJsKey;
  function load(){if(ready)return ready;if(!key)return ready=Promise.reject(new Error('nokey'));
    ready=new Promise((res,rej)=>{const sc=document.createElement('script');sc.src='https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey='+encodeURIComponent(key);
      sc.onload=()=>{try{kakao.maps.load(()=>{svc=new kakao.maps.services.Places();res();});}catch(e){rej(e);}};sc.onerror=()=>rej(new Error('sdk'));document.head.appendChild(sc);});
    return ready;}
  const SZ=0.0022;   // ~240 m tiles
  function tiles(b){const out=[];for(let la=Math.floor(b[0][0]/SZ);la<=Math.floor(b[1][0]/SZ);la++)for(let lo=Math.floor(b[0][1]/SZ);lo<=Math.floor(b[1][1]/SZ);lo++)out.push([la,lo]);return out;}
  function one(kind,q,rect){return new Promise(res=>{const got=[];const done=(d,st,pg)=>{if(st===kakao.maps.services.Status.OK)got.push(...d);if(st===kakao.maps.services.Status.OK&&pg&&pg.hasNextPage&&pg.current<3)pg.nextPage();else res(got);};
    const o={rect,size:15};if(q.c)svc.categorySearch(q.c,done,o);else svc.keywordSearch(q.k,done,o);});}
  async function fetchTile(tl,kind){const ck=tl.join(',')+'|'+kind;if(cache[ck])return cache[ck];
    const rect=[tl[1]*SZ,tl[0]*SZ,(tl[1]+1)*SZ,(tl[0]+1)*SZ].join(',');const K=KIND[kind];
    cache[ck]=(async()=>{const qs=K.c?[{c:K.c}]:K.kw.map(k=>({k}));const r=[];for(const q of qs)r.push(...await one(kind,q,rect));
      r.forEach(d=>{if(!places[d.id])places[d.id]={...d,kind,ll:[+d.y,+d.x]};});return r.length;})();return cache[ck];}
  const curated=d=>live.some(p=>meters(p.ll,[+d.y,+d.x])<35&&(p.name.replace(/\s/g,'').includes(d.place_name.replace(/\s/g,'').slice(0,4))||d.place_name.replace(/\s/g,'').includes(p.name.replace(/\s/g,'').slice(0,4))));
  function inView(){if(!MAP||!MAP.bounds)return [];const b=MAP.bounds();return Object.values(places).filter(d=>S.allK.includes(d.kind)&&d.ll[0]>=b[0][0]&&d.ll[0]<=b[1][0]&&d.ll[1]>=b[0][1]&&d.ll[1]<=b[1][1]);}
  // incremental: keep markers that are still wanted, add only new ones (redrawing hundreds of markers while panning made the map stick)
  let dq=0;
  function draw(){if(dq)return;dq=requestAnimationFrame(()=>{dq=0;drawNow();});}
  function drawNow(){if(!MAP)return;const want=new Map();
    if(S.all&&MAP.zoom()>=17)inView().slice(0,700).forEach(d=>{if(d.cur==null)d.cur=curated(d);if(!d.cur)want.set(d.id,d);});
    for(const [id,m] of ms)if(!want.has(id)){MAP.remove(m);ms.delete(id);}
    for(const [id,d] of want)if(!ms.has(id))ms.set(id,MAP.marker({ll:d.ll,html:`<div class="kd" style="--kc:${KIND[d.kind].col}"></div>`,w:14,h:14,ax:7,ay:7,z:-50,title:d.place_name,fixed:true,onClick:()=>openKp(d.id)}));
    status();}
  function status(){const el=$('allst');if(!el)return;if(!S.all){el.hidden=true;return;}el.hidden=false;
    el.textContent=!key?t.allNoKey:MAP.zoom()<17?t.allZoom:S.allBusy?t.allLoading:t.allN(inView().filter(d=>!d.cur).length);}
  async function idle(){if(!S.all)return;status();if(!MAP||MAP.zoom()<17){draw();return;}
    clearTimeout(timer);timer=setTimeout(async()=>{try{await load();}catch(e){status();return;}
      const ts=tiles(MAP.bounds()).slice(0,24);S.allBusy=true;status();
      const b=MAP.bounds(),cy=(b[0][0]+b[1][0])/2/SZ,cx=(b[0][1]+b[1][1])/2/SZ;ts.sort((p,q)=>Math.hypot(p[0]+.5-cy,p[1]+.5-cx)-Math.hypot(q[0]+.5-cy,q[1]+.5-cx));
      for(const tl of ts){for(const k of S.allK)await fetchTile(tl,k);draw();}S.allBusy=false;draw();},250);}
  async function search(q){try{await load();}catch(e){return [];}return new Promise(res=>svc.keywordSearch(q,(d,st)=>res(st===kakao.maps.services.Status.OK?d:[]),{rect:'127.035,37.536,127.068,37.552',size:15}));}
  function add(d,kind){if(!places[d.id])places[d.id]={...d,kind:kind||'shop',ll:[+d.y,+d.x]};return places[d.id];}
  return {idle,draw,status,search,add,sdk:load,get:id=>places[id],reset(){ms=new Map();},has:()=>!!key};})();
const KCAT={food:['meal','korean','food'],cafe:['cafe','cafe','sweet'],shop:['fashion','fstore','shop'],beauty:['beauty','bstore','shop']};
function kPlace(d){const k=KCAT[d.kind]||KCAT.shop,cat=(d.category_name||'').split('>').map(x=>x.trim());const nm=d.place_name;
  const grp=d.kind==='food'||d.kind==='cafe'?'eat':'shop';const lab=cat.slice(-1)[0]||'';
  const C=l=>KTR.cat(cat.slice(1).join(' > '),l).split(' > ').join(' · '),G=l=>KTR.cat(lab,l);
  return {id:'k'+d.id,kk:true,grp,sub:k[1],cat:k[0],name:nm,t:{zh:nm,en:nm,ko:nm},brand:nm,addr:d.road_address_name||d.address_name,ll:d.ll,dl:d.ll,perm:true,endTs:Infinity,h:'',entry:'unk',type:k[2],
    raw:{id:d.id,place_name:d.place_name,category_name:d.category_name,category_group_code:d.category_group_code,road_address_name:d.road_address_name,address_name:d.address_name,phone:d.phone,place_url:d.place_url,x:d.x,y:d.y,kind:d.kind},
    g:{zh:G('zh'),en:G('en'),ko:lab},perks:cat.length>1?[[{zh:C('zh'),en:C('en'),ko:C('ko')},'tip']]:[],src:d.place_url,src2:d.phone?'☎ '+d.phone:'',phone:d.phone,pics:{}};}
function openKp(id){const d=ALL.get(id);if(!d)return;S.xp=kPlace(d);S.view='detail';S.mode='live';S.sheet=null;S.cm=null;S.cfile=null;$('sheetHost').innerHTML='';
  homeEl.hidden=true;detEl.hidden=false;renderDetail();scrollTo(0,0);loadQueue(S.xp.id);loadUgc(S.xp.id);}
function vKp(){const d=ALL.get(S.kp);if(!d)return '';const cat=(d.category_name||'').split('>').map(x=>x.trim()).slice(-2).join(' · ');const dm=meters(S.me,d.ll);
  const isFood=/FD6|CE7/.test(d.category_group_code||'');
  return `<div class="mask" data-act="close"><div class="vsheet kpsheet" role="dialog">
   <div class="fhead pad"><div><h3>${esc(d.place_name)}</h3><small>${esc(cat)} · ${fmtD(dm)}</small></div><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   <div class="pad"><div class="kpaddr">${esc(d.road_address_name||d.address_name)}<button class="copy" data-act="copy" data-v="${esc(d.road_address_name||d.address_name)}">${ICON.copy}${t.copy}</button></div>
    <div class="kpbtns"><a class="chipb p" href="${esc(d.place_url)}" target="_blank" rel="noopener">${ICON.link}${t.kakaoOpen}</a>
     <a class="chipb" href="https://map.naver.com/p/search/${encodeURIComponent(d.place_name+' '+(d.road_address_name||''))}" target="_blank" rel="noopener">${ICON.pin}${t.nav}</a>
     ${d.phone?`<a class="chipb" href="tel:${esc(d.phone)}">${t.callShop}</a>`:''}
     ${isFood?`<a class="chipb" href="https://app.catchtable.co.kr/ct/map/COMMON?showTabs=true&serviceType=INTEGRATION&keyword=${encodeURIComponent(d.place_name)}&keywordSearch=${encodeURIComponent(d.place_name)}&bottomSheetHeightType=HALF" target="_blank" rel="noopener">CatchTable</a>`:''}</div>
    <p class="datanote">${t.kpNote}</p></div></div></div>`;}

/* ================= saved places & best route ================= */
function bestOrder(start,pts){const n=pts.length,d=(a,b)=>meters(a,b),D=pts.map(a=>pts.map(b=>d(a,b))),S0=pts.map(a=>start?d(start,a):0);
  if(n<=12){const N=1<<n,dp=new Float64Array(N*n).fill(Infinity),par=new Int8Array(N*n).fill(-1);
    for(let i=0;i<n;i++)dp[(1<<i)*n+i]=S0[i];
    for(let m=1;m<N;m++)for(let i=0;i<n;i++){const v=dp[m*n+i];if(!(m>>i&1)||v===Infinity)continue;
      for(let j=0;j<n;j++){if(m>>j&1)continue;const mm=m|1<<j,w=v+D[i][j];if(w<dp[mm*n+j]){dp[mm*n+j]=w;par[mm*n+j]=i;}}}
    let m=N-1,best=0;for(let i=1;i<n;i++)if(dp[m*n+i]<dp[m*n+best])best=i;const ord=[];let i=best;
    while(i>=0){ord.push(i);const pi=par[m*n+i];m^=1<<i;i=pi;}return ord.reverse();}
  // larger lists: nearest neighbour, then 2-opt
  let ord=[],left=[...pts.keys()],cur=-1;while(left.length){let bi=0;left.forEach((j,k)=>{const a=cur<0?S0[j]:D[cur][j],b=cur<0?S0[left[bi]]:D[cur][left[bi]];if(a<b)bi=k;});cur=left.splice(bi,1)[0];ord.push(cur);}
  const len=o=>o.reduce((s,j,k)=>s+(k?D[o[k-1]][j]:S0[j]),0);let imp=true;
  while(imp){imp=false;for(let a=0;a<n-1;a++)for(let b=a+1;b<n;b++){const o=[...ord.slice(0,a),...ord.slice(a,b+1).reverse(),...ord.slice(b+1)];if(len(o)+1<len(ord)){ord=o;imp=true;}}}
  return ord;}
const WALK=1.3,SPEED=75;   // street detour factor over straight line; metres walked per minute (~4.5 km/h)
const favPlace=f=>live.find(p=>p.id===f.id)||f;
function planRoute(){const fs=FAV.all().map(favPlace).filter(p=>p.ll);if(fs.length<2){toast(t.rtNeed);return;}
  const fr=S.rtFrom||'free',start=fr==='stn'?ST_B:fr==='sf'?ST_A:fr==='me'?S.me:null;const ord=bestOrder(start,fs.map(p=>p.ll)).map(i=>fs[i]);
  let prev=start||ord[0].ll;const legs=ord.map(p=>{const m=Math.round(meters(prev,p.ll)*WALK);prev=p.ll;return m;});
  S.route={start,stops:ord,legs};S.sheet=null;renderSheet();drawRoute();renderNear();setMin(false);}
let RT={line:null,ms:[]};
function drawRoute(){if(!MAP)return;if(RT.line)MAP.remove(RT.line);RT.ms.forEach(m=>MAP.remove(m));RT={line:null,ms:[]};if(!S.route)return;
  const lls=[...(S.route.start?[S.route.start]:[]),...S.route.stops.map(p=>p.ll)];RT.line=MAP.line(lls);
  if(S.route.start)RT.ms.push(MAP.marker({ll:S.route.start,html:'<div class="rnum s">●</div>',w:26,h:26,ax:13,ay:13,z:2000,fixed:true}));
  S.route.stops.forEach((p,i)=>RT.ms.push(MAP.marker({ll:p.ll,html:`<div class="rnum">${i+1}</div>`,w:26,h:26,ax:13,ay:13,z:2000,fixed:true,title:tx(p.t),onClick:()=>openFav(p.id)})));
  let top=20,bottom=20;if(!wide()){top=document.querySelector('.topov').offsetHeight+40;bottom=$('near').offsetHeight+20;}if(MAP.fit)MAP.fit(lls,[top,40,bottom,40]);}
function openFav(id){if(live.some(p=>p.id===id)){openPop(id);return;}const f=FAV.all().find(x=>x.id===id);if(f&&f.raw){const d=ALL.add({...f.raw},f.raw.kind);openKp(d.id);}}
const kakaoTo=p=>`https://map.kakao.com/link/to/${encodeURIComponent((p.name||'').replace(/,/g,' '))},${p.ll[0]},${p.ll[1]}`;
function routeList(){const r=S.route,tot=r.legs.reduce((a,b)=>a+b,0);
  return `<button class="grabbtn" data-act="sheet" aria-label="${t.details}"><span class="grab"></span></button><div class="sh pad"><h2>${t.rtT}</h2><button class="rtx" data-act="rtexit">${t.rtExit}</button></div>
   <div class="near pad"><p class="rtsum">${esc(t.rtSum(r.stops.length,fmtD(tot),Math.round(tot/SPEED)))}</p>
   <ol class="rtl">${r.start?`<li class="st0"><b>${t.rtStart}</b><small>${S.rtFrom==='stn'?t.rtStn:S.rtFrom==='sf'?t.rtSF:t.rtMe}</small></li>`:''}
   ${r.stops.map((p,i)=>`<li data-n="${i+1}"><button class="rtn" data-act="favopen" data-id="${esc(p.id)}"><b>${esc(tx(p.t)||p.name)}</b><small>${i===0&&!r.start?t.rtFirst:esc(t.rtLeg(fmtD(r.legs[i]),Math.max(1,Math.round(r.legs[i]/SPEED))))}${!p.kk&&p.endTs&&p.endTs<Date.now()?' · '+t.rtClosed:''}</small></button><a class="rtnav" href="${kakaoTo(p)}" target="_blank" rel="noopener">${ICON.pin}${t.rtNav}</a></li>`).join('')}</ol>
   <p class="datanote">${t.rtNote}</p></div>`;}
function vFav(){const fs=FAV.all().map(favPlace);const fr=S.rtFrom||'free';
  return `<div class="mask" data-act="close"><div class="vsheet fsheet" role="dialog"><div class="fhead pad"><h3>${t.favT}</h3><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   <div class="pad">${fs.length?`<div class="favl">${fs.map(p=>`<div class="favi"><button data-act="favopen" data-id="${esc(p.id)}"><b>${esc(tx(p.t)||p.name)}</b><small>${p.ll?fmtD(meters(S.me,p.ll)):''}</small></button><button class="favx" data-act="favdrop" data-id="${esc(p.id)}">${t.rtRemove}</button></div>`).join('')}</div>
    <h4>${t.rtFrom}</h4><div class="fopts">${[['free',t.rtFree],['stn',t.rtStn],['sf',t.rtSF],['me',t.rtMe]].map(([k,l])=>`<button class="fl${fr===k?' on':''}" data-act="rtfrom" data-v="${k}">${l}</button>`).join('')}</div>
    <button class="buy" data-act="rtgo" ${fs.length<2?'disabled':''}>${fs.length<2?t.rtNeed:t.rtGo}</button>`:`<p class="emptyn">${t.favEmpty}</p>`}</div></div></div>`;}

/* ================= home ================= */
function card(p,d){
  return `<button class="nc has-th" data-act="open" data-id="${p.id}">${thumb(p)}<span class="ncb">
    <div class="t"><b>${esc(tx(p.t))}</b>${stars(p)}<span class="c">${catL(p.cat)}</span><span class="dm">${fmtD(d)}</span></div>
    <div class="gifts">${p.perks.slice(0,3).map(x=>`<span class="gift${/deal|menu|tip|sale/.test(x[1])?' a':''}">${ICON[p.grp==='eat'?p.type:p.grp==='shop'?'shop':'gift']}${esc(tx(x[0]))}</span>`).join('')}</div>
    <div class="ft"><span><i class="eb e-${p.entry}">${t.entry[p.entry]}</i>${p.tax?' · '+t.tax:''}${p.perm?' · '+esc(p.h==='24h'?'24h':p.h):` · ${p.endUnk?t.tbd:`${t.ends} <b data-end="${p.endTs}">${left(p.endTs)}</b>`}`}</span><span class="more">${S.cc[p.id]?`<i class="cc">${ICON.chat}${S.cc[p.id]}</i>`:''}${t.details}</span></div>${strip(p)}</span></button>`;}
function strip(p){const g=gallery(p);if(g.length<2)return '';const pick=[];['o','i','f','p'].forEach(k=>{const x=g.find(y=>y.k===k);if(x)pick.push(x);});g.forEach(x=>{if(pick.length<4&&!pick.includes(x))pick.push(x);});
  return `<span class="strip">${pick.slice(0,3).map(x=>`<span class="sp"><img src="${esc(small(x.u))}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"><i>${kindL(p,x.k)}</i></span>`).join('')}</span>`;}
function nearList(){if(S.route)return routeList();
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
   +`<button class="fl favb${FAV.all().length?' has':''}" data-act="favs">${ICON.star}${t.favN(FAV.all().length)}</button>`
   +`<button class="fl allb${S.all?' on':''}" data-act="allshops">${ICON.shop}${t.allT}</button>`
   +CATS.map(([k])=>{const c=live.filter(p=>p.cat===k).length;if(!c)return '';return `<button class="fl cat${S.cat===k?' on':''}" data-act="cat" data-v="${k}">${cIcon(k)}${catL(k)}<small>${c}</small></button>`;}).join('');
  const s=$('subchips');
  const subs=S.cat?[...new Set(live.filter(p=>p.cat===S.cat).map(p=>p.grp+'/'+p.sub))]:[];
  s.hidden=false;
  const gOn=S.f.perk.includes('gift');
  s.innerHTML=`<button class="fl gq${gOn?' on':''}" data-act="facet" data-s="perk" data-v="gift">${gIcon('gift')}${t.giftOnly}<small>${live.filter(p=>p.gk).length}</small></button><button class="fl ff${n?' on':''}" data-act="facets"><svg viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4"/></svg>${t.filt}${n?`<small>${n}</small>`:''}</button>`
   +(S.all?Object.keys(KIND).map(k=>`<button class="fl sub kk${S.allK.includes(k)?' on':''}" data-act="allkind" data-v="${k}" style="--kc:${KIND[k].col}"><i></i>${t.allKinds[k]}</button>`).join(''):'')
   +(subs.length>1?subs.map(k=>`<button class="fl sub${S.sub===k?' on':''}" data-act="sub" data-v="${k}">${subKL(k)}<small>${live.filter(p=>p.grp+'/'+p.sub===k&&p.cat===S.cat).length}</small></button>`).join(''):'');}
function locate(){
  if(!navigator.geolocation){toast(t.nogeo);setMe(FALLBACK,true);return;}
  toast(t.locating);
  navigator.geolocation.getCurrentPosition(pos=>{const ll=[pos.coords.latitude,pos.coords.longitude];
    if(meters(ll,ST_B)>2500){S.real=false;toast(t.far);setMe(FALLBACK,true);}else{S.real=true;toast(t.located);setMe(ll,true);}},
   ()=>{S.real=false;toast(t.denied);setMe(FALLBACK,true);},{enableHighAccuracy:true,timeout:8000});}

/* ================= detail ================= */
function srcName(u){if(u.includes('kakao.com'))return t.kSrc;return u.includes('popply')?t.srcNames.popply:u.includes('diningcode')?t.srcNames.diningcode:u.includes('instagram')?t.srcNames.instagram:t.srcNames.other;}
function head(p){const hi=p.img||(gallery(p)[0]||{}).u;
  return `<div class="backrow pad"><button data-act="home">${ICON.back}${t.back}</button></div>
   <div class="hero c-${p.cat}${hi?'':' ill'}">${cIcon(p.cat)}${hi?`<img src="${esc(hi)}" alt="${esc(tx(p.t))}" referrerpolicy="no-referrer" onerror="this.remove()"><span class="credit">${t.imgBy}: ${credit(hi)}</span>`:''}</div>
   <section class="head pad">
   <div style="display:flex;align-items:flex-start;gap:8px"><div style="flex:1;min-width:0">
    <div class="title"><h1>${esc(tx(p.t))}${p.kk&&lang!=='ko'?`<small class="mtt">${p.mt?t.mtTag:''}</small>`:''}</h1><span class="cat">${subL(p.sub)}</span></div>
    <div class="addr ko-name">${esc(p.name)}</div>
    <div class="addr">${p.perm?t.permStore:rangeTxt(p)} · ${t.about(fmtD(distM(p)))}</div>
    ${p.rate||p.tax?`<div class="badges">${p.rate?`<a class="rbadge" href="https://www.diningcode.com/profile.php?rid=${p.rate.u}" target="_blank" rel="noopener">★ ${p.rate.s.toFixed(1)} <small>${esc(t.rnote(p.rate.n))}</small></a>`:''}${p.tax?`<span class="tbadge">${t.tax}</span>`:''}</div>`:''}</div>
    <button class="star${FAV.has(p.id)?' on':''}" data-act="fav" aria-label="${t.star}">${ICON.star}</button></div>
   <div class="chiprow"><a class="chipb p" href="${naverUrl(p)}" target="_blank" rel="noopener">${ICON.pin}${t.nav}</a>${p.kk?`<a class="chipb s" href="${esc(p.src)}" target="_blank" rel="noopener">${ICON.link}${t.kakaoOpen}</a>`:''}
    ${p.entry==='naver'?`<a class="chipb s" href="${p.src}" target="_blank" rel="noopener">${ICON.cal}${t.book}</a>`:''}${(p.book||[]).slice(0,1).map(b=>`<a class="chipb s" href="${esc(bookUrl(b))}" target="_blank" rel="noopener">${ICON.cal}${t.bkS[b.via]} ${t.bkW[b.t||'waiting']}</a>`).join('')}
    <button class="chipb" data-act="perks">${ICON.gift}${t.perks}</button><button class="chipb" data-act="cmt">${ICON.chat}${t.cmt}<small class="num" data-cc="${p.id}">${S.cc[p.id]||''}</small></button><button class="chipb" data-act="share">${ICON.share}${t.share}</button>${p.kk&&p.phone?`<a class="chipb" href="tel:${esc(p.phone)}">${t.callShop}</a>`:''}${p.kk?'':`<a class="chipb" href="${p.src}" target="_blank" rel="noopener">${ICON.link}${t.source}</a>`}</div>
  </section>${galHtml(p)}<div class="sep"></div>`;}
function rvHtml(p){if(!CFG.kakaoJsKey)return '';return `<section class="sec pad rvsec"><h2>${t.rvT}<small>${t.rvS}</small></h2><div id="rvSlot" class="rvslot"></div></section><div class="sep"></div>`;}
const WEB={};
function webHtml(p){if(!CFG.kakaoRestKey||!p.kk)return '';const w=WEB[p.id];if(!w||!w.length)return '';
  return `<section class="gal pad"><h2>${t.webT}</h2><div class="gscroll">${w.map(x=>`<a class="gi" href="${esc(x.doc_url)}" target="_blank" rel="noopener"><img src="${esc(x.thumbnail_url)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"><i>${esc(x.display_sitename||'')}</i></a>`).join('')}</div><p class="gcredit">${t.webS}</p></section>`;}
async function loadWeb(p){if(!CFG.kakaoRestKey||!p.kk||WEB[p.id])return;WEB[p.id]=[];
  try{const r=await fetch('https://dapi.kakao.com/v2/search/image?size=12&sort=accuracy&query='+encodeURIComponent(p.name+' 성수'),{headers:{Authorization:'KakaoAK '+CFG.kakaoRestKey}});
    const j=await r.json();WEB[p.id]=(j.documents||[]).filter(x=>/^https:/.test(x.thumbnail_url));if(S.view==='detail'&&P().id===p.id)rerender();}catch(e){}}
/* Kakao Roadview: one viewer per page, kept alive across re-renders and turned to face the shop */
const RV={id:null,box:null,rv:null};
async function mountRv(p){const slot=$('rvSlot');if(!slot)return;
  if(RV.id===p.id&&RV.box){slot.appendChild(RV.box);if(RV.rv)RV.rv.relayout();return;}
  RV.id=p.id;RV.rv=null;RV.box=document.createElement('div');RV.box.className='rvbox';slot.appendChild(RV.box);
  try{await ALL.sdk();}catch(e){slot.closest('.rvsec').remove();return;}
  const K=kakao.maps,pos=new K.LatLng(p.ll[0],p.ll[1]);
  new K.RoadviewClient().getNearestPanoId(pos,60,id=>{if(RV.id!==p.id)return;
    if(!id){RV.box.innerHTML=`<div class="rvnone">${t.rvNone}</div>`;return;}
    const rv=RV.rv=new K.Roadview(RV.box);rv.setPanoId(id,pos);
    K.event.addListener(rv,'init',()=>{const a=rv.getPosition(),y1=a.getLat()*Math.PI/180,y2=p.ll[0]*Math.PI/180,dl=(p.ll[1]-a.getLng())*Math.PI/180;
      const pan=(Math.atan2(Math.sin(dl)*Math.cos(y2),Math.cos(y1)*Math.sin(y2)-Math.sin(y1)*Math.cos(y2)*Math.cos(dl))*180/Math.PI+360)%360;rv.setViewpoint({pan,tilt:0,zoom:0});});});}
function galHtml(p){const g=gallery(p);if(!g.length)return `<p class="ugchint pad" data-act="cmt" data-v="write">${ICON.cam}${t.ugcHint}</p>`;
  return `<section class="gal pad"><h2>${t.photos}<small>${g.length}</small></h2>${['u','o','i','f','p'].map(k=>{const xs=g.map((x,i)=>({...x,i})).filter(x=>x.k===k);if(!xs.length)return '';
    return `<div class="grow"><span class="gk${k==='u'?' ku':''}">${kindL(p,k)}</span><div class="gscroll">${xs.map(x=>`<button class="gi" data-act="lb" data-v="${x.i}"><img src="${esc(small(x.u))}" alt="${esc(kindL(p,k))}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.remove()"></button>`).join('')}</div></div>`;}).join('')}
   <p class="gcredit">${t.imgBy}: ${[...new Set(g.map(x=>credit(x.u)).filter(Boolean))].join(' · ')}</p><p class="ugchint" data-act="cmt" data-v="write">${ICON.cam}${t.ugcHint}</p></section>`;}
function lightbox(){const host=$('lbHost');if(S.lb==null){host.innerHTML='';return;}const p=P(),g=gallery(p),x=g[S.lb];if(!x){S.lb=null;host.innerHTML='';return;}
  host.innerHTML=`<div class="lb" data-act="lbclose"><img src="${esc(x.u)}" alt="" referrerpolicy="no-referrer"><div class="lbcap">${kindL(p,x.k)} · ${S.lb+1}/${g.length} · ${t.imgBy}: ${credit(x.u)}</div>
   <button class="lbx" data-act="lbclose" aria-label="${t.close}">×</button>${S.lb>0?`<button class="lbn l" data-act="lbstep" data-v="-1">‹</button>`:''}${S.lb<g.length-1?`<button class="lbn r" data-act="lbstep" data-v="1">›</button>`:''}</div>`;}
function lineBar(){if(S.xp)return '';const prev=LINE[S.i-1],next=LINE[S.i+1],p=P();
  return `<div class="lineb" role="group">
   <button class="side" data-act="step" data-v="-1" ${prev?'':'disabled'}>‹ <span>${prev?esc(prev.brand):t.stA}</span></button>
   <div class="cur"><span class="badge">${S.i+1}</span><b>${esc(p.brand)}</b></div>
   <button class="side r" data-act="step" data-v="1" ${next?'':'disabled'}><span>${next?esc(next.brand):t.stB}</span> ›</button></div>`;}
function ago(ts){const x=Math.max(0,Date.now()-ts);if(x<60e3)return t.justNow;const m=Math.floor(x/M),h=Math.floor(x/H),d=Math.floor(x/D);return t.ago(m,h,d);}
function queueHtml(p){const rs=S.qr[p.id]||[];const can=Date.now()-SO.me.lastRep(p.id)>30*M;
  const btns=`<div class="rep2">${t.here}${t.lv.map((x,i)=>`<button data-act="report" data-v="${i}" ${can?'':'disabled'}>${x}</button>`).join('')}</div>`;
  if(!rs.length)return `<div class="kv"><span>${t.wait}</span><b class="k">${t.norep}</b></div>${btns}<div class="src">${SO.live?t.qNote:t.qDemo}</div>`;
  const c=[0,0,0];rs.forEach(r=>c[r.level]++);const lv=c[2]>=c[1]&&c[2]>=c[0]?2:c[1]>=c[0]?1:0;const last=Math.max(...rs.map(r=>Date.parse(r.created_at)));
  return `<div class="kv"><span>${t.wait}</span><b class="${lv===0?'g':lv===1?'a':''}">${t.lv[lv]}</b></div><div class="qbar">${c.map((n,i)=>n?`<span class="q${i}" style="flex:${n}">${n}</span>`:'').join('')}</div>
   <div class="src">${esc(t.qAgg(rs.length,t.lv[lv]))} · ${esc(t.qLast(ago(last)))}</div>${btns}<div class="src">${SO.live?t.qNote:t.qDemo}</div>`;}
function cards(p){
  if(S.mode==='live'){
    return `<div class="cards"><div class="card"><h3>${t.queue}${SO.live?'<span class="livedot"></span>':''}</h3>${queueHtml(p)}</div>
     <div class="card"><h3>${t.entryT}</h3><div class="kv"><span>${t.method}</span><b class="${p.entry==='walkin'?'g':'a'}">${t.entry[p.entry]}</b></div>${p.spot?`<div class="kv"><span>${t.spotT}</span><b class="k sp">${esc(tx(p.spot))}</b></div>`:''}${p.perm?'':`<div class="kv"><span>${t.endsIn}</span>${leftHtml(p)}</div>`}${p.entry==='naver'?`<div class="src">${t.naverHint}</div>`:''}${p.note?`<div class="src">${esc(tx(p.note))}</div>`:''}</div></div>`;}
  return `<div class="cards"><div class="card"><h3>${t.ohours}</h3><div class="kv"><span style="white-space:normal">${esc(hoursTxt(p))}</span></div></div>
    <div class="card"><h3>${p.perm?t.kind:t.period}</h3>${p.perm?`<div class="kv"><span>${t.permStore}</span></div>`:`<div class="kv"><span>${t.dates}</span><b class="k">${rangeTxt(p)}</b></div><div class="kv"><span>${t.left}</span>${leftHtml(p)}</div>`}</div></div>`;}
function lineMap(){
  const st=LINE.map((p,i)=>`<button class="st${i===S.i?' cur':''}" data-act="go" data-v="${i}" aria-label="${esc(tx(p.t))}"><span class="dot"></span><span class="nm">${esc(p.brand)}</span><span class="q">${esc(tx(p.g))}</span></button>`).join('');
  return `<div class="mapbox"><div class="mapscroll"><div class="track">
    <div class="st term"><span class="sub subs">${t.lnA}</span><span class="dot"></span><span class="nm">${t.stA}</span></div>${st}
    <div class="st term"><span class="sub sub2">${t.lnB}</span><span class="dot"></span><span class="nm">${t.stB}</span></div></div></div></div>`;}
const bookUrl=b=>b.via==='catchtable'&&b.ref?(lang==='ko'?'https://app.catchtable.co.kr/ct/shop/':'https://www.catchtable.net/shop/')+b.ref:b.u;
const ctSearch=p=>{const k=encodeURIComponent(p.name.replace(/\s*\(.*?\)\s*/g,' ').trim());return `https://app.catchtable.co.kr/ct/map/COMMON?showTabs=true&serviceType=INTEGRATION&keyword=${k}&keywordSearch=${k}&bottomSheetHeightType=HALF`;};
function bookHtml(p){const bs=p.book||[];if(!bs.length&&p.grp!=='eat')return '';
  const links=bs.map(b=>`<a class="bk bk-${b.via}" href="${esc(bookUrl(b))}" target="_blank" rel="noopener"><b>${t.bkS[b.via]}</b><span>${t.bkW[b.t||'waiting']}</span></a>`);
  if(!bs.some(b=>b.via==='catchtable')&&p.grp==='eat')links.push(`<a class="bk bk-catchtable s" href="${esc(ctSearch(p))}" target="_blank" rel="noopener"><b>${t.bkS.catchtable}</b><span>${t.bkW.search}</span></a>`);
  return `<div class="sep"></div><section class="sec pad"><h2>${t.bookT}</h2><div class="bks">${links.join('')}</div>${t.bookHint?`<p class="datanote">${t.bookHint}</p>`:''}</section>`;}
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
   <section class="sec pad"><h2>${t.guideT}<small>${t.guideS}</small></h2>${guide(p)}</section>${bookHtml(p)}${t.phr.length?`<div class="sep"></div><section class="sec pad"><h2>${t.phT}<small>${t.phS}</small></h2><div class="phr">${t.phr.map((x,i)=>`<button class="ph1" data-act="phrase" data-v="${i}"><span>${esc(x[0])}</span><b lang="ko">${esc(x[1])}</b></button>`).join('')}</div></section>`:''}`;}
function vDetail(){const p=P();
  return `<div class="wrap grid"><main>${head(p)}${webHtml(p)}${rvHtml(p)}<section class="pad" style="padding-bottom:22px">${lineBar()}
   <div class="rt"><div class="seg"><button class="${S.mode==='live'?'on':''}" data-act="mode" data-v="live">${t.live}</button><button class="${S.mode==='info'?'on':''}" data-act="mode" data-v="info">${t.hours}</button></div>
   <span class="clock">${clock(S.clock)}</span><button class="refresh" data-act="refresh" aria-label="${t.refresh}">${ICON.ref}</button></div>${cards(p)}</section>
   <div class="sep"></div>${info(p)}</main>
   <aside class="aside"><section class="sec pad"><h2>${t.lineT}<small>${t.lineS}</small></h2>${lineMap()}</section>
   <p class="foot pad">${t.foot(DATA_DATE)}</p></aside></div>
   <div class="cbar"><button class="cin" data-act="cmt" data-v="write">${ICON.talk}<span>${t.say}</span></button><button class="cnum" data-act="cmt">${ICON.chat}<b class="num" data-cc="${p.id}">${S.cc[p.id]||0}</b></button></div>`;}
function vSheet(){
  const pl=t.plans[S.sel];
  return `<div class="mask" data-act="close"><div class="vsheet" role="dialog">
   <div class="shead pad"><h3>${t.vipH}</h3><p>${t.vipP}</p><span class="why">${t.vipWhy}</span><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   <div class="pad"><div class="plans">${t.plans.map((x,i)=>`<button class="plan${S.sel===i?' on':''}" data-act="plan" data-v="${i}"><div>${x[0]}</div><div class="pr">${t.price[i]}</div><div class="ds">${x[1]}</div></button>`).join('')}</div>
    <table class="tbl"><tr><th>${t.tbl[0]}</th><th>${t.tbl[1]}</th><th>${t.tbl[2]}</th></tr>
     ${t.rows.map((r,i)=>`<tr><td>${r}</td><td${i<3?' class="y"':''}>${i<3?'✓':'—'}</td><td class="y">✓</td></tr>`).join('')}</table>
    <button class="buy" data-act="buy">${esc(t.buy(pl[0],t.price[S.sel]))}</button><div class="fine">${t.fine}</div></div></div></div>`;}
const homeEl=$('home'),detEl=$('detail');
function nameMt(p){if(!p.kk||lang==='ko'||p.mtd&&p.mtd[lang])return;(p.mtd=p.mtd||{})[lang]=1;KTR.name(p.name,lang).then(x=>{if(!x)return;p.t[lang]=x;p.mt=1;if(S.view==='detail'&&P()===p)rerender();});}
function renderDetail(){detEl.innerHTML=vDetail();const pp=P();mountRv(pp);loadWeb(pp);nameMt(pp);const c=document.querySelector('.st.cur');if(c){const sc=c.closest('.mapscroll');sc.scrollLeft=c.offsetLeft-sc.clientWidth/2+46;}}
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
function renderSheet(){if(S.sheet==='cmt'){if(!$('cmtList'))$('sheetHost').innerHTML=vCmt();renderCmt();return;}$('sheetHost').innerHTML=S.sheet==='facets'?vFacets():S.sheet==='kp'?vKp():S.sheet==='fav'?vFav():S.sheet!==null?vSheet():'';}
/* ================= comments (Douyin-style sheet) ================= */
const hue=s=>{let h=0;for(const c of String(s))h=(h*31+c.codePointAt(0))%360;return h;};
const myNick=()=>SO.me.nick()||(()=>{const n=t.nickDef+String(Math.floor(1000+Math.random()*9000));SO.me.setNick(n);return n;})();
function vCmt(){const p=P();
  return `<div class="mask" data-act="close"><div class="vsheet csheet" role="dialog" aria-label="${t.cmt}">
   <div class="chead"><b id="cmtTitle">${t.cmtN(0)}</b><div class="seg sm"><button data-act="csort" data-v="hot">${t.hot}</button><button data-act="csort" data-v="new">${t.newest}</button></div><button class="x" data-act="close" aria-label="${t.close}">×</button></div>
   ${SO.live?'':`<div class="cdemo">${t.cmtDemo}</div>`}
   <div class="clist" id="cmtList"></div>
   <div class="cfoot"><div class="crule">${t.cmtRule}</div>
    <div class="cprev" id="cPrev" hidden></div><div class="cform">${SO.photos?`<label class="ccam" aria-label="${t.addPhoto}">${ICON.cam}<input id="cFile" type="file" accept="image/*" hidden></label>`:''}<input id="cNick" class="cnick" maxlength="12" value="${esc(myNick())}" aria-label="${t.nickL}"><textarea id="cBody" rows="1" maxlength="200" placeholder="${esc(t.say)}" aria-label="${t.say}"></textarea><button class="csend" data-act="csend">${t.send}</button></div></div>
  </div></div>`;}
function renderCmt(){const cm=S.cm,el=$('cmtList');if(!cm||!el)return;
  const xs=cm.list.filter(c=>!SO.me.hidden(c.id));
  const sorted=xs.slice().sort(cm.sort==='new'?(a,b)=>Date.parse(b.created_at)-Date.parse(a.created_at):(a,b)=>(b.likes-a.likes)||(Date.parse(b.created_at)-Date.parse(a.created_at)));
  $('cmtTitle').textContent=t.cmtN(xs.length);
  document.querySelectorAll('[data-act="csort"]').forEach(b=>b.classList.toggle('on',b.dataset.v===cm.sort));
  el.innerHTML=cm.loading?'<div class="cempty">…</div>':sorted.length?sorted.map(c=>{const lk=SO.me.liked(c.id);
    return `<div class="cm${cm.fresh===c.id?' fresh':''}"><span class="av" style="background:hsl(${hue(c.nick)} 55% 52%)">${esc([...c.nick][0]||'?')}</span>
     <div class="cmb"><div class="cn">${esc(c.nick)}</div><div class="ct">${esc(S.ctr&&S.ctr[c.id]||c.body)}</div>${KTR.src(c.body)!==({zh:'zh-CN',en:'en',ko:'ko'})[lang]?`<button class="ctr" data-act="ctr" data-v="${c.id}">${S.ctr&&S.ctr[c.id]?t.trOrig:t.trBtn}</button>`:''}${c.img?`<button class="cimg" data-act="cimg" data-v="${esc(c.img)}"><img src="${esc(c.img)}" alt="" loading="lazy"></button>`:''}<div class="cmeta">${ago(Date.parse(c.created_at))}<button data-act="crep" data-v="${c.id}">${t.report}</button></div></div>
     <button class="clk${lk?' on':''}" data-act="clike" data-v="${c.id}" aria-label="like">${ICON.heart}<span class="num">${c.likes||''}</span></button></div>`;}).join(''):`<div class="cempty">${t.noCmt}</div>`;}
async function openComments(focus){const p=P();S.sheet='cmt';S.cm={place:p.id,list:[],sort:'hot',loading:true};$('sheetHost').innerHTML=vCmt();renderCmt();
  if(focus)setTimeout(()=>{const b=$('cBody');if(b)b.focus();},60);
  try{await SO.ready;const l=await SO.list(p.id);if(S.cm&&S.cm.place===p.id){S.cm.list=l;S.cm.loading=false;S.cc[p.id]=l.length;renderCmt();setCount(p.id);}}
  catch(e){if(S.cm){S.cm.loading=false;renderCmt();}}}
function setCount(id){document.querySelectorAll(`[data-cc="${id}"]`).forEach(el=>el.textContent=S.cc[id]||(el.tagName==='B'?0:''));}
async function sendCmt(){const p=P(),b=$('cBody'),nk=$('cNick');if(!b)return;
  const nick=(nk.value||'').trim().slice(0,12)||myNick();SO.me.setNick(nick);
  const r=SO.clean(b.value);if(r.err){toast(t.cerr[r.err]);return;}
  if(Date.now()-SO.me.lastPost()<10e3){toast(t.cerr.fast);return;}
  const btn=document.querySelector('.csend');btn.disabled=true;
  try{let img=null;if(S.cfile){toast(t.uploading);img=await SO.upload(S.cfile);}const c=await SO.add(p.id,nick,r.body,img);SO.me.posted();b.value='';setFile(null);addCmt(c,true);toast(t.posted);}
  catch(e){console.error('comment failed',e);toast(t.cerr.fail+(e&&(e.code||e.message)?' ('+String(e.code||e.message).slice(0,60)+')':''));}finally{btn.disabled=false;}}
function setFile(f){S.cfile=f;const pv=$('cPrev');if(!pv)return;if(!f){pv.hidden=true;pv.innerHTML='';const i=$('cFile');if(i)i.value='';return;}
  const u=URL.createObjectURL(f);pv.hidden=false;pv.innerHTML=`<img src="${u}" alt=""><button data-act="cfx" aria-label="${t.close}">×</button>`;}
function ugcAdd(c){if(!c||!c.img)return;const U=window.__UGC=window.__UGC||{};const a=U[c.place]=U[c.place]||[];if(!a.includes(c.img))a.unshift(c.img);}
function addCmt(c,mine){if(!c)return;const cm=S.cm;ugcAdd(c);if(c.img&&S.view==='detail'&&P().id===c.place&&!mine)rerender();
  if(cm&&cm.place===c.place){if(cm.list.some(x=>x.id===c.id))return;cm.list.unshift(c);cm.fresh=c.id;if(mine)cm.sort='new';S.cc[c.place]=cm.list.length;renderCmt();const el=$('cmtList');if(el&&mine)el.scrollTop=0;}
  else S.cc[c.place]=(S.cc[c.place]||0)+1;
  setCount(c.place);if(S.view==='home')renderNear();}
SO.onComment(c=>addCmt(c,false));
SO.onQueue(r=>{const a=S.qr[r.place];if(!a)return;if(a.some(x=>x.created_at===r.created_at&&x.level===r.level))return;a.unshift(r);if(S.view==='detail'&&P().id===r.place&&S.mode==='live')rerender();});
async function loadUgc(id){try{await SO.ready;const l=await SO.list(id);(window.__UGC=window.__UGC||{})[id]=l.filter(c=>c.img).map(c=>c.img);S.cc[id]=l.length;if(S.view==='detail'&&P().id===id)rerender();}catch(e){}}
async function loadQueue(id){try{await SO.ready;S.qr[id]=await SO.queue(id);if(S.view==='detail'&&P().id===id)rerender();}catch(e){}}
SO.ready.then(()=>SO.counts()).then(m=>{S.cc=m||{};if(S.view==='home')renderNear();else rerender();}).catch(()=>{});
function shareText(p){const pk=p.perks.slice(0,2).map(x=>'· '+tx(x[0])).join('\n');
  return `${tx(p.t)}\n${p.perm?t.permStore:rangeTxt(p)} · ${hoursTxt(p)}\n${pk}\n${p.addr}\n${location.origin+location.pathname}?lang=${lang}#${p.id}`;}
function fitResults(){if(!MAP||!MAP.fit||!(S.cat||S.sub||fCount()))return;const v=visible();if(!v.length)return;
  let top=20,bottom=20;if(!wide()){top=document.querySelector('.topov').offsetHeight+70;bottom=$('near').offsetHeight+20;}
  MAP.fit(v.map(p=>p.dl||p.ll),[top,40,bottom,40]);}
function refresh(){renderChips();drawMarkers();renderNear();setTimeout(fitResults,30);}
function rerender(){if(S.view==='detail'){const y=scrollY;renderDetail();scrollTo(0,y);}if(S.sheet!=='cmt')renderSheet();}
function openPop(id){S.i=LINE.findIndex(x=>x.id===id);if(S.i<0)return;S.xp=null;S.view='detail';S.mode='live';S.sheet=null;S.cm=null;S.cfile=null;$('sheetHost').innerHTML='';loadQueue(id);loadUgc(id);homeEl.hidden=true;detEl.hidden=false;renderDetail();scrollTo(0,0);try{history.replaceState(null,'',location.pathname+location.search+'#'+id);}catch(e){}}
function goHome(){S.xp=null;S.lb=null;lightbox();S.view='home';detEl.hidden=true;detEl.innerHTML='';homeEl.hidden=false;if(MAP)MAP.resize();drawMarkers();renderNear();try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}

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
let kq=0;
qEl.addEventListener('input',()=>{S.q=qEl.value;if(S.q&&!wide())setMin(true);$('res').innerHTML=results();$('clr').hidden=!S.q;
  const q=S.q.trim(),my=++kq;if(q.length<2||!ALL.has())return;
  setTimeout(async()=>{if(my!==kq)return;const ds=(await ALL.search(q)).map(d=>ALL.add(d,d.category_group_code==='FD6'?'food':d.category_group_code==='CE7'?'cafe':'shop'));if(my!==kq||!ds.length)return;
    const box=document.querySelector('.results');if(!box)return;
    box.insertAdjacentHTML('beforeend',`<div class="kres-h">${t.moreShops}</div>`+ds.map(d=>`<button class="res" data-act="kopen" data-id="${esc(d.id)}"><span class="kd big" style="--kc:${KIND[d.kind].col}"></span><span><b>${esc(d.place_name)}</b><small>${esc(KTR.cat((d.category_name||'').split('>').pop().trim(),lang))} · ${esc(d.road_address_name||d.address_name)}</small></span><span class="d">${fmtD(meters(S.me,d.ll))}</span></button>`).join(''));},350);});
document.addEventListener('click',e=>{
  const el=e.target.closest('[data-act]'); if(!el)return;
  const a=el.dataset.act, v=el.dataset.v, p=P();
  if(a==='open')openPop(el.dataset.id);
  else if(a==='home')goHome();
  else if(a==='lb'){S.lb=+v;lightbox();}
  else if(a==='lbstep'){S.lb+=+v;lightbox();}
  else if(a==='lbclose'){if(e.target===el||el.classList.contains('lbx')||el.classList.contains('phbig')){S.lb=null;lightbox();}}
  else if(a==='locate')locate();
  else if(a==='lang')setLang(v);
  else if(a==='clear'){S.q='';qEl.value='';$('res').innerHTML='';el.hidden=true;}
  else if(a==='step'){const n=LINE[S.i+(+v)];if(n)openPop(n.id);}
  else if(a==='go')openPop(LINE[+v].id);
  else if(a==='mode'){S.mode=v;rerender();}
  else if(a==='refresh'){S.clock=Date.now();rerender();toast(t.refreshed);}
  else if(a==='report'){if(Date.now()-SO.me.lastRep(p.id)<30*M){toast(t.qWait);return;}SO.me.reported(p.id);
    SO.addQueue(p.id,+v).then(()=>{toast(t.qThanks);if(!SO.live)return;setTimeout(()=>loadQueue(p.id),1500);},()=>toast(t.cerr.fail));rerender();}
  else if(a==='cmt')openComments(v==='write');
  else if(a==='csort'){S.cm.sort=v;S.cm.fresh=null;renderCmt();}
  else if(a==='csend')sendCmt();
  else if(a==='allshops'){S.all=!S.all;renderChips();if(S.all&&MAP&&MAP.zoom()<17.5)MAP.view(S.me,17.5,0);ALL.idle();ALL.draw();ALL.status();}
  else if(a==='allkind'){S.allK=S.allK.includes(v)?S.allK.filter(x=>x!==v):[...S.allK,v];renderChips();ALL.idle();ALL.draw();}
  else if(a==='kopen'){const d=ALL.get(el.dataset.id);if(d){S.q='';qEl.value='';$('res').innerHTML='';openKp(d.id);}}
  else if(a==='cfx')setFile(null);
  else if(a==='favs'){S.sheet='fav';renderSheet();}
  else if(a==='favdrop'){FAV.drop(el.dataset.id);renderSheet();renderChips();}
  else if(a==='favopen'){S.sheet=null;renderSheet();openFav(el.dataset.id);}
  else if(a==='rtfrom'){S.rtFrom=v;renderSheet();}
  else if(a==='rtgo')planRoute();
  else if(a==='rtexit'){S.route=null;drawRoute();renderNear();}
  else if(a==='ctr'){const id=+v;S.ctr=S.ctr||{};if(S.ctr[id]){delete S.ctr[id];renderCmt();return;}const c=S.cm&&S.cm.list.find(x=>x.id===id);if(!c)return;el.textContent='…';KTR.mt(c.body,lang).then(x=>{if(x)S.ctr[id]=x+' · '+t.mtTag;else toast(t.cerr.fail);renderCmt();});}
  else if(a==='cimg'){$('lbHost').innerHTML=`<div class="lb" data-act="lbclose"><img src="${esc(v)}" alt=""><div class="lbcap">${t.pk.u}</div><button class="lbx" data-act="lbclose" aria-label="${t.close}">×</button></div>`;}
  else if(a==='clike'){const id=+v,c=S.cm&&S.cm.list.find(x=>x.id===id);if(!c)return;const on=!SO.me.liked(id);SO.me.setLiked(id,on);c.likes=Math.max(0,(c.likes||0)+(on?1:-1));renderCmt();SO.like(id,on).catch(()=>{});}
  else if(a==='crep'){const id=+v;SO.me.hide(id);SO.report(id).catch(()=>{});renderCmt();toast(t.reportedC);}
  else if(a==='phrase'){const x=t.phr[+v];$('lbHost').innerHTML=`<div class="lb phbig" data-act="lbclose"><b lang="ko">${esc(x[1])}</b><span>${esc(x[0])}</span><button class="lbx" data-act="lbclose" aria-label="${t.close}">×</button></div>`;}
  else if(a==='share'){const txt=shareText(p);if(navigator.share){navigator.share({title:tx(p.t),text:txt}).catch(()=>{});}else (navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast(t.shared),()=>toast(t.copyfail));}
  else if(a==='perks'){const x=$('perks');if(x)x.scrollIntoView({behavior:'smooth'});}
  else if(a==='copy'){(navigator.clipboard?navigator.clipboard.writeText(v):Promise.reject()).then(()=>toast(t.copied),()=>toast(t.copyfail));}
  else if(a==='fav'){const on=FAV.toggle(p);rerender();renderChips();toast(on?t.fav:t.unfav);}
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
  else if(a==='close'){if(e.target===el||el.classList.contains('x')||el.dataset.x){S.sheet=null;S.cm=null;renderSheet();}}
  else if(a==='plan'){S.sel=+v;renderSheet();}
  else if(a==='buy'){S.member=true;S.sheet=null;renderSheet();renderChips();toast(t.bought);}
});
document.addEventListener('change',e=>{if(e.target&&e.target.id==='cFile'){const f=e.target.files&&e.target.files[0];if(!f)return;if(!/^image\//.test(f.type)||f.size>25e6){toast(t.photoBig);e.target.value='';return;}setFile(f);}});
document.addEventListener('keydown',e=>{if(e.target&&e.target.id==='cBody'&&e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();sendCmt();return;}if(S.lb==null)return;const n=gallery(P()).length;if(e.key==='Escape'){S.lb=null;lightbox();}else if(e.key==='ArrowRight'&&S.lb<n-1){S.lb++;lightbox();}else if(e.key==='ArrowLeft'&&S.lb>0){S.lb--;lightbox();}});
window.addEventListener('hashchange',()=>{const id=location.hash.slice(1);if(LINE.some(x=>x.id===id))openPop(id);});
setInterval(()=>{if(S.sheet==='cmt')renderCmt();document.querySelectorAll('[data-end]').forEach(el=>{el.textContent=left(+el.dataset.end);});},30000);
applyStatic();renderChips();renderNear();startMap();
const h0=location.hash.slice(1); if(LINE.some(x=>x.id===h0))openPop(h0);
})();
