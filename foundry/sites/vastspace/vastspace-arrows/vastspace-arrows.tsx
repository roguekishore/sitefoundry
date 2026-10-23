import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface VastspaceArrowsProps {
  /** screen-reader label of the previous button */
  prevLabel: string;
  /** screen-reader label of the next button */
  nextLabel: string;
  /** called when previous is pressed */
  onPrev?: () => void;
  /** called when next is pressed */
  onNext?: () => void;
  /** dims and disables previous */
  prevDisabled?: boolean;
  /** dims and disables next */
  nextDisabled?: boolean;
  className?: string;
}

const buttonClass =
  "flex size-[2.8125rem] items-center justify-center bg-muted text-foreground transition-[filter,opacity] duration-500 ease-[cubic-bezier(0.62,0.05,0.01,0.99)] hover:brightness-90 disabled:opacity-40 motion-reduce:transition-none";

export function VastspaceArrows({ prevLabel, nextLabel, onPrev, onNext, prevDisabled, nextDisabled, className }: VastspaceArrowsProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <button type="button" aria-label={prevLabel} onClick={onPrev} disabled={prevDisabled} className={buttonClass}>
        <ChevronLeft className="size-5" strokeWidth={1.25} />
      </button>
      <button type="button" aria-label={nextLabel} onClick={onNext} disabled={nextDisabled} className={buttonClass}>
        <ChevronRight className="size-5" strokeWidth={1.25} />
      </button>
    </div>
  );
}
