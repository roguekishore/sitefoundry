// The login: a passphrase plus a 6-digit code from an authenticator app (TOTP, RFC 6238), one
// user. A successful login gets a random session cookie; the database keeps only its SHA-256,
// so a copy of the database can't be used to log in. Sessions survive a server restart.
//
// Set up once with `node dist/server.mjs setup-login` (reads the passphrase from stdin, prints
// the two lines for the server's env file and the authenticator link).
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import type { Db } from "./db.ts";

export const COOKIE = "foundry_session";
const SESSION_DAYS = 30;

// ---------- passphrase ----------

/** "scrypt.<salt hex>.<hash hex>" (dots, not dollars: env files and shells expand $) */
export function hashPassphrase(passphrase: string): string {
  const salt = randomBytes(16);
  return `scrypt.${salt.toString("hex")}.${scryptSync(passphrase, salt, 32).toString("hex")}`;
}

function passphraseMatches(passphrase: string, stored: string): boolean {
  const [kind, salt, hash] = stored.split(".");
  if (kind !== "scrypt" || !salt || !hash) return false;
  const got = scryptSync(passphrase, Buffer.from(salt, "hex"), 32);
  return timingSafeEqual(got, Buffer.from(hash, "hex"));
}

// ---------- TOTP ----------

const B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
export function newTotpSecret(): string {
  return [...randomBytes(20)].map((b) => B32[b & 31]).join("");
}
function base32(secret: string): Buffer {
  let bits = "";
  for (const c of secret.toUpperCase().replace(/[^A-Z2-7]/g, "")) bits += B32.indexOf(c).toString(2).padStart(5, "0");
  return Buffer.from(bits.match(/.{8}/g)?.map((b) => parseInt(b, 2)) ?? []);
}
export function totp(secret: string, step = Math.floor(Date.now() / 30000)): string {
  const counter = Buffer.alloc(8);
  counter.writeBigUInt64BE(BigInt(step));
  const mac = createHmac("sha1", base32(secret)).update(counter).digest();
  const offset = mac[mac.length - 1] & 15;
  return String((mac.readUInt32BE(offset) & 0x7fffffff) % 1e6).padStart(6, "0");
}
/** The code now, or one step either side (clocks drift). */
function codeMatches(code: string, secret: string): boolean {
  const step = Math.floor(Date.now() / 30000);
  return [-1, 0, 1].some((d) => totp(secret, step + d) === code.trim());
}

// ---------- sessions ----------

const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");

function cookieOf(req: IncomingMessage, name: string): string | undefined {
  for (const part of (req.headers.cookie ?? "").split(";")) {
    const [k, ...v] = part.trim().split("=");
    if (k === name) return decodeURIComponent(v.join("="));
  }
  return undefined;
}

export interface AuthSettings {
  passphraseHash: string;
  totpSecret: string;
  /** e.g. "foundry.example.com": the cookie then also covers live.foundry.example.com */
  cookieDomain: string | null;
}

export class Auth {
  private failures: number[] = [];

  constructor(
    private db: Db,
    private settings: AuthSettings | null,
  ) {}

  get enabled() {
    return this.settings !== null;
  }

  loggedIn(req: IncomingMessage): boolean {
    if (!this.settings) return true;
    const token = cookieOf(req, COOKIE);
    return Boolean(token && this.db.hasSession(sha256(token)));
  }

  /** Checks a login form; on success sets the cookie and returns true. Five failures a minute lock it for that minute. */
  login(req: IncomingMessage, res: ServerResponse, passphrase: string, code: string): "ok" | "wrong" | "locked" {
    if (!this.settings) return "ok";
    const minuteAgo = Date.now() - 60e3;
    this.failures = this.failures.filter((t) => t > minuteAgo);
    if (this.failures.length >= 5) return "locked";
    // Both are checked every time, so the answer doesn't say which one was wrong.
    const ok = passphraseMatches(passphrase, this.settings.passphraseHash) && codeMatches(code, this.settings.totpSecret);
    if (!ok) {
      this.failures.push(Date.now());
      return "wrong";
    }
    const token = randomBytes(32).toString("base64url");
    this.db.addSession(sha256(token), SESSION_DAYS);
    res.setHeader("set-cookie", this.cookie(req, token, SESSION_DAYS * 86400));
    return "ok";
  }

  logout(req: IncomingMessage, res: ServerResponse) {
    const token = cookieOf(req, COOKIE);
    if (token) this.db.dropSession(sha256(token));
    res.setHeader("set-cookie", this.cookie(req, "", 0));
  }

  private cookie(req: IncomingMessage, value: string, maxAge: number): string {
    // Behind Caddy the request arrives as plain HTTP with X-Forwarded-Proto: https.
    const https = req.headers["x-forwarded-proto"] === "https";
    const domain = this.settings?.cookieDomain ? `; Domain=${this.settings.cookieDomain}` : "";
    return `${COOKIE}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${https ? "; Secure" : ""}${domain}`;
  }
}

/** The login page: plain HTML, no scripts, light and dark. */
export function loginPage(message = ""): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>SITEFOUNDRY · Log in</title>
<style>
:root{--bg:#fff;--fg:#09090b;--muted:#71717a;--border:#e4e4e7;--primary:#18181b;--primary-fg:#fafafa;--bad:#b91c1c;color-scheme:light}
@media (prefers-color-scheme:dark){:root{--bg:#09090b;--fg:#fafafa;--muted:#a1a1aa;--border:#27272a;--primary:#fafafa;--primary-fg:#18181b;--bad:#f87171;color-scheme:dark}}
*{box-sizing:border-box}body{margin:0;min-height:100dvh;display:grid;place-items:center;background:var(--bg);color:var(--fg);font:15px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;padding:16px}
form{width:100%;max-width:340px;display:grid;gap:14px}h1{font-size:18px;margin:0 0 4px}p{margin:0;color:var(--muted);font-size:13.5px}
label{display:grid;gap:6px;font-size:13.5px;font-weight:500}input{font:inherit;color:inherit;background:transparent;border:1px solid var(--border);border-radius:8px;height:42px;padding:0 12px}
input:focus{outline:2px solid var(--muted);outline-offset:1px}button{font:inherit;font-weight:500;height:42px;border:0;border-radius:8px;background:var(--primary);color:var(--primary-fg);cursor:pointer}
.bad{color:var(--bad)}
</style></head><body>
<form method="post" action="/login">
<div><h1>SITEFOUNDRY</h1><p>Log in to see the gallery and start runs.</p></div>
${message ? `<p class="bad" role="alert">${message}</p>` : ""}
<label>Passphrase<input name="passphrase" type="password" autocomplete="current-password" required autofocus></label>
<label>Code from your authenticator<input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" required></label>
<button type="submit">Log in</button>
</form></body></html>`;
}
