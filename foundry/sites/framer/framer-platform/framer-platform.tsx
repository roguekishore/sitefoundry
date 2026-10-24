import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FramerArrowLink } from "@foundry/framer-arrow-link";
import { FramerSectionHead } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";

export interface FramerPlatformCell {
  /** the label in the bottom-left corner (an arrow follows it) */
  label: string;
  /** where the label links */
  href: string;
  /** tall: 1 column × 2 rows · wide: 2 columns × 2 rows · small: 1 × 1 */
  size: "tall" | "wide" | "small";
  /** small cells only: 240px tall on phones instead of 320px */
  compact?: boolean;
  /** how the media sits: inset (margins all round) · bleed (runs off the right edge) · full (fills the cell) */
  fit?: "inset" | "bleed" | "full";
  /** the cell's UI shot or art; empty shows a placeholder */
  media?: ReactNode;
  /** screen-reader label for the placeholder */
  mediaLabel?: string;
}

export interface FramerPlatformProps {
  /** section title; "\n" breaks on desktop only */
  title: string;
  /** one or two grey lines under the title */
  subtitle?: string;
  /** the bento cells, in reading order (nine on the original) */
  cells: FramerPlatformCell[];
  className?: string;
}

const sizes = {
  tall: "h-[30rem] lg:h-auto lg:row-span-2",
  wide: "h-[30rem] lg:h-auto lg:col-span-2 lg:row-span-2",
  small: "h-80 lg:h-auto",
};

const fits = {
  inset: { box: "inset-x-8 top-10 bottom-20 lg:inset-x-12 lg:top-12", fade: "bottom" as const },
  bleed: { box: "top-10 right-0 bottom-20 left-8 lg:top-12 lg:left-12", fade: "both" as const },
  full: { box: "inset-0", fade: "bottom" as const },
};

/** Hairline bento of product areas. */
export function FramerPlatform({ title, subtitle, cells, className }: FramerPlatformProps) {
  return (
    <section className={cn("bg-background px-gutter py-15 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <FramerSectionHead title={title} subtitle={subtitle} subtitleClassName="max-w-[12.5rem] sm:max-w-[26rem]" />

        <div className="mt-10 grid grid-cols-1 gap-px overflow-clip rounded-[calc(var(--radius)*2.5)] border border-border bg-border lg:mt-10 lg:auto-rows-[15rem] lg:grid-cols-3">
          {cells.map((cell) => {
            const fit = fits[cell.fit ?? "inset"];
            return (
              <div key={cell.label} className={cn("relative flex items-end overflow-clip bg-background p-6", sizes[cell.size], cell.compact && "h-60")}>
                <div className={cn("absolute", fit.box)}>
                  {cell.media ?? (
                    <FramerPlaceholder
                      tone="panel"
                      fade={fit.fade}
                      label={cell.mediaLabel}
                      className={cell.fit === "full" ? "" : "rounded-2xl"}
                    />
                  )}
                </div>
                <FramerArrowLink href={cell.href} label={cell.label} size="lg" className="relative" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
