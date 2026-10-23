import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { UnitChip } from "@foundry/unit-chip";
import { UnitPlaceholder } from "@foundry/unit-placeholder";

export interface UnitStat {
  /** the big figure, e.g. "$40B+" */
  value: string;
  /** what it counts */
  label: string;
  /** a footnote marker after the label, e.g. "1" */
  footnote?: string;
  /** makes the label an underlined link with a live status dot before it */
  href?: string;
}

export interface UnitStatsProps {
  /** the small heading over the figures */
  heading: string;
  /** four figures read best (2×2 on phones) */
  stats: UnitStat[];
  /** the access statement: a dark lead-in, then the rest in grey */
  statement?: { lead: string; rest: string };
  /** small dark tiles before the statement (network marks); placeholders when empty */
  marks?: ReactNode[];
  /** how many mark tiles to show when no marks are given */
  markCount?: number;
  /** solid black badges (certifications) */
  badges?: string[];
  className?: string;
}

/** A hairline, a small heading, a row of big regular-weight figures, then network tiles, a line of proof and black badges. */
export function UnitStats({ heading, stats, statement, marks, markCount = 3, badges, className }: UnitStatsProps) {
  const tiles = marks ?? Array.from({ length: markCount }, () => null);
  return (
    <section className={cn("bg-background font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-6 lg:pt-10">
        <div className="border-t border-border pt-[3.25rem] lg:pt-20">
          <h2 className="text-[1.09375rem] leading-[1.2] tracking-[-0.01em] lg:text-[1.375rem]">{heading}</h2>
          <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 lg:mt-10 lg:grid-cols-4 lg:gap-x-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse lg:pl-0.5">
                <dd className="mt-1.5 text-[1.09375rem] leading-[1.3] tracking-[0.01em] text-muted-foreground lg:mt-3 lg:text-lg">
                  {s.href ? (
                    <a href={s.href} className="inline-flex items-center gap-3 text-foreground transition-opacity duration-[325ms] ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:opacity-50 motion-reduce:transition-none">
                      <span aria-hidden className="size-2 rounded-full bg-highlight" />
                      <span className="underline decoration-1 underline-offset-[0.2em]">{s.label}</span>
                    </a>
                  ) : (
                    <>
                      {s.label}
                      {s.footnote && <sup className="ml-0.5 text-[0.6em]">{s.footnote}</sup>}
                    </>
                  )}
                </dd>
                <dt className="text-[1.75rem] leading-none tracking-[-0.02em] lg:text-5xl">{s.value}</dt>
              </div>
            ))}
          </dl>

          {(statement || badges) && (
            <div className="mt-10 grid gap-6 lg:mt-24 lg:grid-cols-4 lg:items-center lg:gap-x-6">
              {statement && (
                <div className="flex flex-col gap-3 lg:col-span-2 lg:flex-row lg:items-center lg:gap-6 lg:pl-0.5">
                  <div className="flex shrink-0 gap-0.5">
                    {tiles.map((m, i) => (
                      <div key={i} className="h-[2.4375rem] w-[3.25rem] overflow-clip rounded-[0.1875rem]">
                        {m ?? <UnitPlaceholder tone="solid" className="size-full" />}
                      </div>
                    ))}
                  </div>
                  <p className="max-w-[22rem] text-[0.875rem] leading-[1.45] tracking-[0.01em] text-muted-foreground lg:text-base lg:leading-[1.4]">
                    <span className="text-foreground">{statement.lead}</span> {statement.rest}
                  </p>
                </div>
              )}
              {badges && (
                <div className="flex flex-wrap gap-3 lg:col-span-2">
                  {badges.map((b) => (
                    <UnitChip key={b} tone="solid">
                      {b}
                    </UnitChip>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
