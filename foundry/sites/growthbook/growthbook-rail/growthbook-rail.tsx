import { cn } from "@foundry/foundry-utils";
import "./growthbook-rail.css";

export interface GrowthbookRailProps {
  /** which edge of the positioned parent it rides */
  side?: "left" | "right";
  /** fixed: the gradient fills the whole edge and stays still (the card-edge variant) */
  fixed?: boolean;
  /** bar width in px-ish Tailwind classes, e.g. "w-[3px]" (default) */
  className?: string;
}

/** Decorative only (aria-hidden). Put it in a `relative` box. */
export function GrowthbookRail({ side = "left", fixed, className }: GrowthbookRailProps) {
  return (
    <span
      aria-hidden
      data-fixed={fixed ? "" : undefined}
      className={cn(
        "growthbook-rail pointer-events-none absolute inset-y-0 w-[3px] overflow-clip",
        side === "left" ? "-left-px" : "-right-px",
        className,
      )}
    >
      <span className="growthbook-rail-bar absolute inset-x-0 top-0 block" />
    </span>
  );
}
