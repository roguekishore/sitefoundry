import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryStat {
  /** the big figure, e.g. "120K+" */
  value: string;
  /** what it counts */
  label: ReactNode;
}

export interface MercuryStatsProps {
  /** the centred statement above; pass a list of lines to choose the breaks */
  title?: string | string[];
  /** the figures, usually four */
  stats: MercuryStat[];
  className?: string;
}

/**
 * A centred statement over big, light figures. On desktop they sit in a row split by thin
 * vertical hairlines; on phones they stack, split by horizontal ones.
 */
export function MercuryStats({ title, stats, className }: MercuryStatsProps) {
  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        {title && <MercuryHeading size="statement" align="center" title={title} className="mx-auto max-w-[38rem]" />}
        <dl className={cn("grid border-b border-border lg:grid-flow-col lg:auto-cols-fr lg:border-b-0", title && "mt-14 lg:mt-[4.5rem]")}>
          {stats.map((s, i) => (
            // label first in the markup (dt before dd), figure first on screen (column-reverse)
            <div key={s.value} className={cn("flex flex-col-reverse items-center border-t border-border px-4 py-6 text-center lg:border-t-0 lg:py-0", i > 0 && "lg:border-l")}>
              <dt className="mt-2 max-w-[11rem] text-[0.875rem] leading-[1.35] font-[560] text-muted-foreground lg:text-lg">{s.label}</dt>
              <dd className="font-display text-[2.25rem] leading-[1.1] font-[400] tracking-[-0.02em] text-foreground lg:text-[4.085rem]">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
