import { cn } from "@foundry/foundry-utils";
import { SuperhumanSectionHeading, type SuperhumanSectionHeadingProps } from "@foundry/superhuman-section-heading";
import { SuperhumanTile, type SuperhumanTileProps } from "@foundry/superhuman-tile";

export interface SuperhumanPagesProps {
  /** the centred heading block */
  heading: SuperhumanSectionHeadingProps;
  /** the wide tile (stone) */
  wide: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the left half tile (pale lilac) */
  left: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the right half tile (maroon) */
  right: Omit<SuperhumanTileProps, "tone" | "layout">;
  className?: string;
}

export function SuperhumanPages({ heading, wide, left, right, className }: SuperhumanPagesProps) {
  return (
    <section className={cn("bg-background px-gutter py-10 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <SuperhumanSectionHeading {...heading} className="mb-10 lg:mb-24" />
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          <SuperhumanTile {...wide} tone="stone" className="lg:col-span-2 lg:h-[20.9375rem]" />
          <SuperhumanTile {...left} tone="lilac" inset className="lg:h-[16.4375rem]" />
          <SuperhumanTile {...right} tone="maroon" inset className="lg:h-[16.4375rem]" />
        </div>
      </div>
    </section>
  );
}
