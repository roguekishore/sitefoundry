import { cn } from "@foundry/foundry-utils";
import { HhhusherLines } from "@foundry/hhhusher-lines";
import { HhhusherReview } from "@foundry/hhhusher-review";
import "./hhhusher-reviews.css";

export interface HhhusherReviewsItem {
  quote: string;
  author: string;
  /** filled stars out of five */
  rating?: number;
}

export interface HhhusherReviewsProps {
  /** the heading, one entry per line */
  title: string[];
  /** two reviews side by side on desktop (more wrap into further rows) */
  reviews: HhhusherReviewsItem[];
  /** screen-reader text for each star row, e.g. "5 out of 5 stars" */
  ratingLabel?: string;
  className?: string;
}

/**
 * Customer quotes on a camel band: a big two-line heading, then two reviews side by side
 * (stars, a large quote, the author in mono capitals). Each review rises 40px and fades in as
 * it enters; the heading rises in line by line.
 */
export function HhhusherReviews({ title, reviews, ratingLabel, className }: HhhusherReviewsProps) {
  return (
    <section className={cn("bg-secondary py-section text-secondary-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-6 pb-10 lg:pt-0 lg:pb-8">
        <HhhusherLines
          as="h2"
          lines={title}
          className="max-w-[16rem] font-display text-[3.12rem] leading-[1.1] font-medium tracking-[-0.02em] lg:max-w-none lg:text-[4.25rem] lg:leading-[1.03]"
        />
        <div className="mt-[3.2rem] grid gap-[3.6rem] lg:mt-[5.6rem] lg:grid-cols-2 lg:gap-x-[5.5rem] lg:gap-y-16">
          {reviews.map((review, i) => (
            <HhhusherReview key={i} {...review} ratingLabel={ratingLabel} className="hhhusher-reviews-item" />
          ))}
        </div>
      </div>
    </section>
  );
}
