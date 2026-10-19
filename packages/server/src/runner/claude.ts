// Claude: Claude Code, headless, with every permission (--dangerously-skip-permissions), as the
// user logged in on this machine. Its stream-json output is one JSON event per line, and each
// model call becomes one call row. The "assistant" events only carry the usage from the start of
// a message (a handful of output tokens), so --include-partial-messages is on too: the raw
// stream's message_delta has the final usage, and the row is recorded at message_stop. (The
// result event's totals can't be used instead: after --resume they add up the whole session.)
//
// ANTHROPIC_API_KEY is removed from its environment, so a key lying around can't quietly turn
// a subscription run into a billed one (FOUNDRY_CLAUDE_USE_API_KEY=1 keeps it).
import { costOf } from "../prices.ts";
import { eachLine, exited, killTree, start } from "./proc.ts";
import type { Agent, AgentEnd, AgentRun } from "./agent.ts";
import type { Reporter } from "./reporter.ts";

interface ClaudeUsage {
  input_tokens?: number;
  output_tokens?: number;
  cache_read_input_tokens?: number;
  cache_creation_input_tokens?: number;
  cache_creation?: { ephemeral_5m_input_tokens?: number; ephemeral_1h_input_tokens?: number };
}

const LIMIT = /usage limit|limit reached|limit will reset|resets? at \d/i;

/** One line saying what a tool call does. */
function brief(name: string, input: Record<string, unknown> = {}): string {
  const pick = input.command ?? input.file_path ?? input.path ?? input.pattern ?? input.url ?? input.description ?? input.prompt;
  const text = typeof pick === "string" ? pick : JSON.stringify(input);
  return `→ ${name}: ${text.replace(/\s+/g, " ").slice(0, 240)}`;
}

/**
 * Reads Claude Code's stream-json output, line by line: call rows and log lines to `report`, and
 * the session id and a usage-limit message (held) for the end of the attempt.
 */
