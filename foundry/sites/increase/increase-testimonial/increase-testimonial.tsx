import { cn } from "@foundry/foundry-utils";
import { IncreaseQuoteCard, type IncreaseQuoteCardProps } from "@foundry/increase-quote-card";

export interface IncreaseTestimonialProps {
  /** the card: quote, attribution, note, logo tile and tone (lime or blue) */
  card: IncreaseQuoteCardProps;
  className?: string;
}

/** A framed band holding one wide customer quote card, washed lime or blue into its corner. */
export function IncreaseTestimonial({ card, className }: IncreaseTestimonialProps) {
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter py-4 sm:py-6">
        <IncreaseQuoteCard {...card} />
      </div>
    </section>
  );
}
