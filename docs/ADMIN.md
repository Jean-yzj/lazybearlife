# 內容後台架構（輕量後台 v1）

2026-07-08 建立。這份文件是後台的規劃與架構說明，接手的人先讀這份。

## 這是什麼

讓 Jean 不用動 code 就能改網站：登入 `/admin` 後可以——

- 上傳／更換頭像（首頁立即生效）
- 編輯每個區塊的所有文字（首屏、作品卡、諮詢方案與價格、品牌、關於我、筆記預告）
- 管理所有對外連結（Cal.com 預約、App Store、蝦皮、Email⋯⋯改後台就好，不用改 code）
- 清單類內容（作品、方案、推薦語）可新增、刪除項目

**分階段原則**：這一版只做「內容編輯」。上架賣課程／筆記（商品、金流、訂單）是第二階段，
啟動條件：筆記假門測試有真實留信名單、或諮詢有穩定預約，才值得做。

## 架構（刻意輕量）

```
瀏覽者 → 首頁（伺服器渲染，預設值 ＋ 後台覆寫深合併）
Jean   → /admin（密碼登入，JWT httpOnly cookie）
            └─ PUT /api/admin/section   改區塊 JSON
            └─ POST /api/admin/avatar   上傳頭像（≤2MB）
儲存層（lib/store.ts，單一介面雙後端）：
  - 沒設 DATABASE_URL → 檔案模式：data/content.json（本地開發）
  - 有設 DATABASE_URL → PostgreSQL：section／asset 兩張表（正式環境）
```

關鍵設計：

- **預設值活在 code**（lib/site.ts）。後台存的是「覆寫」，deep-merge 蓋上去。
  好處：資料庫空的時候網站照常長；code 日後加新欄位不會被舊資料蓋掉；store 掛了自動退回預設值。
- **表單是遞迴生成的**（components/admin/SectionEditor.tsx）：照 JSON 結構長出欄位，
  以後在 lib/site.ts 加新欄位，後台不用改就能編輯。
- **不用 ORM**：兩張 KV 表用 `pg` 直接寫，first-query 時自動 CREATE TABLE IF NOT EXISTS。

## 環境變數（.env.example 有範本）

| 變數 | 必要性 | 說明 |
|---|---|---|
| `ADMIN_PASSWORD` | 後台必填 | ≥8 碼。沒設＝後台整個關閉，網站照常服務 |
| `AUTH_SECRET` | 建議 | ≥32 字元；沒設則每次重啟要重新登入 |
| `DATABASE_URL` | 上線必填 | PostgreSQL；本地不設就用 data/ 檔案模式 |

## 資安

- 密碼比對用 timingSafeEqual；登入端點同 IP 15 分鐘錯 5 次即鎖
- Session 為 HS256 JWT httpOnly cookie，7 天效期，production 帶 secure
- 區塊 key 白名單（EDITABLE_SECTIONS），不接受任意 key；payload 上限 200KB
- 頭像限 JPG/PNG/WebP、2MB；/admin 與 /api 已在 robots.txt 排除且 noindex
- 密碼只放環境變數，不進 repo、不進資料庫

## 部署（Zeabur）到時候照這個做

1. Zeabur 開 PostgreSQL，把 `DATABASE_URL` 塞給 app 服務
2. 設 `ADMIN_PASSWORD`（`openssl rand -base64 18`）與 `AUTH_SECRET`（`openssl rand -base64 24`）
3. **Day 0 備份**：把這顆 DB 加進既有的備份清單（~/dev-backups 的 launchd 系統，etc/services.tsv），
   並演練一次還原——這是標準 01 第 5 節的硬要求，12 顆零備份 PG 的教訓
4. 部署後驗收：/admin 登入 → 改一個字 → 首頁反映 → 上傳頭像 → 首頁反映

## 已驗證（2026-07-08 本地檔案模式）

12 項端對端測試全過：未登入 401／錯密碼 401／登入發 cookie／改 hero 標題成功且
首頁反映、未改欄位維持預設（深合併正確）／頭像上傳→公開端點 200→首頁 img 指向新圖／
data/ 正確落檔／>2MB 檔案 413／非白名單 key 400／未登入訪問 /admin 轉登入頁。
後台 UI 實際登入操作過（登入頁、儀表板、首屏編輯表單）。

## 第二階段（還沒做，先寫下來）

商品上架（課程／筆記）：product 表、商品卡區塊、購買流程（轉帳 or 金流）、訂單記錄。
做之前先回答：筆記留信名單有多少人？諮詢每月幾筆？沒有數字就先不做。
