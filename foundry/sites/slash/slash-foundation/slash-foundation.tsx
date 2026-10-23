import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SlashFeatureCard } from "@foundry/slash-feature-card";
import { SlashHeading, type SlashHeadingPart } from "@foundry/slash-heading";

export interface SlashFoundationCard {
  /** the product's name */
  title: string;
  /** what it does */
  body: string;
  /** a footnote mark after the text */
  note?: string;
  /** the card's art; a soft wash stands in when empty */
  media?: ReactNode;
  /** spans the full width, with its art filling the card behind the copy */
  wide?: boolean;
  /** small chips above the copy (card tiers: "Steel" + "— $1M+") */
  tiers?: { name: string; value: string }[];
}

export interface SlashFoundationProps {
  /** the heading, as runs; `{ italic: "steady" }` sets a run in italic */
  heading: SlashHeadingPart[];
  /** the grey line under it */
  sub?: string;
  /** the product cards: pairs side by side, `wide` ones across the row */
  cards: SlashFoundationCard[];
  /** small print under the cards */
  disclaimer?: string;
  className?: string;
}

/** A big centred serif heading over a bento of dark product cards (two up, then one wide), with small print below. */
export function SlashFoundation({ heading, sub, cards, disclaimer, className }: SlashFoundationProps) {
  return (
    <section className={cn("bg-background pt-section text-foreground lg:pt-[calc(var(--section-y)*2+1.75rem)]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <SlashHeading parts={heading} sub={sub} size="xl" headingClassName="max-w-[18rem] lg:max-w-[42rem]" />
        <div className="mt-12 grid gap-4 lg:mt-14 lg:grid-cols-2 lg:gap-3">
          {cards.map((card) => (
            <SlashFeatureCard
              key={card.title}
              title={card.title}
              body={card.body}
              note={card.note}
              media={card.media}
              className={cn(card.wide && "lg:col-span-2")}
              mediaPosition={card.wide ? "behind" : "top"}
              mediaHeight={card.wide ? "26.125rem" : "19.5rem"}
              mediaHeightSm={card.wide ? "23rem" : "14.5rem"}
              extra={
                card.tiers && (
                  <ul className="mb-5 flex flex-col items-start gap-2 lg:mb-6 lg:flex-row lg:gap-2.5">
                    {card.tiers.map((tier) => (
                      <li key={tier.name} className="flex h-8 items-center rounded-full border border-foreground/15 bg-background/40 px-3 text-[0.8125rem] tracking-[-0.01em]">
                        <span className="font-medium">{tier.name}</span>
                        <span className="ml-1 text-foreground/80">{tier.value}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
            />
          ))}
        </div>
        {disclaimer && (
          <p className="mt-10 text-[0.9375rem] leading-[1.3] tracking-[-0.02em] text-muted-foreground/70 lg:mt-10 lg:px-8 lg:text-sm lg:leading-[1.36]">{disclaimer}</p>
        )}
      </div>
    </section>
  );
}
