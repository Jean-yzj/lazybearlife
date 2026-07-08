"use client";

// ============================================================
//  遞迴表單編輯器：把任意 JSON 內容長成表單。
//  規則：
//  - 字串：短的用 input、長的（>40 字或含換行）用 textarea
//  - 布林：核取方塊；數字：number input
//  - 字串陣列：一列一欄位，可新增／刪除
//  - 物件陣列：卡片一張一項，可新增（複製欄位結構）／刪除
//  - 巢狀物件：縮排的欄位群組
// ============================================================
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2 } from "lucide-react";

const LABELS: Record<string, string> = {
  name: "名稱",
  title: "標題",
  subtitle: "副標",
  eyebrow: "小標（眉標）",
  body: "內文",
  intro: "說明文字",
  desc: "描述",
  cta: "按鈕文字",
  primaryCta: "主按鈕文字",
  secondaryCta: "次按鈕文字",
  price: "價格",
  duration: "時長",
  forWho: "適合誰",
  includes: "包含項目",
  featured: "主打方案",
  link: "連結鍵名",
  href: "連結鍵名",
  policy: "政策說明",
  steps: "流程步驟",
  plans: "方案",
  stats: "數字條",
  value: "數值",
  label: "說明文字",
  chapter: "章節標語",
  pain: "痛點",
  approach: "做法",
  metrics: "成果標籤",
  accent: "強調色（violet/amber/rose/sky）",
  items: "項目",
  paragraphs: "段落",
  testimonials: "推薦語",
  quote: "引言",
  avatar: "頭像網址",
  role: "身分描述",
  domain: "網域",
  note: "附註",
  n: "編號",
  t: "標題",
  d: "說明",
  booking60: "預約連結（60 分鐘）",
  booking30: "預約連結（30 分鐘）",
  podcast: "Podcast 連結",
  internx: "實習通連結",
  couponshare: "CouponShare 連結",
  perfume: "香水羅盤連結",
  knowme: "KnowMe 連結（App Store）",
  stardivination: "星之占卜連結（App Store）",
  shopee: "蝦皮選物連結",
  contactEmail: "客服信箱",
  notesWaitlist: "筆記通知表單連結",
  work: "作品",
  brands: "品牌",
};

// 新增陣列項目時的空白模板（依欄位名）
function emptyLike(v: unknown): unknown {
  if (typeof v === "string") return "";
  if (typeof v === "number") return 0;
  if (typeof v === "boolean") return false;
  if (Array.isArray(v)) return [];
  if (typeof v === "object" && v !== null) {
    const out: Record<string, unknown> = {};
    for (const [k, val] of Object.entries(v)) out[k] = emptyLike(val);
    return out;
  }
  return "";
}

const KNOWN_TEMPLATES: Record<string, unknown> = {
  testimonials: { quote: "", name: "", title: "" },
  metrics: "",
  paragraphs: "",
  includes: "",
};

function label(key: string): string {
  return LABELS[key] || key;
}

