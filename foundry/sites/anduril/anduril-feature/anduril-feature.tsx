import { cn } from "@foundry/foundry-utils";
import { AndurilProductTile, type AndurilProductTileProps } from "@foundry/anduril-product-tile";

export interface AndurilFeatureProps {
  /** the one featured product */
  tile: AndurilProductTileProps;
  className?: string;
}

/** A single letterbox product tile (3:1 desktop, square phone) on the black page. */
export function AndurilFeature({ tile, className }: AndurilFeatureProps) {
  return (
    <section className={cn("bg-background px-gutter pt-[1.125rem] md:pt-5", className)}>
      <AndurilProductTile {...tile} className={cn("aspect-square md:aspect-[3/1]", tile.className)} />
    </section>
  );
}
