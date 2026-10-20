// What the server, the runner and the gallery's run pages say to each other. Types only, plus
// the lists the run form offers, so all three agree on them.

export type Backend = "gemini" | "claude";

/**
 * queued → claimed (a runner took it) → running → done | failed | stopped | held.
 * held: it can't go on right now (Claude's usage limit); Resume puts it back in the queue.
 */
export type RunState = "queued" | "claimed" | "running" | "done" | "failed" | "stopped" | "held";
export const ACTIVE_STATES: RunState[] = ["queued", "claimed", "running"];

/** Tokens and cost, for one call or added up. `input` is the uncached part. */
export interface Usage {
  calls: number;
  errors: number;
  input: number;
  cached: number;
  cacheWrite: number;
  output: number;
  thoughts: number;
  usd: number;
}

export const NO_USAGE: Usage = { calls: 0, errors: 0, input: 0, cached: 0, cacheWrite: 0, output: 0, thoughts: 0, usd: 0 };

export interface Run {
  id: number;
  url: string;
  slug: string;
  /** other pages to recreate besides the landing page, e.g. ["pricing", "about"] */
  pages: string[];
  backend: Backend;
  model: string;
  /** Claude's --effort; null = the CLI's default */
  effort: string | null;
  /** your own words instead of the skill; null = /recreate-site */
  prompt: string | null;
  maxUsd: number;
  maxHours: number;
  state: RunState;
  createdAt: string;
  startedAt: string | null;
  endedAt: string | null;
  branch: string | null;
  /** `git log --oneline main..branch` when the run ended */
  commits: string | null;
  error: string | null;
  /** the latest thing worth saying about it ("restart 1 of 3", "pushed") */
  note: string | null;
  /** 0 for the first attempt, then each restart */
  attempt: number;
  /** where the built branch can be browsed, e.g. /p/linear/ */
  preview: string | null;
  stopRequested: boolean;
  usage: Usage;
  byModel: Record<string, Usage>;
}

export interface Call {
  at: string;
  attempt: number;
  model: string;
  /** HTTP status for Gemini; 200 for every Claude message */
  status: number;
  input: number;
  cached: number;
  cacheWrite: number;
  output: number;
  thoughts: number;
  usd: number;
  /** how long the call took, when known */
  ms: number | null;
}

export type EventKind = "out" | "info" | "warn" | "error";
export interface RunEvent {
  id?: number;
  at: string;
  kind: EventKind;
  text: string;
}

/** What the run form sends. `target` is the slug, then any page names: "linear pricing about". */
export interface RunRequest {
  url: string;
  target: string;
  backend: Backend;
  model: string;
  effort?: string | null;
  prompt?: string | null;
  maxUsd?: number;
  maxHours?: number;
}

/** runner → server, every couple of seconds while a run goes. */
export interface Report {
  state?: RunState;
  attempt?: number;
  branch?: string;
  commits?: string;
  error?: string | null;
  note?: string;
  events?: RunEvent[];
  calls?: Call[];
}
export interface ReportReply {
  /** someone pressed Stop */
  stop: boolean;
}

/** server → runner: the job, and whether earlier work on it is on disk to continue from. */
export interface Job {
  run: Run;
  resume: boolean;
}

/**
 * A thumbnails job: the runner shoots main's gallery (`pnpm build:thumbs`, only what has no
 * thumbnail yet) and sends public/thumbs/ to the server, which serves it at /thumbs/.
 * queued → running → done | failed | stopped.
 */
export type ThumbsState = "queued" | "running" | "done" | "failed" | "stopped";
export interface ThumbsJob {
  id: number;
  state: ThumbsState;
  /** why it was queued: "deployed f0ec3bf", "asked for" */
  reason: string;
  /** the commit of main that was shot (set by the runner) */
  commit: string | null;
  createdAt: string;
  startedAt: string | null;
  endedAt: string | null;
  error: string | null;
  /** build:thumbs' last summary line, e.g. "done in 4m 10s · 12 shot · 0 failed · 1 with warnings" */
  summary: string | null;
  /** its output, the last 400 lines */
  log: string;
  stopRequested: boolean;
}
/** server → runner, when the work is thumbnails (the runner tells the two apart by `thumbs`). */
export interface ThumbsWork {
  thumbs: ThumbsJob;
}
/** runner → server while a thumbnails job goes. */
export interface ThumbsReport {
  state?: ThumbsState;
  commit?: string;
  error?: string | null;
  summary?: string;
  lines?: string[];
}
/** What the Runs page shows about thumbnails. */
export interface ThumbsInfo {
  /** the newest job, if any */
  latest: ThumbsJob | null;
  /** when the server last received thumbnails (null: it has none, the gallery shows placeholders) */
  receivedAt: string | null;
}

export type MachineState = "off" | "starting" | "on" | "stopping" | "unknown";
export interface MachineInfo {
  state: MachineState;
  kind: "local" | "ec2";
  /** when the runner last asked for work or reported */
  runnerSeen: string | null;
  /** the run instance switches off after this many idle minutes */
  idleMinutes: number;
}

export interface Options {
  backends: Record<Backend, { label: string; models: string[]; efforts: string[] }>;
  defaults: { maxUsd: number; maxHours: number };
  /** the run instance's own gallery while a run goes, if it can be reached */
  liveUrl: string | null;
  auth: boolean;
}

/** A machine logged in to the foundry MCP at /mcp (the Devices page lists them). */
export interface Device {
  id: number;
  /** what the owner called it on the login page */
  name: string;
  /** the app that logged in, as it registered itself (e.g. Claude Code's name for the server) */
  app: string;
  createdAt: string;
  lastUsedAt: string | null;
  revokedAt: string | null;
}
/** A passkey that can log in, as the passkeys page lists it. */
export interface Passkey {
  /** the credential id (base64url) */
  id: string;
  name: string;
  createdAt: string;
  lastUsedAt: string | null;
}

export const BACKENDS: Options["backends"] = {
  gemini: { label: "Gemini CLI (Vertex, Standard tier)", models: ["gemini-4-argon", "gemini-3.8-flash"], efforts: [] },
  claude: {
    label: "Claude Code (your login)",
    models: ["claude-opus-5-5", "claude-sonnet-5-5", "claude-fable-5-1", "claude-haiku-4-5"],
    efforts: ["low", "medium", "high", "xhigh", "max"],
  },
};
