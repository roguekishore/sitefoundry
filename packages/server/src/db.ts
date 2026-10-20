// The runs database: one SQLite file. A run has many calls (one row per model call, with its
// tokens and cost) and many events (the agent's output lines and what the runner says).
// Totals are added up from the calls when asked for, so they can never disagree with them.
import { mkdirSync } from "node:fs";
import { dirname } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { NO_USAGE, type Call, type Device, type Passkey, type Run, type RunEvent, type RunState, type ThumbsJob, type ThumbsState, type Usage } from "./shared.ts";

/** A passkey as stored: `Passkey` plus what checking a login needs. */
export type StoredPasskey = Passkey & { publicKey: Uint8Array<ArrayBuffer>; counter: number; transports: string[] };

const SCHEMA = `
CREATE TABLE IF NOT EXISTS runs (
  id INTEGER PRIMARY KEY,
  url TEXT NOT NULL,
  slug TEXT NOT NULL,
  pages TEXT NOT NULL DEFAULT '',
  backend TEXT NOT NULL,
  model TEXT NOT NULL,
  effort TEXT,
  prompt TEXT,
  max_usd REAL NOT NULL,
  max_hours REAL NOT NULL,
  state TEXT NOT NULL,
  created_at TEXT NOT NULL,
  started_at TEXT,
  ended_at TEXT,
  branch TEXT,
  commits TEXT,
  error TEXT,
  note TEXT,
  attempt INTEGER NOT NULL DEFAULT 0,
  preview TEXT,
  stop_requested INTEGER NOT NULL DEFAULT 0,
  resume INTEGER NOT NULL DEFAULT 0,
  reported_at TEXT
);
CREATE TABLE IF NOT EXISTS calls (
  id INTEGER PRIMARY KEY,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  at TEXT NOT NULL,
  attempt INTEGER NOT NULL,
  model TEXT NOT NULL,
  status INTEGER NOT NULL,
  input INTEGER NOT NULL,
  cached INTEGER NOT NULL,
  cache_write INTEGER NOT NULL,
  output INTEGER NOT NULL,
  thoughts INTEGER NOT NULL,
  usd REAL NOT NULL,
  ms INTEGER
);
CREATE INDEX IF NOT EXISTS calls_by_run ON calls(run_id);
CREATE TABLE IF NOT EXISTS events (
  id INTEGER PRIMARY KEY,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  at TEXT NOT NULL,
  kind TEXT NOT NULL,
  text TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS events_by_run ON events(run_id, id);
CREATE TABLE IF NOT EXISTS sessions (
  hash TEXT PRIMARY KEY,
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS devices (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  token_hash TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  last_used_at TEXT,
  revoked_at TEXT
);
CREATE TABLE IF NOT EXISTS passkeys (
  id TEXT PRIMARY KEY,
  public_key BLOB NOT NULL,
  counter INTEGER NOT NULL,
  transports TEXT NOT NULL DEFAULT '',
  name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  last_used_at TEXT
);
CREATE TABLE IF NOT EXISTS thumbs (
  id INTEGER PRIMARY KEY,
  state TEXT NOT NULL,
  reason TEXT NOT NULL,
  commit_id TEXT,
  created_at TEXT NOT NULL,
  started_at TEXT,
  ended_at TEXT,
  reported_at TEXT,
  error TEXT,
  summary TEXT,
  log TEXT NOT NULL DEFAULT '',
  stop_requested INTEGER NOT NULL DEFAULT 0
);
`;

type Row = Record<string, string | number | null>;
const now = () => new Date().toISOString();

export class Db {
  readonly sql: DatabaseSync;

  constructor(file: string) {
    mkdirSync(dirname(file), { recursive: true });
    this.sql = new DatabaseSync(file);
    this.sql.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; PRAGMA busy_timeout = 5000;");
    this.sql.exec(SCHEMA);
  }

  // ---------- runs ----------

  addRun(r: Pick<Run, "url" | "slug" | "pages" | "backend" | "model" | "effort" | "prompt" | "maxUsd" | "maxHours">): Run {
    const { lastInsertRowid } = this.sql
      .prepare("INSERT INTO runs (url, slug, pages, backend, model, effort, prompt, max_usd, max_hours, state, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'queued', ?)")
      .run(r.url, r.slug, r.pages.join(" "), r.backend, r.model, r.effort, r.prompt, r.maxUsd, r.maxHours, now());
    return this.run(Number(lastInsertRowid))!;
  }

  run(id: number): Run | undefined {
    const row = this.sql.prepare("SELECT * FROM runs WHERE id = ?").get(id) as Row | undefined;
    return row && this.toRun(row);
  }

