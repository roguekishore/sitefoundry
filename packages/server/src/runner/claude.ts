// Claude: Claude Code, headless, with every permission (--dangerously-skip-permissions), as the
// user logged in on this machine. Its stream-json output is one JSON event per line; each
// assistant message carries its usage, which becomes one call row. A message can arrive as
// several events with the same id, so a call is recorded when the next message starts.
//
// ANTHROPIC_API_KEY is removed from its environment, so a key lying around can't quietly turn
// a subscription run into a billed one (FOUNDRY_CLAUDE_USE_API_KEY=1 keeps it).
import { costOf } from "../prices.ts";
import { eachLine, exited, killTree, start } from "./proc.ts";
import type { Agent, AgentEnd, AgentRun } from "./agent.ts";

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

export function claudeAgent(): Agent {
  return {
    async run({ cwd, prompt, model, effort, attempt, session, report }): Promise<AgentRun> {
      const env: NodeJS.ProcessEnv = { ...process.env };
      if (process.env.FOUNDRY_CLAUDE_USE_API_KEY !== "1") delete env.ANTHROPIC_API_KEY;
      delete env.CLAUDECODE; // set when this runner itself was started from a Claude Code session
      delete env.CLAUDE_CODE_ENTRYPOINT;

      const args = ["-p", prompt, "--dangerously-skip-permissions", "--output-format", "stream-json", "--verbose", "--model", model];
      if (effort) args.push("--effort", effort);
      if (session) args.push("--resume", session);
      const child = start("claude", args, { cwd, env });

      let sessionId: string | undefined = session ?? undefined;
      let held: string | undefined;
      // the message being received: its id, model, latest usage, and when it began
      let current: { id: string; model: string; usage: ClaudeUsage; t0: number } | null = null;

      const flush = () => {
        if (!current) return;
        const { model: m, usage: u, t0 } = current;
        current = null;
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

      eachLine(child.stdout!, (line) => {
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
        } else if (ev.type === "assistant" && ev.message) {
          const msg = ev.message;
          const same = current;
          if (same && same.id === msg.id) same.usage = msg.usage ?? same.usage;
          else {
            flush();
            current = { id: msg.id, model: msg.model ?? model, usage: msg.usage ?? {}, t0: Date.now() };
          }
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
          flush();
          const cost = typeof ev.total_cost_usd === "number" ? `, Claude Code's own figure $${ev.total_cost_usd.toFixed(2)}` : "";
          report.event(ev.is_error ? "warn" : "info", `Claude finished (${ev.subtype}): ${ev.num_turns ?? "?"} turns in ${Math.round((ev.duration_ms ?? 0) / 60000)} min${cost}.`);
          if (ev.is_error && typeof ev.result === "string") {
            report.event("warn", ev.result.slice(0, 1000));
            if (LIMIT.test(ev.result)) held = ev.result.slice(0, 300);
          }
        }
      });
      eachLine(child.stderr!, (line) => {
        if (!line.trim()) return;
        report.event("warn", line);
        if (LIMIT.test(line)) held = line.trim();
      });

      return {
        stop: () => killTree(child),
        done: exited(child).then((code): AgentEnd => {
          flush();
          return { code, held, session: sessionId };
        }),
      };
    },
  };
}
