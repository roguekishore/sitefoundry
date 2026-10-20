import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface WiemerV2DotFieldProps {
  /** what sits centred over the dots (a form card, say) */
  children: ReactNode;
  /** dots across (default 12) */
  columns?: number;
  /** rows of dots (default 9); with the columns this sets the field's height */
  rows?: number;
  className?: string;
}

/**
 * A field of large, pale perforation dots on a square grid (from lg up), with content centred
 * over it. A dot darkens at once under the pointer and fades back slowly, leaving a short
 * trail. On phones only the content shows.
 */
export function WiemerV2DotField({ children, columns = 12, rows = 9, className }: WiemerV2DotFieldProps) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden="true" className="hidden px-gutter lg:grid" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {Array.from({ length: columns * rows }, (_, i) => (
          <div key={i} className="grid aspect-square place-items-center">
            <div className="size-[2.5vw] max-h-9 max-w-9 rounded-full bg-secondary transition-colors duration-700 ease-out hover:bg-foreground/50 hover:duration-0 motion-reduce:transition-none" />
          </div>
        ))}
      </div>
      <div className="px-gutter lg:pointer-events-none lg:absolute lg:inset-0 lg:grid lg:place-items-center">
        <div className="lg:pointer-events-auto">{children}</div>
      </div>
    </div>
  );
}
