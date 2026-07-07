import { site } from "@/lib/site";
import { BearMark } from "./BearMark";
import { ArrowLeft } from "lucide-react";

export function LegalShell({ html }: { html: string }) {
  return (
    <div className="min-h-screen bg-cream">
      <header className="border-b border-line/70">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <BearMark className="h-7 w-7 text-honey" />
            <span className="text-sm font-semibold text-ink">{site.brand.name}</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-honey"
          >
            <ArrowLeft className="h-4 w-4" />
            回首頁
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <article className="legal-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  );
}
