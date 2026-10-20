import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wiemer-v2-rail.css";

export interface WiemerV2RailCard {
  /** for screen readers: what the picture shows */
  label: string;
  /** the picture (an <img>, ideally a cut-out on a light ground); a grey card when empty */
  media?: ReactNode;
}

export interface WiemerV2RailProps {
  /** the cards, left to right; give enough to run past the right edge (8 or more) */
  cards: WiemerV2RailCard[];
  className?: string;
}

/**
 * A full-bleed row of tall 4:5 grey cards with soft corners, running off both edges. While
 * the page scrolls, the whole row drifts slowly to the right.
 */
export function WiemerV2Rail({ cards, className }: WiemerV2RailProps) {
  return (
    <section className={cn("overflow-clip bg-background pt-8 pb-section", className)}>
      <ul className="wiemer-v2-rail-track flex w-max gap-3.5">
        {cards.map((card, i) => (
          <li
            key={i}
            aria-label={card.label}
            className="grid aspect-[4/5] w-[55vw] shrink-0 place-items-center overflow-clip rounded-lg bg-muted lg:w-[33vw] lg:rounded-xl [&>img]:size-full [&>img]:object-contain"
          >
            {card.media}
          </li>
        ))}
      </ul>
    </section>
  );
}
