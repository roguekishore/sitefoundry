import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NekoReview {
  quote: string;
  /** the member's first name */
  name: string;
  /** where they visited */
  place: string;
  /** whole stars out of five (default 5) */
  stars?: number;
}

export interface NekoReviewsProps {
  /** the big centred headline (e.g. the rating) */
  title: string;
  /** one line under it */
  subtitle?: string;
  reviews: NekoReview[];
  /** label of the stars, for screen readers; {n} is replaced by the count */
  starsLabel?: string;
  className?: string;
}

export function NekoReviews({ title, subtitle, reviews, starsLabel = "{n} out of 5 stars", className }: NekoReviewsProps) {
  return (
    <section className={cn("bg-background pt-section font-sans text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="text-center">
          <h2 className="font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:text-[4.25rem] lg:leading-[1.18]">{title}</h2>
          {subtitle && <p className="mx-auto mt-6 max-w-[20rem] text-base leading-6 lg:mt-8 lg:max-w-none lg:text-lg">{subtitle}</p>}
        </div>
        <ul className="mt-12 grid lg:mt-24 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
          {reviews.map((r) => (
            <li key={r.name + r.quote.slice(0, 12)} className="border-b border-border py-10 text-center first:pt-0 lg:border-0 lg:py-0">
              {/* foundry-allow-text: the decorative opening quote mark */}
              <span aria-hidden className="block h-10 font-display text-[4.5rem] leading-[1] text-primary">“</span>
              <blockquote className="mx-auto mt-4 max-w-[24rem] text-base leading-5 text-muted-foreground lg:mt-6 lg:text-xl lg:leading-6">{r.quote}</blockquote>
              <div role="img" aria-label={starsLabel.replace("{n}", String(r.stars ?? 5))} className="mt-6 flex justify-center gap-0.5 lg:mt-12">
                {Array.from({ length: r.stars ?? 5 }, (_, i) => (
                  <Star key={i} aria-hidden className="size-3 fill-current" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-5 lg:text-base">
                <span className="font-medium">{r.name}</span>
                <span className="ml-3">{r.place}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
