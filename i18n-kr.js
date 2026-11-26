/* Translating Kakao data (Korean only) for 中文 / English visitors.
   - Category words: fixed dictionary below (no network).
   - Place names and comments: free MyMemory machine translation in the visitor's browser, cached on the device;
     falls back to Korean (+ romanization in English) if it is unavailable. */
(function(){
'use strict';
const D={ // Korean category word → [中文, English]
'음식점':['餐厅','Restaurant'],'한식':['韩餐','Korean'],'중식':['中餐','Chinese'],'일식':['日料','Japanese'],'양식':['西餐','Western'],'분식':['韩式小吃','Korean snacks'],
'카페':['咖啡','Café'],'커피전문점':['咖啡店','Coffee shop'],'제과,베이커리':['面包烘焙','Bakery'],'베이커리':['面包烘焙','Bakery'],'디저트카페':['甜品店','Dessert café'],'테마카페':['主题咖啡','Theme café'],
'북카페':['书咖','Book café'],'갤러리카페':['画廊咖啡','Gallery café'],'애견카페':['宠物咖啡','Dog café'],'스터디카페':['自习咖啡','Study café'],'전통찻집':['传统茶馆','Traditional tea house'],'차':['茶','Tea'],
'생과일전문점':['鲜果饮品','Fresh fruit drinks'],'아이스크림':['冰淇淋','Ice cream'],'떡,한과':['年糕·韩果','Rice cakes'],'도넛':['甜甜圈','Donuts'],'와플':['华夫饼','Waffles'],'빙수':['刨冰','Bingsu'],'초콜릿':['巧克力','Chocolate'],
'술집':['酒馆','Bar'],'호프,요리주점':['啤酒屋','Pub'],'와인바':['葡萄酒吧','Wine bar'],'칵테일바':['鸡尾酒吧','Cocktail bar'],'일본식주점':['居酒屋','Izakaya'],'이자카야':['居酒屋','Izakaya'],'실내포장마차':['室内大排档','Pojangmacha'],'바(BAR)':['酒吧','Bar'],
'육류,고기':['肉类','Meat'],'고기,구이':['烤肉','BBQ'],'삼겹살':['五花肉','Pork belly'],'갈비':['排骨','Galbi'],'곱창,막창':['烤肠','Gopchang'],'족발,보쌈':['猪蹄·菜包肉','Jokbal & bossam'],'닭요리':['鸡肉料理','Chicken dishes'],'오리':['鸭肉','Duck'],
'국밥':['汤饭','Gukbap'],'해장국':['解酒汤','Haejangguk'],'감자탕':['土豆脊骨汤','Gamjatang'],'설렁탕':['雪浓汤','Seolleongtang'],'곰탕':['牛骨汤','Gomtang'],'찌개,전골':['炖锅','Stews'],'순대':['米肠','Sundae'],'백반,가정식':['家常饭','Home-style meals'],
'해물,생선':['海鲜','Seafood'],'회':['生鱼片','Sashimi'],'초밥,롤':['寿司','Sushi'],'돈까스,우동':['炸猪排·乌冬','Tonkatsu & udon'],'돈까스':['炸猪排','Tonkatsu'],'라멘':['拉面','Ramen'],'우동,소바':['乌冬·荞麦面','Udon & soba'],
'국수':['面条','Noodles'],'칼국수':['刀切面','Kalguksu'],'냉면':['冷面','Naengmyeon'],'만두':['饺子','Dumplings'],'떡볶이':['炒年糕','Tteokbokki'],'죽':['粥','Porridge'],'도시락':['便当','Lunch boxes'],'김밥':['紫菜包饭','Gimbap'],
'치킨':['炸鸡','Fried chicken'],'피자':['披萨','Pizza'],'햄버거':['汉堡','Burgers'],'패스트푸드':['快餐','Fast food'],'샌드위치':['三明治','Sandwiches'],'샐러드':['沙拉','Salads'],'브런치':['早午餐','Brunch'],'뷔페':['自助餐','Buffet'],
'아시아음식':['亚洲菜','Asian'],'베트남음식':['越南菜','Vietnamese'],'태국음식':['泰国菜','Thai'],'인도음식':['印度菜','Indian'],'중동음식':['中东菜','Middle Eastern'],'멕시칸,브라질':['墨西哥菜','Mexican'],'이탈리안':['意大利菜','Italian'],
'프랑스음식':['法国菜','French'],'스페인음식':['西班牙菜','Spanish'],'퓨전요리':['融合菜','Fusion'],'퓨전한식':['创意韩餐','Modern Korean'],'스테이크,립':['牛排','Steak'],'중국요리':['中国菜','Chinese'],'마라탕':['麻辣烫','Malatang'],'양꼬치':['羊肉串','Lamb skewers'],
'가정,생활':['生活','Home & living'],'패션':['时尚','Fashion'],'의류판매':['服装店','Clothing'],'여성의류':['女装','Womenswear'],'남성의류':['男装','Menswear'],'캐주얼의류':['休闲服','Casual wear'],'스포츠의류':['运动服','Sportswear'],
'신발':['鞋','Shoes'],'가방':['包','Bags'],'잡화':['杂货','Accessories'],'액세서리':['饰品','Accessories'],'쥬얼리':['珠宝','Jewelry'],'시계':['手表','Watches'],'안경':['眼镜','Eyewear'],'모자':['帽子','Hats'],
'화장품':['化妆品','Cosmetics'],'향수':['香水','Perfume'],'뷰티':['美妆','Beauty'],'생활용품':['生活用品','Household goods'],'소품':['小物','Gifts & goods'],'문구,팬시':['文具','Stationery'],'인테리어':['家居','Interior'],'가구':['家具','Furniture'],
'꽃집,꽃배달':['花店','Florist'],'편집숍':['买手店','Select shop'],'편집샵':['买手店','Select shop'],'빈티지':['古着','Vintage'],'구제':['古着','Vintage'],'스포츠용품':['运动用品','Sporting goods'],'아웃도어':['户外','Outdoor'],
'서점':['书店','Bookstore'],'음반':['唱片','Records'],'완구':['玩具','Toys'],'캐릭터':['角色周边','Character goods'],'팝업스토어':['快闪店','Pop-up store'],'쇼핑,유통':['购物','Shopping'],'백화점':['百货','Department store'],
'슈퍼마켓':['超市','Supermarket'],'편의점':['便利店','Convenience store'],'문화,예술':['文化艺术','Arts & culture'],'갤러리,화랑':['画廊','Gallery'],'전시관':['展览馆','Exhibition hall'],'미용':['美容','Beauty services'],
'미용실':['美发','Hair salon'],'네일숍':['美甲','Nail salon'],'피부관리':['皮肤管理','Skin care'],'사진,스튜디오':['照相馆','Photo studio'],'셀프사진관':['自拍照相馆','Self photo booth'],'반려동물':['宠物','Pets'],'애완용품':['宠物用品','Pet supplies'],
'스타벅스':['星巴克','Starbucks'],'올리브영':['Olive Young','Olive Young'],'무신사':['MUSINSA','MUSINSA']};
const L=k=>({zh:0,en:1})[k];
function cat(ko,lang){if(lang==='ko'||!ko)return ko;const i=L(lang);return String(ko).split('>').map(x=>x.trim()).map(x=>D[x]?D[x][i]:x).join(' > ');}

/* Revised Romanization (simplified, no sound changes) */
const I=['g','kk','n','d','tt','r','m','b','pp','s','ss','','j','jj','ch','k','t','p','h'],
  V=['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo','u','wo','we','wi','yu','eu','ui','i'],
  F=['','k','k','k','n','n','n','t','l','k','m','l','l','l','p','l','m','p','p','t','t','ng','t','t','k','t','p','t'];
function roman(s){let out='',prev=false;for(const ch of String(s)){const c=ch.codePointAt(0)-0xAC00;
  if(c>=0&&c<11172){const a=Math.floor(c/588),b=Math.floor(c%588/28),f=c%28;let r=I[a]+V[b]+F[f];out+=(prev?'':(out&&!/\s$/.test(out)?'':''))+r;prev=true;}
  else{out+=ch;prev=false;}}
  return out.replace(/(^|\s)([a-z])/g,(m,a,b)=>a+b.toUpperCase());}

/* machine translation with a device cache */
const KEY='ss_mt1';let cache={};try{cache=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){}
const save=()=>{try{const ks=Object.keys(cache);if(ks.length>800)ks.slice(0,200).forEach(k=>delete cache[k]);localStorage.setItem(KEY,JSON.stringify(cache));}catch(e){}};
const src=s=>/[가-힣]/.test(s)?'ko':/[一-鿿]/.test(s)?'zh-CN':/[぀-ヿ]/.test(s)?'ja':'en';
const TL={zh:'zh-CN',en:'en',ko:'ko'};
const busy={};
function mt(text,lang){text=String(text||'').trim();const to=TL[lang],from=src(text);if(!text||!to||from===to)return Promise.resolve(null);
  const k=from+'|'+to+'|'+text;if(cache[k])return Promise.resolve(cache[k]);if(busy[k])return busy[k];
  return busy[k]=fetch('https://api.mymemory.translated.net/get?q='+encodeURIComponent(text.slice(0,450))+'&langpair='+from+'|'+to)
    .then(r=>r.json()).then(j=>{const x=j&&j.responseStatus==200&&j.responseData&&j.responseData.translatedText;
      if(!x||/MYMEMORY WARNING|QUERY LENGTH/i.test(x))return null;const y=x.replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&');cache[k]=y;save();return y;})
    .catch(()=>null).finally(()=>{delete busy[k];});}
window.KTR={cat,roman,mt,src};
})();
