import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./wild-ag-ticker.css";

export interface WildAgTickerProps {
  /** one copy of the line; it is repeated once to close the loop */
  children: ReactNode;
  /** seconds for one copy to pass */
  duration?: number;
  /** left (default) or right */
  direction?: "left" | "right";
  /** space between the items and between the two copies, as a CSS length */
  gap?: string;
  className?: string;
}

export function WildAgTicker({ children, duration = 30, direction = "left", gap = "0px", className }: WildAgTickerProps) {
  return (
    <div className={cn("overflow-clip", className)}>
      <div
        className={cn("wild-ag-ticker-track flex w-max", direction === "right" && "wild-ag-ticker-right")}
        style={{ "--wild-ag-ticker-duration": `${duration}s` } as CSSProperties}
      >
        <div className="flex shrink-0" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div aria-hidden className="flex shrink-0" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
      </div>
    </div>
  );
}
