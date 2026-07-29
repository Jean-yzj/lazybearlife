import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  X,
  Instagram,
  AtSign,
  Compass,
  TrendingUp,
  Share2,
  Wallet,
  LifeBuoy,
  Search,
} from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

/* ============================================================
   購買資訊 — 這兩個值要換成真的
   ============================================================ */
const BUY_URL = "{{購買連結}}";
const PRICE = "NT$ ___";

const THREADS_URL = "https://www.threads.com/@lazybearlife_";
const IG_URL = "https://www.instagram.com/lazybearlife_";

const title = "懶人也能經營 Threads — 從 0 到 2.8 萬追蹤的完整筆記";
const description =
  "不露臉、不拍片，一支手機也能經營 Threads。定位、流量、導流 IG、變現，六個章節六萬字，每個範例都是我真的發過的文。";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/threads" },
  openGraph: { title, description, url: "/threads", type: "article" },
  twitter: { title, description },
};

const problems = [
  "想開始，但每次打開輸入框都不知道要寫什麼",
  "發了一個月，愛心還是不到十個",
  "有一點追蹤了，卻完全不知道怎麼變成收入",
  "不想露臉，也沒時間拍片剪片",
  "開了帳號很有衝勁，兩週後就沉掉了",
];

const chapters = [
  {
    icon: Compass,
    n: "01",
    title: "如何定位",
    body: "你擅長什麼、你喜歡什麼、市場需要什麼、你的受眾是誰、你想要什麼語氣。全書超過一半的篇幅在這裡，因為定位沒想清楚，後面的技巧都用不上。",
  },
  {
    icon: TrendingUp,
    n: "02",
    title: "如何提升流量",
    body: "四種貼文類型分別適合什麼階段，以及四種高互動的寫法：不完美、破防型、前後對比、善用一句話。每一種都附我真的發過的文。",
  },
  {
    icon: Share2,
    n: "03",
    title: "如何轉化到 IG",
    body: "Threads 負責吸引新的人，IG 才是建立信任的地方。怎麼留懸念、怎麼設計跨平台分工、怎麼用系列貼文養出「還有下一篇」的期待。",
  },
  {
    icon: Wallet,
    n: "04",
    title: "如何變現",
    body: "五種變現模式從最容易開始的排到最難，以及為什麼要反過來從「未來想接什麼業配」去設計現在的內容。",
  },
  {
    icon: LifeBuoy,
    n: "05",
    title: "你可能遇到的問題",
    body: "找不準主題、貼文沒人看、被酸民攻擊、發文倦怠、懷疑要不要繼續。這五個我全部都遇過，也寫了各自的解法。",
  },
  {
    icon: Search,
    n: "06",
    title: "怎麼拆解別人的帳號",
    body: "最快的學習不是讀教學，是拆解真的做起來的人。附我自己在追蹤的帳號清單，以及一套可以照做的拆解方法。",
  },
];

const specs = [
  ["六萬字", "六個章節，從定位一路到變現"],
  ["17 則真實貼文", "每一則都附後台數據截圖"],
  ["每章動手練習", "闔上書就能做，不是看完就忘"],
  ["30 天行動表", "把整本書串成可以照著走的節奏"],
];

const forYou = [
  "完全還沒開始，不知道從哪裡下手",
  "已經在發文，但互動一直起不來",
  "有一點追蹤數，想知道怎麼開始變現",
  "不想露臉、不想拍片，只想用文字",
  "時間很零碎，只能用通勤和空檔經營",
];

const notForYou = [
  "想找「保證漲粉」的公式（沒有這種東西）",
  "想買粉、或用引戰換流量",
  "已經是成熟創作者，有自己的一套方法",
];

const faqs = [
  {
    q: "買了之後怎麼拿到？",
    a: "付款完成後會拿到一個 Notion 頁面連結，可以在手機和電腦上讀，也可以自己複製一份留著。",
  },
  {
    q: "完全沒經營過，看得懂嗎？",
    a: "這本就是寫給完全沒開始的人。第一章從「我到底擅長什麼」開始講，不需要任何基礎。如果你已經在發文了，可以直接跳到第二章。",
  },
  {
    q: "裡面的範例是真的嗎？",
    a: "是。書裡引用的每一則貼文都是我自己發過的，附上發文日期與後台數據截圖，包括表現好的和沒人看的。",
  },
  {
    q: "之後內容會更新嗎？",
    a: "會。Threads 的玩法一直在變，之後有新的觀察我會補進同一個頁面，買過的人不用再付費。",
  },
];

