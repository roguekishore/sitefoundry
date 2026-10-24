import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FramerButton } from "@foundry/framer-button";
import { FramerSectionHead } from "@foundry/framer-heading";
import { FramerPlaceholder } from "@foundry/framer-placeholder";
import "./framer-showcase.css";

export interface FramerShowcaseTile {
  /** the site's name, read to screen readers */
  name: string;
  /** landscape: 700×450 desktop shot · portrait: 220×450 phone shot */
  shape: "landscape" | "portrait";
  /** link to the live site */
  href?: string;
  /** the screenshot or film; empty shows a placeholder */
  media?: ReactNode;
}

export interface FramerShowcaseProps {
  /** section title; "\n" breaks on desktop only */
  title: string;
  /** the small dark button on the right */
  action: { label: string; href: string };
  /** rows of tiles (two on the original); each row is cropped at the column edges */
  rows: FramerShowcaseTile[][];
  className?: string;
}

const shapes = {
  landscape: "w-[25.25rem] lg:w-[43.75rem]",
  portrait: "w-[7.9375rem] lg:w-[13.75rem]",
};

/** Two drifting rows of site shots. */
export function FramerShowcase({ title, action, rows, className }: FramerShowcaseProps) {
  return (
    <section className={cn("bg-background px-gutter py-15 text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page">
        <FramerSectionHead
          title={title}
          actionsInline
          actions={
            <FramerButton href={action.href} variant="secondary">
              {action.label}
            </FramerButton>
          }
        />

        <div className="mt-9 flex flex-col gap-2.5 overflow-x-clip lg:mt-11">
          {rows.map((row, i) => (
            <ul key={i} className="framer-showcase-row flex w-max gap-2.5">
              {row.map((tile) => (
                <li
                  key={tile.name}
                  className={cn(
                    "h-65 shrink-0 overflow-clip rounded-md lg:h-[28.125rem] lg:rounded-2xl",
                    shapes[tile.shape],
                  )}
                >
                  <a href={tile.href} aria-label={tile.name} className="block size-full">
                    {tile.media ?? <FramerPlaceholder tone="well" />}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
