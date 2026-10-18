import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MercuryHeading } from "@foundry/mercury-heading";

export interface MercuryPressItem {
  /** the publication's name, typeset as a wordmark in the tile */
  outlet: string;
  /** how the wordmark is set: heavy (black, tight) · spaced (wide capitals) · condensed (tall, narrow) */
  outletStyle?: "heavy" | "spaced" | "condensed";
  /** the headline */
  title: string;
  /** where the card goes */
  href: string;
  /** screen-reader label for the round arrow button */
  linkLabel: string;
}

export interface MercuryPressProps {
  /** the section heading, under a hairline */
  title: string;
  /** the articles, usually three */
  items: MercuryPressItem[];
  className?: string;
}

const outletStyles = {
  heavy: "font-[850] tracking-[-0.05em] text-[2.75rem]",
  spaced: "font-[700] tracking-[0.14em] uppercase text-[2.125rem]",
  condensed: "font-[800] tracking-[-0.02em] uppercase text-[2.5rem] [font-stretch:75%] scale-x-[0.82]",
};

/**
 * "In the news": a hairline and heading over three dark cards, each with a darker tile
 * holding the outlet's wordmark in a soft periwinkle, a headline, and a small round arrow
 * button pinned to the bottom.
 */
export function MercuryPress({ title, items, className }: MercuryPressProps) {
  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.75)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <MercuryHeading rule title={title} />
        <ul className="mt-8 grid gap-8 md:grid-cols-3 lg:mt-10">
          {items.map((item) => (
            <li key={item.title}>
              <a href={item.href} className="group flex h-full flex-col rounded-xl bg-card p-4 transition-colors duration-200 hover:bg-[color-mix(in_oklab,var(--card)_80%,var(--muted))] motion-reduce:transition-none lg:min-h-[28rem] lg:p-8">
                <div className="flex aspect-[310/207] items-center justify-center rounded-sm bg-muted lg:aspect-[256/170]">
                  <span aria-hidden className={cn("font-display leading-none text-glow", outletStyles[item.outletStyle ?? "heavy"])}>
                    {item.outlet}
                  </span>
                </div>
                <h3 className="mt-6 max-w-[16rem] font-display text-[1.3125rem] leading-[1.2] font-[520] text-card-foreground lg:mt-9 lg:text-[1.75rem]">{item.title}</h3>
                <span className="mt-auto pt-10">
                  <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-accent">
                    <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
                    <span className="sr-only">{item.linkLabel}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
