import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface MarryandbrideCollectionCard {
  /** the collection's name, in serif near the bottom */
  title: string;
  href: string;
  /** the photo (2:3) */
  media?: ReactNode;
}

export interface MarryandbrideCollectionsProps {
  /** the serif heading */
  title: string;
  /** tiny uppercase label at the top of every card (e.g. "Collection") */
  label: string;
  cards: MarryandbrideCollectionCard[];
  className?: string;
}

/** A heading and a flush-left reel of 2:3 collection cards with overlaid labels. */
export function MarryandbrideCollections({ title, label, cards, className }: MarryandbrideCollectionsProps) {
  return (
    <section className={cn("bg-background pt-12 text-foreground lg:pt-[3.4rem]", className)}>
      <h2 className="px-gutter font-display text-[1.63rem] leading-[1.35] font-[350] lg:text-[2.02rem]">{title}</h2>
      <ul className="mt-1.5 flex snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] lg:mt-2.5 lg:gap-[0.5625rem]">
        {cards.map((card) => (
          <li key={card.href} className="w-[55.6vw] shrink-0 snap-start lg:w-[23.8vw]">
            <a href={card.href} className="relative block aspect-[2/3] bg-foreground/60 text-background [&_img]:size-full [&_img]:object-cover">
              {card.media}
              <span className="absolute inset-x-0 top-0 pt-4 text-center font-sans text-[0.65rem] leading-none tracking-[0.07em] uppercase lg:pt-[1.1rem] lg:text-[0.7rem]">
                {label}
              </span>
              <span className="absolute inset-x-0 bottom-0 px-3 pb-6 text-center font-display text-[1.13rem] leading-[1.4] lg:pb-7 lg:text-[1.32rem]">
                {card.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
