import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface DiabrowserFrameProps {
  /** the screenshot or clip; empty shows a plain placeholder surface */
  media?: ReactNode;
  /** CSS aspect ratio of the frame, e.g. "760 / 562" */
  aspect?: string;
  className?: string;
}

/** A light-grey bezel with a soft layered shadow around a screenshot. */
export function DiabrowserFrame({ media, aspect = "760 / 562", className }: DiabrowserFrameProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-muted p-[5px]",
        "shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_4%,transparent),0_12px_28px_-12px_color-mix(in_oklab,var(--foreground)_10%,transparent),0_28px_56px_-28px_color-mix(in_oklab,var(--foreground)_12%,transparent)]",
        className,
      )}
    >
      <div
        className="relative w-full overflow-hidden rounded-[8px] bg-card [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover"
        style={{ aspectRatio: aspect }}
      >
        {media}
      </div>
    </div>
  );
}
