import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanMarkProps {
  /** the company name, shown in capitals */
  brand: string;
  /** the product name after it (optional) */
  product?: string;
  /** a lucide icon for the tile */
  icon: ReactNode;
  /** tile: a lilac tile behind the icon (section marks) · solid: a dark tile with a light icon (header, footer) */
  tile?: "lilac" | "solid" | "light";
  className?: string;
}

const tiles = {
  lilac: "size-6 rounded-[0.4rem] bg-secondary text-foreground [&_svg]:size-3.5",
  solid: "size-6 rounded-[0.4rem] bg-foreground text-background [&_svg]:size-4",
  light: "size-6 rounded-[0.4rem] bg-primary-foreground text-chart-2 [&_svg]:size-4",
} as const;

/** The company lockup: icon tile, name in tracked capitals, product name. */
export function SuperhumanMark({ brand, product, icon, tile = "lilac", className }: SuperhumanMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-[1.0625rem] leading-none", className)}>
      <span className={cn("flex shrink-0 items-center justify-center", tiles[tile])}>{icon}</span>
      <span className="font-bold tracking-[0.1em] uppercase">{brand}</span>
      {product && <span className="font-medium">{product}</span>}
    </span>
  );
}
