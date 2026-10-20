import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Backdrop } from "@foundry/plumeform-v2-backdrop";
import { PlumeformV2GlassCard } from "@foundry/plumeform-v2-glass-card";
import { PlumeformV2Heading } from "@foundry/plumeform-v2-heading";

export interface PlumeformV2Stat {
  /** the line above the figure */
  label: string;
  /** the figure, e.g. "150" or "$12" */
  value: string;
  /** a line under the figure */
  note?: string;
}

export interface PlumeformV2GlanceProps {
  eyebrow?: string;
  title: ReactNode;
  stats: PlumeformV2Stat[];
  backdrop?: ReactNode;
  id?: string;
  className?: string;
}

const figure =
  "bg-[linear-gradient(135deg,var(--foreground),var(--primary)_45%,var(--highlight))] bg-clip-text font-display leading-none font-extrabold tracking-[-0.05em] text-transparent";

export function PlumeformV2Glance({ eyebrow, title, stats, backdrop, id, className }: PlumeformV2GlanceProps) {
  const bento = stats.length === 4;
  return (
    <section id={id} className={cn("dark relative isolate overflow-clip px-gutter py-[calc(var(--section-y)*0.85)] text-foreground lg:py-section", className)}>
      <PlumeformV2Backdrop media={backdrop} />
      <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
        <PlumeformV2Heading eyebrow={eyebrow} title={title} className="max-w-[41rem]" />
        <ul className={cn("mt-12 grid gap-4 lg:mt-14", bento ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3")}>
          {stats.map((s, i) => {
            const tall = bento && i === 0;
            const wide = bento && i === 3;
            return (
              <PlumeformV2GlassCard
                as="li"
                key={s.label}
                step={i}
                className={cn("flex flex-col p-8", tall && "md:row-span-2 md:min-h-[29rem]", wide && "md:col-span-2 lg:col-start-2")}
              >
                <p className="text-sm font-semibold text-foreground/80">{s.label}</p>
                <p className={cn(figure, tall ? "mt-7 text-[4.5rem] md:mt-auto md:pt-16 md:text-[6.5rem] lg:text-[8rem]" : "mt-7 text-[4rem] lg:text-[4.5rem]")}>{s.value}</p>
                {s.note && <p className="mt-6 text-sm text-muted-foreground">{s.note}</p>}
              </PlumeformV2GlassCard>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
