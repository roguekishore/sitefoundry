import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button } from "@foundry/hhhusher-v2-button";
import { hhhusherV2Reveal } from "@foundry/hhhusher-v2-reveal";

export interface HhhusherV2BentoCard {
  title: string;
  text: string;
  /** the yellow read-more link under the text */
  link?: { label: string; href: string };
  /** the card's film or picture, full-bleed behind the text; a placeholder when empty */
  media?: ReactNode;
}

export interface HhhusherV2BentoProps {
  /** three cards: the first is the tall one on the left */
  cards: HhhusherV2BentoCard[];
  /** top padding, for when it doesn't follow the overview slider */
  padTop?: boolean;
  id?: string;
  className?: string;
}

// desktop: the tall card spans both rows; the two right cards are 485 and 420px tall
const place = ["lg:row-span-2 min-h-[25rem]", "min-h-[26rem] lg:min-h-0", "min-h-[22.5rem] lg:min-h-0"];

export function HhhusherV2Bento({ cards, padTop = false, id, className }: HhhusherV2BentoProps) {
  return (
    <section id={id} className={cn("bg-secondary pt-4 pb-[calc(var(--section-y)*0.9)] text-secondary-foreground lg:pt-10 lg:pb-[calc(var(--section-y)*1.55)]", padTop && "pt-section lg:pt-section", className)}>
      <div className="mx-auto grid max-w-page gap-4 px-gutter lg:grid-cols-[61.4fr_35.7fr] lg:grid-rows-[30.3rem_26.25rem] lg:gap-10">
        {cards.slice(0, 3).map((card, i) => (
          <article key={card.title} className={cn("dark relative isolate overflow-clip rounded-lg bg-muted p-5 text-foreground lg:p-10", place[i])}>
            <div className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
              {card.media ?? <div className="size-full bg-linear-to-b from-foreground/5 to-transparent" />}
            </div>
            <div className={cn(hhhusherV2Reveal("fade"), "max-w-[20rem] lg:max-w-[20.5rem]")}>
              <h3 className="font-display text-[1.56rem] leading-[1.1] font-[570] tracking-[-0.02em] lg:text-[2rem]">{card.title}</h3>
              <p className="mt-3 font-display text-[1.04rem] leading-[1.32] font-[570] tracking-[-0.02em] lg:mt-6 lg:text-base lg:leading-[1.3]">{card.text}</p>
              {card.link && (
                <HhhusherV2Button variant="link" href={card.link.href} className="mt-3 text-[0.55rem] text-primary lg:mt-6 lg:text-[0.75rem]">
                  {card.link.label}
                </HhhusherV2Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
