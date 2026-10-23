import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface OndoArrowsProps {
  /** go back one */
  onPrev?: () => void;
  /** go forward one */
  onNext?: () => void;
  /** greys out the back button (at the first item) */
  atStart?: boolean;
  /** greys out the forward button (at the last item) */
  atEnd?: boolean;
  /** screen-reader labels for the two buttons */
  labels?: { prev: string; next: string };
  className?: string;
}

const button =
  "grid size-9 place-items-center rounded-lg bg-foreground/10 text-foreground transition-[background-color,opacity,transform] duration-150 ease-out hover:bg-foreground/20 active:scale-95 disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none";

/** Previous / next square buttons for the site's carousels. */
export function OndoArrows({ onPrev, onNext, atStart, atEnd, labels, className }: OndoArrowsProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <button type="button" onClick={onPrev} disabled={atStart} aria-label={labels?.prev} className={button}>
        <ChevronLeft aria-hidden className="size-3.5" strokeWidth={1.75} />
      </button>
      <button type="button" onClick={onNext} disabled={atEnd} aria-label={labels?.next} className={button}>
        <ChevronRight aria-hidden className="size-3.5" strokeWidth={1.75} />
      </button>
    </div>
  );
}
