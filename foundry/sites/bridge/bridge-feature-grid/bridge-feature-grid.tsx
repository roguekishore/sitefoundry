import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BridgeButton } from "@foundry/bridge-button";
import { BridgeSectionLabel } from "@foundry/bridge-section-label";

export interface BridgeFeatureCard {
  /** a small line icon shown in the grey tile (e.g. a lucide icon) */
  icon: ReactNode;
  /** the card title */
  title: string;
  /** one short paragraph */
  text: string;
  /** the link at the foot of the card */
  link: { label: string; href: string };
}

export interface BridgeFeatureGridProps {
  /** the mono eyebrow, e.g. "Platform" */
  label: string;
  /** the big heading on the left */
  title: string;
  /** the intro paragraph under it */
  intro: string;
  /** the cards, two per row on desktop */
  cards: BridgeFeatureCard[];
  className?: string;
}

/** Bridge's heading-left, 2×2-cards-right section. */
export function BridgeFeatureGrid({ label, title, intro, cards, className }: BridgeFeatureGridProps) {
  return (
    <section className={cn("bg-background pt-20 pb-[10.5rem] text-foreground lg:pb-[11.875rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <BridgeSectionLabel label={label} />
        <div className="mt-12 grid lg:mt-[3.25rem] lg:grid-cols-2">
          <div>
            <h2 className="max-w-[18.5rem] font-display text-[2.625rem]/none font-normal tracking-[-0.03em] transition-colors duration-250 hover:text-muted-foreground motion-reduce:transition-none lg:max-w-[27.5rem] lg:text-[3.5rem]/none">
              {title}
            </h2>
            <p className="mt-8 max-w-[25rem] text-base/[1.4] tracking-[-0.01em] lg:mt-10">{intro}</p>
          </div>
          <ul className="mt-8 grid lg:mt-0 lg:grid-cols-2 lg:gap-y-5">
            {cards.map((c) => (
              <li
                key={c.title}
                className="flex flex-col border-t border-foreground/10 pt-[1.875rem] pr-5 pb-[3.25rem] transition-colors duration-250 ease-[ease] hover:border-foreground/25 motion-reduce:transition-none lg:min-h-[16.75rem] lg:border-t-0 lg:border-l lg:border-border lg:px-[1.875rem] lg:pb-9 lg:hover:border-foreground/25"
              >
                <h3 className="flex items-center gap-2.5 font-display text-[1.6rem]/[1.1875] font-normal tracking-[-0.0375em]">
                  <span aria-hidden className="flex size-[2.375rem] shrink-0 items-center justify-center rounded-sm bg-muted [&_svg]:size-[1.375rem]">
                    {c.icon}
                  </span>
                  {c.title}
                </h3>
                <p className="mt-[1.875rem] max-w-[21rem] text-[0.9375rem]/[1.4] tracking-[-0.02em] lg:max-w-[15.5rem]">{c.text}</p>
                <BridgeButton href={c.link.href} variant="link" className="mt-14 self-start lg:mt-auto lg:pt-8">
                  {c.link.label}
                </BridgeButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
