import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalSonnetButton } from "@foundry/halodental-sonnet-button";
import { HalodentalSonnetMedia } from "@foundry/halodental-sonnet-media";

export interface HalodentalSonnetFooterLink {
  label: string;
  href: string;
}

export interface HalodentalSonnetFooterColumn {
  /** the column's heading */
  title: string;
  links: HalodentalSonnetFooterLink[];
}

export interface HalodentalSonnetFooterProps {
  /** link columns, usually three */
  columns: HalodentalSonnetFooterColumn[];
  /** the outlined button at the top right */
  secondary?: HalodentalSonnetFooterLink;
  /** the orange button beside it */
  primary?: HalodentalSonnetFooterLink;
  /** the wide art strip across the panel. Empty shows the placeholder. */
  media?: ReactNode;
  /** small links bottom-left (terms, privacy) */
  legal: HalodentalSonnetFooterLink[];
  /** the copyright line, bottom-right */
  copyright: string;
  className?: string;
}

/** A black rounded panel: columns, two buttons, an art strip and a legal row. */
export function HalodentalSonnetFooter({ columns, secondary, primary, media, legal, copyright, className }: HalodentalSonnetFooterProps) {
  return (
    <footer className={cn("dark p-1.5 sm:p-2.5", className)}>
      <div className="rounded-lg bg-background p-5 text-foreground lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:gap-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[repeat(3,10rem)] lg:gap-x-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="font-display text-[1.3rem] leading-none font-normal lg:text-2xl">{col.title}</h2>
                <ul className="mt-4 flex flex-col gap-2 text-[0.8125rem]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="transition-colors hover:text-foreground/60 motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {(secondary || primary) && (
            <div className="flex flex-wrap items-start gap-2.5 lg:order-last">
              {secondary && (
                <HalodentalSonnetButton variant="outline" size="sm" href={secondary.href} className="lg:h-10">
                  {secondary.label}
                </HalodentalSonnetButton>
              )}
              {primary && (
                <HalodentalSonnetButton size="sm" href={primary.href} className="lg:h-10">
                  {primary.label}
                </HalodentalSonnetButton>
              )}
            </div>
          )}
        </div>

        <HalodentalSonnetMedia ratio="3 / 1" tone="dark" className="mt-10 max-lg:max-h-48 lg:mt-6 lg:aspect-[8/1]!">
          {media}
        </HalodentalSonnetMedia>

        <div className="mt-6 flex flex-col-reverse gap-4 text-xs sm:flex-row sm:items-center sm:justify-between lg:mt-8">
          <ul className="flex gap-10">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-foreground/60">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
