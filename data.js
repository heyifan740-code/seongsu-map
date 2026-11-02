/* ===== 快闪数据（2026-11-01 从 Popply 查询整理）=====
   以后更新只改这里：每家一项。
   ll   = [纬度, 经度]：快闪取自 Popply 活动页，餐厅取自 DiningCode（2026-11-02 核对）。
   end  = 最后一天的闭店时间（韩国时间）
   type = 主页圆圈里显示的福利类型：gift 赠品 / deal 折扣 / exp 体验 / info 暂无福利信息
   entry= walkin 现场排队 / naver 네이버 사전예약 / ticket 需购票 */
const DATA_DATE='2026-11-02';
const POPS=[
 {id:'snoopy',name:'탐정 스누피의 잃어버린 단서 in 유니세프 정원',zh:'侦探史努比 · 首尔林联合国儿童基金会花园',brand:'史努比',cat:'联名',addr:'서울 성동구 뚝섬로 273 (서울숲)',ll:[37.5430697,127.0417999],est:false,
  start:'09.10',endTxt:'11.16',end:'2026-11-16T19:00:00+09:00',hours:'每天 12:00–19:00',entry:'walkin',entryNote:'页面标有"사전예약"，细节未公布',
  type:'gift',g:'环保袋',perks:[['和侦探史努比一起破案，送环保袋、贴纸包等（限量，先到先得）','赠品'],['可顺便参观首尔国际庭园博览会展区','体验']],src:'https://popply.co.kr/popup/5962'},
 {id:'coach',name:'COACH 팝업 : LIVE YOUR STORY',zh:'COACH 快闪 · LIVE YOUR STORY',brand:'COACH',cat:'服装',addr:'서울 성동구 서울숲2길 43',ll:[37.5465048,127.043467],est:false,
  start:'10.19',endTxt:'11.07',end:'2026-11-07T20:00:00+09:00',hours:'周一–周四 11:00–19:00 · 周五–周日 11:00–20:00',entry:'naver',entryNote:'Naver 事前预约（链接见来源页）',
  type:'exp',g:'限定包',perks:[['5 款全球代言人灵感特别版 Tabby 包','限定商品'],['演出门票主题挂饰系列','限定商品'],['无信社独家 Lana 23 / Reed 托特包','限定商品'],['试听亭、故事墙、明信片 DIY','体验']],src:'https://popply.co.kr/popup/6433'},
 {id:'shinramyun',name:'신라면분식 더 팩토리 팝업',zh:'辛拉面分食 · The Factory',brand:'辛拉面',cat:'其他',addr:'서울 성동구 성수일로4길 52',ll:[37.5424984,127.0543264],est:false,
  start:'06.16',endTxt:'12.16',end:'2026-12-16T18:00:00+09:00',hours:'每天 09:00–18:00',entry:'walkin',entryNote:'',
  type:'exp',g:'DIY拉面',perks:[['自选面、汤料、配料的 DIY 拉面体验','体验'],['海外拉面试吃','体验'],['工厂现炸拉面、周边与特别菜单','售卖']],src:'https://popply.co.kr/popup/5243'},
 {id:'vitalbeauty',name:'바이탈뷰티 팝업 : SUPER GLOW SAUNA',zh:'Vital Beauty · SUPER GLOW SAUNA',brand:'Vital Beauty',cat:'美妆',addr:'서울 성동구 연무장길 31-1 103호',ll:[37.5432681,127.0529768],est:false,
  start:'10.28',endTxt:'11.03',end:'2026-11-03T19:00:00+09:00',hours:'周三 14:00–19:00 · 其他日 10:00–19:00',entry:'walkin',entryNote:'',
  type:'gift',g:'限定周边',perks:[['"不容错过的特别周边"（官方未写具体内容）','周边'],['新品超级视黄醇系列试用','体验']],src:'https://popply.co.kr/popup/6442'},
 {id:'sie',name:'시에 X 에세이즈 팝업',zh:'SIE × ESSAIS 快闪',brand:'SIE×ESSAIS',cat:'服装',addr:'서울 성동구 연무장길 35 (스테이지 35)',ll:[37.543115,127.0534919],est:false,
  start:'10.27',endTxt:'11.10',end:'2026-11-10T20:00:00+09:00',hours:'每天 12:00–20:00',entry:'walkin',entryNote:'',
  type:'gift',g:'抽礼物',perks:[['加 KakaoTalk 好友后在拍照亭拍照，拍到"幸运相框"可任选店内一件商品','赠品'],['购买有优惠（官方未写具体内容）','折扣']],src:'https://popply.co.kr/popup/6409'},
 {id:'offbeauty',name:'오푸리스 X 오프뷰티 팝업',zh:'OPURIS × OFF BEAUTY',brand:'OPURIS',cat:'美妆',addr:'서울 성동구 연무장3길 9 (오프뷰티 성수메가팩토리점)',ll:[37.5446694,127.051352],est:false,
  start:'10.23',endTxt:'11.07',end:'2026-11-07T22:00:00+09:00',hours:'每天 10:00–22:00',entry:'walkin',entryNote:'',
  type:'deal',g:'专属优惠',perks:[['"只有 OFF BEAUTY 圣水店才有的特别优惠"（官方未写具体内容）','折扣']],src:'https://popply.co.kr/popup/6416'},
 {id:'champion',name:'Champion 팝업',zh:'Champion 快闪',brand:'Champion',cat:'运动',addr:'서울 성동구 성수이로 62 (무신사 메가스토어 성수)',ll:[37.5403145,127.0558768],est:false,
  start:'10.26',endTxt:'11.08',end:'2026-11-08T22:00:00+09:00',hours:'每天 11:00–22:00',entry:'walkin',entryNote:'',
  type:'deal',g:'最低2折',perks:[['第一周：经典款档案特卖，最高 8 折扣（约 2 折价）','折扣'],['第二周：FW 新款外套和联名系列','新品']],src:'https://popply.co.kr/popup/6457'},
 {id:'deadflt',name:'DEADFLT 성수 팝업',zh:'DEADFLT 圣水快闪',brand:'DEADFLT',cat:'服装',addr:'서울 성동구 성수이로 58, 착한구두 성수 스페이스 B1',ll:[37.5401239,127.0556244],est:false,
  start:'10.08',endTxt:'11.08',end:'2026-11-08T19:00:00+09:00',hours:'每天 11:00–19:00',entry:'walkin',entryNote:'从착한구두店内楼梯下到 B1，在无信社旁边',
  type:'deal',g:'半价',perks:[['圣水快闪店独有半价（50% OFF）','折扣'],['卫衣、拉链卫衣、T 恤、帽子、袜子','售卖']],src:'https://popply.co.kr/popup/6303',src2:'小红书 @Popvia「11月首尔圣水快闪攻略」'},
 {id:'flareup',name:'플레어업 팝업 : IN A DAZE',zh:'FLAREUP · IN A DAZE',brand:'FLAREUP',cat:'服装',addr:'서울 성동구 성수이로 74 (대림창고)',ll:[37.541595,127.0564109],est:false,
  start:'10.16',endTxt:'11.05',end:'2026-11-05T22:00:00+09:00',hours:'每天 11:00–22:00',entry:'walkin',entryNote:'',
  type:'deal',g:'额外9折',perks:[['无信社线上折扣价再减 10%','折扣'],['瑕疵品统一价特卖 9,900–79,000 韩元（不退不换）','折扣']],src:'https://popply.co.kr/popup/6371'},
 {id:'torriden',name:'토리든 커넥트 성수 : CONNECT DEEP DIVE',zh:'Torriden CONNECT DEEP DIVE',brand:'Torriden',cat:'美妆',addr:'서울 성동구 성수이로7가길 17',ll:[37.5418318,127.0553011],est:false,
  start:'07.15',endTxt:'12.31',end:'2026-12-31T20:00:00+09:00',hours:'每天 11:00–20:00',entry:'walkin',entryNote:'',
  type:'exp',g:'皮肤检测',perks:[['沉浸式拍照装置（CORTIS 主题照片墙）','体验'],['互动游戏、肌肤状态检测','体验'],['了解成分理念的 K-Beauty 空间','体验']],src:'https://popply.co.kr/popup/5790',src2:'小红书 @Popvia「11月首尔圣水快闪攻略」'},
 {id:'romand',name:'롬앤 팝업 : 10주년 생일파티',zh:'rom&nd 10 周年生日派对',brand:'rom&nd',cat:'美妆',addr:'서울 성동구 연무장길 88 (롬앤 핑크오피스)',ll:[37.5412902,127.0588878],est:false,
  start:'10.10',endTxt:'11.10',end:'2026-11-10T22:00:00+09:00',hours:'每天 11:00–21:00',entry:'walkin',entryNote:'营业时间按小红书笔记写的 11:00–21:00；Popply 写 10:00–22:00，以现场为准',
  type:'exp',g:'蛋糕拍照',perks:[['粉色生日派对主题：蛋糕主题拍照区','体验'],['互动游戏和 DIY 体验','体验'],['回顾品牌十年彩妆风格，现场试唇釉、腮红','体验']],src:'https://popply.co.kr/popup/6252',src2:'小红书 @Popvia「11月首尔圣水快闪攻略」'},
 {id:'riot',name:'라이엇게임즈 뮤직 & 월즈26 팝업',zh:'Riot Games 音乐 & 全球总决赛 2026',brand:'Riot Games',cat:'联名',addr:'서울 성동구 연무장7길 13 (트렌드팟 바이 올리브영 N성수)',ll:[37.544177,127.0544868],est:false,
  start:'10.29',endTxt:'11.08',end:'2026-11-08T20:00:00+09:00',hours:'每天 11:00–20:00',entry:'walkin',entryNote:'官方说明：不接受预约，现场排队入场',
  type:'gift',g:'限定奖励',perks:[['只在这个快闪提供的特别奖励（官方未写具体内容）','赠品']],src:'https://popply.co.kr/popup/6454'},
 {id:'shinchan',name:'짱구는 못말려 전시 : 시공간 대모험',zh:'蜡笔小新展 · 时空大冒险',brand:'蜡笔小新',cat:'联名',addr:'서울 성동구 연무장5길 9-29',ll:[37.5444463,127.0520483],est:false,
  start:'10.17',endTxt:'2027.01.24',end:'2027-01-24T20:00:00+09:00',hours:'每天 11:00–20:00（19:00 停止入场）',entry:'ticket',entryNote:'收费展览，通过 bemill 或官方 linktree 购票预约；韩国首场蜡笔小新互动沉浸展',
  type:'exp',g:'AR闯关',perks:[['巨型小新打卡立牌、剧场版名场景展区','体验'],['拯救双叶镇 AR 扫码任务、小新同款姿势体感互动','体验'],['可以跑动参与解谜闯关，不只是看展','体验']],src:'https://popply.co.kr/popup/5949',src2:'小红书 @FELIX果味实验室'},
 {id:'kpopgoods',name:'Kpop 굿즈스토어 (맵달)',zh:'K-pop 周边店（mapdal）',brand:'mapdal',cat:'K-pop',addr:'서울 성동구 성수이로16길 5 4층',ll:[37.541288,127.0572471],est:false,
  start:'06.01',endTxt:'2027.12.31',end:'2027-12-31T18:00:00+09:00',hours:'每天 09:00–18:00',entry:'walkin',entryNote:'',
  type:'exp',g:'K-pop周边',perks:[['圣水唯一的 K-pop 周边店（自称）','售卖'],['1 楼可寄存物品（21:00 前取回）','便利']],src:'https://popply.co.kr/popup/5377'}
 /* ===== 餐厅与甜品（2026-11-01 整理；预约方式：已查到的照写，查不到线上排队的标为现场排队）===== */
 ,{id:'minari',name:'능동미나리 성수점',zh:'能动水芹 圣水店',brand:'能动水芹',cat:'餐厅',addr:'서울 성동구 연무장길 42 (1, 2층)',ll:[37.5427551,127.0539622],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T23:00:00+09:00',hours:'每天 11:00–23:00',entry:'walkin',entryNote:'未查到线上排队，现场排队；TikTok 爆红后排队较长',
  type:'food',g:'水芹汤',perks:[['水芹牛骨汤 15,000 韩元','招牌'],['水芹生拌 9,000 韩元','菜单'],['水芹白切肉火锅 48,000–85,000 韩元','菜单']],src:'https://hotplacehunter.co.kr/msn/article/89312/'}
 ,{id:'gamjatang',name:'소문난성수감자탕',zh:'小闻圣水土豆排骨汤',brand:'土豆排骨汤',cat:'餐厅',addr:'서울 성동구 연무장길 45 1층',ll:[37.542837,127.054387],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T23:59:00+09:00',hours:'24 小时营业',entry:'walkin',entryNote:'没有排队系统，直接到门口排队（用户评价）；外国客人很多',
  type:'food',g:'土豆汤',perks:[['土豆排骨汤（小）32,000 韩元，可加面片','招牌'],['单人土豆汤饭 12,000 韩元','菜单'],['可外带（1 人份 15,000 韩元）','便利']],src:'https://hotplacehunter.co.kr/sns/article/86310/'}
 ,{id:'jayeondo',name:'자연도소금빵in성수',zh:'自然岛盐面包 圣水',brand:'自然岛盐面包',cat:'甜品',addr:'서울 성동구 연무장길 56-1 1층',ll:[37.542326,127.0555087],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T22:00:00+09:00',hours:'每天 09:00–22:00',entry:'walkin',entryNote:'每天分 6 次出炉，经常售罄，出炉前排队',
  type:'sweet',g:'盐面包',perks:[['盐面包 4 个一盒 12,000 韩元（只卖这一款）','招牌'],['每天 6 次出炉，常售罄','提示']],src:'https://hotplacehunter.co.kr/msn/article/89312/'}
 ,{id:'betong',name:'베통 성수 플래그십',zh:'Betong 圣水旗舰店',brand:'Betong',cat:'甜品',addr:'서울 성동구 연무장7가길 8',ll:[37.5429356,127.0552214],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T18:30:00+09:00',hours:'每天 11:00–18:30',entry:'walkin',entryNote:'排队较长，未查到线上排队',
  type:'sweet',g:'松露盐包',perks:[['松露风味盐面包 3,900 韩元','招牌'],['咸巧克力盐面包 4,500 韩元','菜单']],src:'https://hotplacehunter.co.kr/msn/article/89312/'}
 ,{id:'onion',name:'어니언 성수',zh:'Onion 圣水',brand:'Onion',cat:'甜品',addr:'서울 성동구 아차산로9길 8',ll:[37.5446909,127.0581051],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T22:00:00+09:00',hours:'周一–周五 08:00–22:00 · 周末 10:00–22:00（最后点单 21:30）',entry:'walkin',entryNote:'旧工厂改造的面包咖啡店，现场点单',
  type:'sweet',g:'潘多洛',perks:[['潘多洛 Pandoro 6,000 韩元','招牌'],['红豆黄油面包 5,500 韩元','菜单']],src:'https://hotplacehunter.co.kr/sns/article/65671/'}
 ,{id:'5to7',name:'5to7 성수',zh:'5to7 舒芙蕾',brand:'5to7',cat:'甜品',addr:'서울 성동구 서울숲2길 44-13',ll:[37.5461191,127.0432656],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T21:30:00+09:00',hours:'每天 12:00–21:30',entry:'walkin',entryNote:'未查到线上排队',
  type:'sweet',g:'舒芙蕾',perks:[['舒芙蕾松饼（Time Out 推荐珍珠舒芙蕾）','招牌'],['无花果舒芙蕾（外国客人多）','招牌']],src:'https://www.timeout.com/seoul/restaurants/5to7'}
 ,{id:'paperplate',name:'페이퍼플레이트',zh:'Paper Plate 纽约披萨',brand:'Paper Plate',cat:'餐厅',addr:'서울 성동구 성수이로14길 15',ll:[37.5417281,127.0566909],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T21:00:00+09:00',hours:'周二–周日 11:30–21:00 · 周一休息',entry:'walkin',entryNote:'按片卖，适合逛街中途吃',
  type:'food',g:'纽约披萨',perks:[['芝士披萨 5,700 韩元 / 片','招牌'],['奶油披萨 7,800 韩元、纽约至尊 8,000 韩元 / 片','菜单']],src:'https://hotplacehunter.co.kr/sns/article/86310/'}
 ,{id:'jungidam',name:'정이담',zh:'情怡潭 时令韩餐',brand:'情怡潭',cat:'餐厅',addr:'서울 성동구 왕십리로 83-21 디타워 서울포레스트 B1',ll:[37.544357,127.0441654],est:false,
  start:'常设',endTxt:'常设',end:'2099-12-31T22:00:00+09:00',hours:'每天 11:00–22:00 · 工作日 15:30–17:00 休息',entry:'walkin',entryNote:'"排队名店"，未查到线上预约方式',
  type:'food',g:'LA排骨',perks:[['LA 排骨 35,000 韩元','招牌'],['韩牛薄切烤肉 42,000 韩元','菜单']],src:'https://hotplacehunter.co.kr/sns/article/86310/'}
 /* ===== 2026-11-02 补充的快闪（Popply）===== */
 ,{id:'bodana',name:'보다나 팝업 : 초대형 버블 @ 성수',zh:'VODANA 快闪 · 超大泡泡',brand:'VODANA',cat:'美妆',addr:'서울 성동구 아차산로 100',ll:[37.5445024,127.0560905],est:false,
  start:'10.29',endTxt:'11.06',end:'2026-11-06T17:30:00+09:00',hours:'每天 11:30–17:30',entry:'walkin',entryNote:'',
  type:'gift',g:'抽卷发器',perks:[['抽奖送 Easy Up 造型器和免洗泡泡护发','抽奖']],src:'https://popply.co.kr/popup/6517'}
 ,{id:'freeber',name:'프리버07 팝업',zh:'FREEBER07 快闪',brand:'FREEBER07',cat:'服装',addr:'서울 성동구 성수이로 62 (무신사 메가스토어 성수)',ll:[37.5403145,127.0558768],est:false,
  start:'10.26',endTxt:'11.08',end:'2026-11-08T22:00:00+09:00',hours:'每天 11:00–22:00',entry:'walkin',entryNote:'在无信社 Mega Store 圣水店内',
  type:'gift',g:'满赠T恤',perks:[['满 15 万韩元送法式条纹 T 恤（先到先得）','赠品'],['满 20 万韩元送图案插肩 T 恤（先到先得）','赠品'],['圣水店独家再减 10%，档案款最高 65% 折扣','折扣']],src:'https://popply.co.kr/popup/6456'}
 ,{id:'buttershop',name:'버터샵 팝업 (이구홈 성수 1호점)',zh:'BUTTER SHOP 圣诞快闪',brand:'BUTTER SHOP',cat:'联名',addr:'서울 성동구 연무장길 57 (이구홈 성수 1호점)',ll:[37.5423855,127.055807],est:false,
  start:'10.30',endTxt:'11.26',end:'2026-11-26T22:00:00+09:00',hours:'每天 11:00–22:00',entry:'walkin',entryNote:'免费入场',
  type:'gift',g:'送钥匙扣',perks:[['购买 BUTTER SHOP 商品送黄油钥匙扣（前 100 名）','赠品'],['圣诞单品、芝麻街、天使系列','售卖']],src:'https://popply.co.kr/popup/6480'}
 ,{id:'fixpizza',name:'픽스피자 성수 팝업스토어',zh:'FIX PIZZA 一餐披萨快闪',brand:'FIX PIZZA',cat:'餐厅',addr:'서울 성동구 연무장길 5-9 1층, 2층',ll:[37.5442564,127.0503748],est:false,
  start:'10.22',endTxt:'11.22',end:'2026-11-22T19:00:00+09:00',hours:'周二–周日 12:00–19:00（15:00–16:00 休息）· 周一休息',entry:'walkin',entryNote:'现场排队。营业时间：Popply 写 11.3 起 12:00–19:00；小红书笔记（10.20）写 11:00–18:00、15:00–15:30 休息，以现场为准',
  type:'gift',g:'免费试吃',perks:[['关注官方账号并发快拍（带指定标签），免费试吃 4 款披萨 + 柠檬苹果醋汽水','试吃'],['披萨 1,800 韩元起','招牌'],['每消费 1 万韩元抽奖 1 次','抽奖'],['满足关注、到店认证发帖等条件可抽 Gucci、Dior 香水、唇膏、面霜、咖啡券','抽奖']],src:'https://popply.co.kr/popup/6276',src2:'小红书 @在韩向日葵 笔记（10-20）'}
 ,{id:'fra422',name:'프라포투투 팝업',zh:'FRA422 香水快闪',brand:'FRA422',cat:'美妆',addr:'서울 성동구 성수이로 77',ll:[37.5419964,127.056009],est:false,
  start:'03.06',endTxt:'11.30',end:'2026-11-30T21:30:00+09:00',hours:'每天 10:30–21:30',entry:'walkin',entryNote:'',
  type:'gift',g:'购买送袋',perks:[['购买即送环保袋','赠品'],['买 Soul 香水送 1.5ml 小样','赠品'],['全场 9 折、钥匙扣套装特价','折扣']],src:'https://popply.co.kr/popup/5791'}
 ,{id:'madeby',name:'메이드바이 X 맘마 햄스토어 팝업 @ 성수',zh:'MADEBY × 妈妈火腿店',brand:'MADEBY',cat:'联名',addr:'서울 성동구 서울숲길 38',ll:[37.5478975,127.0416827],est:false,
  start:'09.08',endTxt:'11.04',end:'2026-11-04T20:00:00+09:00',hours:'每天 12:00–20:00',entry:'walkin',entryNote:'Popply 写到 11.05，官方说明写圣水店到 11.04（周三），以 11.04 为准',
  type:'gift',g:'限定随机包',perks:[['限定随机包和"送很多礼物"的活动','赠品'],['先行发售新品和联名商品','售卖']],src:'https://popply.co.kr/popup/5984'}
 ,{id:'equa',name:'에쿠아 팝업 (EQL 성수)',zh:'EQUA 首个线下快闪',brand:'EQUA',cat:'服装',addr:'서울 성동구 연무장15길 11 (EQL 성수점)',ll:[37.54283,127.0589872],est:false,
  start:'10.21',endTxt:'11.03',end:'2026-11-03T20:00:00+09:00',hours:'每天 11:00–20:00',entry:'walkin',entryNote:'',
  type:'deal',g:'85折',perks:[['全场 85 折','折扣'],['店内实付满 10 万韩元送蕾丝丝巾（前 30 名）','赠品']],src:'https://popply.co.kr/popup/6400'}
 ,{id:'lensis',name:'렌시스 팝업',zh:'LENSIS 美瞳快闪',brand:'LENSIS',cat:'美妆',addr:'서울 성동구 연무장길 44',ll:[37.542723,127.0540819],est:false,
  start:'09.29',endTxt:'11.29',end:'2026-11-29T22:00:00+09:00',hours:'每天 10:00–22:00',entry:'walkin',entryNote:'',
  type:'deal',g:'专属优惠',perks:[['新品和人气隐形眼镜，"只有快闪店才有的专属优惠和活动"（官方未写具体内容）','折扣']],src:'https://popply.co.kr/popup/6226'}
 ,{id:'longtake',name:'롱테이크 팝업 (올리브영 뷰티 더 맨션 성수)',zh:'LONGTAKE 香氛快闪',brand:'LONGTAKE',cat:'美妆',addr:'서울 성동구 아차산로 103 (올리브영 뷰티 더 맨션 성수)',ll:[37.5450426,127.0558154],est:false,
  start:'10.01',endTxt:'12.31',end:'2026-12-31T22:00:00+09:00',hours:'每天 10:00–22:00',entry:'walkin',entryNote:'关注活动 20:00 前可参加',
  type:'gift',g:'关注活动',perks:[['快闪限定活动和特别优惠（官方未写具体内容）','赠品']],src:'https://popply.co.kr/popup/6451'}
 ,{id:'oldferry',name:'올드페리도넛 성수',zh:'Old Ferry Donut 圣水',brand:'Old Ferry',cat:'甜品',addr:'서울 성동구 성수이로16길 5 1층',ll:[37.541288,127.0572471],est:false,
  start:'06.29',endTxt:'2027.12.31',end:'2027-12-31T21:00:00+09:00',hours:'每天 11:00–21:00',entry:'walkin',entryNote:'',
  type:'sweet',g:'甜甜圈',perks:[['人气奶油甜甜圈（Popply 未列菜单和价格）','招牌']],src:'https://popply.co.kr/popup/5434'}
 ,{id:'miriweek',name:'2026 미리위크 팝업',zh:'2026 MIRIWEEK · 密室逃脱与展览',brand:'MIRIWEEK',cat:'其他',addr:'서울 성동구 성수이로18길 5',ll:[37.5429356,127.0578871],est:false,
  start:'10.24',endTxt:'11.08',end:'2026-11-08T21:00:00+09:00',hours:'周一–周五 11:50–21:00 · 周末 09:50–21:00',entry:'walkin',entryNote:'展览免费、无需预约；密室逃脱需事先预约（12 岁以上）',
  type:'exp',g:'密室逃脱',perks:[['免费策划展览','体验'],['密室逃脱游戏（需预约）','体验']],src:'https://popply.co.kr/popup/6378'}
 ,{id:'skt',name:'SK텔레콤 X 랜덤 다이버시티 전시 : Emotion Lab',zh:'SKT × Random Diversity 情绪实验室',brand:'SKT',cat:'其他',addr:'서울 성동구 연무장1길 7-1 (T 팩토리 성수)',ll:[37.5449383,127.0505364],est:false,
  start:'09.19',endTxt:'11.15',end:'2026-11-15T20:00:00+09:00',hours:'每天 11:00–20:00（19:30 停止入场）',entry:'walkin',entryNote:'1 楼香气体验免费（每天 1 次）；B1 色彩体验收费，经 T Factory 主页链接预约',
  type:'exp',g:'免费体验',perks:[['1F Scent of Emotion：戴 VR 测脑波，按情绪生成专属香气，可配手写信送人（免费，每天 1 次）','体验'],['B1 Color of Emotion：AI 分析脑波提取情绪颜色（需线上预约）','体验'],['SKT 用户 B1 体验 8 折','折扣']],src:'https://popply.co.kr/popup/6100',src2:'小红书 @FELIX果味实验室'}
 ,{id:'levi4u',name:'리바이포유 (Rbfy) 10주년 팝업',zh:'Rbfy 10 周年快闪',brand:'Rbfy',cat:'美妆',addr:'서울 성동구 연무장길 65 (LECT성수)',ll:[37.5422281,127.0568117],est:false,
  start:'10.28',endTxt:'11.12',end:'2026-11-12T19:00:00+09:00',hours:'每天 11:00–19:00',entry:'walkin',entryNote:'事前预约期已过（10.21–10.27）',
  type:'gift',g:'送安瓶',perks:[['满 1 万韩元送 45ml 补水安瓶正装','赠品'],['满 7 万韩元送 45ml 安瓶 + 60ml 补水面霜正装','赠品'],['全品最高 7 折；迷你精华钥匙扣套装 55% OFF','折扣'],['幸运游戏区 100% 中奖（优惠券 / 面霜 / 补水棉片）','抽奖'],['快闪专属镜子钥匙扣和周边','周边']],src:'https://popply.co.kr/popup/6432',src2:'小红书 @FELIX果味实验室'}
];
