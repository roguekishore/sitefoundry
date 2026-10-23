import { cn } from "@foundry/foundry-utils";
import "./galaxy-code-card.css";

export interface GalaxyCodeToken {
  /** the characters, spaces included */
  text: string;
  /** comment: grey · key: blue · string: green · muted: dim grey · plain (default): white */
  kind?: "comment" | "key" | "string" | "muted" | "plain";
}

export interface GalaxyCodeCardProps {
  /** the grey label over the rule, e.g. "// ledger.settle" */
  label: string;
  /** the code, one array of tokens per line */
  lines: GalaxyCodeToken[][];
  /** indent these line numbers (0-based) by two characters */
  indented?: number[];
  /** end the last line with a blinking block cursor */
  cursor?: boolean;
  className?: string;
}

const kinds = {
  comment: "text-muted-foreground/60",
  key: "text-chart-2",
  string: "text-highlight",
  muted: "text-muted-foreground/60",
  plain: "text-foreground/90",
};

/** A small, static code listing; it reads as text to screen readers. */
export function GalaxyCodeCard({ label, lines, indented = [], cursor = true, className }: GalaxyCodeCardProps) {
  return (
    <figure className={cn("rounded-2xl border border-muted bg-card p-8 font-mono text-[0.9375rem] leading-[1.85]", className)}>
      <figcaption className="border-b border-muted pb-4 text-muted-foreground/60 uppercase">{label}</figcaption>
      <pre className="mt-4 font-mono whitespace-pre-wrap">
        {lines.map((line, i) => (
          <code key={i} className={cn("block", indented.includes(i) && "pl-[2ch]")}>
            {line.map((token, j) => (
              <span key={j} className={kinds[token.kind ?? "plain"]}>
                {token.text}
              </span>
            ))}
            {cursor && i === lines.length - 1 && (
              <span aria-hidden className="galaxy-code-card-cursor ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[0.2em] bg-highlight" />
            )}
          </code>
        ))}
      </pre>
    </figure>
  );
}
