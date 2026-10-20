// Checks a foundry MCP over HTTP the way Claude Code uses it: logs in with OAuth through the MCP
// SDK's own client (discovery, registration, PKCE; the passphrase is typed into the login page by
// this script), lists the tools, calls search, get and preview, refreshes the token, then logs
// out and checks the token is refused. Exits non-zero on any failure.
//   node packages/mcp/smoke.mjs https://foundry.themaverick.tech/mcp
//   (asks for the passphrase, or takes FOUNDRY_PASSPHRASE; a server without a login needs none)
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createInterface } from "node:readline/promises";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { UnauthorizedError } from "@modelcontextprotocol/sdk/client/auth.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const [url] = process.argv.slice(2);
if (!url) {
  console.error("usage: node packages/mcp/smoke.mjs <url ending in /mcp>");
  process.exit(2);
}
const check = (ok, what) => {
  console.log(`${ok ? "ok  " : "FAIL"} ${what}`);
  if (!ok) process.exitCode = 1;
  return ok;
};

// What Claude Code keeps on disk, kept in memory here. Logging in is the login page's form,
// posted by this script instead of a browser; the code comes back in the redirect.
let code;
const store = {};
const provider = {
  redirectUrl: "http://localhost:53682/callback",
  clientMetadata: { client_name: "foundry smoke test", redirect_uris: ["http://localhost:53682/callback"], grant_types: ["authorization_code", "refresh_token"], response_types: ["code"], token_endpoint_auth_method: "none" },
  clientInformation: () => store.client,
  saveClientInformation: (c) => (store.client = c),
  tokens: () => store.tokens,
  saveTokens: (t) => (store.tokens = t),
  saveCodeVerifier: (v) => (store.verifier = v),
  codeVerifier: () => store.verifier,
  async redirectToAuthorization(authUrl) {
    const page = await fetch(authUrl);
    check(page.ok, `login page: HTTP ${page.status}`);
    const html = await page.text();
    const asksPassphrase = html.includes('name="passphrase"');
    const form = new URLSearchParams(authUrl.searchParams);
    form.set("name", "smoke test");
    form.set("allow", "1");
    if (asksPassphrase) form.set("passphrase", await passphrase());
    const sent = await fetch(new URL("/oauth/authorize", authUrl), { method: "POST", body: form, redirect: "manual" });
    const back = sent.headers.get("location") ? new URL(sent.headers.get("location")) : null;
    code = back?.searchParams.get("code");
    check(code, `allowed${asksPassphrase ? " with the passphrase" : " (no login on this server)"}: ${code ? "a code came back" : `HTTP ${sent.status} ${back?.searchParams.get("error_description") ?? ""}`}`);
  },
};

async function passphrase() {
  if (process.env.FOUNDRY_PASSPHRASE) return process.env.FOUNDRY_PASSPHRASE;
  const rl = createInterface({ input: process.stdin, output: process.stderr });
  const answer = await rl.question("passphrase: ");
  rl.close();
  return answer;
}

const connect = async () => {
  const client = new Client({ name: "foundry-smoke", version: "1.0.0" });
  await client.connect(new StreamableHTTPClientTransport(new URL(url), { authProvider: provider }));
  return client;
};

let client;
try {
  client = await connect();
  check(false, "the server let an unauthenticated client in");
} catch (e) {
  if (!(e instanceof UnauthorizedError) || !code) throw e;
  await new StreamableHTTPClientTransport(new URL(url), { authProvider: provider }).finishAuth(code);
  check(store.tokens?.access_token, `logged in: tokens for ${store.tokens.expires_in} s, with a refresh token`);
  client = await connect();
}

const textOf = (r) => r.content.filter((c) => c.type === "text").map((c) => c.text).join("\n");
const tools = (await client.listTools()).tools.map((t) => t.name).sort();
check(tools.join(",") === "get,preview,search", `tools: ${tools.join(", ")}`);
console.log(`     instructions: ${client.getInstructions()}`);

const found = await client.callTool({ name: "search", arguments: { type: "block", limit: 3 } });
const first = textOf(found).match(/^- ([^@\s]+)@/m)?.[1];
check(!found.isError && first, `search: ${textOf(found).split("\n")[0]}`);

const item = await client.callTool({ name: "get", arguments: { name: first, code: false } });
check(!item.isError && textOf(item).startsWith(first), `get ${first}: ${textOf(item).split("\n")[0]}`);

const t0 = Date.now();
const shot = await client.callTool({ name: "preview", arguments: { name: first, fresh: true } });
const image = shot.content.find((c) => c.type === "image");
check(!shot.isError && image, `preview ${first}: ${shot.isError ? textOf(shot) : `${Math.round((image.data.length * 3) / 4 / 1024)} KB PNG in ${((Date.now() - t0) / 1000).toFixed(1)} s`}`);
if (image) {
  const file = join(tmpdir(), `foundry-smoke-${first}.png`);
  writeFileSync(file, Buffer.from(image.data, "base64"));
  console.log(`     saved ${file}`);
}
await client.close();

// Refresh and log out the way a client does, at the endpoints the server's metadata names.
const origin = new URL(url).origin;
const meta = await (await fetch(`${origin}/.well-known/oauth-authorization-server`)).json();
const post = (endpoint, params) => fetch(endpoint, { method: "POST", body: new URLSearchParams({ client_id: store.client.client_id, ...params }) });
const renewed = await (await post(meta.token_endpoint, { grant_type: "refresh_token", refresh_token: store.tokens.refresh_token })).json();
check(renewed.access_token && renewed.refresh_token !== store.tokens.refresh_token, "refresh: a new access token and a new refresh token");
await post(meta.revocation_endpoint, { token: renewed.refresh_token });
const after = await fetch(url, { method: "POST", headers: { authorization: `Bearer ${renewed.access_token}`, "content-type": "application/json", accept: "application/json, text/event-stream" }, body: "{}" });
check(after.status === 401, `logged out: the token is refused (HTTP ${after.status})`);
