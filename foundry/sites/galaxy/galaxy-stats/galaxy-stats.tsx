import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GalaxyStat {
  /** the figure as shown, e.g. "$2.1B" */
  value: string;
  /** what it measures */
  label: string;
}

export interface GalaxyStatsProps {
  /** the figures (four on the original) */
  stats: GalaxyStat[];
  /** a full-bleed backdrop behind the band (e.g. the hero's canvas continued); none by default */
  backdrop?: ReactNode;
  className?: string;
}

export function GalaxyStats({ stats, backdrop, className }: GalaxyStatsProps) {
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      {backdrop && <div className="absolute inset-0 -z-10">{backdrop}</div>}
      <dl className="mx-auto grid max-w-page gap-8 px-gutter pt-4 pb-section text-center lg:grid-cols-4 lg:gap-8 lg:py-section">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse items-center gap-2">
            <dt className="text-base leading-6 lg:text-lg lg:leading-7">{stat.label}</dt>
            <dd className="font-display text-[3rem] leading-[1.1] font-[560] tracking-[-0.04em] [font-stretch:var(--galaxy-stretch,100%)] lg:text-[3.75rem] lg:leading-[1.0667]">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
