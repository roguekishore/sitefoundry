// node --test packages/server/src/server.test.ts
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { hashPassphrase, totp } from "./auth.ts";
import { Db } from "./db.ts";
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
