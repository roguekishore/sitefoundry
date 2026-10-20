// node --test packages/server/src/server.test.ts
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { Auth, hashPassphrase, totp } from "./auth.ts";
import { Db } from "./db.ts";
import { isLoopback, OAuth, pkceMatches, redirectMatches } from "./oauth.ts";
import { costOf } from "./prices.ts";
import { claudeStream } from "./runner/claude.ts";
import type { Call } from "./shared.ts";

test("TOTP matches RFC 6238's SHA-1 test vector", () => {
  // The RFC's secret "12345678901234567890" in base32; at 59 s the 8-digit code is 94287082.
  assert.equal(totp("GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ", Math.floor(59 / 30)), "287082");
  assert.equal(totp("GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ", Math.floor(1111111109 / 30)), "081804");
});

test("passphrase hashes have no $ in them (env files expand it)", () => {
  assert.doesNotMatch(hashPassphrase("correct horse battery"), /\$/);
});

test("costs: Gemini output and thoughts, Claude cache writes", () => {
  assert.equal(costOf("gemini-4-argon", { input: 1e6, cached: 1e6, cacheWrite: 0, output: 5e5, thoughts: 5e5 }), 2 + 0.1 + 10);
  // Opus 5.5: 1M new at $4, 1M 5-minute cache writes at $5, 1M 1-hour writes at $8
  assert.equal(costOf("claude-opus-5-5", { input: 1e6, cached: 0, cacheWrite: 2e6, cacheWrite1h: 1e6, output: 0, thoughts: 0 }), 4 + 5 + 8);
  // an unknown dated id takes its family's price
  assert.equal(costOf("claude-sonnet-5-5-20990101", { input: 1e6, cached: 0, cacheWrite: 0, output: 0, thoughts: 0 }), 2);
});

test("runs: claim takes the oldest queued run once, totals add up from calls", () => {
  const dir = mkdtempSync(join(tmpdir(), "foundry-db-"));
  const db = new Db(join(dir, "test.db"));
  const base = { url: "https://example.com/", pages: [], backend: "claude" as const, model: "claude-opus-5-5", effort: null, prompt: null, maxUsd: 5, maxHours: 1 };
  const a = db.addRun({ ...base, slug: "a" });
  db.addRun({ ...base, slug: "b", pages: ["pricing", "about"] });
  assert.equal(db.claimNext()?.run.id, a.id);
  assert.equal(db.claimNext()?.run.slug, "b");
  assert.equal(db.claimNext(), undefined);
  assert.deepEqual(db.run(a.id + 1)?.pages, ["pricing", "about"]);

  const call = { at: new Date().toISOString(), attempt: 0, model: "claude-opus-5-5", status: 200, input: 10, cached: 100, cacheWrite: 5, output: 7, thoughts: 0, usd: 0.5, ms: 1200 };
  db.addCalls(a.id, [call, { ...call, model: "claude-haiku-4-5", usd: 0.25 }, { ...call, status: 500, input: 0, cached: 0, cacheWrite: 0, output: 0, usd: 0 }]);
  const run = db.run(a.id)!;
  assert.equal(run.usage.calls, 3);
  assert.equal(run.usage.errors, 1);
  assert.equal(run.usage.usd, 0.75);
  assert.equal(run.byModel["claude-opus-5-5"].calls, 2);

  db.updateRun(a.id, { state: "done", stopRequested: true });
  assert.equal(db.run(a.id)?.state, "done");
  assert.equal(db.run(a.id)?.stopRequested, true);

  db.say(a.id, "info", "one");
  db.say(a.id, "out", "two");
  const [first, second] = db.events(a.id);
  assert.equal(db.events(a.id, first.id).length, 1);
  assert.equal(second.text, "two");
  db.sql.close();
  rmSync(dir, { recursive: true, force: true });
});

test("MCP login: only same-machine redirects, PKCE S256", () => {
  assert.equal(isLoopback("http://localhost:53682/callback"), true);
  assert.equal(isLoopback("http://127.0.0.1:9/cb"), true);
  assert.equal(isLoopback("http://[::1]:9/cb"), true);
  assert.equal(isLoopback("https://evil.example/cb"), false);
  assert.equal(isLoopback("http://localhost.evil.example/cb"), false);
  assert.equal(isLoopback("http://localhost:9/cb#x"), false);
  // the port may change between logins; host and path may not
  assert.equal(redirectMatches("http://localhost:4000/callback", ["http://localhost:53682/callback"]), true);
  assert.equal(redirectMatches("http://localhost:4000/other", ["http://localhost:53682/callback"]), false);
  assert.equal(redirectMatches("http://127.0.0.1:4000/callback", ["http://localhost:53682/callback"]), false);
  // RFC 7636 appendix B
  assert.equal(pkceMatches("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk", "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"), true);
  assert.equal(pkceMatches("dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXX", "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM"), false);
});

