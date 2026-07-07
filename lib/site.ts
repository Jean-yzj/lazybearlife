// ============================================================
//  Lazy Bear Life — 站點內容與設定中樞
//  需要調整文案、連結、價格，只改這個檔案就好。
//  標注 TODO 的是上線前要填入真實值的 placeholder。
// ============================================================

export const site = {
  brand: {
    name: "Lazy Bear Life",
    // 一句話定位（證據型顧問站）
    role: "獨立開發者 · 產品出貨教練",
    domain: "lazybearlife.com",
  },

  // 對外連結（TODO 標記處上線前填入真實值）
  links: {
    // 預約：先用 Cal.com。帳號建立後把網址換成你的真實預約連結。
    booking60: "https://cal.com/lazybearlife/60min", // TODO: 換成真實 Cal.com 60 分鐘連結
    booking30: "https://cal.com/lazybearlife/30min", // TODO: 換成真實 Cal.com 30 分鐘連結
    podcast: "", // TODO: Podcast 頻道連結（留空則該區塊隱藏連結）
    internx: "https://internx.me",
    couponshare: "https://couponshare.zeabur.app",
    perfume: "https://perfume-recommender.zeabur.app",
    knowme: "", // TODO: KnowMe App Store 連結
    stardivination: "", // TODO: 星之占卜 App Store 連結
    shopee: "", // TODO: 蝦皮選物連結（留空則工具箱不顯示蝦皮卡）
    contactEmail: "hello@lazybearlife.com", // TODO: 換成你要對外的客服信箱
  },

  hero: {
    eyebrow: "文組出身 · 靠 AI 自學 · 真的把東西做出來",
    title: "把腦中的想法，\n變成真的能用的產品",
    subtitle:
      "我是 Jean。過去兩年，我一個人做出會爆紅的網站、上架 App Store 的 App。現在，我想用同樣的方法，幫你把你的想法也做出來。",
    stats: [
      { value: "5,568", label: "單日湧入的真人註冊" },
      { value: "4", label: "個真的上線的產品" },
      { value: "2", label: "支 App 上架 App Store" },
    ],
    primaryCta: "預約 60 分鐘諮詢",
    secondaryCta: "先認識我",
  },

  // 三個自我對號入口（各自不同的承諾）
  paths: [
    {
      tag: "我有一個想法",
      title: "想把它做出來，但不知道怎麼開始",
      promise: "你會得到一套從想法到上線的具體路徑——先做什麼、砍掉什麼、怎麼最快驗證有沒有人要。",
    },
    {
      tag: "我想做作品集",
      title: "想把履歷變成看得到的成果",
      promise: "你會得到把「我會」變成「我做過」的方法——選對題目，做出一個別人點得進去、用得到的東西。",
    },
    {
      tag: "我想找人做",
      title: "有明確的需求，想直接委託",
      promise: "你會找到一個真的會出貨的人。先花一小時把需求聊清楚，諮詢費可以折抵專案訂金。",
    },
  ],

  // 作品集（依成長敘事排序：第一次上架 → 功能長成產品 → 爆紅 → 學會變現）
  work: [
    {
      name: "星之占卜",
      chapter: "第一次把 App 送上架",
      pain: "不會寫程式，卻想做一個真正屬於自己的 App。",
      approach: "從零學 Swift，用最熟悉的占卜切入，做出一支星座運勢 App，走完整個上架流程。",
      metrics: ["App Store 上架", "我的第一支 App"],
      href: "stardivination",
      accent: "violet",
    },
    {
      name: "香水羅盤",
      chapter: "一個功能，長成了獨立產品",
      pain: "想買香水，卻在幾百種味道前不知從何挑起。",
      approach: "把占卜 App 裡的香水推薦拆出來，做成問答式的選香網站，用引導取代焦慮。",
      metrics: ["195 款沙龍香水庫", "已上線"],
      href: "perfume",
      accent: "amber",
    },
    {
      name: "CouponShare",
      chapter: "一天，湧入 5,568 個真人",
      pain: "用不到的優惠券，只能眼睜睜看它過期作廢。",
      approach: "做一個把券送出去、和別人交換的平台，讓原本要浪費的價值流動起來。",
      metrics: ["單日 +5,568 註冊", "週交易基線 160", "已上線"],
      href: "couponshare",
      accent: "rose",
    },
    {
      name: "KnowMe",
      chapter: "學會讓產品自己賺錢",
      pain: "認識新朋友時，很難一次講清楚「我是誰」。",
      approach: "把 MBTI、星座整合成一張個人卡片，還能收集朋友的卡片，並用訂閱制完成變現。",
      metrics: ["App Store 上架", "訂閱制變現"],
      href: "knowme",
      accent: "sky",
    },
  ],

  consulting: {
    eyebrow: "和我聊聊",
    title: "把一個下午的卡關，換成一小時的方向感",
    intro:
      "我不會給你教科書答案。我會用真的做過產品的經驗，陪你把模糊的想法拆成下一步能動手的事。",
    plans: [
      {
        featured: true,
        duration: "60 分鐘",
        price: "NT$1,800",
        name: "完整諮詢",
        forWho: "適合想認真把一個想法往前推的人",
        includes: [
          "事前問卷：我先了解你的狀況，不浪費見面時間",
          "60 分鐘視訊深聊：把問題攤開，一起找路徑",
          "事後 48 小時內：給你一份可以照著做的行動清單",
        ],
        cta: "預約 60 分鐘",
        link: "booking60",
      },
      {
        featured: false,
        duration: "30 分鐘",
        price: "NT$1,000",
        name: "快問快答",
        forWho: "適合只有一兩個具體問題想問",
        includes: ["30 分鐘視訊", "針對單一問題給你我的判斷與建議"],
        cta: "預約 30 分鐘",
        link: "booking30",
      },
    ],
    freelance: {
      title: "想直接找我做？",
      body: "先約一次 60 分鐘諮詢把需求聊清楚，如果我們決定合作，這筆諮詢費會折抵專案訂金。諮詢是前菜，把東西做出來才是主菜。",
    },
    steps: [
      { n: "01", t: "選一個時段", d: "在預約頁挑你方便的時間" },
      { n: "02", t: "填事前問卷", d: "讓我先了解你要聊什麼" },
      { n: "03", t: "轉帳並回報末五碼", d: "確認款項，鎖定你的時段" },
      { n: "04", t: "收到日曆邀請", d: "Google 日曆與視訊連結會寄給你" },
    ],
    policy:
      "24 小時前可免費改期一次。預約後 24 小時內未完成轉帳，時段將自動釋出給其他人。",
  },

  brands: {
    eyebrow: "我也在做這些",
    items: [
      {
        name: "實習通 InternX",
        desc: "我共同創辦的平台，幫學生找到適合的實習與職涯方向。",
        href: "internx",
        cta: "看看實習通",
      },
      {
        name: "Podcast",
        desc: "我在節目裡聊獨立開發、AI 工具，還有一個文組生怎麼把想法變成產品的過程。",
        href: "podcast",
        cta: "收聽節目",
      },
    ],
  },

  toolbox: {
    eyebrow: "順手推薦",
    title: "我在用的工具",
    intro: "這些是我實際在用、也願意推薦給你的東西。部分連結為合作推廣連結，你透過它們購買不會多花錢，但我可能得到一點回饋。",
    apps: [
      { name: "Zeabur", desc: "我所有網站的部署平台，對獨立開發者很友善。" },
      { name: "Claude", desc: "我最常用的 AI 助手，寫程式、想產品都靠它。" },
      { name: "Cursor", desc: "把 AI 直接放進編輯器，出貨速度的關鍵。" },
    ],
  },

  about: {
    title: "關於我",
    paragraphs: [
      "我不是本科出身。大學讀的是人文科系，交的是報告，不是程式。",
      "但我一直有很多想做的東西。過去，那些想法只能停在腦子裡。這兩年 AI 工具成熟，我發現「不會寫程式」不再是藉口——真正重要的，是你有沒有把東西做出來、送到別人手上。",
      "於是我開始一個一個做：從第一支上架的 App，到一天湧入五千人的網站。這個頁面，就是我到目前為止的證據。如果你也有想做的東西，也許我幫得上忙。",
    ],
    // 推薦語：收集到再填入，留空則整個區塊隱藏（不放假文）
    testimonials: [] as { quote: string; name: string; title: string }[],
  },
};

export type Site = typeof site;
