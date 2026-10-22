import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./eightsleep-marquee.css";

export interface EightsleepMarqueeProps {
  /** the items, in order; each is one slot of the row */
  items: ReactNode[];
  /** seconds per full lap */
  duration?: number;
  /** gap between items: the default is 15px, wide is 16px on phones and 24px up */
  gap?: "default" | "wide";
  className?: string;
}

export function EightsleepMarquee({ items, duration = 60, gap = "default", className }: EightsleepMarqueeProps) {
  const gapClass = gap === "wide" ? "gap-4 pr-4 lg:gap-6 lg:pr-6" : "gap-[15px] pr-[15px]";
  const row = (copy: boolean) => (
    <ul className={cn("flex shrink-0", gapClass, copy && "eightsleep-marquee-copy")} aria-hidden={copy || undefined}>
      {items.map((item, i) => (
        <li key={i} className="shrink-0">
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("eightsleep-marquee overflow-x-clip", className)} style={{ "--eightsleep-marquee-time": `${duration}s` } as CSSProperties}>
      <div className="eightsleep-marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
