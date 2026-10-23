import { cn } from "@foundry/foundry-utils";

export interface ThirdwayCountPillProps {
  /** the figure, e.g. "06" */
  value: string;
  className?: string;
}

/** A figure in a 2px outlined pill: counters, dates, the clock. Takes the surrounding text colour. */
export function ThirdwayCountPill({ value, className }: ThirdwayCountPillProps) {
  return (
    <span className={cn("inline-flex h-[1.125rem] min-w-[1.4rem] items-center justify-center rounded-full border-2 border-current px-1 text-[0.8125rem] leading-none font-[560] tracking-[-0.04em] tabular-nums", className)}>
      {value}
    </span>
  );
}
