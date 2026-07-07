import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";
import { renderLegalPage } from "@/lib/legal";
import { legalConfig } from "@/legal.config";

export const metadata: Metadata = {
  title: "服務條款 — Lazy Bear Life",
  robots: { index: false },
};

export default function TermsPage() {
  const html = renderLegalPage("terms", legalConfig);
  return <LegalShell html={html} />;
}
