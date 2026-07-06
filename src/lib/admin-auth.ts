import { createHmac, timingSafeEqual } from "node:crypto";

const COOKIE_NAME = "ibs_admin_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function getSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("ADMIN_SESSION_SECRET is not configured");
  }
  return secret;
}

function sign(payload: string) {
  return createHmac("sha256", getSecret()).update(payload).digest("hex");
}

export function isAdminConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

export function checkPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD ?? "";
  const a = Buffer.from(password);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return expected.length > 0 && timingSafeEqual(a, b);
}

export function createSessionToken() {
  const expiry = (Date.now() + SESSION_TTL_MS).toString();
  return `${expiry}.${sign(expiry)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiry, signature] = token.split(".");
  if (!expiry || !signature) return false;
  if (Number(expiry) < Date.now()) return false;
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(sign(expiry)));
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
export const ADMIN_SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;
