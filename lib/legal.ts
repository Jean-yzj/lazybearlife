import { readFileSync } from "fs";
import { join } from "path";

// 變數替換：{{key}} → cfg[key]。缺值直接 throw，寧可 build 失敗也不上線帶佔位符的條款。
export function renderVars(md: string, cfg: Record<string, unknown>): string {
  return md.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const v = cfg[key];
    if (v === undefined || v === null || v === "")
      throw new Error(`legal.config 缺欄位: ${key}`);
    return String(v);
  });
}

// 輕量 markdown → HTML。只支援本站條款用到的語法：# / ## 標題、段落、- 清單、1. 有序清單、**粗體**。
export function mdToHtml(md: string): string {
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  const inline = (s: string) =>
    esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  const lines = md.split("\n");
  const out: string[] = [];
  let list: "ul" | "ol" | null = null;
  const closeList = () => {
    if (list) {
      out.push(`</${list}>`);
      list = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (line.startsWith("# ")) {
      closeList();
      out.push(`<h1>${inline(line.slice(2))}</h1>`);
    } else if (line.startsWith("## ")) {
      closeList();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
    } else if (/^-\s+/.test(line)) {
      if (list !== "ul") {
        closeList();
        out.push("<ul>");
        list = "ul";
      }
      out.push(`<li>${inline(line.replace(/^-\s+/, ""))}</li>`);
    } else if (/^\d+\.\s+/.test(line)) {
      if (list !== "ol") {
        closeList();
        out.push("<ol>");
        list = "ol";
      }
      out.push(`<li>${inline(line.replace(/^\d+\.\s+/, ""))}</li>`);
    } else {
      closeList();
      out.push(`<p>${inline(line)}</p>`);
    }
  }
  closeList();
  return out.join("\n");
}

export function renderLegalPage(
  file: "terms" | "privacy",
  cfg: Record<string, unknown>,
): string {
  const raw = readFileSync(join(process.cwd(), "legal", `${file}.md`), "utf8");
  return mdToHtml(renderVars(raw, cfg));
}
