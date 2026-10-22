import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BasepowercompanyButton } from "@foundry/basepowercompany-button";
import { BasepowercompanyMedia } from "@foundry/basepowercompany-media";

export interface BasepowercompanyQuoteProps {
  /** the quote, with its marks; wrap a phrase in BasepowercompanySwash to underline it */
  quote: ReactNode;
  /** who said it */
  name: string;
  /** one or two short lines under the name (title, relationship) */
  lines?: string[];
  /** the hairline button under the name */
  cta?: { label: string; href: string };
  /** the photo behind the card */
  media?: ReactNode;
  /** describes the placeholder for screen readers */
  mediaLabel?: string;
  className?: string;
}

/*
 * A big rounded photo card with a spokesperson's quote. Desktop: the quote, name and button
 * sit centred in the left half over a scrim from the left. Phones: a tall card with the quote
 * at the top and the person at the bottom.
 */
export function BasepowercompanyQuote({ quote, name, lines = [], cta, media, mediaLabel, className }: BasepowercompanyQuoteProps) {
  return (
    <section className={cn("bg-background px-gutter pt-12 pb-12 lg:pt-[7.5rem] lg:pb-[4.25rem]", className)}>
      <figure className="dark relative isolate mx-auto flex h-[36rem] max-w-[calc(var(--page-width)-var(--page-gutter)*2)] flex-col justify-between overflow-clip rounded-[calc(var(--radius)*3)] bg-background p-6 pb-6 text-foreground lg:justify-center lg:px-20 lg:py-0">
        <BasepowercompanyMedia media={media} tone="photo" label={mediaLabel} className="absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(color-mix(in_oklab,var(--background)_55%,transparent),transparent_38%,transparent_55%,color-mix(in_oklab,var(--background)_60%,transparent))] lg:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--background)_55%,transparent),color-mix(in_oklab,var(--background)_30%,transparent)_45%,transparent_70%)]"
        />
        <blockquote className="max-w-[32.5rem] font-display text-xl leading-[1.3] font-bold tracking-[-0.025em] lg:text-[2rem] lg:leading-[1.3]">
          {quote}
        </blockquote>
        <figcaption className="lg:mt-12">
          <p className="text-xl leading-[1.35] font-bold tracking-[-0.025em]">{name}</p>
          {lines.map((l) => (
            <p key={l} className="mt-1 text-base leading-7 font-semibold tracking-[-0.005em] lg:mt-0">
              {l}
            </p>
          ))}
          {cta && (
            <BasepowercompanyButton href={cta.href} variant="ghost" trailingIcon={<ArrowRight />} className="mt-6 lg:mt-8">
              {cta.label}
            </BasepowercompanyButton>
          )}
        </figcaption>
      </figure>
    </section>
  );
}
