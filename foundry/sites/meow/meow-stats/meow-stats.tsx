import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MeowHeading } from "@foundry/meow-heading";

export interface MeowStat {
  /** the figure, e.g. "$ 4B+" or "Thousands" */
  value: ReactNode;
  /** what it counts */
  label: ReactNode;
}

export interface MeowStatsProps {
  /** the section title */
  title: ReactNode;
  /** three figures: the first fills the big dark card */
  stats: MeowStat[];
  className?: string;
}

/** One large dark figure card beside two outlined ones. */
export function MeowStats({ title, stats, className }: MeowStatsProps) {
  const [lead, ...rest] = stats;
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-8 pb-[calc(var(--section-y)*0.75)] lg:pt-16 lg:pb-section">
        <MeowHeading title={title} />
        <div className="mt-8 grid gap-3 lg:mt-9 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-6">
          {lead && (
            <div className="dark flex flex-col justify-end rounded-lg border border-border bg-background px-6 pt-12 pb-8 text-foreground lg:row-span-2 lg:pt-24">
              <p className="font-display text-[4.5rem]/[1] font-semibold tracking-[-0.04em] whitespace-nowrap lg:text-[7.5rem]/[1]">{lead.value}</p>
              <span aria-hidden className="mt-6 block h-px w-6 bg-foreground/25" />
              <p className="mt-3 text-sm/5 font-semibold lg:text-base/6 lg:font-normal">{lead.label}</p>
            </div>
          )}
          {rest.map((s, i) => (
            <div key={i} className="flex flex-col justify-end rounded-lg border border-border bg-card px-6 pt-14 pb-8 text-card-foreground lg:pt-12">
              <p className="font-display text-[3.5rem]/16 font-semibold tracking-[-0.03em]">{s.value}</p>
              <span aria-hidden className="mt-4 block h-px w-6 bg-border" />
              <p className="mt-3 text-base/6">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
