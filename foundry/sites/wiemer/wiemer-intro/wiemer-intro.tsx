import type { ReactNode } from "react";
import { WiemerArrowLink } from "@foundry/wiemer-arrow-link";
import { WiemerSplitText, wiemerReveal, wiemerRevealStyle } from "@foundry/wiemer-reveal";
import { WiemerTag } from "@foundry/wiemer-tag";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-intro.css";

export interface WiemerIntroCard {
  /** the picture (an <img>, cover, 4:5); empty shows a placeholder */
  media?: ReactNode;
}

export interface WiemerIntroProps {
  /** small mono label above the greeting */
  tag: string;
  /** the huge greeting; "\n" breaks the line */
  title: string;
  /** one line above the paragraphs */
  subline: string;
  /** the paragraphs of the text column */
  paragraphs: string[];
  /** the link under the text */
  link: { label: string; href: string };
  /** the cards in the sliding row (about twelve) */
  cards: WiemerIntroCard[];
  /** anchor id */
  id?: string;
  className?: string;
}

/** Greeting, a right-hand text column and a sliding row of product cards. */
export function WiemerIntro({ tag, title, subline, paragraphs, link, cards, id, className }: WiemerIntroProps) {
  return (
    <section id={id} className={cn("overflow-clip bg-background py-section text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className={wiemerReveal("fade")}>
          <WiemerTag>{tag}</WiemerTag>
        </div>
        <WiemerSplitText text={title} className="mt-5 font-display text-[64px] leading-[1.1] font-medium tracking-[-0.025em] md:mt-8 md:text-[9vw]" />

        <div className="mt-12 grid md:grid-cols-12 md:gap-x-3.5 lg:mt-[7vw]">
          <div className="md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-9">
            <WiemerSplitText as="h3" size="sm" text={subline} className="text-[max(20px,1.6vw)] leading-[1.2] font-medium tracking-[-0.03em]" />
            <div className="mt-2.5 space-y-[1.3em] text-[max(16px,1.2vw)] leading-[1.3] font-medium tracking-[-0.015em]">
              {paragraphs.map((p, i) => (
                <p key={i} className={wiemerReveal("rise")} style={wiemerRevealStyle(i * 20)}>
                  {p}
                </p>
              ))}
            </div>
            <div className={cn(wiemerReveal("fade"), "mt-10")}>
              <WiemerArrowLink label={link.label} href={link.href} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[max(5.5rem,10vw)]">
        <ul className="wiemer-intro-track flex w-max gap-2.5 md:gap-3.5">
          {cards.map((card, i) => (
            <li
              key={i}
              className="aspect-[4/5] w-[55vw] shrink-0 overflow-clip rounded-xl bg-muted md:w-[33vw] md:rounded-2xl [&>img]:size-full [&>img]:object-cover"
            >
              {card.media}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
