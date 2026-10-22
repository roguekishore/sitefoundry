import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyRatingProps {
  /** the score text, e.g. "4.9 stars" */
  score: string;
  /** one letter for the review site's disc (no logos) */
  sourceInitial: string;
  /** the review site's name, for screen readers */
  sourceName: string;
  /** how many filled stars to draw */
  stars?: number;
  /** sm: 14px (cards) · md: 16px (hero, section heads) */
  size?: "sm" | "md";
  className?: string;
}

export function BasepowercompanyRating({ score, sourceInitial, sourceName, stars = 5, size = "md", className }: BasepowercompanyRatingProps) {
  return (
    <div className={cn("flex items-center gap-1.5 font-sans font-bold", size === "md" ? "text-base" : "text-sm", className)}>
      <span
        role="img"
        aria-label={sourceName}
        className="flex size-[1.15em] items-center justify-center rounded-full bg-card text-[0.7em] leading-none font-bold text-primary ring-1 ring-border"
      >
        {sourceInitial}
      </span>
      <span>{score}</span>
      <span className="ml-1 flex gap-1" aria-hidden>
        {Array.from({ length: stars }, (_, i) => (
          <Star key={i} className="size-[1.05em] fill-chart-4 text-chart-4" strokeWidth={1.5} />
        ))}
      </span>
    </div>
  );
}
