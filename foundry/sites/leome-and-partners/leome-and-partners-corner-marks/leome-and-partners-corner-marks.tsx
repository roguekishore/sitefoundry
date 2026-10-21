import { cn } from "@foundry/foundry-utils";

export interface LeomeAndPartnersCornerMarksProps {
  /** the edge the two marks sit along: near the top (4.5rem down) or at the section padding from the bottom */
  edge?: "top" | "bottom";
  className?: string;
}

/**
 * Two small primary-coloured squares at the page gutters, one each side: the original's quiet
 * corner marks on photo panels and section ends. Place inside a `relative` section.
 */
export function LeomeAndPartnersCornerMarks({ edge = "top", className }: LeomeAndPartnersCornerMarksProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-gutter z-10 flex justify-between",
        edge === "top" ? "top-[4.5rem]" : "bottom-section",
        className,
      )}
    >
      <span className="size-[0.6875rem] bg-primary" />
      <span className="size-[0.6875rem] bg-primary" />
    </div>
  );
}
