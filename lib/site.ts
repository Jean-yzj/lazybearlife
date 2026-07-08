// ============================================================
//  Lazy Bear Life — 站點內容與設定中樞
//  需要調整文案、連結、價格，只改這個檔案就好。
//  標注 TODO 的是上線前要填入真實值的 placeholder。
// ============================================================

export const site = {
  brand: {
    name: "Lazy Bear Life",
    // 一句話定位（創作者頁）
    role: "獨立開發者 · 內容創作者",
    domain: "lazybearlife.com",
  },

  // 個人資料
  profile: {
    name: "Jean",
    avatar: "/avatar.jpg", // 懶惰熊頭像（來自 Linktree，檔案在 public/avatar.jpg）；後台可換
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
    shopee: "https://shpe.site/lazybear", // 蝦皮優惠/書籍推薦清單
    linktree: "https://linktr.ee/iamlazybear", // 完整推薦清單
    contactEmail: "hello@lazybearlife.com", // TODO: 換成你要對外的客服信箱
    notesWaitlist: "", // TODO: 筆記搶先通知表單連結（Tally/Google 表單）。留空則按鈕自動 fallback 成寄信給 contactEmail
  },

  hero: {
    eyebrow: "文組出身 · 靠 AI 自學 · 獨立開發者",
    title: "嗨，我是 Jean\n把想法做成真的產品",
    subtitle:
      "文組背景，這兩年靠 AI 自學，做出上架 App Store 的 App、單日湧入五千人的網站。這裡放了我做過的產品、正在寫的筆記，還有——如果你想，也可以約我聊聊。",
    stats: [
      { value: "5,568", label: "單日湧入的真人註冊" },
      { value: "4", label: "個真的上線的產品" },
      { value: "2", label: "支 App 上架 App Store" },
    ],
    primaryCta: "約我聊聊",
    secondaryCta: "看我的作品",
  },

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
    title: "如果你也在自己做東西，我們可以聊聊",
    intro:
      "不管是想開始第一個產品、卡在某個地方，還是單純想聊聊獨立開發和 AI 工具——我很樂意用我真的走過一遍的經驗，陪你想清楚下一步。這不是什麼專家顧問，就是一個做過幾個產品的人，和你分享我知道的。",
    plans: [
      {
        featured: true,
        duration: "60 分鐘",
        price: "NT$1,800",
        name: "好好聊一場",
        forWho: "適合想認真討論一個想法或方向的人",
        includes: [
          "事前問卷：我先了解你的狀況，不浪費見面時間",
          "60 分鐘視訊：把問題攤開，一起想清楚",
          "事後 48 小時內：整理一份重點與建議給你",
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
        includes: ["30 分鐘視訊", "針對單一問題，給你我的想法與經驗"],
        cta: "預約 30 分鐘",
        link: "booking30",
      },
    ],
    steps: [
      { n: "01", t: "選一個時段", d: "在預約頁挑你方便的時間" },
      { n: "02", t: "填事前問卷", d: "讓我先了解你想聊什麼" },
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

  about: {
    title: "關於我",
    paragraphs: [
      "我不是本科出身。大學讀的是人文科系，交的是報告，不是程式。",
      "但我一直有很多想做的東西。過去，那些想法只能停在腦子裡。這兩年 AI 工具成熟，我發現「不會寫程式」不再是藉口——真正重要的，是你有沒有把東西做出來、送到別人手上。",
      "於是我開始一個一個做：從第一支上架的 App，到一天湧入五千人的網站。我還在學、還在做，也還有很多不會的地方。這個頁面，是我到目前為止的紀錄。如果你也在自己做東西的路上，歡迎來聊聊。",
    ],
    // 推薦語：收集到再填入，留空則整個區塊隱藏（不放假文）
    testimonials: [] as { quote: string; name: string; title: string }[],
  },

  // 懶惰熊推薦（精選；完整清單連到 Linktree）
  recommends: {
    eyebrow: "懶惰熊推薦",
    title: "省錢、理財、學習的好東西",
    intro:
      "我平常真的在用、也常被問的東西，挑幾個放在這。部分為推薦連結，你透過它們註冊或購買不會多花錢，但我可能得到一點回饋。",
    items: [
      {
        name: "蝦皮優惠與書籍推薦清單",
        desc: "我整理的蝦皮好物與書單，持續更新。",
        url: "https://shpe.site/lazybear",
      },
      {
        name: "LINE 社群：理財、省錢、學習資訊",
        desc: "我經營的社群，每天分享省錢與自我成長的資訊。",
        url: "https://line.me/ti/g2/dlehRTu4ymXqQYcBN9k1MwceQ7g3TeCK23x2Aw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
      },
      {
        name: "LINE 社群：台灣大學生實習交流群",
        desc: "找實習、聊職涯的大學生聚集地。",
        url: "https://line.me/ti/g2/jYgS-7nytcXt_T_ejgNiN98p6dqrmowfdKxRoA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
      },
      {
        name: "Aifian：掃發票換現金",
        desc: "我最推薦的發票 App，回饋可以直接換現金。",
        url: "https://aifian.page.link/i15m",
      },
      {
        name: "ShopBack：網購賺現金回饋",
        desc: "網購前先過一手，回饋累積起來很可觀。",
        url: "https://app.shopback.com/VdpAvI4GDwb",
      },
      {
        name: "KLOOK：活動與旅遊必備",
        desc: "訂票、行程、體驗，出去玩之前先看這裡。",
        url: "https://s.klook.com/c/kvxm9w",
      },
    ],
    moreCta: "看完整推薦清單",
  },

  // 筆記（數位產品，即將推出＋留 email 假門測試）
  notes: {
    eyebrow: "即將推出",
    title: "文組生自學做網站，\n我寫成了一份筆記",
    body: "從什麼都不會，到做出四個上線的產品——中間走過的路、踩過的坑、每個決定背後的想法，我正在整理成一份給文組生的實戰筆記。不是教科書，是我真的怎麼一步一步做出來的。",
    cta: "完成時通知我",
    note: "留個 email，筆記完成時第一個通知你，也會有搶先價。",
  },
};

export type Site = typeof site;
