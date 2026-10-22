import type { ReactNode } from "react";
import { Star } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface EightsleepRatingProps {
  /** the score out of five, e.g. 4.6 */
  score: number;
  /** the line under the stars, e.g. "38,000+ reviews" */
  caption?: ReactNode;
  /** screen-reader text for the stars, e.g. "4.6 out of 5 stars" */
  label?: string;
  /** md: 48px → 56px figure (hero) · lg: 64px → 96px figure (review band) */
  size?: "md" | "lg";
  className?: string;
}

export function EightsleepRating({ score, caption, label, size = "md", className }: EightsleepRatingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center text-foreground", className)}>
      <span
        className={cn(
          "font-[family-name:var(--eightsleep-figures,var(--typeface-display))] leading-none font-normal tracking-[-0.01em]",
          size === "md" ? "text-[48px] lg:text-[56px]" : "text-[64px] lg:text-[96px]",
        )}
      >
        {score.toFixed(1)}
      </span>
      <span className={cn("mt-2 flex gap-[6px]", size === "lg" && "lg:mt-3")} role="img" aria-label={label}>
        {Array.from({ length: 5 }, (_, i) => {
          const fill = Math.max(0, Math.min(1, score - i));
          return (
            <span key={i} className="relative size-[19px]">
              <Star className="absolute inset-0 size-full fill-current stroke-none opacity-35" />
              <span className="absolute inset-y-0 left-0 overflow-clip" style={{ width: `${fill * 100}%` }}>
                <Star className="size-[19px] fill-current stroke-none" />
              </span>
            </span>
          );
        })}
      </span>
      {caption && <span className="mt-3 text-[15px] leading-[1.3] font-medium">{caption}</span>}
    </div>
  );
}
