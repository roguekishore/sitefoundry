// The login, one user. Two ways in:
//   - a passphrase plus a 6-digit code from an authenticator app (TOTP, RFC 6238), always;
//   - a passkey (WebAuthn), once one has been added on the passkeys page (#/passkeys).
// A successful login gets a random session cookie; the database keeps only its SHA-256,
// so a copy of the database can't be used to log in. Sessions survive a server restart.
//
// Set up once with `node dist/server.mjs setup-login` (reads the passphrase from stdin, prints
// the two lines for the server's env file and the authenticator link).
import { createHash, createHmac, randomBytes, scryptSync, timingSafeEqual } from "node:crypto";
import type { IncomingMessage, ServerResponse } from "node:http";
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
  type AuthenticationResponseJSON,
  type PublicKeyCredentialCreationOptionsJSON,
  type PublicKeyCredentialRequestOptionsJSON,
  type RegistrationResponseJSON,
} from "@simplewebauthn/server";
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

// ---------- passkeys ----------
//
// A passkey logs in on its own: the phone or laptop holding it checks a fingerprint, face or PIN
// first (user verification is required), so it is still two things, the device and you.
// Adding one needs a logged-in session plus a fresh code from the authenticator app, so a stolen
// session cookie alone can't plant a passkey that outlives the session.

/** A refusal with the HTTP status to answer it with. */
export class AuthError extends Error {
  constructor(
    readonly status: number,
    message: string,
  ) {
    super(message);
  }
}

const RP_NAME = "SITEFOUNDRY";
/** One user, so every passkey carries the same user id (a device keeps one passkey per id). */
const USER_ID = new TextEncoder().encode("sitefoundry-owner");
const CHALLENGE_MS = 5 * 60e3;

