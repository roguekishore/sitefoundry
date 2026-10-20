import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformButton } from "@foundry/plumeform-button";
import { PlumeformReveal } from "@foundry/plumeform-reveal";

export interface PlumeformFooterLink {
  label: string;
  href: string;
}

export interface PlumeformFooterProps {
  /** wordmark next to the logo */
  brand: string;
  /** logo mark (an svg, img or lucide icon) */
  logo?: ReactNode;
  homeHref?: string;
  /** a line under the wordmark */
  tagline?: ReactNode;
  /** a quiet link before the button on the right */
  secondary?: PlumeformFooterLink;
  /** the paper pill button on the right */
  cta?: PlumeformFooterLink;
  /** link columns: two to a row on phones, five on desktop */
  columns: { title: string; links: PlumeformFooterLink[] }[];
  /** a row that opens to more links (e.g. the whole library) */
  library?: { title: string; text?: string; links: PlumeformFooterLink[] };
  /** the small line at the very bottom, e.g. "© 2026 …" */
  copyright: string;
  legal?: PlumeformFooterLink[];
  /** a contact address on the right of the bottom row */
  contact?: PlumeformFooterLink;
  className?: string;
}

/** A card footer fading from deep teal to the darkest green with rounded top corners, inset from the window's edges. */
export function PlumeformFooter({ brand, logo, homeHref = "/", tagline, secondary, cta, columns, library, copyright, legal, contact, className }: PlumeformFooterProps) {
  const linkClass = "text-foreground/85 transition-colors duration-200 hover:text-foreground hover:underline hover:underline-offset-4 motion-reduce:transition-none";
  return (
    <footer className={cn("bg-background px-2 pb-2 lg:px-4 lg:pb-0", className)}>
      <div
        className="dark rounded-2xl bg-linear-to-b from-[color-mix(in_oklab,var(--chart-1)_80%,var(--background))] via-[color-mix(in_oklab,var(--chart-1)_45%,var(--background))] to-background text-foreground lg:rounded-b-none"
      >
        <PlumeformReveal className="mx-auto max-w-page px-gutter pt-20 pb-12 lg:pt-24 lg:pb-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-sm">
              <a href={homeHref} aria-label={brand} className="flex items-center gap-2 text-[1.375rem] font-bold tracking-[-0.02em] [&_svg]:size-6">
                {logo}
                <span>{brand}</span>
              </a>
              {tagline && <p className="mt-5 text-[0.9375rem] leading-6 text-foreground/80">{tagline}</p>}
            </div>
            {(secondary || cta) && (
              <div className="flex items-center gap-6">
                {secondary && (
                  <a href={secondary.href} className="text-[0.9375rem] font-bold text-foreground/90 transition-colors hover:text-foreground hover:underline">
                    {secondary.label}
                  </a>
                )}
                {cta && (
                  <PlumeformButton href={cta.href} size="sm" arrow className="h-8 text-sm">
                    {cta.label}
                  </PlumeformButton>
                )}
              </div>
            )}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-14 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.6875rem] font-bold tracking-[0.16em] text-foreground/70 uppercase">{col.title}</p>
                <ul className="mt-6 space-y-5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <a href={l.href} className={linkClass}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {library && (
            <details className="group mt-14 border-y border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-[0.9375rem] font-bold">{library.title}</span>
                  {library.text && <span className="mt-1 block text-[0.8125rem] text-foreground/75">{library.text}</span>}
                </span>
                <Plus aria-hidden className="size-4 shrink-0 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={2} />
              </summary>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 pb-6 text-sm">
                {library.links.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} className={linkClass}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div className={cn("flex flex-col gap-6 text-[0.8125rem] text-foreground/80 lg:flex-row lg:items-center lg:justify-between", library ? "pt-8" : "mt-14 border-t border-border pt-8")}>
            <p>{copyright}</p>
            {legal && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {legal.map((l) => (
                  <li key={l.href + l.label}>
                    <a href={l.href} className={linkClass}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {contact && (
              <a href={contact.href} className={linkClass}>
                {contact.label}
              </a>
            )}
          </div>
        </PlumeformReveal>
      </div>
    </footer>
  );
}
