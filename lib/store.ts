// ============================================================
//  內容儲存層（單一介面、兩種後端）
//  - 有 DATABASE_URL：PostgreSQL（正式環境，Zeabur）
//  - 沒有：本地檔案 data/（開發、還沒接資料庫時）
//  存的東西只有兩種：各區塊的 JSON 內容、小型二進位資產（頭像）。
// ============================================================
import { promises as fs } from "fs";
import { join } from "path";

export interface ContentStore {
  getSections(): Promise<Record<string, unknown>>;
  saveSection(key: string, data: unknown): Promise<void>;
  getAsset(key: string): Promise<{ mime: string; data: Buffer } | null>;
  saveAsset(key: string, mime: string, data: Buffer): Promise<void>;
}

// ---------- 檔案模式（零依賴，本地開發用） ----------
class FileStore implements ContentStore {
  private dir = join(process.cwd(), "data");
  private async ensure() {
    await fs.mkdir(this.dir, { recursive: true });
  }
  async getSections() {
    try {
      const raw = await fs.readFile(join(this.dir, "content.json"), "utf8");
      return JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return {};
    }
  }
  async saveSection(key: string, data: unknown) {
    await this.ensure();
    const all = await this.getSections();
    all[key] = data;
    await fs.writeFile(
      join(this.dir, "content.json"),
      JSON.stringify(all, null, 2),
      "utf8",
    );
  }
  async getAsset(key: string) {
    try {
      const meta = JSON.parse(
        await fs.readFile(join(this.dir, `asset-${key}.json`), "utf8"),
      ) as { mime: string };
      const data = await fs.readFile(join(this.dir, `asset-${key}.bin`));
      return { mime: meta.mime, data };
    } catch {
      return null;
    }
  }
  async saveAsset(key: string, mime: string, data: Buffer) {
    await this.ensure();
    await fs.writeFile(join(this.dir, `asset-${key}.bin`), data);
    await fs.writeFile(
      join(this.dir, `asset-${key}.json`),
      JSON.stringify({ mime }),
      "utf8",
    );
  }
}

// ---------- PostgreSQL 模式（正式環境） ----------
class PgStore implements ContentStore {
  private poolPromise: Promise<import("pg").Pool> | null = null;
  private pool() {
    if (!this.poolPromise) {
      this.poolPromise = (async () => {
        const { Pool } = await import("pg");
        const pool = new Pool({
          connectionString: process.env.DATABASE_URL,
          max: 3, // 個人站，連線池小而穩（標準 10：資源預算）
        });
        await pool.query(`
          CREATE TABLE IF NOT EXISTS section (
            key TEXT PRIMARY KEY,
            data JSONB NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )`);
        await pool.query(`
          CREATE TABLE IF NOT EXISTS asset (
            key TEXT PRIMARY KEY,
            mime TEXT NOT NULL,
            data BYTEA NOT NULL,
            updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
          )`);
        return pool;
      })();
    }
    return this.poolPromise;
  }
  async getSections() {
    const pool = await this.pool();
    const res = await pool.query("SELECT key, data FROM section");
    const out: Record<string, unknown> = {};
    for (const row of res.rows) out[row.key] = row.data;
    return out;
  }
  async saveSection(key: string, data: unknown) {
    const pool = await this.pool();
    await pool.query(
      `INSERT INTO section (key, data, updated_at) VALUES ($1, $2, now())
       ON CONFLICT (key) DO UPDATE SET data = $2, updated_at = now()`,
      [key, JSON.stringify(data)],
    );
  }
  async getAsset(key: string) {
    const pool = await this.pool();
    const res = await pool.query("SELECT mime, data FROM asset WHERE key = $1", [key]);
    if (!res.rows[0]) return null;
    return { mime: res.rows[0].mime as string, data: res.rows[0].data as Buffer };
  }
  async saveAsset(key: string, mime: string, data: Buffer) {
    const pool = await this.pool();
    await pool.query(
      `INSERT INTO asset (key, mime, data, updated_at) VALUES ($1, $2, $3, now())
       ON CONFLICT (key) DO UPDATE SET mime = $2, data = $3, updated_at = now()`,
      [key, mime, data],
    );
  }
}

let store: ContentStore | null = null;
export function getStore(): ContentStore {
  if (!store) {
    store = process.env.DATABASE_URL ? new PgStore() : new FileStore();
  }
  return store;
}

export function storeMode(): "postgres" | "file" {
  return process.env.DATABASE_URL ? "postgres" : "file";
}
