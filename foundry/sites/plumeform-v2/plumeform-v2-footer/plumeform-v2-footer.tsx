import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformV2Button } from "@foundry/plumeform-v2-button";

export interface PlumeformV2FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface PlumeformV2FooterProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** logo (an icon plus a wordmark) */
  logo: ReactNode;
  homeHref?: string;
  /** a short line under the logo */
  tagline?: string;
  /** a text link at the right of the top row */
  secondary?: { label: string; href: string };
  /** the pill at the right of the top row */
  cta?: { label: string; href: string };
  columns: PlumeformV2FooterColumn[];
  /** a row that opens to more links */
  library?: { title: string; text: string; links: { label: string; href: string }[] };
  /** e.g. "© 2026 Murmur" */
  copyright: string;
  legal?: { label: string; href: string }[];
  email?: string;
  className?: string;
}

const link = "text-foreground/85 underline-offset-4 transition-colors duration-200 hover:text-foreground hover:underline";

export function PlumeformV2Footer({
  brand,
  logo,
  homeHref = "/",
  tagline,
  secondary,
  cta,
  columns,
  library,
  copyright,
  legal,
  email,
  className,
}: PlumeformV2FooterProps) {
  return (
    <footer className={cn("bg-background px-2 pt-6 sm:px-4", className)}>
      <div className="dark rounded-t-[2rem] bg-[linear-gradient(to_bottom,var(--glow),var(--background)_88%)] px-gutter pt-20 pb-10 text-foreground lg:pt-[5.5rem]">
        <div className="mx-auto max-w-[calc(var(--page-width)-2*var(--page-gutter))]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <a href={homeHref} aria-label={brand} className="inline-flex">
                {logo}
              </a>
              {tagline && <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-foreground/80">{tagline}</p>}
            </div>
            {(secondary || cta) && (
              <div className="flex items-center gap-6">
                {secondary && (
                  <a href={secondary.href} className={cn(link, "text-[0.9375rem] font-bold")}>
                    {secondary.label}
                  </a>
                )}
                {cta && (
                  <PlumeformV2Button href={cta.href} size="sm" arrow className="h-9 px-4">
                    {cta.label}
                  </PlumeformV2Button>
                )}
              </div>
            )}
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-[0.625rem] font-bold tracking-[0.2em] text-foreground/70 uppercase">{col.title}</p>
                <ul className="mt-6 space-y-[1.125rem] text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={link}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {library && (
            <details className="group mt-14 border-y border-foreground/15">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <span>
                  <span className="block text-[0.9375rem] font-bold">{library.title}</span>
                  <span className="mt-1 block text-xs text-foreground/70">{library.text}</span>
                </span>
                <Plus className="size-4 shrink-0 transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" strokeWidth={2} aria-hidden />
              </summary>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 pb-6 text-sm sm:grid-cols-3 lg:grid-cols-5">
                {library.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={link}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}

          <div className="mt-10 flex flex-col gap-5 text-xs text-foreground/75 lg:flex-row lg:items-center lg:justify-between">
            <p>{copyright}</p>
            {legal && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {legal.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={link}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {email && (
              <a href={`mailto:${email}`} className={link}>
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
