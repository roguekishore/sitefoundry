import { cn } from "@foundry/foundry-utils";
import { AndurilProductTile, type AndurilProductTileProps } from "@foundry/anduril-product-tile";

export interface AndurilProductsItem extends AndurilProductTileProps {
  /** desktop shape: a square, a tall tile over two rows, or a wide tile over two columns (all squares on phones) */
  shape?: "square" | "tall" | "wide";
}

export interface AndurilProductsProps {
  /** the tiles, in reading order */
  items: AndurilProductsItem[];
  className?: string;
}

const shapes = {
  square: "aspect-square",
  tall: "aspect-square md:row-span-2 md:aspect-auto",
  wide: "aspect-square md:col-span-2 md:aspect-[2/1]",
};

/** Three-column bento of product tiles; a single column of squares on phones. */
export function AndurilProducts({ items, className }: AndurilProductsProps) {
  return (
    <section className={cn("bg-background px-gutter pt-1.5 pb-[4.75rem] md:pt-5 md:pb-24", className)}>
      <div className="grid gap-1.5 md:grid-cols-3 md:gap-[1.125rem]">
        {items.map(({ shape = "square", ...tile }) => (
          <AndurilProductTile key={tile.name} {...tile} className={cn(shapes[shape], tile.className)} />
        ))}
      </div>
    </section>
  );
}
