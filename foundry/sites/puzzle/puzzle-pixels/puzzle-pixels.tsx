import { cn } from "@foundry/foundry-utils";

/** Each pattern lists its squares as [column, row, brightness 1–3] on a 4 × 5 grid. */
const patterns = {
  /** a staircase falling to the right */
  stair: [
    [0, 0, 1], [1, 0, 2], [1, 1, 1], [2, 1, 1], [2, 2, 3], [3, 2, 1], [2, 3, 1], [3, 3, 2], [3, 4, 1],
  ],
  /** a squat block with a notch */
  block: [
    [0, 0, 2], [1, 0, 1], [0, 1, 1], [1, 1, 3], [2, 1, 1], [1, 2, 1], [2, 2, 2], [0, 3, 1], [2, 3, 1],
  ],
  /** a short climbing step */
  step: [
    [1, 0, 1], [2, 0, 2], [0, 1, 1], [1, 1, 1], [0, 2, 2], [1, 2, 1], [2, 2, 3],
  ],
} as const;

const brightness = ["", "bg-primary-foreground/[0.03]", "bg-primary-foreground/[0.045]", "bg-highlight/12"];

export interface PuzzlePixelsProps {
  /** which cluster */
  pattern?: keyof typeof patterns;
  /** position (absolute, top/right…) and size; the cell size is --pixel (default 4.25rem) */
  className?: string;
}

/** Decorative squares for the violet bands. */
export function PuzzlePixels({ pattern = "stair", className }: PuzzlePixelsProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none grid grid-cols-[repeat(4,var(--pixel,4.25rem))] grid-rows-[repeat(5,var(--pixel,4.25rem))]", className)}
    >
      {patterns[pattern].map(([col, row, b]) => (
        <span
          key={`${col}-${row}`}
          className={cn("rounded-[calc(var(--radius)*0.6)]", brightness[b])}
          style={{ gridColumnStart: col + 1, gridRowStart: row + 1 }}
        />
      ))}
    </div>
  );
}
