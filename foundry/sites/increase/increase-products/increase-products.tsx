import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { IncreaseHeading } from "@foundry/increase-heading";

export interface IncreaseRail {
  /** the rail's name */
  label: string;
  /** a small icon (lucide) shown in a 32px tile */
  icon: ReactNode;
  href?: string;
  /** the tile is filled with the primary colour */
  active?: boolean;
}

export interface IncreaseBentoPanel {
  /** the panel's title, top left */
  title: string;
  /** the product picture: a screenshot, mock-up or video. Empty: a white placeholder card */
  media?: ReactNode;
  /**
   * where the picture runs off the panel: inset (inside the padding), bottom, bottom-right
   * (off the right and bottom edges) or bottom-left
   */
  bleed?: "inset" | "bottom" | "bottom-right" | "bottom-left";
  /** a 2-column list of rails under the title (used by the first, full-width panel) */
  rails?: IncreaseRail[];
}

export interface IncreaseProductsProps {
  /** the lead statement's dark opening clause */
  lead: string;
  /** the rest of it, in grey */
  rest?: string;
  /**
   * the panels, in reading order. Desktop: the first spans the row (list left, picture right),
   * then pairs alternate 7:5 and 5:7 columns. Phones: stacked.
   */
  panels: IncreaseBentoPanel[];
  className?: string;
}

const bleeds = {
  inset: "",
  bottom: "-mb-8",
  "bottom-right": "-mr-8 -mb-8",
  "bottom-left": "-ml-8 -mb-8",
};

function Media({ media, bleed = "inset", className }: { media?: ReactNode; bleed?: IncreaseBentoPanel["bleed"]; className?: string }) {
  return (
    <div
      aria-hidden={media ? undefined : true}
      className={cn(
        "relative overflow-clip rounded-xl border border-border bg-card shadow-[0_1px_2px_color-mix(in_oklab,var(--foreground)_5%,transparent)] [&>img]:size-full [&>img]:object-cover",
        bleeds[bleed],
        className,
      )}
    >
      {media}
    </div>
  );
}

function Rails({ rails }: { rails: IncreaseRail[] }) {
  return (
    <ul className="mt-6 grid grid-cols-[auto_1fr] gap-x-7 gap-y-4 sm:gap-x-12 lg:mt-14 lg:ml-6 lg:grid-cols-[9.5rem_1fr] lg:gap-x-8 lg:gap-y-8">
      {rails.map((rail) => {
        const Tag = rail.href ? "a" : "span";
        return (
          <li key={rail.label}>
            <Tag href={rail.href} className="group flex items-center gap-3 text-base whitespace-nowrap text-foreground lg:gap-4 lg:text-lg">
              <span
                className={cn(
                  "grid size-8 shrink-0 place-items-center rounded-md border transition-colors duration-150 motion-reduce:transition-none [&_svg]:size-4",
                  rail.active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-input bg-card text-foreground group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground",
                )}
              >
                {rail.icon}
              </span>
              {rail.label}
            </Tag>
          </li>
        );
      })}
    </ul>
  );
}

/**
 * Increase's product bento: a two-tone lead statement over grey 16px-radius panels on a
 * 12-column grid. Each panel has a plain title and a product picture that runs off one or
 * two of its edges; the first panel adds a two-column list of rails with icon tiles.
 */
export function IncreaseProducts({ lead, rest, panels, className }: IncreaseProductsProps) {
  const [first, ...others] = panels;
  return (
    <section className={cn("border-b border-border bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page border-x border-border px-gutter pt-9 pb-6 lg:pt-section">
        <IncreaseHeading lead={lead} rest={rest} />

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-16 lg:grid-cols-12 lg:gap-6">
          {first && (
            <article className="overflow-clip rounded-2xl border border-border bg-muted p-4 pb-0 sm:p-6 sm:pb-0 lg:col-span-12 lg:grid lg:h-[26.25rem] lg:grid-cols-[1fr_33.75rem] lg:gap-6">
              <div>
                <h3 className="text-xl leading-6 tracking-[-0.01em] lg:text-2xl lg:leading-[1.2]">{first.title}</h3>
                {first.rails && <Rails rails={first.rails} />}
              </div>
              <Media
                media={first.media}
                bleed={first.bleed ?? "bottom-right"}
                className="mt-8 h-[14.5rem] lg:mt-4 lg:mr-14 lg:h-auto"
              />
            </article>
          )}
          {others.map((panel, i) => {
            // pairs alternate wide-narrow, narrow-wide
            const wide = Math.floor(i / 2) % 2 === 0 ? i % 2 === 0 : i % 2 === 1;
            const row = Math.floor(i / 2);
            return (
              <article
                key={panel.title}
                className={cn(
                  "flex h-[25rem] flex-col overflow-clip rounded-2xl border border-border bg-muted p-4 sm:p-6",
                  wide ? "lg:col-span-7" : "lg:col-span-5",
                  row % 2 === 0 ? "lg:h-[23.5rem]" : "lg:h-[26rem]",
                )}
              >
                <h3 className="text-xl leading-6 tracking-[-0.01em] lg:text-2xl lg:leading-[1.2]">{panel.title}</h3>
                <Media media={panel.media} bleed={panel.bleed} className="mt-6 min-h-0 flex-1 lg:mt-7" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
