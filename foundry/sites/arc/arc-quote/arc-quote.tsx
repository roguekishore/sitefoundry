import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcPlaceholder } from "@foundry/arc-placeholder";
import { ArcReveal } from "@foundry/arc-reveal";
import "./arc-quote.css";

export interface ArcQuoteProps {
  /** the testimonial, without quotation marks (they're added) */
  quote: string;
  /** who said it, e.g. "Ana Ruiz, CFO of Fieldnote" */
  attribution: string;
  /** a small mark after the attribution, e.g. a footnote number */
  footnote?: string;
  /** the portrait (455×531); empty: a quiet grey placeholder */
  media?: ReactNode;
  className?: string;
}

/** Arc's dark grid-lined testimonial band: a tall portrait left, a large quote right. */
export function ArcQuote({ quote, attribution, footnote, media, className }: ArcQuoteProps) {
  return (
    <section className={cn("dark arc-quote-grid bg-muted text-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-[2.375rem] px-gutter pt-[3.5rem] pb-[3.75rem] lg:grid-cols-[28.4375rem_1fr] lg:items-center lg:gap-[4.25rem] lg:pt-[7.6rem] lg:pb-[7.5rem]">
        <div className="mx-auto aspect-[455/531] w-full max-w-[18.75rem] overflow-clip bg-muted lg:max-w-none">
          {media ?? <ArcPlaceholder tone="wash" className="size-full bg-foreground/25" />}
        </div>
        <ArcReveal>
          <figure className="lg:max-w-[37rem] lg:pl-[0.95rem]">
            <blockquote className="font-display text-[1.4125rem]/[1.2] font-normal tracking-[-0.015em] lg:-indent-[0.95rem] lg:text-[1.875rem]/[1.15]">
              {/* foundry-allow-text: typographic quotation marks around the quote prop */}
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-[0.759rem] text-foreground/75 lg:mt-11 lg:text-[0.875rem]">
              {/* foundry-allow-text: dash before the attribution */}
              &mdash; {attribution}
              {footnote && <sup className="ml-px">{footnote}</sup>}
            </figcaption>
          </figure>
        </ArcReveal>
      </div>
    </section>
  );
}
