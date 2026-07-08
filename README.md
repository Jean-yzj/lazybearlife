# Lazy Bear Life

創作者個人網站 — 作品集、付費諮詢預約（約我聊聊）、品牌導流、筆記預告。
Next.js 伺服器模式，含內容後台（`/admin`）：改文案、上傳頭像、管理連結都不用動 code。

設計文件：`~/.gstack/projects/unknown/jean-lazybearlife-design-20260708.md`（已核准，含定位修訂）
後台架構：`docs/ADMIN.md`（先讀這份再動後台相關的 code）

## 技術棧

- Next.js 15（App Router，伺服器模式）
- React 19 + TypeScript
- Tailwind CSS 4（`@theme` 在 `app/globals.css`；按鈕系統 `.btn-fill`/`.btn-line` 咖啡線框＋下沉）
- 儲存：PostgreSQL（設 `DATABASE_URL` 時）或本地檔案 `data/`（開發用，自動切換）
- lucide-react（圖示）

## 本地開發

```bash
npm install
cp .env.example .env    # 填 ADMIN_PASSWORD（至少 8 碼）
npm run dev             # http://localhost:3000
# 後台：http://localhost:3000/admin
npm run build && npm start   # 正式模式
```

## 內容維護

日常改內容：登入 `/admin` 直接編輯（存在 data/ 或資料庫）。
「預設值」（後台沒改過時顯示的內容）在 code 裡：

- `lib/site.ts` — 首頁全部預設內容與連結
- `legal.config.ts` + `legal/*.md` — 服務條款與隱私權政策（後台不管法務頁，改這裡）

## 上線前必填

連結類（Cal.com 預約、App Store、蝦皮、Podcast、Email、筆記通知表單）上線前
到 `/admin` 的「連結」區塊填，或改 `lib/site.ts` 預設值。留空的連結，對應卡片／按鈕
會自動隱藏或退化成不可點。

`legal.config.ts` 的 `contactEmail` 要與後台「連結」裡的信箱一致。

環境變數（`.env.example` 有範本）：`ADMIN_PASSWORD`、`AUTH_SECRET`、`DATABASE_URL`（上線）。

轉帳收款資訊（銀行代碼＋帳號）不放在這個 repo，於 Cal.com 後台的確認頁與確認信中維護。

## Cal.com「預約需確認」功能實測

設計文件標注：Cal.com 免費方案的 requires-confirmation 是否可用有來源矛盾，建站後開帳號實測。
備案序列：(1) 免費自動確認 ＋「24 小時未轉帳自動釋出」政策 (2) SimplyBook.me 免費版 (3) 付費方案。

## 部署（Zeabur，伺服器模式）

Node 服務（`next build && next start`）＋ PostgreSQL 一顆。完整步驟與 Day 0 備份要求見 `docs/ADMIN.md`。
先確認 Zeabur 服務是 git-connected 還是直傳，別搞混蓋掉線上版。

網域 lazybearlife.com 綁定後，`app/layout.tsx` 與 `public/robots.txt`、`app/sitemap.ts` 已內建正確的 canonical / OG / sitemap。

## 說明

`/terms/` 與 `/privacy/` 兩頁已設 `noindex`（robots meta），僅供合規揭露，不進搜尋引擎。
