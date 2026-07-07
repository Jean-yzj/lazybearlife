# Lazy Bear Life

個人接案與創作者網站 — 作品集、付費諮詢預約、品牌導流。
純靜態單頁站（Next.js App Router + static export），無登入、無資料庫。

設計文件：`~/.gstack/projects/unknown/jean-lazybearlife-design-20260708.md`（已核准）

## 技術棧

- Next.js 15（App Router，`output: "export"` 靜態輸出）
- React 19 + TypeScript
- Tailwind CSS 4（`@theme` 在 `app/globals.css`）
- lucide-react（圖示）

## 本地開發

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 靜態輸出到 out/
```

## 內容維護

所有文案與對外連結集中在兩個檔案，改這兩個就好：

- `lib/site.ts` — 首頁全部內容（hero、作品、諮詢方案、品牌、工具箱、關於）
- `legal.config.ts` + `legal/*.md` — 服務條款與隱私權政策

## 上線前必填（目前是 placeholder）

`lib/site.ts` 的 `links`：

- [ ] `booking60` / `booking30` — 真實 Cal.com 預約連結（先建 Cal.com 帳號，連 Google 日曆）
- [ ] `podcast` — Podcast 頻道連結（留空則不顯示連結）
- [ ] `knowme` / `stardivination` — 兩支 App 的 App Store 連結（留空則卡片不可點）
- [ ] `shopee` — 蝦皮選物連結（留空則工具箱不顯示蝦皮卡）
- [ ] `contactEmail` — 對外客服信箱

`legal.config.ts`：

- [ ] `contactEmail` — 與 `lib/site.ts` 保持一致

轉帳收款資訊（銀行代碼＋帳號）不放在這個 repo，於 Cal.com 後台的確認頁與確認信中維護。

## Cal.com「預約需確認」功能實測

設計文件標注：Cal.com 免費方案的 requires-confirmation 是否可用有來源矛盾，建站後開帳號實測。
備案序列：(1) 免費自動確認 ＋「24 小時未轉帳自動釋出」政策 (2) SimplyBook.me 免費版 (3) 付費方案。

## 部署（Zeabur 靜態站）

`out/` 為完整靜態輸出，可直接部署到 Zeabur / Netlify / 任何靜態主機。
先確認 Zeabur 服務是 git-connected 還是直傳，別搞混蓋掉線上版。

網域 lazybearlife.com 綁定後，`app/layout.tsx` 與 `public/robots.txt`、`app/sitemap.ts` 已內建正確的 canonical / OG / sitemap。

## 說明

`/terms/` 與 `/privacy/` 兩頁已設 `noindex`（robots meta），僅供合規揭露，不進搜尋引擎。
