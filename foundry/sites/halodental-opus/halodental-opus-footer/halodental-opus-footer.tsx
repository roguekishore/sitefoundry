import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalOpusButton } from "@foundry/halodental-opus-button";
import { HalodentalOpusHeading } from "@foundry/halodental-opus-heading";

export interface HalodentalOpusFooterLink {
  label: string;
  href: string;
}

export interface HalodentalOpusFooterGroup {
  /** the column heading */
  title: string;
  links: HalodentalOpusFooterLink[];
}

export interface HalodentalOpusFooterProps {
  /** link columns (three in the original) */
  groups: HalodentalOpusFooterGroup[];
  /** the white outline button, top right */
  secondary?: HalodentalOpusFooterLink;
  /** the orange button beside it */
  primary?: HalodentalOpusFooterLink;
  /** small links in the bottom row */
  legal?: HalodentalOpusFooterLink[];
  /** the copyright line, bottom right */
  copyright: string;
  /** the wide line illustration across the panel; empty → a faint light on black */
  media?: ReactNode;
  className?: string;
}

/**
 * Halo Dental's footer: a black panel inset by a thin margin with 8px corners. Link columns
 * on the 12-column grid (every 2 columns), an outline and an orange button top right, a
 * wide illustration slot across the middle, and a small grey legal row. On phones the
 * columns pair up, the buttons stack and the legal row centres. Always uses the theme's
 * dark palette; the margin shows whatever is behind it (give it a background through
 * className).
 */
export function HalodentalOpusFooter({ groups, secondary, primary, legal = [], copyright, media, className }: HalodentalOpusFooterProps) {
  return (
    <footer className={cn("font-[450] p-1.5 lg:p-2.5", className)}>
      <div className="dark relative isolate flex flex-col overflow-hidden rounded-lg bg-card px-[calc(var(--page-gutter)-0.375rem)] pt-[1.875rem] pb-6 text-card-foreground lg:min-h-[29.875rem] lg:px-[calc(var(--page-gutter)-0.625rem)] lg:pb-[1.375rem]">
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 lg:grid-cols-12">
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title} className="lg:col-span-2">
              <HalodentalOpusHeading as="h2" size="card" title={g.title} className="text-[1.3125rem] lg:text-[1.75rem]" />
              <ul className="mt-2 lg:mt-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-base leading-[1.8] transition-opacity hover:opacity-70 motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {(secondary || primary) && (
            <div className="col-span-2 mt-6 flex flex-col items-start gap-2.5 lg:col-span-6 lg:col-start-7 lg:mt-0 lg:flex-row lg:justify-end">
              {secondary && (
                <HalodentalOpusButton variant="outline" href={secondary.href} className="lg:h-[2.625rem]">
                  {secondary.label}
                </HalodentalOpusButton>
              )}
              {primary && <HalodentalOpusButton href={primary.href}>{primary.label}</HalodentalOpusButton>}
            </div>
          )}
        </div>

        <div className="relative -mx-[calc(var(--page-gutter)-0.375rem)] mt-2 aspect-[390/300] lg:absolute lg:inset-y-0 lg:right-0 lg:left-[32%] lg:mx-0 lg:mt-0 lg:aspect-auto">
          <div className="absolute inset-0 -z-10">
            {media ?? (
              // placeholder for the line illustration: a faint pool of light, off to the right
              <div aria-hidden className="size-full bg-radial-[circle_at_50%_55%] from-foreground/12 via-foreground/4 via-35% to-transparent to-60% lg:bg-radial-[circle_at_77%_50%]" />
            )}
          </div>
        </div>

        <div className="relative mt-auto flex flex-col items-center gap-3 pt-4 text-center text-xs leading-[1.5] text-muted-foreground lg:flex-row lg:justify-between">
          <ul className="flex gap-5 lg:gap-10">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-card-foreground motion-reduce:transition-none">
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
