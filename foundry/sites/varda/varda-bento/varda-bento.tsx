import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { VardaPlaceholder } from "@foundry/varda-placeholder";
import { VardaTile } from "@foundry/varda-tile";

export interface VardaBentoTile {
  /** small bold label at the top */
  eyebrow: string;
  /** the tile's heading */
  title: string;
  /** where the tile links to */
  href: string;
  /** image or video for the tile's media slot (empty: a placeholder) */
  media?: ReactNode;
  /** what the media slot shows, for screen readers while it is empty */
  mediaLabel?: string;
}

export interface VardaBentoProps {
  /** wide navy tile at the top, with a video slot beside it */
  feature: VardaBentoTile;
  /** tall orange tile on the left, with a photo slot at its foot */
  tall: VardaBentoTile;
  /** the two short tiles: navy, then off-white */
  pair: [VardaBentoTile, VardaBentoTile];
  /** wide off-white tile at the bottom right, with a photo slot beside it */
  wide: VardaBentoTile;
  className?: string;
}

/** Gapless three-column bento of flat navy, orange and off-white link tiles with media slots. */
export function VardaBento({ feature, tall, pair, wide, className }: VardaBentoProps) {
  return (
    <section className={cn("grid grid-cols-2 bg-background lg:grid-cols-3", className)}>
      {/* feature: video on top on phones, text left + video over two columns on desktop */}
      <VardaTile
        {...feature}
        tone="navy"
        className="col-span-2 border-b border-border lg:col-span-3 lg:row-start-1 lg:grid-cols-3 lg:border-b-0"
        textClassName="lg:col-start-1 lg:row-start-1"
        mediaClassName="max-lg:order-first border-b border-border p-gutter lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:border-b-0 lg:border-l"
        media={
          <VardaPlaceholder media={feature.media} label={feature.mediaLabel} className="aspect-[2.2/1] w-full lg:aspect-[2.1/1]">
            <span
              aria-hidden
              className="grid size-12 place-items-center rounded-full bg-background text-primary"
            >
              <Play aria-hidden className="ml-0.5 size-5 fill-current" />
            </span>
          </VardaPlaceholder>
        }
      />
      {/* the short pair: side by side on phones, middle and right of row two on desktop */}
      <VardaTile {...pair[0]} tone="navy" size="sm" className="col-start-1 lg:col-start-2 lg:row-start-2" />
      <VardaTile {...pair[1]} tone="light" size="sm" className="col-start-2 lg:col-start-3 lg:row-start-2" />
      {/* tall orange tile: photo inset on the left, flush right and bottom */}
      <VardaTile
        {...tall}
        tone="orange"
        className="col-span-2 grid-rows-[auto_1fr] lg:col-span-1 lg:col-start-1 lg:row-span-2 lg:row-start-2"
        textClassName="justify-start pb-8"
        mediaClassName="pl-gutter"
        media={<VardaPlaceholder media={tall.media} label={tall.mediaLabel} className="aspect-[2/1] h-full w-full lg:aspect-auto" />}
      />
      {/* wide off-white tile: text and photo side by side on desktop */}
      <VardaTile
        {...wide}
        tone="light"
        className="col-span-2 lg:col-start-2 lg:row-start-3 lg:grid-cols-2"
        mediaClassName="pl-gutter lg:pt-gutter lg:pl-0"
        media={<VardaPlaceholder media={wide.media} label={wide.mediaLabel} className="aspect-[2/1] w-full lg:aspect-[1.04/1]" />}
      />
    </section>
  );
}
