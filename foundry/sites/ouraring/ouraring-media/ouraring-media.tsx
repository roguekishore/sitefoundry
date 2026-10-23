import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface OuraringMediaProps {
  /** an <img> or <video>; it is stretched to the box and cover-fitted */
  media?: ReactNode;
  /** placeholder colour when empty: warm (sand, for light photos) or deep (warm ink, for dark photos and screens) */
  tone?: "warm" | "deep";
  /** fit for a given image or video */
  fit?: "cover" | "contain";
  className?: string;
}

/** Fills its box with the given media, or a token-coloured placeholder surface. */
export function OuraringMedia({ media, tone = "warm", fit = "cover", className }: OuraringMediaProps) {
  if (media) {
    return (
      <div
        className={cn(
          "[&>img]:size-full [&>video]:size-full",
          fit === "cover" ? "[&>img]:object-cover [&>video]:object-cover" : "[&>img]:object-contain [&>video]:object-contain",
          className,
        )}
      >
        {media}
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className={cn(
        tone === "warm" ? "bg-linear-to-br from-secondary via-muted to-secondary" : "dark bg-linear-to-br from-muted via-card to-background",
        className,
      )}
    />
  );
}
