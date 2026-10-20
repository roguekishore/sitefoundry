// The foundry MCP's login, for Claude Code on any machine: OAuth 2.1 the way the MCP spec has it
// (modelcontextprotocol.io, "Authorization"). Claude Code does all of it by itself:
//
//   1. It asks /mcp, gets a 401 pointing at /.well-known/oauth-protected-resource/mcp, and from
//      there finds this server's login at /.well-known/oauth-authorization-server.
//   2. It registers itself at /oauth/register (RFC 7591), naming where the browser comes back to:
//      a port on its own machine, http://localhost:<port>/callback.
//   3. It opens the browser at /oauth/authorize. The owner names the machine and types the
//      passphrase, only that: this opens the read-only MCP, never the site.
//   4. The browser goes back to Claude Code with a one-time code, which it swaps at /oauth/token
//      for an access token (an hour) and a refresh token (90 days, a new one at each refresh).
//
// PKCE (S256) is required, so a code is no use to whoever only saw it. Only redirects to the same
// machine are accepted: a code can only reach a program on the computer whose browser typed the
// passphrase, never a website. Tokens are kept as SHA-256 only (like sessions), and revoking a
// device on the Devices page deletes its tokens at once.
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { IncomingMessage } from "node:http";
import { PAGE_CSS, sha256, type Auth } from "./auth.ts";
import type { Db, McpClient } from "./db.ts";

const ACCESS_SECONDS = 3600;
const REFRESH_DAYS = 90;
/** A refresh token swapped for a new one still works this long: two sessions on one machine may both refresh with it. */
const REFRESH_GRACE_MS = 10 * 60e3;
const CODE_MS = 5 * 60e3;
/** Anyone may register an app, so there's a ceiling (unused registrations go after a day). */
const MAX_CLIENTS = 200;

/** A refusal in OAuth's shape: `{ error, error_description }` with an HTTP status. */
export class OAuthError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
  get body() {
    return { error: this.code, error_description: this.message };
  }
}

/** The address this server is reached at (behind Caddy: https and the public host name). */
export function baseUrl(req: IncomingMessage): string {
  const proto = req.headers["x-forwarded-proto"] === "https" ? "https" : "http";
  return `${proto}://${req.headers.host ?? "localhost"}`;
}

const LOOPBACK = new Set(["localhost", "127.0.0.1", "[::1]"]);

/** A redirect to a program on the same machine (RFC 8252 §7.3), the only kind accepted. */
export function isLoopback(uri: string): boolean {
  try {
    const u = new URL(uri);
    return u.protocol === "http:" && LOOPBACK.has(u.hostname) && !u.hash && !u.username;
  } catch {
    return false;
  }
}

/** Whether a redirect matches a registered one: all but the port must agree (a port is picked per login). */
export function redirectMatches(uri: string, registered: string[]): boolean {
  if (!isLoopback(uri)) return false;
  const a = new URL(uri);
  return registered.some((r) => {
    const b = new URL(r);
    return a.hostname === b.hostname && a.pathname === b.pathname && a.search === b.search;
  });
}

/** PKCE S256: the challenge is the base64url SHA-256 of the verifier (RFC 7636). */
export function pkceMatches(verifier: string, challenge: string): boolean {
  if (!/^[A-Za-z0-9._~-]{43,128}$/.test(verifier)) return false;
  const got = Buffer.from(createHash("sha256").update(verifier).digest("base64url"));
  const want = Buffer.from(challenge);
  return got.length === want.length && timingSafeEqual(got, want);
}

const withParams = (uri: string, params: Record<string, string | null | undefined>) => {
  const u = new URL(uri);
  for (const [k, v] of Object.entries(params)) if (v) u.searchParams.set(k, v);
  return u.toString();
};

const escape = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

interface Code {
  clientId: string;
  redirectUri: string;
  challenge: string;
  name: string;
  expires: number;
}

/** A checked authorization request. */
interface Ask {
  client: McpClient;
  redirectUri: string;
  state: string | null;
  challenge: string;
}

/** What /oauth/authorize answers: a page to show, or where to send the browser. */
export type AuthorizeReply = { page: string; status: number } | { redirect: string };

export class OAuth {
  /** One-time codes handed out and not swapped yet (lost on a restart, which only means logging in again). */
  private codes = new Map<string, Code>();

  constructor(
    private db: Db,
    private auth: Auth,
    private log: (msg: string) => void,
  ) {}

  // ---------- discovery ----------

  /** RFC 9728: what /mcp is and whose login it takes. */
  resourceMetadata(base: string) {
    return { resource: `${base}/mcp`, authorization_servers: [base], bearer_methods_supported: ["header"], resource_name: "SITEFOUNDRY foundry" };
  }

