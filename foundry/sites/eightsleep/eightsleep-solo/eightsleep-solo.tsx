import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepButton } from "@foundry/eightsleep-button";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMedia } from "@foundry/eightsleep-media";
import "./eightsleep-solo.css";

export interface EightsleepSoloCard {
  /** the big white caption at the bottom-left */
  caption: ReactNode;
  /** the photo or video */
  media?: ReactNode;
}

export interface EightsleepSoloProps {
  title: ReactNode;
  sub?: ReactNode;
  /** the black button under the heading */
  cta?: { label: ReactNode; href: string };
  /** exactly two cards: the left one drifts */
  cards: [EightsleepSoloCard, EightsleepSoloCard];
  className?: string;
}

export function EightsleepSolo({ title, sub, cta, cards, className }: EightsleepSoloProps) {
  return (
    <section className={cn("relative z-10 bg-muted pt-section pb-16 text-foreground lg:pt-[110px] lg:pb-[113px]", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-16">
        <EightsleepHeading title={title} sub={sub} />
        {cta && (
          <div className="mt-8 flex justify-center">
            <EightsleepButton href={cta.href} size="lg">
              {cta.label}
            </EightsleepButton>
          </div>
        )}
        <div className="eightsleep-solo-pair mt-8 grid gap-2 lg:mt-12 lg:grid-cols-2">
          {cards.map((card, i) => (
            <div key={i} className={cn(i === 0 && "eightsleep-solo-drift")}>
              <div className="dark relative aspect-[350/450] overflow-clip rounded-lg bg-background text-foreground lg:aspect-[652/837] lg:rounded-xl">
                <EightsleepMedia media={card.media} className="absolute inset-0 bg-muted-foreground/40" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-transparent from-60% to-background/40" />
                <p className="absolute right-6 bottom-6 left-6 max-w-[20ch] text-[20px] leading-[1.1] lg:right-14 lg:bottom-14 lg:left-14 lg:text-[28px]">{card.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
