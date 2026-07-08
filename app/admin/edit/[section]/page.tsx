import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { isAdmin, adminConfigured } from "@/lib/auth";
import { EDITABLE_SECTIONS, getSite } from "@/lib/content";
import { SectionEditor } from "@/components/admin/SectionEditor";
import { ArrowLeft } from "lucide-react";
import type { Site } from "@/lib/site";

export const dynamic = "force-dynamic";

export default async function EditSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  if (!adminConfigured()) redirect("/admin");
  if (!(await isAdmin())) redirect("/admin/login");

  const { section } = await params;
  const meta = EDITABLE_SECTIONS.find((s) => s.key === section);
  if (!meta) notFound();

  const site = await getSite();
  const value = site[meta.key as keyof Site];

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <Link
        href="/admin"
        className="inline-flex items-center gap-1.5 text-sm text-ink-soft hover:text-honey"
      >
        <ArrowLeft className="h-4 w-4" /> 回後台
      </Link>
      <h1 className="mt-4 text-xl font-bold text-ink">{meta.label}</h1>
      <p className="mt-1 text-sm text-muted">{meta.hint}</p>

      <div className="mt-6">
        <SectionEditor sectionKey={meta.key} initialValue={value} />
      </div>
    </main>
  );
}
