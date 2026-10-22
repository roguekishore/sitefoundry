import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelCard, type BevelTint } from "@foundry/bevel-card";
import { BevelHeading, bevelLead, bevelTitle } from "@foundry/bevel-heading";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";

export interface BevelMetric {
  /** the metric's name, the card title */
  title: ReactNode;
  /** two or three lines about it */
  text: ReactNode;
  /** the phone screenshot; a phone-shaped placeholder when empty */
  media?: ReactNode;
  /** the colour rising from the card's foot */
  tint?: BevelTint;
}

export interface BevelMetricsProps {
  /** the section title (two lines) */
  title: ReactNode;
  /** the line under it */
  lead?: ReactNode;
  /** three metric cards */
  metrics: BevelMetric[];
  className?: string;
}

/**
 * A centered title over three tall pale cards (stacked on phones): each has a big name and a
 * grey paragraph at the top and a phone rising from the bottom edge into a soft colour wash.
 */
export function BevelMetrics({ title, lead, metrics, className }: BevelMetricsProps) {
  return (
    <section className={cn("bg-background pt-10 pb-2 text-foreground lg:pt-section lg:pb-4", className)}>
      <BevelHeading title={title} lead={lead} className="max-w-[40rem] px-gutter" />
      <ul className="mx-auto mt-11 grid max-w-page gap-4 px-gutter lg:mt-20 lg:grid-cols-3 lg:gap-8 lg:px-[calc(var(--page-gutter)*2)]">
        {metrics.map((metric, i) => (
          <li key={i}>
            <BevelCard tint={metric.tint} className="h-[38rem] px-10 pt-10 lg:h-[48rem] lg:px-12 lg:pt-12">
              <h3 className={bevelTitle.md}>{metric.title}</h3>
              <p className={cn(bevelLead, "mt-4 max-w-[18rem] lg:max-w-[21rem]")}>{metric.text}</p>
              <div className="absolute top-[14.75rem] left-1/2 aspect-[338/689] w-[73%] -translate-x-1/2 lg:top-[17.25rem] lg:w-[77%]">
                {metric.media ?? <BevelPlaceholder tone="phone" className="size-full rounded-[2.75rem]" />}
              </div>
            </BevelCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
