import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoeButton } from "@foundry/zoe-button";
import { ZoeHeading } from "@foundry/zoe-heading";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";
import { ZoeSlider } from "@foundry/zoe-slider";

export interface ZoeResearchCard {
  /** the article's title */
  title: string;
  /** a two- or three-line summary */
  summary: string;
  /** the navy button */
  cta: { label: string; href: string };
  /** the photo (object-cover); a placeholder when empty */
  media?: ReactNode;
}

export interface ZoeResearchProps {
  /** the heading above the row */
  title: string;
  /** the cards, in order */
  cards: ZoeResearchCard[];
  /** screen-reader names for the row and its buttons */
  labels: { region: string; prev: string; next: string };
  className?: string;
}

/** Zoe's research article slider. */
export function ZoeResearch({ title, cards, labels, className }: ZoeResearchProps) {
  return (
    <section className={cn("py-24", className)}>
      <ZoeHeading title={title} className="mx-auto max-w-page px-gutter" />
      <ZoeSlider
        className="mt-12"
        label={labels.region}
        prevLabel={labels.prev}
        nextLabel={labels.next}
        slideClassName="w-[min(37.5rem,calc(100vw-3rem))]"
        trackClassName="items-start px-gutter scroll-px-gutter lg:px-8 lg:scroll-px-8"
        controlsClassName="mt-16 lg:mt-24"
        slides={cards.map((c) => (
          <article key={c.title} className="overflow-clip rounded-2xl bg-card text-card-foreground">
            <div className="relative aspect-[600/465] *:absolute *:inset-0 *:size-full *:object-cover">
              {c.media ?? <ZoePlaceholder tone="photo" />}
            </div>
            <div className="p-6">
              <h3 className="font-display text-[2.125rem] leading-[1.05] font-light tracking-[-0.02em] lg:text-[2.5rem]">
                {c.title}
              </h3>
              <p className="mt-5 text-lg leading-[1.2]">{c.summary}</p>
              <ZoeButton href={c.cta.href} variant="ink" className="mt-5 w-full sm:w-auto">
                {c.cta.label}
              </ZoeButton>
            </div>
          </article>
        ))}
      />
    </section>
  );
}
