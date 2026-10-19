// List prices, USD per 1M tokens, to estimate what each call costs. The bill is the final word.
// On a Claude subscription nothing is billed per token: the figure is what the API would charge.

interface Price {
  input: number;
  /** cache reads */
  cached: number;
  /** cache writes (Claude only; 5-minute cache, the 1-hour cache costs 2× input) */
  cacheWrite: number;
  output: number;
}

// Gemini: Standard tier, as listed on 2026-10-18 (same as tools/gemini-run/run.mjs).
// Claude: Anthropic's API prices (claude-api reference, cached 2026-09-25); cache writes 1.25× input.
const PRICES: Record<string, Price> = {
  "gemini-4-argon": { input: 2.0, cached: 0.1, cacheWrite: 0, output: 10.0 }, // introductory until 2026-11-30, then 4 / 0.20 / 20
  "gemini-3.8-flash": { input: 0.75, cached: 0.07, cacheWrite: 0, output: 3.75 }, // promotional until 2026-12-31, then double
  "claude-fable-5-1": { input: 10, cached: 0.25, cacheWrite: 12.5, output: 50 },
  "claude-opus-5-5": { input: 4, cached: 0.2, cacheWrite: 5, output: 20 },
  "claude-sonnet-5-5": { input: 2, cached: 0.2, cacheWrite: 2.5, output: 10 },
  "claude-haiku-4-5": { input: 1, cached: 0.1, cacheWrite: 1.25, output: 5 },
};

/**
 * The price for a model name as the API reports it. Unknown names (a CLI's own helper calls,
 * a dated id) take the closest family's price, and failing that the dearest of their backend,
 * so a spending cap errs on the safe side.
 */
export function priceOf(model: string): Price {
  if (PRICES[model]) return PRICES[model];
  for (const family of ["fable", "opus", "sonnet", "haiku", "argon", "flash"]) {
    if (model.includes(family)) return Object.entries(PRICES).find(([name]) => name.includes(family))![1];
  }
  return model.startsWith("claude") ? PRICES["claude-fable-5-1"] : PRICES["gemini-4-argon"];
}

/** Tokens → dollars. `output` and `thoughts` are both billed as output. `cacheWrite1h` is Claude's 1-hour cache. */
export function costOf(model: string, t: { input: number; cached: number; cacheWrite: number; cacheWrite1h?: number; output: number; thoughts: number }): number {
  const p = priceOf(model);
  const write1h = t.cacheWrite1h ?? 0;
  return (t.input * p.input + t.cached * p.cached + (t.cacheWrite - write1h) * p.cacheWrite + write1h * p.input * 2 + (t.output + t.thoughts) * p.output) / 1e6;
}
