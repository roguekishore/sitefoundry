import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { OnEnergyReveal } from "@foundry/on-energy-reveal";

export interface OnEnergyStat {
  /** the big thin figure in the top-right corner, e.g. "4" */
  value?: string;
  /** the small raised unit after it, e.g. "GW" or "+" */
  unit?: string;
  /** an illustration in place of the figure (e.g. a map); used when there is no value */
  media?: ReactNode;
  /** reserve an illustration slot (a placeholder when `media` is empty) instead of a figure */
  showMedia?: boolean;
  /** the card's title */
  title: string;
  /** one or two lines of copy */
  text: string;
}

export interface OnEnergyStatsProps {
  /** the cards, two per row on desktop */
  items: OnEnergyStat[];
  className?: string;
}

/**
 * Big rounded dark cards on black, two per row: a huge hairline-thin figure with a raised
 * unit in the top-right corner, and a light title with grey copy at the bottom-left. A card
 * can hold an illustration instead of the figure. Cards rise and fade in as they scroll in.
 */
export function OnEnergyStats({ items, className }: OnEnergyStatsProps) {
  return (
    <section className={cn("bg-background text-card-foreground", className)}>
      <ul className="mx-auto grid max-w-page gap-[1.2rem] px-gutter pb-48 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-[1.125rem] lg:pb-9">
        {items.map((item, i) => (
          <OnEnergyReveal
            as="li"
            key={item.title}
            rise={60}
            delay={(i % 2) * 5}
            className="relative flex min-h-[22.25rem] flex-col justify-end rounded-[1.56rem] bg-card p-[1.06rem] lg:h-[28.125rem] lg:rounded-[3.5rem] lg:px-12 lg:pb-12"
          >
            {item.value ? (
              <p className="absolute top-2 right-4 flex items-start font-display font-thin text-card-foreground/70 lg:top-[2.4rem] lg:right-12">
                <span className="text-[6.24rem]/none tracking-[-0.04em] lg:text-[7.5rem]/none">{item.value}</span>
                {item.unit && <span className="mt-1 ml-1 text-[1.82rem]/none font-light lg:mt-0 lg:ml-2 lg:text-4xl/none">{item.unit}</span>}
              </p>
            ) : item.media || item.showMedia ? (
              <div className="absolute top-20 right-8 h-[12rem] w-[7.5rem] overflow-clip rounded-[1rem] lg:top-12 lg:right-[3.75rem] lg:h-[22rem] lg:w-[14.25rem]">
                {item.media ?? <div className="size-full bg-muted/50" />}
              </div>
            ) : null}
            <h3 className="relative max-w-[20rem] text-[1.17rem]/[1.22] font-light tracking-[-0.03em] lg:max-w-[22rem] lg:text-xl/[1.2]">{item.title}</h3>
            <p className="relative mt-2 max-w-[16rem] text-[0.91rem]/[1.375] font-light tracking-[-0.02em] text-card-foreground/70 lg:mt-4 lg:max-w-[19rem] lg:text-base/[1.375]">
              {item.text}
            </p>
          </OnEnergyReveal>
        ))}
      </ul>
    </section>
  );
}
