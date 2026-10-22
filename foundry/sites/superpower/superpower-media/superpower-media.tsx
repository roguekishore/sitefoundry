import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperpowerMediaProps {
  /** the photo or video; it covers the frame. Empty: a placeholder surface */
  media?: ReactNode;
  /** placeholder look: muted (flat grey) or warm (amber light into the dark, for photo bands) */
  tone?: "muted" | "warm";
  /** describes the placeholder for screen readers (ignored when media is given) */
  label?: string;
  /** size, ratio and radius of the frame */
  className?: string;
  /** anything drawn over the media (badges, captions) */
  children?: ReactNode;
}

export function SuperpowerMedia({ media, tone = "muted", label, className, children }: SuperpowerMediaProps) {
  return (
    <div className={cn("relative overflow-clip", className)}>
      {media ? (
        <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">{media}</div>
      ) : (
        <div
          role={label ? "img" : undefined}
          aria-label={label}
          className={cn(
            "absolute inset-0",
            tone === "muted" && "bg-muted",
            tone === "warm" &&
              "bg-background bg-[radial-gradient(70%_80%_at_62%_38%,color-mix(in_oklab,var(--highlight)_70%,transparent),color-mix(in_oklab,var(--glow)_30%,transparent)_45%,transparent_80%)]",
          )}
        />
      )}
      {children}
    </div>
  );
}
