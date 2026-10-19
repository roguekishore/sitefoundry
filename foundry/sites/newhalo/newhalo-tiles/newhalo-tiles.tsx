import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface NewhaloTile {
  label: string;
  /** makes the tile a link (e.g. "#section-id"); without it the tile is a button */
  href?: string;
}

export interface NewhaloTilesProps {
  items: NewhaloTile[];
  /** the current tile, filled orange */
  activeIndex?: number;
  /** called with the tile's index when a button tile is pressed */
  onSelect?: (index: number) => void;
  className?: string;
}

/**
 * A topic picker: white tiles with a label at the bottom left and a thin arrow at the bottom
 * right, two to a row on desktop, the current one orange. On phones they become one row
 * that scrolls sideways, edge to edge.
 */
export function NewhaloTiles({ items, activeIndex = 0, onSelect, className }: NewhaloTilesProps) {
  return (
    <ul
      className={cn(
        "-mx-[calc(var(--page-gutter)-6px)] flex snap-x gap-0.5 overflow-x-auto px-1.5 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0",
        className,
      )}
    >
      {items.map((t, i) => {
        const classes = cn(
          "group/tile flex h-12 w-[9.2rem] shrink-0 snap-start items-end justify-between rounded-sm px-2.5 pb-1.5 text-left text-sm leading-none transition-colors duration-300 lg:h-20 lg:w-full lg:pb-2.5 lg:text-base",
          i === activeIndex ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground hover:bg-accent",
        );
        const inner = (
          <>
            <span className="max-w-[9rem] leading-[1.05]">{t.label}</span>
            <ArrowRight aria-hidden strokeWidth={1} className="hidden size-6 shrink-0 transition-transform duration-300 group-hover/tile:translate-x-1 lg:block" />
          </>
        );
        return (
          <li key={t.label} className="lg:contents">
            {t.href ? (
              <a href={t.href} aria-current={i === activeIndex || undefined} className={classes}>
                {inner}
              </a>
            ) : (
              <button type="button" aria-pressed={i === activeIndex} onClick={() => onSelect?.(i)} className={classes}>
                {inner}
              </button>
            )}
          </li>
        );
      })}
    </ul>
  );
}
