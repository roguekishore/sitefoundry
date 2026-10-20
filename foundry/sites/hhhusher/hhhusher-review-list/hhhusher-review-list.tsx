import { cn } from "@foundry/foundry-utils";
import { HhhusherReview } from "@foundry/hhhusher-review";
import "./hhhusher-review-list.css";

export interface HhhusherReviewListItem {
  quote: string;
  author: string;
  /** filled stars out of five */
  rating?: number;
}

export interface HhhusherReviewListProps {
  /** the small label on the left, e.g. "Reviews" */
  label: string;
  reviews: HhhusherReviewListItem[];
  /** screen-reader text for each star row, e.g. "5 out of 5 stars" */
  ratingLabel?: string;
  className?: string;
}

/**
 * A long column of reviews on a camel band: a small label on the left that stays in view,
 * and in the right half one review after another (stars, a 28px quote, the author in mono),
 * each rising 40px and fading in as it enters.
 */
export function HhhusherReviewList({ label, reviews, ratingLabel, className }: HhhusherReviewListProps) {
  return (
    <section className={cn("bg-secondary pb-section text-secondary-foreground", className)}>
      <div className="mx-auto grid max-w-page gap-[4.4rem] px-gutter pt-6 lg:grid-cols-[1fr_1fr] lg:gap-10 lg:pt-16">
        <h2 className="self-start font-display text-[1.82rem] leading-[1.2] font-medium tracking-[-0.01em] lg:sticky lg:top-30 lg:text-[1.8125rem]">{label}</h2>
        <div className="flex flex-col gap-[3.6rem] lg:-mt-1 lg:gap-[5.6rem] lg:pl-4">
          {reviews.map((review, i) => (
            <HhhusherReview key={i} {...review} ratingLabel={ratingLabel} authorStyle="plain" size="md" className="hhhusher-review-list-item" />
          ))}
        </div>
      </div>
    </section>
  );
}
