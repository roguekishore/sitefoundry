import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerRatingProps {
  /** the score text before the star, e.g. "4.8 out of 5" */
  score: string;
  /** the source after the star, e.g. "on Verdict" */
  source: string;
  /** after a dot, e.g. "52,000+ members" */
  extra?: string;
  /** star: one green star between score and source · boxed: five boxed stars first */
  stars?: "star" | "boxed";
  /** round avatars stacked before everything (photos, or empty for placeholders) */
  avatars?: (ReactNode | undefined)[];
  className?: string;
}

export function SuperpowerRating({ score, source, extra, stars = "star", avatars, className }: SuperpowerRatingProps) {
  const star = <Star className="size-5 fill-chart-1 text-chart-1" strokeWidth={0} aria-hidden />;
  return (
    <p className={cn("flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.875rem] leading-none", className)}>
      {avatars && avatars.length > 0 && (
        <span className="mr-1.5 flex -space-x-2">
          {avatars.map((a, i) => (
            <SuperpowerMedia key={i} media={a} className="size-6 rounded-full ring-2 ring-background" />
          ))}
        </span>
      )}
      {stars === "boxed" && (
        <span className="mr-1.5 flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className="grid size-4 place-items-center bg-chart-1">
              <Star className="size-3 fill-background text-background" strokeWidth={0} />
            </span>
          ))}
        </span>
      )}
      <span>{score}</span>
      {stars === "star" && star}
      <span>{source}</span>
      {extra && (
        <>
          <span aria-hidden>·</span>
          <span>{extra}</span>
        </>
      )}
    </p>
  );
}