  /** RFC 8414: where the login's endpoints are. */
  serverMetadata(base: string) {
    return {
      issuer: base,
      authorization_endpoint: `${base}/oauth/authorize`,
      token_endpoint: `${base}/oauth/token`,
      registration_endpoint: `${base}/oauth/register`,
      revocation_endpoint: `${base}/oauth/revoke`,
      response_types_supported: ["code"],
      grant_types_supported: ["authorization_code", "refresh_token"],
      code_challenge_methods_supported: ["S256"],
      token_endpoint_auth_methods_supported: ["none"],
      revocation_endpoint_auth_methods_supported: ["none"],
    };
  }

  /** What /mcp's 401 says, so a client knows where to log in. */
  challenge(base: string, tokenGiven: boolean): string {
    return `Bearer resource_metadata="${base}/.well-known/oauth-protected-resource/mcp"${tokenGiven ? ', error="invalid_token"' : ""}`;
  }

  // ---------- registration (RFC 7591) ----------

  register(body: unknown) {
    const meta = (body ?? {}) as { redirect_uris?: unknown; client_name?: unknown };
    const uris = meta.redirect_uris;
    if (!Array.isArray(uris) || !uris.length || uris.length > 5 || !uris.every((u) => typeof u === "string" && isLoopback(u))) {
      throw new OAuthError(400, "invalid_redirect_uri", "Only redirects to the same machine (http://localhost:<port>/…) are allowed.");
    }
    if (this.db.pruneMcpClients() >= MAX_CLIENTS) throw new OAuthError(429, "temporarily_unavailable", "Too many registrations today. Try again tomorrow.");
    const name = String(meta.client_name ?? "").trim().slice(0, 80) || "An MCP client";
    const id = randomBytes(16).toString("base64url");
    this.db.addMcpClient(id, name, uris as string[]);
    return {
      client_id: id,
      client_id_issued_at: Math.floor(Date.now() / 1000),
      client_name: name,
      redirect_uris: uris,
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
    };
  }

  // ---------- the login page ----------

  /** GET /oauth/authorize: the page asking for the passphrase. */
  ask(p: URLSearchParams, base: string): AuthorizeReply {
    const checked = this.check(p, base);
    if (!("client" in checked)) return checked;
    return { status: 200, page: this.page(checked, p) };
  }

  /** POST /oauth/authorize: the page's form (its hidden fields repeat the request, checked again). */
  approve(p: URLSearchParams, base: string): AuthorizeReply {
    const checked = this.check(p, base);
    if (!("client" in checked)) return checked;
    if (p.get("deny")) return { redirect: withParams(checked.redirectUri, { error: "access_denied", error_description: "Cancelled on the login page.", state: checked.state }) };
    const name = (p.get("name") ?? "").trim().slice(0, 60);
    const result = this.auth.checkPassphrase(p.get("passphrase") ?? "");
    if (result !== "ok") {
      const message = result === "locked" ? "Too many tries. Wait a minute." : "That passphrase didn't match.";
      return { status: result === "locked" ? 429 : 401, page: this.page(checked, p, message) };
    }
    for (const [c, v] of this.codes) if (v.expires < Date.now()) this.codes.delete(c);
    while (this.codes.size >= 100) this.codes.delete(this.codes.keys().next().value!);
    const code = randomBytes(32).toString("base64url");
    this.codes.set(code, { clientId: checked.client.id, redirectUri: checked.redirectUri, challenge: checked.challenge, name: name || checked.client.name, expires: Date.now() + CODE_MS });
    return { redirect: withParams(checked.redirectUri, { code, state: checked.state }) };
  }

  /** The request's app and redirect must check out before anything is sent back to the redirect. */
  private check(p: URLSearchParams, base: string): Ask | AuthorizeReply {
    const fatal = (message: string): AuthorizeReply => ({ status: 400, page: page("Can't log in", `<p class="bad" role="alert">${escape(message)}</p>`) });
    const client = this.db.mcpClient(p.get("client_id") ?? "");
    if (!client) return fatal("This app isn't registered here, or its registration expired. Connect again from Claude Code.");
    const redirectUri = p.get("redirect_uri") ?? (client.redirectUris.length === 1 ? client.redirectUris[0] : "");
    if (!redirectMatches(redirectUri, client.redirectUris)) return fatal("The app asked to come back somewhere it didn't register.");
    const state = p.get("state");
    const back = (error: string, description: string): AuthorizeReply => ({ redirect: withParams(redirectUri, { error, error_description: description, state }) });
    if (p.get("response_type") !== "code") return back("unsupported_response_type", "Only response_type=code.");
    const challenge = p.get("code_challenge") ?? "";
    if (p.get("code_challenge_method") !== "S256" || !/^[A-Za-z0-9_-]{43}$/.test(challenge)) return back("invalid_request", "PKCE with S256 is required.");
    const resource = p.get("resource");
    if (resource && resource.replace(/\/+$/, "") !== `${base}/mcp`) return back("invalid_target", `This server only logs in to ${base}/mcp.`);
    return { client, redirectUri, state, challenge };
  }