test("MCP login: passphrase → code → tokens; refresh rotates; revoking cuts the device off", () => {
  const dir = mkdtempSync(join(tmpdir(), "foundry-db-"));
  const db = new Db(join(dir, "test.db"));
  const auth = new Auth(db, { passphraseHash: hashPassphrase("correct horse battery"), totpSecret: "GEZDGNBVGY3TQOJQ", cookieDomain: null });
  const oauth = new OAuth(db, auth, () => {});
  const base = "https://foundry.example";
  const verifier = "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk";

  assert.throws(() => oauth.register({ redirect_uris: ["https://evil.example/cb"] }), /same machine/);
  const client = oauth.register({ client_name: "Claude Code (foundry)", redirect_uris: ["http://localhost:53682/callback"] });
  const ask = new URLSearchParams({
    client_id: client.client_id,
    redirect_uri: "http://localhost:53682/callback",
    response_type: "code",
    code_challenge: "E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM",
    code_challenge_method: "S256",
    state: "s1",
    resource: `${base}/mcp`,
  });
  const page = oauth.ask(ask, base);
  assert.ok("page" in page && page.page.includes("Claude Code (foundry)") && page.page.includes('name="passphrase"'));
  // a wrong passphrase gets the page again, never a code
  const wrong = oauth.approve(new URLSearchParams({ ...Object.fromEntries(ask), passphrase: "nope" }), base);
  assert.ok("page" in wrong && wrong.status === 401);
  // no PKCE: sent back with an error, not asked for the passphrase
  const noPkce = oauth.ask(new URLSearchParams({ ...Object.fromEntries(ask), code_challenge_method: "plain" }), base);
  assert.ok("redirect" in noPkce && noPkce.redirect.includes("error=invalid_request"));

  const ok = oauth.approve(new URLSearchParams({ ...Object.fromEntries(ask), passphrase: "correct horse battery", name: "work laptop" }), base);
  assert.ok("redirect" in ok);
  const back = new URL(ok.redirect);
  assert.equal(back.searchParams.get("state"), "s1");
  const code = back.searchParams.get("code")!;

  const swap = (extra: Record<string, string>) => oauth.token(new URLSearchParams({ grant_type: "authorization_code", client_id: client.client_id, code, redirect_uri: "http://localhost:53682/callback", ...extra }));
  assert.throws(() => swap({ code_verifier: "x".repeat(43) }), /PKCE/);
  // a refused swap used the code up
  assert.throws(() => swap({ code_verifier: verifier }), /used or expired/);

  const again = oauth.approve(new URLSearchParams({ ...Object.fromEntries(ask), passphrase: "correct horse battery", name: "work laptop" }), base);
  const code2 = new URL((again as { redirect: string }).redirect).searchParams.get("code")!;
  const tokens = oauth.token(new URLSearchParams({ grant_type: "authorization_code", client_id: client.client_id, code: code2, redirect_uri: "http://localhost:53682/callback", code_verifier: verifier }));
  const device = oauth.deviceFor(tokens.access_token);
  assert.ok(device !== undefined);
  assert.equal(db.devices()[0].name, "work laptop");
  assert.equal(db.devices()[0].app, "Claude Code (foundry)");
  assert.equal(db.sql.prepare("SELECT COUNT(*) AS n FROM mcp_tokens WHERE hash LIKE 'fdy_%'").get()?.n, 0);

  const refresh = (token: string, clientId = client.client_id) => oauth.token(new URLSearchParams({ grant_type: "refresh_token", client_id: clientId, refresh_token: token }));
  assert.throws(() => refresh(tokens.refresh_token, "another-app"), /refresh token/);
  const renewed = refresh(tokens.refresh_token);
  assert.equal(oauth.deviceFor(renewed.access_token), device);
  // the old access token runs out on its own; the old refresh token gets a short grace
  assert.equal(oauth.deviceFor(tokens.access_token), device);
  assert.ok(refresh(tokens.refresh_token).access_token);

  assert.equal(db.revokeDevice(device), true);
  assert.equal(oauth.deviceFor(renewed.access_token), undefined);
  assert.throws(() => refresh(renewed.refresh_token), /refresh token/);
  db.sql.close();
  rmSync(dir, { recursive: true, force: true });
});

