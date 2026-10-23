import { cn } from "@foundry/foundry-utils";
import { SuperhumanSectionHeading, type SuperhumanSectionHeadingProps } from "@foundry/superhuman-section-heading";
import { SuperhumanTile, type SuperhumanTileProps } from "@foundry/superhuman-tile";

export interface SuperhumanPostProps {
  /** the centred heading block */
  heading: SuperhumanSectionHeadingProps;
  /** the tall tile on the left (purple) */
  main: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the upper right tile (indigo) */
  topRight: Omit<SuperhumanTileProps, "tone" | "layout">;
  /** the lower right tile (stone) */
  bottomRight: Omit<SuperhumanTileProps, "tone" | "layout">;
  className?: string;
}

export function SuperhumanPost({ heading, main, topRight, bottomRight, className }: SuperhumanPostProps) {
  return (
    <section className={cn("bg-background px-gutter py-10 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <SuperhumanSectionHeading {...heading} className="mb-20" />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,728fr)_minmax(0,520fr)] lg:grid-rows-[14.375rem_24.8125rem] lg:gap-8">
          <SuperhumanTile {...main} tone="purple" layout="stack" className="lg:row-span-2" />
          <SuperhumanTile {...topRight} tone="indigo" layout="stack" overlay />
          <SuperhumanTile {...bottomRight} tone="stone" layout="stack" />
        </div>
      </div>
    </section>
  );
}