export class Auth {
  private failures: number[] = [];
  /** Challenges handed out and not used yet: each one works once, for five minutes. */
  private challenges = new Map<string, { kind: "login" | "add"; expires: number }>();

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
    if (this.locked()) return "locked";
    // Both are checked every time, so the answer doesn't say which one was wrong.
    const ok = passphraseMatches(passphrase, this.settings.passphraseHash) && codeMatches(code, this.settings.totpSecret);
    if (!ok) {
      this.failures.push(Date.now());
      return "wrong";
    }
    this.startSession(req, res);
    return "ok";
  }

  /** Five failed passphrase or code checks in the last minute. (Passkey logins neither count nor
   * are locked out: a signature can't be guessed, and the owner can still get in with one.) */
  private locked(): boolean {
    const minuteAgo = Date.now() - 60e3;
    this.failures = this.failures.filter((t) => t > minuteAgo);
    return this.failures.length >= 5;
  }

  private startSession(req: IncomingMessage, res: ServerResponse) {
    const token = randomBytes(32).toString("base64url");
    this.db.addSession(sha256(token), SESSION_DAYS);
    res.setHeader("set-cookie", this.cookie(req, token, SESSION_DAYS * 86400));
  }

  // ---------- passkeys ----------

  /** Whether the login page offers "Log in with a passkey". */
  get hasPasskeys(): boolean {
    return this.enabled && this.db.passkeys().length > 0;
  }

  /** Step 1 of a passkey login: a challenge for the device to sign. Any of this server's passkeys may answer. */
  async passkeyLoginOptions(req: IncomingMessage): Promise<PublicKeyCredentialRequestOptionsJSON> {
    if (!this.settings) throw new AuthError(400, "This server has no login.");
    const { rpID } = this.relyingParty(req);
    const options = await generateAuthenticationOptions({ rpID, userVerification: "required", timeout: CHALLENGE_MS });
    this.remember("login", options.challenge);
    return options;
  }

  /** Step 2: the signed challenge. On success sets the cookie. */
  async passkeyLogin(req: IncomingMessage, res: ServerResponse, response: AuthenticationResponseJSON) {
    if (!this.settings) throw new AuthError(400, "This server has no login.");
    const { rpID, origin } = this.relyingParty(req);
    const stored = typeof response?.id === "string" ? this.db.passkey(response.id) : undefined;
    if (!stored) throw new AuthError(401, "That passkey isn't one of this server's (it may have been removed). Log in with your passphrase.");
    let verified;
    try {
      verified = await verifyAuthenticationResponse({
        response,
        expectedChallenge: (c) => this.take("login", c),
        expectedOrigin: origin,
        expectedRPID: rpID,
        credential: { id: stored.id, publicKey: stored.publicKey, counter: stored.counter, transports: stored.transports },
        requireUserVerification: true,
      });
    } catch (e) {
      throw new AuthError(401, `The passkey didn't check out: ${(e as Error).message}`);
    }
    if (!verified.verified) throw new AuthError(401, "The passkey didn't check out.");
    this.db.passkeyUsed(stored.id, verified.authenticationInfo.newCounter);
    this.startSession(req, res);
  }

  /** Adding a passkey, step 1 (logged in): the authenticator code again, then what the device needs to make one. */
  async passkeyAddOptions(req: IncomingMessage, code: string): Promise<PublicKeyCredentialCreationOptionsJSON> {
    if (!this.settings) throw new AuthError(400, "This server has no login, so there's nothing for a passkey to open.");
    const { rpID } = this.relyingParty(req);
    if (this.locked()) throw new AuthError(429, "Too many tries. Wait a minute.");
    if (!codeMatches(code, this.settings.totpSecret)) {
      this.failures.push(Date.now());
      throw new AuthError(403, "That code didn't match. Use the current one from your authenticator app.");
    }
    const options = await generateRegistrationOptions({
      rpName: RP_NAME,
      rpID,
      userName: "owner",
      userDisplayName: RP_NAME,
      userID: USER_ID,
      timeout: CHALLENGE_MS,
      attestationType: "none",
      // Discoverable ("resident"), so logging in needs no user name; verified with a fingerprint, face or PIN.
      authenticatorSelection: { residentKey: "required", userVerification: "required" },
      // The device refuses to make a second passkey where it already holds one of ours.
      excludeCredentials: this.db.passkeys().map((p) => ({ id: p.id, transports: p.transports })),
    });
    this.remember("add", options.challenge);
    return options;
  }

  /** Adding a passkey, step 2: the new passkey, checked and stored under `name`. */
  async addPasskey(req: IncomingMessage, name: string, response: RegistrationResponseJSON) {
    if (!this.settings) throw new AuthError(400, "This server has no login.");
    const { rpID, origin } = this.relyingParty(req);
    const label = String(name ?? "").trim();
    if (!label || label.length > 60) throw new AuthError(400, "Give the passkey a name of up to 60 characters, like Phone or Laptop.");
    let verified;
    try {
      verified = await verifyRegistrationResponse({ response, expectedChallenge: (c) => this.take("add", c), expectedOrigin: origin, expectedRPID: rpID, requireUserVerification: true });
    } catch (e) {
      throw new AuthError(400, `The new passkey didn't check out: ${(e as Error).message}`);
    }
    if (!verified.verified) throw new AuthError(400, "The new passkey didn't check out.");
    const { credential } = verified.registrationInfo;
    if (this.db.passkey(credential.id)) throw new AuthError(409, "That passkey is already added.");
    this.db.addPasskey({ id: credential.id, publicKey: credential.publicKey, counter: credential.counter, transports: credential.transports ?? [], name: label });
  }

  /** Where passkeys belong: the main address (the cookie's domain in the cloud, the Host on the
   * laptop: localhost works, 127.0.0.1 doesn't), and the origin the browser must report. */
  private relyingParty(req: IncomingMessage): { rpID: string; origin: string } {
    const host = String(req.headers.host ?? "");
    const hostname = host.replace(/:\d+$/, "");
    const rpID = this.settings?.cookieDomain ?? hostname;
    if (hostname !== rpID) throw new AuthError(400, `Passkeys work only on ${rpID}.`);
    const proto = req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
    return { rpID, origin: `${proto}://${host}` };
  }

  private remember(kind: "login" | "add", challenge: string) {
    for (const [c, v] of this.challenges) if (v.expires < Date.now()) this.challenges.delete(c);
    // Anyone can ask the login page for challenges: keep at most 500 (the oldest go first).
    while (this.challenges.size >= 500) this.challenges.delete(this.challenges.keys().next().value!);
    this.challenges.set(challenge, { kind, expires: Date.now() + CHALLENGE_MS });
  }

  /** True once for a challenge handed out for `kind` that hasn't expired. */
  private take(kind: "login" | "add", challenge: string): boolean {
    const found = this.challenges.get(challenge);
    this.challenges.delete(challenge);
    return Boolean(found && found.kind === kind && found.expires > Date.now());
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

/** The login page, light and dark. Plain HTML; with `passkeys`, a button and a small script
 * for "Log in with a passkey" too (hidden where the browser has no passkeys). */
export function loginPage(message = "", passkeys = false): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>SITEFOUNDRY · Log in</title>
<style>
:root{--bg:#fff;--fg:#09090b;--muted:#71717a;--border:#e4e4e7;--primary:#18181b;--primary-fg:#fafafa;--bad:#b91c1c;color-scheme:light}
@media (prefers-color-scheme:dark){:root{--bg:#09090b;--fg:#fafafa;--muted:#a1a1aa;--border:#27272a;--primary:#fafafa;--primary-fg:#18181b;--bad:#f87171;color-scheme:dark}}
*{box-sizing:border-box}body{margin:0;min-height:100dvh;display:grid;place-items:center;background:var(--bg);color:var(--fg);font:15px/1.5 ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;padding:16px}
main,form{width:100%;max-width:340px;display:grid;gap:14px}h1{font-size:18px;margin:0 0 4px}p{margin:0;color:var(--muted);font-size:13.5px}
label{display:grid;gap:6px;font-size:13.5px;font-weight:500}input{font:inherit;color:inherit;background:transparent;border:1px solid var(--border);border-radius:8px;height:42px;padding:0 12px}
input:focus{outline:2px solid var(--muted);outline-offset:1px}button{font:inherit;font-weight:500;height:42px;border:0;border-radius:8px;background:var(--primary);color:var(--primary-fg);cursor:pointer}
button.quiet{background:transparent;color:var(--fg);border:1px solid var(--border)}button:disabled{opacity:.55;cursor:default}
.or{display:flex;align-items:center;gap:10px;font-size:12.5px}.or::before,.or::after{content:"";flex:1;border-top:1px solid var(--border)}
#pk{display:grid;gap:14px}#pk[hidden]{display:none}.bad{color:var(--bad)}
</style></head><body>
<main>
<div><h1>SITEFOUNDRY</h1><p>Log in to see the gallery and start runs.</p></div>
<p id="msg" class="bad" role="alert"${message ? "" : " hidden"}>${message}</p>
${passkeys ? `<div id="pk" hidden><button id="pk-go" type="button" autofocus>Log in with a passkey</button><p class="or">or with your passphrase</p></div>` : ""}
<form method="post" action="/login">
<label>Passphrase<input name="passphrase" type="password" autocomplete="current-password" required${passkeys ? "" : " autofocus"}></label>
<label>Code from your authenticator<input name="code" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" required></label>
<button type="submit"${passkeys ? ' class="quiet"' : ""}>Log in</button>
</form>
</main>${passkeys ? `<script>${PASSKEY_LOGIN_SCRIPT}</script>` : ""}</body></html>`;
}

// The browser hands WebAuthn bytes over as ArrayBuffers; the server speaks base64url JSON.
const PASSKEY_LOGIN_SCRIPT = `
const bytes = (s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
const text = (b) => btoa(String.fromCharCode(...new Uint8Array(b))).replace(/\\+/g, "-").replace(/\\//g, "_").replace(/=+$/, "");
const box = document.getElementById("pk"), go = document.getElementById("pk-go"), msg = document.getElementById("msg");
const say = (t) => { msg.textContent = t; msg.hidden = !t; };
if (window.PublicKeyCredential) box.hidden = false; else box.remove();
go.onclick = async () => {
  say("");
  go.disabled = true;
  try {
    const o = await (await fetch("/login/passkey/options", { method: "POST" })).json();
    if (o.error) throw new Error(o.error);
    const cred = await navigator.credentials.get({ publicKey: { ...o, challenge: bytes(o.challenge), allowCredentials: (o.allowCredentials || []).map((c) => ({ ...c, id: bytes(c.id) })) } });
    const r = cred.response;
    const res = await fetch("/login/passkey", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        id: cred.id, rawId: text(cred.rawId), type: cred.type, authenticatorAttachment: cred.authenticatorAttachment || undefined,
        clientExtensionResults: cred.getClientExtensionResults(),
        response: { clientDataJSON: text(r.clientDataJSON), authenticatorData: text(r.authenticatorData), signature: text(r.signature), userHandle: r.userHandle ? text(r.userHandle) : undefined },
      }),
    });
    if (res.ok) return location.replace("/");
    throw new Error((await res.json().catch(() => ({}))).error || "That didn't work. Log in with your passphrase.");
  } catch (e) {
    say(e.name === "NotAllowedError" ? "Cancelled, or this device has no passkey for this site." : e.message);
  } finally {
    go.disabled = false;
  }
};`;
