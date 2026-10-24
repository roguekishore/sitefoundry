import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import "./parsleyhealth-quote.css";

export interface ParsleyhealthQuoteProps {
  /** the quote, with its quotation marks */
  quote: string;
  /** the member's name */
  author: string;
  /** how many stars above the quote (0 hides them) */
  stars?: number;
  /** screen-reader text for the stars (e.g. "Rated 5 out of 5") */
  starsLabel?: string;
  /** the pill under the name */
  action?: { label: string; href: string };
  className?: string;
}

/** A large serif quote on a pale wash, fading and rising in. */
export function ParsleyhealthQuote({ quote, author, stars = 5, starsLabel, action, className }: ParsleyhealthQuoteProps) {
  return (
    <section
      className={cn(
        "bg-background bg-linear-to-b from-accent/65 via-muted/70 to-muted px-gutter py-[calc(var(--section-y)*0.55)] text-center lg:py-[calc(var(--section-y)*0.8)]",
        className,
      )}
    >
      <figure className="parsleyhealth-quote-fade mx-auto flex max-w-[52rem] flex-col items-center">
        {stars > 0 ? (
          <div role="img" aria-label={starsLabel} className="flex gap-0.5 text-primary">
            {Array.from({ length: stars }, (_, i) => (
              <Star key={i} aria-hidden className="size-2.5 fill-current" strokeWidth={0} />
            ))}
          </div>
        ) : null}
        <blockquote className="parsleyhealth-quote-rise mt-6 font-display text-[2.125rem] leading-[1.18] font-light tracking-[-0.02em] text-primary lg:mt-7 lg:text-5xl lg:leading-[1.2]">
          <p>{quote}</p>
        </blockquote>
        <figcaption className="mt-10 text-sm font-semibold text-foreground italic lg:mt-11">{author}</figcaption>
        {action ? (
          <ParsleyhealthButton href={action.href} size="md" className="mt-10 lg:mt-11">
            {action.label}
          </ParsleyhealthButton>
        ) : null}
      </figure>
    </section>
  );
}
