import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./daq-backdrop.css";

export interface DaqBackdropProps {
  /** a looping video, canvas or image filling the window. Empty: a placeholder surface */
  media?: ReactNode;
  /** draw the faint 12-column hairline grid over the media */
  grid?: boolean;
  className?: string;
}

/**
 * The window-sized layer behind the page. It is fixed, so it stays put while transparent
 * sections (hero, manifesto, footer) scroll over it and solid ones hide it.
 */
export function DaqBackdrop({ media, grid = true, className }: DaqBackdropProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none fixed inset-0 isolate overflow-clip", className)}>
      {media ? (
        <div className="absolute inset-0 *:size-full *:object-cover">{media}</div>
      ) : (
        <div className="absolute inset-0 bg-muted">
          <div className="absolute inset-0 bg-radial-[at_30%_25%] from-glow/45 to-transparent to-60%" />
          <div className="absolute inset-0 bg-radial-[at_80%_70%] from-glow/25 to-transparent to-50%" />
        </div>
      )}
      {/* darkens the media a touch so white text always reads */}
      <div className="absolute inset-0 bg-background/35" />
      {grid && <div className="daq-backdrop-grid absolute inset-0" />}
      {/* a soft light from the top centre, and the fade into the page at the bottom */}
      <div className="absolute inset-0 bg-radial-[circle_at_50%_0] from-foreground/3 to-transparent to-70%" />
      <div className="absolute inset-x-0 bottom-0 h-1/4 bg-linear-to-b from-transparent to-background" />
    </div>
  );
}