  /** Newest first. */
  runs(limit = 100): Run[] {
    return (this.sql.prepare("SELECT * FROM runs ORDER BY id DESC LIMIT ?").all(limit) as Row[]).map((r) => this.toRun(r));
  }

  runsIn(states: RunState[]): Run[] {
    const marks = states.map(() => "?").join(", ");
    return (this.sql.prepare(`SELECT * FROM runs WHERE state IN (${marks}) ORDER BY id`).all(...states) as Row[]).map((r) => this.toRun(r));
  }

  /** Changes the named fields of a run (camelCase names, as in `Run`). */
  updateRun(id: number, patch: Partial<Record<"state" | "startedAt" | "endedAt" | "branch" | "commits" | "error" | "note" | "attempt" | "preview" | "stopRequested" | "resume" | "reportedAt", string | number | boolean | null>>) {
    const entries = Object.entries(patch).filter(([, v]) => v !== undefined);
    if (!entries.length) return;
    const column = (k: string) => k.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
    const value = (v: unknown) => (typeof v === "boolean" ? Number(v) : (v as string | number | null));
    this.sql.prepare(`UPDATE runs SET ${entries.map(([k]) => `${column(k)} = ?`).join(", ")} WHERE id = ?`).run(...entries.map(([, v]) => value(v)), id);
  }

  /** The oldest queued run, marked claimed in the same step so two runners can't both take it. */
  claimNext(): { run: Run; resume: boolean } | undefined {
    const row = this.sql.prepare("UPDATE runs SET state = 'claimed', started_at = COALESCE(started_at, ?), reported_at = ? WHERE id = (SELECT id FROM runs WHERE state = 'queued' ORDER BY id LIMIT 1) RETURNING *").get(now(), now()) as Row | undefined;
    return row && { run: this.toRun(row), resume: Boolean(row.resume) };
  }

  // ---------- calls and events ----------

