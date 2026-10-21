import type { CSSProperties } from "react";
import { cn } from "@foundry/foundry-utils";
import "./storeyarchitecture-slide-bars.css";

export interface StoreyarchitectureSlideBarsProps {
  /** how many slides */
  count: number;
  /** the slide showing now */
  active: number;
  /** how long one slide stays, in ms (the fill takes this long) */
  duration: number;
  /** called with a slide's index when its bar is pressed */
  onSelect?: (index: number) => void;
  /** screen-reader label for each bar; the slide number is added after it */
  label: string;
  className?: string;
}

export function StoreyarchitectureSlideBars({ count, active, duration, onSelect, label, className }: StoreyarchitectureSlideBarsProps) {
  return (
    <div className={cn("flex gap-gutter", className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`${label} ${i + 1}`}
          aria-current={i === active}
          onClick={() => onSelect?.(i)}
          className={cn(
            "relative h-[2px] min-w-0 bg-current/30 transition-[flex-grow] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] before:absolute before:inset-x-0 before:-inset-y-2 motion-reduce:transition-none",
            i === active ? "grow-[2.2]" : "grow",
          )}
          style={{ flexBasis: 0 }}
        >
          {i === active && (
            <span
              key={`fill-${active}`}
              className="storeyarchitecture-slide-bars-fill absolute inset-0 bg-current"
              style={{ "--storeyarchitecture-slide-bars-duration": `${duration}ms` } as CSSProperties}
            />
          )}
        </button>
      ))}
    </div>
  );
}
