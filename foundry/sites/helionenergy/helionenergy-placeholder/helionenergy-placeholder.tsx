import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./helionenergy-placeholder.css";

export interface HelionenergyPlaceholderProps {
  /** a real image or video to show; it is cropped to the frame like object-fit: cover */
  media?: ReactNode;
  /** "light": a muted surface; "film": always a dark surface (for footage under light text) */
  tone?: "light" | "film";
  /** zoom the contents from 110% to 100% as the frame scrolls into view */
  zoom?: boolean;
  /** size, aspect ratio, radius and position of the frame */
  className?: string;
}

/**
 * A media frame. Filled, it crops whatever it holds; empty, it is a flat muted surface with a
 * soft glow wash rising from the bottom edge, never a drawing of the subject it stands in for.
 * With `zoom`, the inside eases from 110% to 100% while the frame enters the window.
 */
export function HelionenergyPlaceholder({ media, tone = "light", zoom = false, className }: HelionenergyPlaceholderProps) {
  return (
    <div
      aria-hidden={media ? undefined : true}
      className={cn("relative overflow-clip", tone === "film" ? "dark bg-card" : "bg-muted", className)}
    >
      <div
        className={cn(
          "absolute inset-0",
          !media && "bg-linear-to-t from-glow/20 via-glow/5 to-transparent",
          "[&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover",
          zoom && "helionenergy-placeholder-zoom",
        )}
      >
        {media}
      </div>
    </div>
  );
}