export default function ThreadsBookPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <section className="glow-honey px-6 pb-16 pt-14 sm:pb-24 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-honey px-3 py-1 text-xs font-semibold text-cream">
              <BookOpen className="h-3.5 w-3.5" />
              電子書
            </span>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
              不露臉、不拍片
              <span className="block">也能在 Threads 被看見</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg">
              一支手機、每天五分鐘。我從 0 寫到兩萬多追蹤，
              後來這件事把我帶到創業。這是兩年下來的完整筆記。
            </p>

            <div className="mt-9 flex flex-col items-center gap-3">
              <a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-fill w-full sm:w-auto"
              >
                立即購買 {PRICE}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#inside" className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline">
                先看看裡面有什麼
              </a>
            </div>

            <dl className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-line pt-8">
              {[
                ["2.8 萬", "Threads 追蹤"],
                ["1.8 萬", "Instagram 追蹤"],
                ["794 篇", "貼文的實測經驗"],
              ].map(([v, k]) => (
                <div key={k}>
                  <dt className="text-xl font-bold text-ink sm:text-2xl">{v}</dt>
                  <dd className="mt-1 text-xs text-ink-soft sm:text-sm">{k}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 問題 */}
        <section className="border-t border-line bg-cream-deep/40 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              你是不是也卡在這些地方？
            </h2>

            <ul className="mt-8 space-y-3">
              {problems.map((p) => (
                <li
                  key={p}
                  className="rounded-[var(--radius-card)] border border-line bg-cream px-5 py-4 text-[15px] leading-relaxed text-ink-soft sm:text-base"
                >
                  {p}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              這五件事我全部都遇過。
              我不是一開始就知道怎麼做，是發了幾百篇、爆過幾次也冷過很多次之後，
              才慢慢弄清楚哪些做法真的有用。
              <span className="font-semibold text-ink">
                這本筆記就是那段路的整理。
              </span>
            </p>
          </div>
        </section>

        {/* 內容 */}
        <section id="inside" className="scroll-mt-24 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              六個章節，一條完整的路
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              先想清楚你是誰，再讓別人看見你，接著把看到的人留下來，最後讓這件事能養活自己。
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {chapters.map((c) => (
                <article
                  key={c.n}
                  className="rounded-[var(--radius-card)] border border-line bg-cream p-6 transition-colors hover:border-honey-soft"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-honey-soft text-honey">
                      <c.icon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="text-xs font-semibold tracking-wider text-muted">
                      {c.n}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {c.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {specs.map(([k, v]) => (
                <div key={k} className="bg-cream px-6 py-6">
                  <div className="text-base font-bold text-ink">{k}</div>
                  <div className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 差異化 */}
        <section className="border-y border-line bg-cream-deep/40 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              裡面的例子，沒有一則是編的
            </h2>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              市面上的自媒體教學，範例常常是「假設你發了一篇⋯⋯」。
              這本不一樣。每一個示範都是我真的發過的貼文，附上發文日期，
              也附上後台數據的截圖。
            </p>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              包括那則六十四萬次瀏覽的引用金句、三十一萬次瀏覽的便當文、
              三個月從零漲到八千追蹤的系列文——
              <span className="font-semibold text-ink">
                也包括那些安安靜靜、幾乎沒有人看的貼文。
              </span>
              我到現在都還是常常發出沒什麼人看的文，那才是真實的樣子。
            </p>
          </div>
        </section>

        {/* 適合誰 */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              這本適合誰
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-[var(--radius-card)] border border-honey-soft bg-cream p-7">
                <h3 className="text-base font-bold text-ink">適合你，如果⋯⋯</h3>
                <ul className="mt-5 space-y-3">
                  {forYou.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <Check className="mt-[3px] h-[18px] w-[18px] shrink-0 text-honey" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-card)] border border-line bg-cream p-7">
                <h3 className="text-base font-bold text-ink">先別買，如果⋯⋯</h3>
                <ul className="mt-5 space-y-3">
                  {notForYou.map((t) => (
                    <li key={t} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                      <X className="mt-[3px] h-[18px] w-[18px] shrink-0 text-muted" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 作者 */}
        <section className="border-t border-line bg-cream-deep/40 px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              寫這本的人
            </h2>

            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              我是懶惰熊。大學的時候不想露臉、也懶得拍片，
              只用一支手機，把每天通勤的時間拿來寫貼文。
            </p>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              一年之後累積了兩萬多追蹤。
              後來這件事把我帶到很多本來不會發生的地方：校園大使、TEDx 演講、商業競賽，
              以及畢業就直接創業——我做的實習討論社群現在有九千多人。
            </p>
            <p className="mt-4 text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              <span className="font-semibold text-ink">
                這些機會沒有一個是憑空掉下來的，全部都是從「有人在 Threads 上認識我」開始的。
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={THREADS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line btn-sm"
              >
                <AtSign className="h-4 w-4" />
                Threads
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line btn-sm"
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              常見問題
            </h2>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <dt className="text-base font-bold text-ink">{f.q}</dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* 結尾 CTA */}
        <section className="px-6 pb-24">
          <div className="glow-honey mx-auto max-w-3xl overflow-hidden rounded-[var(--radius-card)] border border-honey-soft bg-cream-deep/50 px-8 py-14 text-center sm:px-14">
            <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-ink sm:text-4xl">
              你不需要先很厲害
              <span className="block">才可以開始分享</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-ink-soft sm:text-base">
              你只需要比看你文章的人早走一步。那一步，你可能已經走了，只是還沒把它寫下來。
            </p>
            <a
              href={BUY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill mt-8"
            >
              立即購買 {PRICE}
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-ink-soft">
              購買後可永久閱讀，內容更新不另外收費
            </p>
          </div>
        </section>

        <div className="px-6 pb-16 text-center">
          <Link
            href="/"
            className="text-sm text-ink-soft underline-offset-4 hover:text-ink hover:underline"
          >
            回到 Lazy Bear Life
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
