import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerDotFieldProps {
  /** what sits in the middle of the field, e.g. a form card */
  children?: ReactNode;
  /** dots across (default 12) */
  cols?: number;
  /** rows of dots (default 9); the field is cols:rows in proportion */
  rows?: number;
  className?: string;
}

/** A grid of pale dots that darken under the pointer, with content centred over it. */
export function WiemerDotField({ children, cols = 12, rows = 9, className }: WiemerDotFieldProps) {
  return (
    <div className={cn("relative lg:grid lg:place-items-center", className)}>
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
      >
        {Array.from({ length: cols * rows }, (_, i) => (
          <span key={i} className="grid place-items-center">
            <span className="aspect-square w-[32%] rounded-full bg-foreground/5 transition-colors duration-[800ms] ease-out hover:bg-foreground/50 hover:duration-0 motion-reduce:transition-none" />
          </span>
        ))}
      </div>
      {/* the field keeps the dots round: its height follows its width */}
      <div className="hidden lg:block" style={{ gridArea: "1 / 1", width: "100%", aspectRatio: `${cols} / ${rows}` }} />
      <div className="pointer-events-none relative w-full lg:[grid-area:1/1] [&>*]:pointer-events-auto">{children}</div>
    </div>
  );
}
