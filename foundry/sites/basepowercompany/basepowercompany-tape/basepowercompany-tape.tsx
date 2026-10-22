import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface BasepowercompanyTapeProps {
  /** the short handwritten-style label on the tape */
  children: ReactNode;
  /** tilt in degrees (the original sits a touch off level) */
  tilt?: number;
  className?: string;
}

// Torn ends: the polygon zigzags a few pixels in at the left and right edges.
const torn =
  "polygon(2% 4%, 34% 0, 67% 3%, 98% 0, 100% 22%, 97% 41%, 100% 63%, 97% 82%, 99% 100%, 64% 96%, 31% 100%, 1% 97%, 3% 78%, 0 57%, 3% 36%, 0 17%)";

export function BasepowercompanyTape({ children, tilt = -1.5, className }: BasepowercompanyTapeProps) {
  return (
    <span
      className={cn(
        "inline-block bg-highlight px-6 pt-2 pb-2.5 font-sans text-base font-bold tracking-normal text-highlight-foreground italic",
        className,
      )}
      style={{ clipPath: torn, transform: `rotate(${tilt}deg)` }}
    >
      {children}
    </span>
  );
}
