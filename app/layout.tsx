import type { Metadata } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const description =
  "文組出身、靠 AI 自學的獨立開發者 Jean 的個人頁。做過單日湧入 5,568 人的網站、上架 App Store 的 App。這裡有我的作品、推薦的工具，也可以預約和我聊聊。";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.brand.domain}`),
  title: "Lazy Bear Life — 獨立開發者 Jean 的作品與諮詢",
  description,
  keywords: [
    "獨立開發",
    "創作者",
    "產品諮詢",
    "AI 出貨",
    "作品集",
    "Jean",
    "Lazy Bear Life",
  ],
  authors: [{ name: "Jean" }],
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: `https://${site.brand.domain}`,
    siteName: site.brand.name,
    title: "Lazy Bear Life — 獨立開發者 Jean 的作品與諮詢",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Lazy Bear Life — 獨立開發者 Jean 的作品與諮詢",
    description,
  },
  alternates: { canonical: `https://${site.brand.domain}` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
