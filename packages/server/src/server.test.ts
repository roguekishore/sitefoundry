// node --test packages/server/src/server.test.ts
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { hashPassphrase, totp } from "./auth.ts";
import { Db } from "./db.ts";
import { costOf } from "./prices.ts";

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
