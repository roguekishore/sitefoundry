import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CursorSplitPanelProps {
  /** the text column (title, copy, link) */
  children: ReactNode;
  /** the media frame's content (e.g. a CursorMedia placeholder or an image) */
  media: ReactNode;
  /** which side the media sits on from the desktop layout up */
  mediaSide?: "left" | "right";
  /** size of the media frame (height or aspect ratio, radius) */
  mediaClassName?: string;
  className?: string;
}

/** The text-⅓ / media-⅔ panel used for feature rows and the team panel. */
export function CursorSplitPanel({ children, media, mediaSide = "right", mediaClassName, className }: CursorSplitPanelProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 rounded-lg border border-border bg-card p-4 lg:flex-row lg:items-center lg:gap-10",
        mediaSide === "left" && "lg:flex-row-reverse",
        className,
      )}
    >
      <div className="min-w-0 lg:flex-1 lg:px-1">{children}</div>
      <div className={cn("min-w-0 overflow-clip rounded-lg lg:w-[66.4%] lg:shrink-0", mediaClassName)}>{media}</div>
    </div>
  );
}
