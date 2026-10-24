import type { ReactNode } from "react";
import { DiabrowserHeading } from "@foundry/diabrowser-heading";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-features.css";

export interface DiabrowserFeatureCard {
  /** the small uppercase tag in the white pill */
  label: string;
  /** two to four lines of plain description */
  body: string;
  /** wide cards take 7 of 12 columns on desktop, the others 5; alternate them per row */
  wide?: boolean;
  /** the product shot at the bottom of the card; empty shows a placeholder */
  media?: ReactNode;
  /** CSS aspect ratio of the shot (defaults: 558 / 362 wide, 318 / 399 narrow) */
  mediaAspect?: string;
}

export interface DiabrowserFeaturesProps {
  /** the centred serif heading */
  heading: ReactNode;
  /** the cards, in reading order */
  cards: DiabrowserFeatureCard[];
  className?: string;
}

/** A bento of hairline-outlined cards (7/5 and 5/7 rows): a pill tag, a paragraph, and a product shot fading out at the bottom. */
export function DiabrowserFeatures({ heading, cards, className }: DiabrowserFeaturesProps) {
  return (
    <section className={cn("bg-background py-section text-foreground", className)}>
      <div className="diabrowser-features-fade px-gutter">
        <DiabrowserHeading>{heading}</DiabrowserHeading>
      </div>
      <div className="px-gutter">
        <div className="mx-auto mt-[60px] grid max-w-page grid-cols-1 gap-[10px] lg:mt-[82px] lg:grid-cols-12 lg:gap-5">
          {cards.map((card) => (
            <article
              key={card.label}
              className={cn(
                "diabrowser-features-fade flex flex-col overflow-clip rounded-2xl border border-foreground/30 px-[30px] pt-[30px] lg:min-h-[630px]",
                card.wide ? "lg:col-span-7" : "lg:col-span-5",
              )}
            >
              <p className="-ml-1 inline-flex h-[30px] w-fit items-center rounded-full bg-card px-3 text-[12px] leading-none tracking-[0.11em] text-foreground/80 uppercase">
                {card.label}
              </p>
              <p className="mt-[18px] text-[16px] leading-6 tracking-[0.005em] text-pretty text-foreground/75 lg:mt-5 lg:text-[20px] lg:leading-[30px]">
                {card.body}
              </p>
              <div className="mt-auto flex justify-center pt-[30px] lg:pt-[52px]">
                <div
                  className={cn(
                    "diabrowser-features-media w-full overflow-hidden rounded-t-lg bg-muted [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
                    card.wide ? "lg:max-w-[558px]" : "lg:max-w-[318px]",
                  )}
                  style={{ aspectRatio: card.mediaAspect ?? (card.wide ? "558 / 362" : "318 / 399") }}
                >
                  {card.media}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
