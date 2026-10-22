import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryButton } from "@foundry/moderntreasury-button";
import { ModerntreasuryHeading } from "@foundry/moderntreasury-heading";
import { ModerntreasuryMedia } from "@foundry/moderntreasury-media";

export interface ModerntreasuryFeature {
  /** the card's title */
  title: string;
  /** a sentence or two under it */
  text: string;
  /** the bold arrow link */
  link?: { label: string; href: string };
  /** the product art at the bottom of the card; an empty 16:9 slot when not given */
  media?: ReactNode;
  /** what the media shows, for screen readers, while the slot is empty */
  mediaLabel?: string;
}

export interface ModerntreasuryFeaturesProps {
  /** the section title; a list of lines sets the desktop line breaks */
  title: string | string[];
  /** the cards, two per row from lg up */
  items: ModerntreasuryFeature[];
  className?: string;
}

/** Modern Treasury's feature grid: big pale cards with text on top and art flush at the bottom. */
export function ModerntreasuryFeatures({ title, items, className }: ModerntreasuryFeaturesProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ModerntreasuryHeading title={title} className="max-w-[15rem] sm:max-w-[48rem]" />
        <ul className="mt-12 grid gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-12">
          {items.map((item) => (
            <li key={item.title} className="flex flex-col overflow-clip rounded-lg bg-card text-card-foreground">
              <div className="flex-1 px-6 pt-8 lg:px-12 lg:pt-12">
                <h3 className="font-display text-[1.625rem] leading-[1.25] font-[330] tracking-[-0.01em] lg:text-[2rem]">{item.title}</h3>
                <p className="mt-4 max-w-[28rem] text-base leading-6 text-foreground/80">{item.text}</p>
                {item.link && (
                  <ModerntreasuryButton href={item.link.href} variant="link" arrow className="mt-6 lg:mt-8">
                    {item.link.label}
                  </ModerntreasuryButton>
                )}
              </div>
              <ModerntreasuryMedia label={item.mediaLabel} className="mt-6 aspect-video w-full lg:mt-10">
                {item.media}
              </ModerntreasuryMedia>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