export function claudeStream(model: string, attempt: number, session: string | null, report: Pick<Reporter, "event" | "call">) {
  let sessionId: string | undefined = session ?? undefined;
  let held: string | undefined;
  // Messages not recorded yet, by id; which one is streaming in each stream (the main
  // conversation is "", a subagent's is its parent_tool_use_id); and those already recorded.
  const open = new Map<string, { model: string; usage: ClaudeUsage; t0: number }>();
  const streaming = new Map<string, string>();
  const recorded = new Set<string>();

  const record = (id: string | undefined) => {
    const msg = id && open.get(id);
    if (!msg) return;
    open.delete(id);
    recorded.add(id);
    const { model: m, usage: u, t0 } = msg;
    if (m.startsWith("<")) return; // "<synthetic>": Claude Code's own error messages, no model call
    const tokens = {
      input: u.input_tokens ?? 0,
      cached: u.cache_read_input_tokens ?? 0,
      cacheWrite: u.cache_creation_input_tokens ?? 0,
      cacheWrite1h: u.cache_creation?.ephemeral_1h_input_tokens ?? 0,
      output: u.output_tokens ?? 0,
      thoughts: 0, // Claude counts thinking inside output_tokens
    };
    const { cacheWrite1h: _, ...row } = tokens;
    report.call({ at: new Date().toISOString(), attempt, model: m, status: 200, ...row, usd: costOf(m, tokens), ms: Date.now() - t0 });
  };
  // Whatever never reached message_stop (Claude Code's own messages, a killed process).
  const recordRest = () => [...open.keys()].forEach(record);

  const line = (line: string) => {
    if (!line.trim()) return;
    let ev: Record<string, any>;
    try {
      ev = JSON.parse(line);
    } catch {
      report.event("out", line);
      if (LIMIT.test(line)) held = line.trim();
      return;
    }
    if (ev.type === "system" && ev.subtype === "init") {
      sessionId = ev.session_id;
      report.event("info", `Claude Code ${ev.claude_code_version ?? ""} · ${ev.model} · session ${ev.session_id}`);
    } else if (ev.type === "stream_event" && ev.event) {
      const stream: string = ev.parent_tool_use_id ?? "";
      const e = ev.event;
      if (e.type === "message_start" && e.message?.id) {
        streaming.set(stream, e.message.id);
        open.set(e.message.id, { model: e.message.model ?? model, usage: e.message.usage ?? {}, t0: Date.now() });
      } else if (e.type === "message_delta" && e.usage) {
        const msg = open.get(streaming.get(stream) ?? "");
        if (msg) msg.usage = { ...msg.usage, ...e.usage };
      } else if (e.type === "message_stop") {
        record(streaming.get(stream));
        streaming.delete(stream);
      }
    } else if (ev.type === "assistant" && ev.message) {
      const msg = ev.message;
      if (!open.has(msg.id) && !recorded.has(msg.id)) open.set(msg.id, { model: msg.model ?? model, usage: msg.usage ?? {}, t0: Date.now() });
      for (const block of msg.content ?? []) {
        if (block.type === "text" && block.text?.trim()) report.event("out", block.text.trim().slice(0, 4000));
        if (block.type === "tool_use") report.event("out", brief(block.name, block.input));
      }
    } else if (ev.type === "user" && Array.isArray(ev.message?.content)) {
      for (const block of ev.message.content) {
        if (block.type === "tool_result" && block.is_error) {
          const text = typeof block.content === "string" ? block.content : JSON.stringify(block.content);
          report.event("out", `← error: ${text.split("\n")[0].slice(0, 300)}`);
        }
      }
    } else if (ev.type === "result") {
      recordRest();
      // After --resume, Claude Code's figure covers the whole session, earlier attempts included.
      const cost = typeof ev.total_cost_usd === "number" ? `, Claude Code's own figure $${ev.total_cost_usd.toFixed(2)}${session ? " for the whole session" : ""}` : "";
      const s = Math.round((ev.duration_ms ?? 0) / 1000);
      report.event(ev.is_error ? "warn" : "info", `Claude finished (${ev.subtype}): ${ev.num_turns ?? "?"} turns in ${s < 90 ? `${s} s` : `${Math.round(s / 60)} min`}${cost}.`);
      if (ev.is_error && typeof ev.result === "string") {
        report.event("warn", ev.result.slice(0, 1000));
        if (LIMIT.test(ev.result)) held = ev.result.slice(0, 300);
      }
    }
  };
  const noteHeld = (text: string) => {
    if (LIMIT.test(text)) held = text.trim().slice(0, 300);
  };
  return { line, noteHeld, recordRest, end: () => ({ session: sessionId, held }) };
}

export function claudeAgent(): Agent {
  return {
    async run({ cwd, prompt, model, effort, attempt, session, report }): Promise<AgentRun> {
      const env: NodeJS.ProcessEnv = { ...process.env };
      if (process.env.FOUNDRY_CLAUDE_USE_API_KEY !== "1") delete env.ANTHROPIC_API_KEY;
      delete env.CLAUDECODE; // set when this runner itself was started from a Claude Code session
      delete env.CLAUDE_CODE_ENTRYPOINT;

      const args = ["-p", prompt, "--dangerously-skip-permissions", "--output-format", "stream-json", "--verbose", "--include-partial-messages", "--model", model];
      if (effort) args.push("--effort", effort);
      if (session) args.push("--resume", session);
      const child = start("claude", args, { cwd, env });

      const stream = claudeStream(model, attempt, session, report);
      eachLine(child.stdout!, stream.line);
      eachLine(child.stderr!, (line) => {
        if (!line.trim()) return;
        report.event("warn", line);
        stream.noteHeld(line);
      });

      return {
        stop: () => killTree(child),
        done: exited(child).then((code): AgentEnd => {
          stream.recordRest();
          return { code, ...stream.end() };
        }),
      };
    },
  };
}
