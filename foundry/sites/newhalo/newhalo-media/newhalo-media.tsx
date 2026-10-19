import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloMediaProps {
  /** the real image or video; it is cropped to the frame like object-fit: cover. Empty shows the placeholder. */
  children?: ReactNode;
  /** placeholder surface: muted (a quiet token-coloured panel) or glow (a soft highlight-to-glow wash, for art slots) */
  tone?: "muted" | "glow";
  /** size, aspect ratio and radius of the frame, e.g. "aspect-square rounded-lg" */
  className?: string;
  /** classes for the inner layer, e.g. a scroll-driven parallax class */
  innerClassName?: string;
}

/**
 * A media slot: a frame that crops whatever goes in it. Without content it is a plain
 * placeholder surface of the same size and shape.
 */
export function NewhaloMedia({ children, tone = "muted", className, innerClassName }: NewhaloMediaProps) {
  return (
    <div className={cn("relative overflow-clip", className)}>
      <div
        className={cn(
          "absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
          !children && (tone === "glow" ? "bg-radial from-glow/25 via-highlight/10 to-transparent" : "bg-muted"),
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
