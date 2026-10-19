// What a backend (Gemini, Claude) does for a run: start the agent in the worktree with a prompt,
// report each model call and output line, and say how it ended.
import type { Reporter } from "./reporter.ts";

export interface AgentStart {
  cwd: string;
  prompt: string;
  model: string;
  effort: string | null;
  attempt: number;
  /** the previous attempt's conversation, for agents that can pick one up (Claude) */
  session: string | null;
  report: Reporter;
}

export interface AgentEnd {
  code: number | null;
  /** set when the agent can't go on for now (Claude's usage limit): the run is held, not restarted */
  held?: string;
  /** the conversation this attempt used, to continue it on a restart */
  session?: string;
}

export interface AgentRun {
  stop(): void;
  done: Promise<AgentEnd>;
}

export interface Agent {
  run(start: AgentStart): Promise<AgentRun>;
}
