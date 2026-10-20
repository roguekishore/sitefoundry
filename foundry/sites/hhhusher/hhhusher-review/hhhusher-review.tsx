import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { hhhusherLabel } from "@foundry/hhhusher-button";

export interface HhhusherReviewProps {
  /** what they said */
  quote: string;
  /** who said it (shown in mono) */
  author: string;
  /** filled stars out of five */
  rating?: number;
  /** screen-reader text for the stars, e.g. "5 out of 5 stars" */
  ratingLabel?: string;
  /** caps: author in bold mono capitals (landing) · plain: author as written (review list) */
  authorStyle?: "caps" | "plain";
  /** lg: the 28px quote of the landing reviews · md: the 24px quote of the long list */
  size?: "md" | "lg";
  className?: string;
}

/** Five small yellow stars, a large quote in the display face, and the author in mono. */
export function HhhusherReview({ quote, author, rating = 5, ratingLabel, authorStyle = "caps", size = "lg", className }: HhhusherReviewProps) {
  return (
    <figure className={cn("flex flex-col", className)}>
      <div className="flex gap-1 text-highlight" role="img" aria-label={ratingLabel}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} aria-hidden className={cn("size-5 lg:size-[1.375rem]", i >= rating && "opacity-25")} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote
        className={cn(
          "mt-[1.6rem] font-display font-medium tracking-[-0.01em] text-current",
          size === "lg" ? "text-[1.3rem] leading-[1.45] lg:mt-9 lg:text-[1.8125rem] lg:leading-[1.4]" : "text-[1.3rem] leading-[1.25] lg:mt-8 lg:text-[1.75rem] lg:leading-[1.25]",
        )}
      >
        {quote}
      </blockquote>
      <figcaption className={cn("mt-[1.6rem] lg:mt-7", authorStyle === "caps" ? cn(hhhusherLabel, "lg:text-base") : "font-mono text-[0.78rem] font-bold lg:text-[1.1875rem]")}>
        {author}
      </figcaption>
    </figure>
  );
}
