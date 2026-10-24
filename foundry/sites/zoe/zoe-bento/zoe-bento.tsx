import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ZoePlaceholder } from "@foundry/zoe-placeholder";

export interface ZoeBentoTile {
  /** photo: a picture · figure: a big number and caption · feature: a title over a composite image */
  kind: "photo" | "figure" | "feature";
  /** figure: the number ("90+") · feature: the title */
  title?: string;
  /** figure: the small uppercase caption at the bottom */
  caption?: string;
  /** figure tiles: ink (navy, yellow number) or sage · feature tiles: sun (yellow) or cream */
  tone?: "ink" | "sage" | "sun" | "cream";
  /** the picture (object-cover); a placeholder when empty */
  media?: ReactNode;
  /** makes the tile a link */
  href?: string;
}

export interface ZoeBentoProps {
  /** up to eight tiles, filling the slots big, small, small, big, big, small, small, wide */
  tiles: ZoeBentoTile[];
  className?: string;
}

// Where each slot sits. Phones: 2 columns, auto-placed in order. Desktop: a 6 × 3 grid of squares.
const slots = [
  "col-span-2 row-span-2 lg:col-start-1 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "col-span-2 row-span-2 lg:col-start-5 lg:row-start-1",
  "col-span-2 row-span-2 lg:col-start-3 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-2 lg:row-start-3",
  "hidden lg:block lg:col-span-2 lg:col-start-5 lg:row-start-3",
];

const tones = {
  ink: "bg-foreground text-background dark:bg-card dark:text-card-foreground",
  sage: "bg-chart-1 text-foreground",
  sun: "bg-primary text-primary-foreground",
  cream: "bg-card text-card-foreground",
};

function Tile({ tile }: { tile: ZoeBentoTile }) {
  if (tile.kind === "photo") {
    return (
      <div className="size-full *:size-full *:object-cover">{tile.media ?? <ZoePlaceholder tone="photo" fade />}</div>
    );
  }
  if (tile.kind === "figure") {
    return (
      <div className={cn("flex size-full flex-col justify-between p-3 lg:p-[1.125rem]", tones[tile.tone ?? "ink"])}>
        <p
          className={cn(
            "font-[family-name:var(--zoe-serif,var(--typeface-display))] text-[3rem] leading-none font-light tracking-[-0.03em] lg:text-[4rem]",
            (tile.tone ?? "ink") === "ink" && "text-primary",
          )}
        >
          {tile.title}
        </p>
        <p className="max-w-[12rem] text-[0.8125rem] leading-[1.15] tracking-[0.06em] uppercase lg:text-base">
          {tile.caption}
        </p>
      </div>
    );
  }
  return (
    <div className={cn("relative isolate size-full", tones[tile.tone ?? "sun"])}>
      {tile.media ? (
        <div className="absolute inset-0 -z-10 *:size-full *:object-cover">{tile.media}</div>
      ) : (
        <ZoePlaceholder
          tone={tile.tone === "cream" ? "soft" : "glass"}
          fade
          className="absolute inset-x-[14%] top-[38%] bottom-0 -z-10 rounded-t-2xl"
        />
      )}
      <p className="max-w-[16rem] p-5 text-xl leading-[1.15] tracking-[-0.01em] lg:p-7 lg:text-[1.875rem]">{tile.title}</p>
    </div>
  );
}

/** Zoe's edge-to-edge bento of photos and figures. */
export function ZoeBento({ tiles, className }: ZoeBentoProps) {
  return (
    <section className={cn("@container px-6 lg:px-0", className)}>
      <div className="grid auto-rows-[calc((100cqw-0.5rem)/2)] grid-cols-2 gap-2 lg:auto-rows-[calc((100cqw-5rem)/6)] lg:grid-cols-6 lg:gap-4">
        {tiles.slice(0, 8).map((tile, i) => {
          const cls = cn("overflow-clip rounded-lg", slots[i]);
          return tile.href ? (
            <a key={i} href={tile.href} className={cls}>
              <Tile tile={tile} />
            </a>
          ) : (
            <div key={i} className={cls}>
              <Tile tile={tile} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
