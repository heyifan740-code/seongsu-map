# seopup · 首尔快闪地图 · Seoul pop-up map

圣水洞快闪、餐厅烘焙和店铺的多语言地图（课堂作业原型）。网站：https://heyifan740-code.github.io/seongsu-map/

- 语言：中文 / English / 한국어（右上角切换，或在网址后加 `?lang=en`、`?lang=ko`、`?lang=zh`）
- 分类：快闪 / 美食 / 逛店三大类免费；细分类（美妆、面包烘焙、贝果、饰品杂货……）是会员功能演示
- 美食显示 DiningCode 用户评分，可按评分排序

## 怎么更新店铺

只改 `data.js`：每家店是一项，字段说明写在文件开头，文字用 `LG('中文','English','한국어')`。改完提交，1–2 分钟后网站自动更新。

## 换成 Naver 地图

1. 在 NAVER Cloud Platform 注册（需要绑定信用卡或借记卡，注册本身不收费；地图每月有免费额度）
2. 控制台 → Maps → 创建 Application，勾选 Dynamic Map，Web 服务 URL 填 `https://heyifan740-code.github.io`
3. 把 Client ID 填进 `config.js` 的 `naverKeyId`，提交即可。没填或认证失败时自动用 OpenStreetMap。

数据来源：快闪信息和坐标来自 Popply，餐厅评分和坐标来自 DiningCode，店铺坐标与营业时间参考 Kakao Map，信息以官方公告为准。地图 © OpenStreetMap 贡献者。

## Comments and live queue reports
Each pop-up has a comment sheet (Douyin-style: newest/top sort, likes, report) and a "how long is the queue" report.
- Without a backend (default) they run in demo mode: saved only in each visitor's own browser.
- To share them live with everyone: create a free Supabase project (region Seoul), run `supabase.sql` in its SQL Editor,
  then paste the Project URL and the `anon public` key into `config.js`.
- Comments with 3 reports are hidden automatically; delete any comment in Supabase → Table Editor → comments.
