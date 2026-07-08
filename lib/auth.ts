// ============================================================
//  後台登入（單一管理者）
//  - 密碼放環境變數 ADMIN_PASSWORD（不進 repo、不進資料庫）
//  - 登入成功發 JWT httpOnly cookie（jose HS256）
//  - AUTH_SECRET 未設時每次啟動隨機生成（重啟需重新登入，可接受）
//  - 登入端點有記憶體 rate limit：同 IP 15 分鐘內錯 5 次即鎖
// ============================================================
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { timingSafeEqual, randomBytes } from "crypto";

export const SESSION_COOKIE = "lbl_admin";
const SESSION_HOURS = 24 * 7;

const secret = new TextEncoder().encode(
  process.env.AUTH_SECRET || randomBytes(32).toString("hex"),
);

export function adminConfigured(): boolean {
  return !!process.env.ADMIN_PASSWORD && process.env.ADMIN_PASSWORD.length >= 8;
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(expected);
  if (a.length !== b.length) {
    // 仍做一次比較，避免長度差被計時攻擊利用
    timingSafeEqual(Buffer.alloc(b.length), b);
    return false;
  }
  return timingSafeEqual(a, b);
}

export async function createSession(): Promise<string> {
  return await new SignJWT({ role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_HOURS}h`)
    .sign(secret);
}

export async function isAdmin(): Promise<boolean> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "admin";
  } catch {
    return false;
  }
}

// ---------- 登入 rate limit（記憶體版，單機夠用） ----------
const attempts = new Map<string, { count: number; first: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILS = 5;

export function rateLimited(ip: string): boolean {
  const rec = attempts.get(ip);
  if (!rec) return false;
  if (Date.now() - rec.first > WINDOW_MS) {
    attempts.delete(ip);
    return false;
  }
  return rec.count >= MAX_FAILS;
}

export function recordFail(ip: string) {
  const rec = attempts.get(ip);
  if (!rec || Date.now() - rec.first > WINDOW_MS) {
    attempts.set(ip, { count: 1, first: Date.now() });
  } else {
    rec.count += 1;
  }
}

export function clearFails(ip: string) {
  attempts.delete(ip);
}
