import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ColumnCodeProps {
  /** the snippet; lines are split on newlines */
  code: string;
  /** small uppercase label above the code, e.g. "Response" */
  label?: string;
  /** number each line in a quiet gutter */
  lineNumbers?: boolean;
  /** draw the panel (border, fill, padding); off when the parent already frames it */
  framed?: boolean;
  className?: string;
}

// One pass over a line: quoted strings (a string followed by ":" is a JSON key), shell flags,
// keywords, numbers and `key=` names. Everything else stays in the text colour.
const TOKEN = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')(\s*:)?|(^|\s)(-{1,2}[A-Za-z]+)|\b(true|false|null)\b|\b(\d[\d.]*)\b|([A-Za-z_][\w]*)(?==)/g;

function highlight(line: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of line.matchAll(TOKEN)) {
    const start = m.index ?? 0;
    if (start > last) out.push(line.slice(last, start));
    if (m[1]) {
      out.push(
        <span key={k++} className={m[2] ? "text-foreground" : "text-highlight"}>
          {m[1]}
        </span>,
      );
      if (m[2]) out.push(m[2]);
    } else if (m[4]) {
      out.push(m[3]);
      out.push(
        <span key={k++} className="text-primary">
          {m[4]}
        </span>,
      );
    } else if (m[5]) {
      out.push(
        <span key={k++} className="text-chart-3">
          {m[5]}
        </span>,
      );
    } else if (m[6]) {
      out.push(
        <span key={k++} className="text-chart-4">
          {m[6]}
        </span>,
      );
    } else if (m[7]) {
      out.push(
        <span key={k++} className="text-primary/80">
          {m[7]}
        </span>,
      );
    }
    last = start + m[0].length;
  }
  if (last < line.length) out.push(line.slice(last));
  return out;
}

export function ColumnCode({ code, label, lineNumbers, framed = true, className }: ColumnCodeProps) {
  const lines = code.replace(/\n$/, "").split("\n");
  return (
    <div className={cn("min-w-0 font-mono text-[0.6875rem]/[1.125rem] sm:text-xs/[1.125rem]", framed && "rounded-lg border border-border bg-background/60 p-4", className)}>
      {label && <p className="mb-5 text-xs tracking-[0.06em] text-muted-foreground/80 uppercase">{label}</p>}
      <pre className="overflow-x-auto [scrollbar-width:none]">
        <code className="block w-max min-w-full">
          {lines.map((line, i) => (
            <span key={i} className="flex whitespace-pre text-foreground/90">
              {lineNumbers && <span className="w-7 shrink-0 text-muted-foreground/50 select-none">{i + 1}</span>}
              <span>{highlight(line)}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