  addCalls(runId: number, calls: Call[]) {
    const insert = this.sql.prepare("INSERT INTO calls (run_id, at, attempt, model, status, input, cached, cache_write, output, thoughts, usd, ms) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    for (const c of calls) insert.run(runId, c.at, c.attempt, c.model, c.status, c.input, c.cached, c.cacheWrite, c.output, c.thoughts, c.usd, c.ms);
  }

  calls(runId: number): (Call & { id: number })[] {
    return (this.sql.prepare("SELECT * FROM calls WHERE run_id = ? ORDER BY id").all(runId) as Row[]).map((r) => ({
      id: Number(r.id),
      at: String(r.at),
      attempt: Number(r.attempt),
      model: String(r.model),
      status: Number(r.status),
      input: Number(r.input),
      cached: Number(r.cached),
      cacheWrite: Number(r.cache_write),
      output: Number(r.output),
      thoughts: Number(r.thoughts),
      usd: Number(r.usd),
      ms: r.ms == null ? null : Number(r.ms),
    }));
  }

  addEvents(runId: number, events: RunEvent[]) {
    const insert = this.sql.prepare("INSERT INTO events (run_id, at, kind, text) VALUES (?, ?, ?, ?)");
    for (const e of events) insert.run(runId, e.at, e.kind, e.text.slice(0, 8000));
  }

  /** A server-side note on a run, shown in its log like the runner's own. */
  say(runId: number, kind: RunEvent["kind"], text: string) {
    this.addEvents(runId, [{ at: now(), kind, text }]);
  }

  /** Events after `after` (an event id), oldest first, at most `limit`. */
  events(runId: number, after = 0, limit = 2000): RunEvent[] {
    return (this.sql.prepare("SELECT * FROM events WHERE run_id = ? AND id > ? ORDER BY id LIMIT ?").all(runId, after, limit) as Row[]).map((r) => ({
      id: Number(r.id),
      at: String(r.at),
      kind: r.kind as RunEvent["kind"],
      text: String(r.text),
    }));
  }

  /** Tokens and cost per model, from the run's calls. */
  usageByModel(runId: number): Record<string, Usage> {
    const rows = this.sql
      .prepare(
        `SELECT model, COUNT(*) AS calls, SUM(status >= 400) AS errors, SUM(input) AS input, SUM(cached) AS cached,
                SUM(cache_write) AS cache_write, SUM(output) AS output, SUM(thoughts) AS thoughts, SUM(usd) AS usd
         FROM calls WHERE run_id = ? GROUP BY model ORDER BY model`,
      )
      .all(runId) as Row[];
    return Object.fromEntries(
      rows.map((r) => [
        String(r.model),
        {
          calls: Number(r.calls),
          errors: Number(r.errors),
          input: Number(r.input),
          cached: Number(r.cached),
          cacheWrite: Number(r.cache_write),
          output: Number(r.output),
          thoughts: Number(r.thoughts),
          usd: Number(r.usd),
        },
      ]),
    );
  }

  // ---------- sessions (the login) ----------

  addSession(hash: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toISOString();
    this.sql.prepare("INSERT INTO sessions (hash, created_at, expires_at) VALUES (?, ?, ?)").run(hash, now(), expires);
  }
  hasSession(hash: string): boolean {
    return Boolean(this.sql.prepare("SELECT 1 FROM sessions WHERE hash = ? AND expires_at > ?").get(hash, now()));
  }
  dropSession(hash: string) {
    this.sql.prepare("DELETE FROM sessions WHERE hash = ? OR expires_at <= ?").run(hash, now());
  }

  // ---------- devices (the MCP's tokens; only their SHA-256 is kept, like sessions) ----------

  addDevice(name: string, tokenHash: string): Device {
    const { lastInsertRowid } = this.sql.prepare("INSERT INTO devices (name, token_hash, created_at) VALUES (?, ?, ?)").run(name, tokenHash, now());
    return this.devices().find((d) => d.id === Number(lastInsertRowid))!;
  }
  /** Newest first, revoked ones too (they show when the token was cut off). */
  devices(): Device[] {
    return (this.sql.prepare("SELECT * FROM devices ORDER BY id DESC").all() as Row[]).map((r) => ({
      id: Number(r.id),
      name: String(r.name),
      createdAt: String(r.created_at),
      lastUsedAt: (r.last_used_at as string) ?? null,
      revokedAt: (r.revoked_at as string) ?? null,
    }));
  }
  /** The device a token belongs to, if it isn't revoked; marks it used. */
  useDevice(tokenHash: string): number | undefined {
    const row = this.sql.prepare("UPDATE devices SET last_used_at = ? WHERE token_hash = ? AND revoked_at IS NULL RETURNING id").get(now(), tokenHash) as Row | undefined;
    return row ? Number(row.id) : undefined;
  }
  revokeDevice(id: number): boolean {
    return this.sql.prepare("UPDATE devices SET revoked_at = ? WHERE id = ? AND revoked_at IS NULL").run(now(), id).changes > 0;
  }

  // ---------- passkeys (the login) ----------

  addPasskey(p: { id: string; publicKey: Uint8Array; counter: number; transports: string[]; name: string }) {
    this.sql.prepare("INSERT INTO passkeys (id, public_key, counter, transports, name, created_at) VALUES (?, ?, ?, ?, ?, ?)").run(p.id, p.publicKey, p.counter, p.transports.join(" "), p.name, now());
  }
  /** Newest first. */
  passkeys(): StoredPasskey[] {
    return (this.sql.prepare("SELECT * FROM passkeys ORDER BY created_at DESC").all() as Row[]).map((r) => this.toPasskey(r));
  }
  passkey(id: string): StoredPasskey | undefined {
    const row = this.sql.prepare("SELECT * FROM passkeys WHERE id = ?").get(id) as Row | undefined;
    return row && this.toPasskey(row);
  }
  passkeyUsed(id: string, counter: number) {
    this.sql.prepare("UPDATE passkeys SET counter = ?, last_used_at = ? WHERE id = ?").run(counter, now(), id);
  }
  dropPasskey(id: string): boolean {
    return this.sql.prepare("DELETE FROM passkeys WHERE id = ?").run(id).changes > 0;
  }

  // ---------- thumbnails jobs ----------

  addThumbs(reason: string): ThumbsJob {
    const { lastInsertRowid } = this.sql.prepare("INSERT INTO thumbs (state, reason, created_at) VALUES ('queued', ?, ?)").run(reason, now());
    return this.thumbs(Number(lastInsertRowid))!;
  }
  thumbs(id: number): ThumbsJob | undefined {
    const row = this.sql.prepare("SELECT * FROM thumbs WHERE id = ?").get(id) as Row | undefined;
    return row && this.toThumbs(row);
  }
  latestThumbs(state?: ThumbsState): ThumbsJob | undefined {
    const row = (state ? this.sql.prepare("SELECT * FROM thumbs WHERE state = ? ORDER BY id DESC LIMIT 1").get(state) : this.sql.prepare("SELECT * FROM thumbs ORDER BY id DESC LIMIT 1").get()) as Row | undefined;
    return row && this.toThumbs(row);
  }
  /** The queued or running one (there is at most one). */
  activeThumbs(): ThumbsJob | undefined {
    const row = this.sql.prepare("SELECT * FROM thumbs WHERE state IN ('queued', 'running') ORDER BY id LIMIT 1").get() as Row | undefined;
    return row && this.toThumbs(row);
  }
  /** The oldest queued one, marked running in the same step. */
  claimThumbs(): ThumbsJob | undefined {
    const row = this.sql.prepare("UPDATE thumbs SET state = 'running', started_at = ?, reported_at = ? WHERE id = (SELECT id FROM thumbs WHERE state = 'queued' ORDER BY id LIMIT 1) RETURNING *").get(now(), now()) as Row | undefined;
    return row && this.toThumbs(row);
  }
  updateThumbs(id: number, patch: Partial<Record<"state" | "commitId" | "startedAt" | "endedAt" | "reportedAt" | "error" | "summary" | "stopRequested", string | number | boolean | null>>) {
    const entries = Object.entries(patch).filter(([, v]) => v !== undefined);
    if (!entries.length) return;
    const column = (k: string) => k.replace(/[A-Z]/g, (c) => "_" + c.toLowerCase());
    const value = (v: unknown) => (typeof v === "boolean" ? Number(v) : (v as string | number | null));
    this.sql.prepare(`UPDATE thumbs SET ${entries.map(([k]) => `${column(k)} = ?`).join(", ")} WHERE id = ?`).run(...entries.map(([, v]) => value(v)), id);
  }
  /** Adds output lines, keeping the last 400. */
  addThumbsLog(id: number, lines: string[]) {
    if (!lines.length) return;
    const old = String((this.sql.prepare("SELECT log FROM thumbs WHERE id = ?").get(id) as Row | undefined)?.log ?? "");
    const all = [...(old ? old.split("\n") : []), ...lines.map((l) => l.slice(0, 1000))];
    this.sql.prepare("UPDATE thumbs SET log = ? WHERE id = ?").run(all.slice(-400).join("\n"), id);
  }

  // ---------- rows → objects ----------

  private toThumbs(r: Row): ThumbsJob {
    return {
      id: Number(r.id),
      state: r.state as ThumbsState,
      reason: String(r.reason),
      commit: (r.commit_id as string) ?? null,
      createdAt: String(r.created_at),
      startedAt: (r.started_at as string) ?? null,
      endedAt: (r.ended_at as string) ?? null,
      error: (r.error as string) ?? null,
      summary: (r.summary as string) ?? null,
      log: String(r.log),
      stopRequested: Boolean(r.stop_requested),
    };
  }

  private toPasskey(r: Row): StoredPasskey {
    return {
      id: String(r.id),
      publicKey: new Uint8Array(r.public_key as unknown as Uint8Array),
      counter: Number(r.counter),
      transports: String(r.transports).split(" ").filter(Boolean),
      name: String(r.name),
      createdAt: String(r.created_at),
      lastUsedAt: (r.last_used_at as string) ?? null,
    };
  }


  private toRun(r: Row): Run {
    const byModel = this.usageByModel(Number(r.id));
    const usage = Object.values(byModel).reduce<Usage>(
      (sum, u) => ({
        calls: sum.calls + u.calls,
        errors: sum.errors + u.errors,
        input: sum.input + u.input,
        cached: sum.cached + u.cached,
        cacheWrite: sum.cacheWrite + u.cacheWrite,
        output: sum.output + u.output,
        thoughts: sum.thoughts + u.thoughts,
        usd: sum.usd + u.usd,
      }),
      { ...NO_USAGE },
    );
    return {
      id: Number(r.id),
      url: String(r.url),
      slug: String(r.slug),
      pages: String(r.pages).split(" ").filter(Boolean),
      backend: r.backend as Run["backend"],
      model: String(r.model),
      effort: (r.effort as string) ?? null,
      prompt: (r.prompt as string) ?? null,
      maxUsd: Number(r.max_usd),
      maxHours: Number(r.max_hours),
      state: r.state as RunState,
      createdAt: String(r.created_at),
      startedAt: (r.started_at as string) ?? null,
      endedAt: (r.ended_at as string) ?? null,
      branch: (r.branch as string) ?? null,
      commits: (r.commits as string) ?? null,
      error: (r.error as string) ?? null,
      note: (r.note as string) ?? null,
      attempt: Number(r.attempt),
      preview: (r.preview as string) ?? null,
      stopRequested: Boolean(r.stop_requested),
      usage,
      byModel,
    };
  }
}
