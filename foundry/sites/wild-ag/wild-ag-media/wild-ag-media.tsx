import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WildAgMediaProps {
  /** an <img> or <video>; it is stretched to cover the frame. Empty: a placeholder */
  media?: ReactNode;
  /** placeholder colour: sand (images on paper) or soft (a pale light-to-sand wash for big footage) */
  tone?: "sand" | "soft";
  /** true: the footage is fixed to the window and the frame only shows the part behind it */
  fixed?: boolean;
  /** round the bottom corners with the bands' big radius (fixed frames can't use a rounded class) */
  roundBottom?: boolean;
  /** sizing, radius and position of the frame */
  className?: string;
}

const cover = "size-full [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover";

export function WildAgMedia({ media, tone = "sand", fixed = false, roundBottom = false, className }: WildAgMediaProps) {
  const fill = media ?? (
    <div
      aria-hidden
      className={cn("size-full", tone === "sand" ? "bg-secondary" : "bg-linear-15 from-secondary to-muted")}
    />
  );
  if (fixed) {
    // clip-path clips even position:fixed children, so the layer below stays still in the
    // window while this frame moves over it.
    return (
      <div
        className={cn(
          "relative",
          roundBottom
            ? "[clip-path:inset(0_round_0_0_calc(var(--radius)*3.4)_calc(var(--radius)*3.4))] lg:[clip-path:inset(0_round_0_0_calc(var(--radius)*4.5)_calc(var(--radius)*4.5))]"
            : "[clip-path:inset(0)]",
          className,
        )}
      >
        <div className={cn("fixed inset-x-0 top-0 h-svh", cover)}>{fill}</div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "relative overflow-clip",
        roundBottom && "rounded-b-[calc(var(--radius)*3.4)] lg:rounded-b-[calc(var(--radius)*4.5)]",
        className,
      )}
    >
      <div className={cn("absolute inset-0", cover)}>{fill}</div>
    </div>
  );
}