function Field({
  k,
  value,
  onChange,
}: {
  k: string;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  if (typeof value === "boolean") {
    return (
      <label className="flex items-center gap-2.5 text-sm text-ink">
        <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="h-4 w-4 accent-[var(--color-honey)]"
        />
        {label(k)}
      </label>
    );
  }
  if (typeof value === "number") {
    return (
      <label className="block text-sm font-medium text-ink-soft">
        {label(k)}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2 text-ink outline-none focus:border-honey"
        />
      </label>
    );
  }
  if (typeof value === "string") {
    const long = value.length > 40 || value.includes("\n");
    return (
      <label className="block text-sm font-medium text-ink-soft">
        {label(k)}
        {long ? (
          <textarea
            value={value}
            rows={Math.min(6, Math.max(2, Math.ceil(value.length / 40)))}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2 leading-relaxed text-ink outline-none focus:border-honey"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-line bg-cream px-3 py-2 text-ink outline-none focus:border-honey"
          />
        )}
      </label>
    );
  }
  if (Array.isArray(value)) {
    return <ArrayField k={k} value={value} onChange={onChange} />;
  }
  if (typeof value === "object" && value !== null) {
    return (
      <fieldset className="rounded-xl border border-line p-4">
        <legend className="px-1.5 text-sm font-semibold text-ink">{label(k)}</legend>
        <ObjectFields
          value={value as Record<string, unknown>}
          onChange={onChange as (v: Record<string, unknown>) => void}
        />
      </fieldset>
    );
  }
  return null;
}

function ObjectFields({
  value,
  onChange,
}: {
  value: Record<string, unknown>;
  onChange: (v: Record<string, unknown>) => void;
}) {
  return (
    <div className="space-y-4">
      {Object.entries(value).map(([k, v]) => (
        <Field key={k} k={k} value={v} onChange={(nv) => onChange({ ...value, [k]: nv })} />
      ))}
    </div>
  );
}

function ArrayField({
  k,
  value,
  onChange,
}: {
  k: string;
  value: unknown[];
  onChange: (v: unknown[]) => void;
}) {
  const template =
    value.length > 0 ? emptyLike(value[0]) : (KNOWN_TEMPLATES[k] ?? "");
  const isObjectList = value.length > 0
    ? typeof value[0] === "object" && !Array.isArray(value[0])
    : typeof template === "object";

  return (
    <div className="rounded-xl border border-line p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-ink">{label(k)}</span>
        <button
          type="button"
          onClick={() => onChange([...value, emptyLike(template)])}
          className="inline-flex items-center gap-1 rounded-lg border border-line px-2.5 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-honey hover:text-honey"
        >
          <Plus className="h-3.5 w-3.5" /> 新增一項
        </button>
      </div>

      <div className="mt-3 space-y-3">
        {value.length === 0 && (
          <p className="text-sm text-muted">目前沒有項目（此區塊不會顯示在頁面上）。</p>
        )}
        {value.map((item, i) => (
          <div
            key={i}
            className={
              isObjectList
                ? "rounded-lg border border-line bg-cream-deep/40 p-4"
                : "flex items-start gap-2"
            }
          >
            {isObjectList ? (
              <>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted">第 {i + 1} 項</span>
                  <button
                    type="button"
                    onClick={() => onChange(value.filter((_, j) => j !== i))}
                    className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-rose"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> 刪除
                  </button>
                </div>
                <ObjectFields
                  value={item as Record<string, unknown>}
                  onChange={(nv) => onChange(value.map((x, j) => (j === i ? nv : x)))}
                />
              </>
            ) : (
              <>
                <div className="flex-1">
                  <Field
                    k={`${label(k)} ${i + 1}`}
                    value={item}
                    onChange={(nv) => onChange(value.map((x, j) => (j === i ? nv : x)))}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => onChange(value.filter((_, j) => j !== i))}
                  aria-label="刪除"
                  className="mt-7 text-muted transition-colors hover:text-rose"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectionEditor({
  sectionKey,
  initialValue,
}: {
  sectionKey: string;
  initialValue: unknown;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  async function save() {
    setBusy(true);
    setMsg(null);
    const res = await fetch("/api/admin/section", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: sectionKey, data: value }),
    });
    if (res.ok) {
      setMsg({ ok: true, text: "已儲存，首頁已更新。" });
      router.refresh();
    } else {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setMsg({ ok: false, text: body.error || "儲存失敗" });
    }
    setBusy(false);
  }

  return (
    <div>
      <div className="rounded-[var(--radius-card)] border border-line bg-cream p-6">
        {typeof value === "object" && value !== null && !Array.isArray(value) ? (
          <ObjectFields
            value={value as Record<string, unknown>}
            onChange={setValue as (v: Record<string, unknown>) => void}
          />
        ) : (
          <Field k={sectionKey} value={value} onChange={setValue} />
        )}
      </div>

      <div className="sticky bottom-4 mt-5 flex items-center gap-4">
        <button onClick={save} disabled={busy} className="btn-fill disabled:opacity-60">
          {busy ? "儲存中…" : "儲存"}
        </button>
        {msg && (
          <span className={`text-sm ${msg.ok ? "text-honey-deep" : "text-rose"}`}>
            {msg.text}
          </span>
        )}
      </div>
    </div>
  );
}
