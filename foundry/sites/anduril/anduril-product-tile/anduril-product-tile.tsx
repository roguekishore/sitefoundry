import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AndurilScramble } from "@foundry/anduril-scramble";
import "./anduril-product-tile.css";

export interface AndurilProductTileProps {
  /** the product name, bottom left */
  name: string;
  /** a short line under the name (always shown on phones, on hover on desktop) */
  tagline: string;
  /** link target for the whole tile */
  href: string;
  /** an <img> or <video> filling the tile (object-fit cover); empty shows a placeholder surface */
  media?: ReactNode;
  className?: string;
}

/** Media tile with a bottom scrim, a bold name and a tagline that opens and decodes on hover. */
export function AndurilProductTile({ name, tagline, href, media, className }: AndurilProductTileProps) {
  return (
    <a
      href={href}
      data-scramble-host
      className={cn("anduril-product-tile group relative block overflow-clip rounded-lg bg-muted text-foreground", className)}
    >
      <div className="absolute inset-0 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">{media}</div>
      <div aria-hidden className="anduril-product-tile-scrim absolute inset-x-0 bottom-0 h-1/2" />

      <div className="absolute inset-x-0 bottom-0 px-4 pb-[1.125rem] md:px-[1.125rem] md:pb-5">
        <p className="font-display text-[1.5rem] leading-[1.15] font-bold tracking-[-0.01em]">{name}</p>
        {/* Phones: always open. Desktop: closed (0fr) until the tile is hovered or focused. */}
        <div className="grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100">
          <div className="min-h-0 overflow-hidden">
            <div className="flex items-end justify-between gap-4 pt-2 md:pt-1.5">
              <AndurilScramble text={tagline} triggers={["view", "hover"]} className="text-[1.125rem] leading-[1.2] tracking-[-0.01em] md:text-[0.9375rem]" />
              <ArrowUpRight aria-hidden className="mb-0.5 size-4 shrink-0" strokeWidth={1.75} />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
