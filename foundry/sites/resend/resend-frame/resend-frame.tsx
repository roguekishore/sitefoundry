import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ResendFrameProps {
  /** the section's content */
  children: ReactNode;
  /** where the light pools under the top edge */
  glow?: "center" | "end" | "none";
  /** rounded: a page-wide frame with rounded top corners · line: a straight full-width hairline (footer) */
  edge?: "rounded" | "line";
  className?: string;
}

export function ResendFrame({ children, glow = "center", edge = "rounded", className }: ResendFrameProps) {
  return (
    <div className={cn("relative mx-auto", edge === "rounded" && "max-w-page", className)}>
      {edge === "rounded" ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-48 rounded-t-2xl border border-b-0 border-border mask-b-from-0% mask-b-to-100%"
        />
      ) : (
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
      )}
      {glow !== "none" && (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute top-px h-36 bg-radial-[ellipse_at_50%_0%] from-glow/14 to-transparent to-70%",
            edge === "line"
              ? "left-1/2 w-[min(64rem,100%)] -translate-x-1/2 from-glow/10"
              : glow === "center"
                ? "left-1/2 w-[min(28rem,100%)] -translate-x-1/2"
                : "right-[10%] w-[min(26rem,70%)]",
          )}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
