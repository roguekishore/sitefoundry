import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VercelHeading } from "@foundry/vercel-heading";
import { VercelPlaceholder } from "@foundry/vercel-placeholder";

export interface VercelShippedCard {
  /** the product's name */
  title: string;
  /** one short line about it */
  description: string;
  /** where the card links */
  href: string;
  /** corner: a small square in the bottom-right · side: the right side, fading towards the text */
  mediaPlacement?: "corner" | "side";
  /** the card's artwork (image, video, canvas); a placeholder when empty */
  media?: ReactNode;
  /** screen-reader label for the artwork placeholder */
  mediaLabel?: string;
}

export interface VercelShippedProps {
  /** the big heading */
  title: string;
  /** up to three cards; the first is the tall one on desktop */
  cards: VercelShippedCard[];
  className?: string;
}

/** Bento of new products: one tall card and two stacked ones. */
export function VercelShipped({ title, cards, className }: VercelShippedProps) {
  return (
    <section className={cn("bg-background px-gutter py-16 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <VercelHeading>{title}</VercelHeading>
        <ul className="mt-12 grid gap-5 lg:mt-20 lg:grid-cols-2 lg:grid-rows-[17.5rem_17.5rem]">
          {cards.map((card, i) => {
            const corner = (card.mediaPlacement ?? (i === 0 ? "corner" : "side")) === "corner";
            return (
              <li key={card.title} className={cn(i === 0 ? "min-h-[27rem] lg:row-span-2 lg:min-h-0" : "min-h-[12.5rem] lg:min-h-0")}>
                <a
                  href={card.href}
                  className="group relative flex size-full flex-col justify-end overflow-clip rounded-lg border border-border p-5 transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-foreground/20 motion-reduce:transition-none"
                >
                  <div
                    className={cn(
                      "absolute",
                      corner ? "right-0 bottom-0 size-60 lg:size-28" : "inset-y-0 right-0 w-[70%] lg:w-[68%]",
                    )}
                  >
                    {card.media ?? <VercelPlaceholder tone={corner ? "wash" : "side"} label={card.mediaLabel} />}
                  </div>
                  <div className="relative max-w-[18rem]">
                    <h3 className="text-2xl leading-[1.1] font-medium tracking-[-0.05em]">{card.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