  private page(ask: Ask, p: URLSearchParams, message = ""): string {
    const hidden = [...p.entries()]
      .filter(([k]) => !["passphrase", "name", "allow", "deny"].includes(k))
      .map(([k, v]) => `<input type="hidden" name="${escape(k)}" value="${escape(v)}">`)
      .join("");
    const passphrase = this.auth.enabled
      ? `<label>Passphrase<input name="passphrase" type="password" autocomplete="current-password" required autofocus></label>`
      : `<p>This server has no login (it listens only on this computer), so no passphrase is needed.</p>`;
    return page(
      "Allow the foundry MCP",
      `<p><b>${escape(ask.client.name)}</b> on this computer wants to use the foundry: search the catalog, read items and see screenshots. Nothing that writes.</p>
<p id="msg" class="bad" role="alert"${message ? "" : " hidden"}>${escape(message)}</p>
<form method="post" action="/oauth/authorize">${hidden}
<label>Name this computer<input name="name" maxlength="60" placeholder="work laptop" value="${escape(p.get("name") ?? "")}"${this.auth.enabled ? "" : " autofocus"}></label>
${passphrase}
<button type="submit" name="allow" value="1">Allow</button>
<button type="submit" name="deny" value="1" class="quiet" formnovalidate>Cancel</button>
</form>`,
    );
  }

  // ---------- tokens ----------

  /** POST /oauth/token: a code (with its PKCE verifier) or a refresh token, for a new pair of tokens. */
  token(p: URLSearchParams) {
    const clientId = p.get("client_id") ?? "";
    const grant = p.get("grant_type");
    if (grant === "authorization_code") {
      const key = p.get("code") ?? "";
      const code = this.codes.get(key);
      this.codes.delete(key);
      if (!code || code.expires < Date.now()) throw new OAuthError(400, "invalid_grant", "That code is unknown, used or expired. Log in again.");
      if (code.clientId !== clientId || (p.get("redirect_uri") ?? code.redirectUri) !== code.redirectUri) throw new OAuthError(400, "invalid_grant", "That code was given to another app.");
      if (!pkceMatches(p.get("code_verifier") ?? "", code.challenge)) throw new OAuthError(400, "invalid_grant", "The PKCE verifier doesn't match.");
      const device = this.db.addDevice(code.name, clientId);
      this.log(`MCP device #${device.id} logged in: ${device.name} (${device.app})`);
      return this.issue(device.id);
    }
    if (grant === "refresh_token") {
      const hash = sha256(p.get("refresh_token") ?? "");
      const deviceId = this.db.tokenDevice(hash, "refresh");
      if (deviceId === undefined || this.db.deviceClient(deviceId) !== clientId) throw new OAuthError(400, "invalid_grant", "That refresh token is unknown, expired or revoked. Log in again.");
      this.db.expireToken(hash, new Date(Date.now() + REFRESH_GRACE_MS).toISOString());
      return this.issue(deviceId);
    }
    throw new OAuthError(400, "unsupported_grant_type", "Only authorization_code and refresh_token.");
  }

  private issue(deviceId: number) {
    const access = `fdy_at_${randomBytes(32).toString("base64url")}`;
    const refresh = `fdy_rt_${randomBytes(32).toString("base64url")}`;
    this.db.addToken(sha256(access), deviceId, "access", new Date(Date.now() + ACCESS_SECONDS * 1000).toISOString());
    this.db.addToken(sha256(refresh), deviceId, "refresh", new Date(Date.now() + REFRESH_DAYS * 864e5).toISOString());
    return { access_token: access, token_type: "Bearer", expires_in: ACCESS_SECONDS, refresh_token: refresh };
  }

  /** POST /oauth/revoke (RFC 7009): logging out with either token cuts the whole device off. */
  revoke(p: URLSearchParams) {
    const id = this.db.tokenOwner(sha256(p.get("token") ?? ""));
    if (id !== undefined && this.db.revokeDevice(id)) this.log(`MCP device #${id} logged out`);
  }

  /** The device an access token belongs to, if it's valid; marks the device used. */
  deviceFor(accessToken: string): number | undefined {
    return this.db.tokenDevice(sha256(accessToken), "access");
  }
}

function page(title: string, body: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>SITEFOUNDRY · ${escape(title)}</title>
<style>
${PAGE_CSS}b{color:var(--fg)}</style></head><body>
<main>
<div><h1>SITEFOUNDRY</h1><p>${escape(title)}</p></div>
${body}
</main></body></html>`;
}
