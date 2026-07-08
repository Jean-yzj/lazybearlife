// ============================================================
//  內容讀取：預設值（lib/site.ts）＋後台覆寫（store）深合併。
//  - 沒進過後台改的欄位，永遠顯示 code 裡的預設值
//  - code 日後新增欄位，舊的覆寫資料不會蓋掉新欄位
//  - store 掛掉時退回預設值，網站不會白頁
// ============================================================
import { cache } from "react";
import { site, type Site } from "./site";
import { getStore } from "./store";

// 深合併：override 蓋在 base 上。陣列整組取代（後台存的是完整清單）。
function deepMerge<T>(base: T, override: unknown): T {
  if (override === undefined || override === null) return base;
  if (Array.isArray(base) || Array.isArray(override)) return override as T;
  if (typeof base === "object" && base !== null && typeof override === "object") {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(override as Record<string, unknown>)) {
      if (k in out) {
        out[k] = deepMerge(out[k], v);
      } else {
        out[k] = v;
      }
    }
    return out as T;
  }
  return override as T;
}

// 每個 request 只讀一次（React cache），各元件都可直接 await getSite()
export const getSite = cache(async (): Promise<Site> => {
  try {
    const stored = await getStore().getSections();
    let merged: Site = site;
    for (const [key, data] of Object.entries(stored)) {
      if (key in site) {
        merged = {
          ...merged,
          [key]: deepMerge(site[key as keyof Site], data),
        };
      }
    }
    return merged;
  } catch (err) {
    console.error("[content] store unavailable, falling back to defaults:", err);
    return site;
  }
});

// 後台可編輯的區塊清單（key 必須存在於 lib/site.ts）
export const EDITABLE_SECTIONS: { key: keyof Site; label: string; hint: string }[] = [
  { key: "profile", label: "個人資料", hint: "名字與頭像" },
  { key: "hero", label: "首屏", hint: "主標、副標、數字條、按鈕文字" },
  { key: "work", label: "作品集", hint: "四張（或更多）作品卡" },
  { key: "consulting", label: "諮詢服務", hint: "方案、價格、流程、政策" },
  { key: "brands", label: "品牌", hint: "實習通、Podcast 等" },
  { key: "about", label: "關於我", hint: "自我介紹與推薦語" },
  { key: "notes", label: "筆記預告", hint: "即將推出區塊的文案" },
  { key: "recommends", label: "懶惰熊推薦", hint: "省錢理財推薦清單（可增刪）" },
  { key: "links", label: "連結", hint: "預約、作品、社群、Email 等所有對外連結" },
];
