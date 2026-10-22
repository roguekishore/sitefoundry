import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface AspensearchArrowsProps {
  /** called by the left arrow */
  onPrev?: () => void;
  /** called by the right arrow */
  onNext?: () => void;
  /** screen-reader name of the left arrow, e.g. "Previous" */
  prevLabel: string;
  /** screen-reader name of the right arrow, e.g. "Next" */
  nextLabel: string;
  /** greys out the left arrow (at the start of a list) */
  prevDisabled?: boolean;
  /** greys out the right arrow (at the end of a list) */
  nextDisabled?: boolean;
  className?: string;
}

const cell =
  "group relative isolate flex h-[3.75rem] flex-1 items-center justify-center overflow-clip transition-colors duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-foreground before:transition-transform before:duration-800 before:ease-[cubic-bezier(0.16,1,0.3,1)] enabled:hover:text-background enabled:hover:before:scale-y-100 disabled:text-muted-foreground motion-reduce:transition-none motion-reduce:before:transition-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring";

/** Two square arrow buttons side by side, split by a hairline; an ink fill rises behind the hovered one. */
export function AspensearchArrows({ onPrev, onNext, prevLabel, nextLabel, prevDisabled, nextDisabled, className }: AspensearchArrowsProps) {
  return (
    <div className={cn("flex text-foreground", className)}>
      <button type="button" aria-label={prevLabel} onClick={onPrev} disabled={prevDisabled} className={cn(cell, "border-r border-border")}>
        <ArrowLeft aria-hidden className="size-5" strokeWidth={1.25} />
      </button>
      <button type="button" aria-label={nextLabel} onClick={onNext} disabled={nextDisabled} className={cell}>
        <ArrowRight aria-hidden className="size-5" strokeWidth={1.25} />
      </button>
    </div>
  );
}
