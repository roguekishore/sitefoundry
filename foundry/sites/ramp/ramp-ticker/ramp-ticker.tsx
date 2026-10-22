import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampLiveNumber, type RampLiveNumberProps } from "@foundry/ramp-live-number";
import "./ramp-ticker.css";

export interface RampTickerItem {
  /** uppercase label, e.g. "Invoices matched" */
  label: string;
  /** the live figure */
  number: RampLiveNumberProps;
}

export interface RampTickerProps {
  /** the fixed label at the start, e.g. "Agents on shift today" */
  label: string;
  /** a small icon before the label (optional) */
  icon?: ReactNode;
  /** the counters that slide by */
  items: RampTickerItem[];
  /** stick to the window's bottom edge until it reaches its place (default on) */
  sticky?: boolean;
  className?: string;
}

function Row({ items, hidden }: { items: RampTickerItem[]; hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2 border-l border-foreground/12 px-4 text-xs whitespace-nowrap text-muted-foreground uppercase lg:text-[0.8125rem]">
          {item.label}:
          <span className="rounded-[calc(var(--radius)-9px)] bg-foreground/[0.06] px-1.5 py-0.5 text-foreground">
            <RampLiveNumber {...item.number} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** Ramp's live agent counters: a frosted bar riding the bottom of the first screen. */
export function RampTicker({ label, icon, items, sticky = true, className }: RampTickerProps) {
  return (
    <div
      className={cn(
        "z-30 border-t border-foreground/[0.06] bg-background/60 text-foreground backdrop-blur-md",
        sticky && "sticky bottom-0",
        className,
      )}
    >
      <div className="mx-auto flex max-w-page flex-col items-center gap-1 py-2 lg:h-10 lg:flex-row lg:gap-0 lg:px-[calc(var(--page-gutter)*4)] lg:py-0">
        <p className="flex shrink-0 items-center gap-2 pr-5 text-xs uppercase lg:text-[0.8125rem] [&_svg]:size-4">
          {icon}
          {label}
        </p>
        <div className="ramp-ticker-fade w-full min-w-0 overflow-clip">
          <div className="ramp-ticker-track flex w-max">
            <Row items={items} />
            <Row items={items} hidden />
          </div>
        </div>
      </div>
    </div>
  );
}