test("Claude: a call's tokens come from the stream's message_delta, not the assistant events", () => {
  // Cut down from a real `claude -p --output-format stream-json --verbose --include-partial-messages`
  // (2.1.286): the assistant events say 3 and 1 output tokens, the deltas 324 and 234, and the
  // result's own total was 558. A subagent's call (parent_tool_use_id) streams in between.
  const start = (id: string, input: number, cached: number, written: number, parent: string | null = null) => ({
    type: "stream_event",
    parent_tool_use_id: parent,
    event: { type: "message_start", message: { id, model: "claude-haiku-4-5-20251001", usage: { input_tokens: input, cache_read_input_tokens: cached, cache_creation_input_tokens: written, cache_creation: { ephemeral_5m_input_tokens: 0, ephemeral_1h_input_tokens: written }, output_tokens: 1 } } },
  });
  const delta = (output: number, parent: string | null = null) => ({ type: "stream_event", parent_tool_use_id: parent, event: { type: "message_delta", usage: { output_tokens: output } } });
  const stop = (parent: string | null = null) => ({ type: "stream_event", parent_tool_use_id: parent, event: { type: "message_stop" } });
  const said = (id: string, content: unknown[]) => ({ type: "assistant", message: { id, model: "claude-haiku-4-5-20251001", usage: { output_tokens: 3 }, content } });
  const lines = [
    { type: "system", subtype: "init", session_id: "s-1", model: "claude-haiku-4-5", claude_code_version: "2.1.286" },
    start("msg_a", 10, 20674, 4834),
    said("msg_a", [{ type: "tool_use", name: "Task", input: { description: "look around" } }]),
    start("msg_sub", 5, 0, 100, "toolu_task"),
    delta(324),
    stop(),
    said("msg_sub", [{ type: "text", text: "found two files" }]),
    delta(40, "toolu_task"),
    stop("toolu_task"),
    start("msg_b", 8, 25508, 944),
    said("msg_b", [{ type: "text", text: "The folder contains three pairs of files" }]),
    delta(234),
    stop(),
    { type: "assistant", message: { id: "synthetic-1", model: "<synthetic>", usage: {}, content: [] } },
    { type: "result", subtype: "success", is_error: false, num_turns: 2, duration_ms: 10562, total_cost_usd: 0.019 },
  ];
  const calls: Call[] = [];
  const events: string[] = [];
  const stream = claudeStream("claude-haiku-4-5", 0, null, { call: (c) => calls.push(c), event: (_k, t) => events.push(t) });
  for (const l of lines) stream.line(JSON.stringify(l));
  stream.recordRest();

  assert.deepEqual(calls.map((c) => c.output), [324, 40, 234]);
  assert.deepEqual(calls.map((c) => c.input), [10, 5, 8]);
  assert.equal(calls[0].cached, 20674);
  assert.equal(calls[0].cacheWrite, 4834);
  // Haiku 4.5: $1 in, $0.10 cached, $2 for 1-hour cache writes, $5 out (per 1M)
  const usd = calls.reduce((t, c) => t + c.usd, 0);
  assert.ok(Math.abs(usd - 0.019) < 0.001, `estimate ${usd} vs Claude Code's 0.019`);
  assert.deepEqual(stream.end(), { session: "s-1", held: undefined });
  assert.ok(events.includes("Claude finished (success): 2 turns in 11 s, Claude Code's own figure $0.02."));
});

test("passkeys: the public key comes back byte for byte, the counter and last use update", () => {
  const dir = mkdtempSync(join(tmpdir(), "foundry-db-"));
  const db = new Db(join(dir, "test.db"));
  const publicKey = new Uint8Array([165, 1, 2, 3, 38, 0, 255]);
  db.addPasskey({ id: "abc_-1", publicKey, counter: 0, transports: ["internal", "hybrid"], name: "Phone" });
  const p = db.passkey("abc_-1")!;
  assert.deepEqual([...p.publicKey], [...publicKey]);
  assert.deepEqual(p.transports, ["internal", "hybrid"]);
  assert.equal(p.lastUsedAt, null);
  db.passkeyUsed(p.id, 7);
  assert.equal(db.passkey(p.id)?.counter, 7);
  assert.ok(db.passkey(p.id)?.lastUsedAt);
  assert.equal(db.dropPasskey(p.id), true);
  assert.equal(db.passkeys().length, 0);
  db.sql.close();
  rmSync(dir, { recursive: true, force: true });
});
