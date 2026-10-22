import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyMediaProps {
  /** the photo, video or illustration; it covers the frame (contain: set fit) */
  media?: ReactNode;
  /** how a given media fills the frame */
  fit?: "cover" | "contain";
  /**
   * placeholder look: light (a translucent ink tint for light bands) or photo (a mid grey on
   * the background colour, for frames under a dark scrim)
   */
  tone?: "light" | "photo";
  /** describes the placeholder for screen readers (ignored when media is given) */
  label?: string;
  /** size, ratio and radius of the frame */
  className?: string;
  /** anything drawn over the media (scrims, captions) */
  children?: ReactNode;
}

export function BasepowercompanyMedia({ media, fit = "cover", tone = "light", label, className, children }: BasepowercompanyMediaProps) {
  return (
    <div className={cn("relative overflow-clip", className)}>
      {media ? (
        <div
          className={cn(
            "absolute inset-0 [&>img]:size-full [&>video]:size-full",
            fit === "cover" ? "[&>img]:object-cover [&>video]:object-cover" : "[&>img]:object-contain [&>video]:object-contain",
          )}
        >
          {media}
        </div>
      ) : (
        <div
          role={label ? "img" : undefined}
          aria-label={label}
          className={cn("absolute inset-0", tone === "light" ? "bg-muted-foreground/25" : "bg-background")}
        >
          {tone === "photo" && <div className="absolute inset-0 bg-muted-foreground/40" />}
        </div>
      )}
      {children}
    </div>
  );
}
