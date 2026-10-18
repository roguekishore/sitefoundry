import { cn } from "@foundry/foundry-utils";

export interface MercuryQuoteProps {
  /** the quote, with its own quotation marks */
  quote: string;
  /** who said it */
  name: string;
  /** their role and company */
  role: string;
  className?: string;
}

/** A single centred pull quote in a soft, large, regular weight, with the name and role under it. */
export function MercuryQuote({ quote, name, role, className }: MercuryQuoteProps) {
  return (
    <section className={cn("py-[calc(var(--section-y)*0.6)] lg:py-[calc(var(--section-y)*0.75)]", className)}>
      <figure className="mx-auto max-w-[54rem] px-gutter text-center">
        <blockquote className="font-display text-[1.3125rem] leading-[1.2] text-balance text-muted-foreground lg:text-[1.75rem]">{quote}</blockquote>
        <figcaption className="mt-6 text-base lg:mt-8 lg:text-[1.3125rem]">
          <p className="font-[560] text-foreground">{name}</p>
          <p className="text-muted-foreground">{role}</p>
        </figcaption>
      </figure>
    </section>
  );
}
