import type { CSSProperties, ReactNode } from "react";
import { Check, CircleX } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FunctionhealthHeading, type HeadingPart } from "@foundry/functionhealth-heading";

export interface FunctionhealthCompareRow {
  label: string;
  /** our value: a string (bold), or true for a check */
  ours: string | boolean;
  /** the other column: a string (bold), or false for a cross */
  theirs: string | boolean;
}

export interface FunctionhealthCompareProps {
  title: HeadingPart[];
  /** the brand mark shown at the top of the terracotta pillar */
  mark: ReactNode;
  /** header over the other column, e.g. "Standard checkup" */
  otherLabel: string;
  rows: FunctionhealthCompareRow[];
  /** screen-reader words for the two icons */
  yesLabel: string;
  noLabel: string;
  className?: string;
}

function Cell({ value, yes, no, ours }: { value: string | boolean; yes: string; no: string; ours: boolean }) {
  if (typeof value === "string") return <span className="text-base font-semibold lg:text-[1.0625rem]">{value}</span>;
  return value ? (
    <span className="grid size-6 place-items-center rounded-full bg-background text-primary" role="img" aria-label={yes}>
      <Check className="size-3.5" strokeWidth={3} />
    </span>
  ) : (
    <CircleX className={cn("size-6", ours ? "text-background" : "text-muted-foreground")} strokeWidth={1} role="img" aria-label={no} />
  );
}

export function FunctionhealthCompare({ title, mark, otherLabel, rows, yesLabel, noLabel, className }: FunctionhealthCompareProps) {
  return (
    <section className={cn("bg-background py-section text-foreground [--c1:6.9rem] [--c2:5.9rem] lg:[--c1:13.75rem] lg:[--c2:13.9rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <FunctionhealthHeading title={title} className="[&_h2]:text-balance" />
        <div className="relative mx-auto mt-[7.25rem] max-w-[68rem] pb-10 lg:mt-[9.25rem]">
          <p className="absolute right-4 bottom-[calc(100%+0.75rem)] w-[var(--c2)] text-center text-sm leading-tight font-light lg:right-10">{otherLabel}</p>
          <div className="grid grid-cols-[minmax(0,1fr)_var(--c1)_var(--c2)] rounded-3xl bg-card px-4 pb-3.5 lg:px-10">
            <div
              className="relative z-0 col-start-2 row-start-1 -mt-[4.625rem] -mb-[3.6rem] rounded-3xl bg-linear-to-b from-primary to-glow text-background shadow-[0_18px_40px_color-mix(in_oklab,var(--foreground)_14%,transparent)]"
              style={{ gridRow: `1 / span ${rows.length}` }}
            >
              <div className="flex h-[4.625rem] items-center justify-center border-b border-background/25 text-background">{mark}</div>
            </div>
            {rows.map((r, i) => (
              <div key={r.label} className="contents">
                <p className={cn("col-start-1 flex items-center py-4 pr-2 text-base leading-snug font-light lg:min-h-[4.4375rem] lg:text-[1.0625rem]", i < rows.length - 1 && "border-b border-border", "row-start-[var(--r)]")} style={{ "--r": i + 1 } as CSSProperties}>
                  {r.label}
                </p>
                <div className={cn("relative z-10 col-start-2 flex items-center justify-center", i < rows.length - 1 && "border-b border-background/25", "row-start-[var(--r)]")} style={{ "--r": i + 1 } as CSSProperties}>
                  <Cell value={r.ours} yes={yesLabel} no={noLabel} ours />
                </div>
                <div className={cn("col-start-3 flex items-center justify-center", i < rows.length - 1 && "border-b border-border", "row-start-[var(--r)]")} style={{ "--r": i + 1 } as CSSProperties}>
                  <Cell value={r.theirs} yes={yesLabel} no={noLabel} ours={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
