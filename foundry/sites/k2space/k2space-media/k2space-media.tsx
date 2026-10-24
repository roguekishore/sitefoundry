import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./k2space-media.css";

export interface K2spaceMediaProps {
  /** a real image or video; it is cropped to the frame like object-fit cover */
  media?: ReactNode;
  /** settle the content from 115% and blurred to sharp while the frame scrolls into view */
  scrub?: boolean;
  /** a named view timeline to scrub on (e.g. "--my-row") instead of the frame's own; needed inside a horizontal scroller */
  timeline?: string;
  /** size, aspect ratio, radius and position of the frame */
  className?: string;
}

/**
 * A media frame. Filled, it crops whatever it holds; empty, it is a plain dark surface with a
 * soft glow from the bottom edge, never a drawing of the scene it stands in for.
 */
export function K2spaceMedia({ media, scrub = false, timeline, className }: K2spaceMediaProps) {
  return (
    <div aria-hidden={media ? undefined : true} className={cn("dark relative overflow-clip bg-background", className)}>
      <div
        className={cn(
          "absolute inset-0",
          scrub && "k2space-media-scrub",
          !media && "bg-muted bg-radial-[ellipse_90%_70%_at_50%_100%] from-glow/22 via-glow/6 to-transparent",
          "[&>img]:absolute [&>img]:inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:absolute [&>video]:inset-0 [&>video]:size-full [&>video]:object-cover",
        )}
        style={timeline ? ({ "--k2space-media-timeline": timeline } as CSSProperties) : undefined}
      >
        {media}
      </div>
    </div>
  );
}
