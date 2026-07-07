// 法務文件設定（單一事實來源）。改條款內容改這裡或 legal/*.md。
// 本站為純靜態個人網站：無帳號系統、無登入、無自建資料庫。
// 諮詢預約由第三方工具 Cal.com 承載；付款以銀行轉帳線下完成。
export const legalConfig = {
  productName: "Lazy Bear Life",
  productUrl: "https://lazybearlife.com",
  serviceDesc:
    "展示個人作品、提供一對一付費諮詢預約，以及接案合作洽詢的個人網站",
  contactEmail: "hello@lazybearlife.com", // TODO: 換成你對外的真實信箱（需與 lib/site.ts 一致）
  effectiveDate: "2026-07-08",
  version: "1.0",
  operatorName: "Lazy Bear Life（Jean）",
  hostingNote: "Zeabur 雲端平台（伺服器位於新加坡）",
  bookingTool: "Cal.com",
  minAge: 18,
  governingCourt: "臺灣臺北地方法院",
};

export type LegalConfig = typeof legalConfig;
