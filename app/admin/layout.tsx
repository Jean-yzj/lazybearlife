import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "後台 — Lazy Bear Life",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-cream-deep/60">{children}</div>;
}
