import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { renderLegalPage } from "@/lib/legal";
import { legalConfig } from "@/legal.config";

export const metadata: Metadata = {
  title: "隱私權政策 — Lazy Bear Life",
  robots: { index: false },
};

export default function PrivacyPage() {
  const html = renderLegalPage("privacy", legalConfig);
  return <LegalShell html={html} />;
}
