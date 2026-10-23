import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface EzraFooterLink {
  label: string;
  href: string;
}

export interface EzraFooterColumn {
  /** the serif heading */
  title: string;
  /** its links */
  links: EzraFooterLink[];
  /** a region/country picker under the links (shown with a chevron) */
  region?: EzraFooterLink;
}

export interface EzraFooterProps {
  /** the wordmark in the first cell (e.g. an EzraLockup) */
  logo: ReactNode;
  /** accessible name of the wordmark link */
  logoLabel: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** the link columns, one cell each */
  columns: EzraFooterColumn[];
  /** the tiny line at the bottom ("© 2026 Kestrel") */
  copyright: string;
  className?: string;
}

const linkClass = "text-base leading-[2.5] transition-colors duration-200 hover:text-highlight motion-reduce:transition-none lg:leading-[2]";

/** Midnight footer: a full-width row of hairline cells with serif headings. */
export function EzraFooter({ logo, logoLabel, homeHref = "#", columns, copyright, className }: EzraFooterProps) {
  return (
    <footer className={cn("dark bg-background pt-8 text-foreground lg:pt-16", className)}>
      <div className="border-t border-border lg:flex lg:border-b">
        <div className="flex justify-center pt-8.5 pb-8.5 lg:w-65 lg:shrink-0 lg:justify-start lg:border-x lg:border-border lg:px-7.5 lg:pt-8.5">
          <a href={homeHref} aria-label={logoLabel} className="text-[1.6rem] lg:text-[1.5rem]">
            {logo}
          </a>
        </div>
        <ul className="mx-gutter lg:mx-0 lg:flex lg:flex-auto">
          {columns.map((column) => (
            <li
              key={column.title}
              className="-mt-px border border-border px-4.5 pt-6 pb-9 first:mt-0 lg:mt-0 lg:flex-auto lg:border-y-0 lg:border-l-0 lg:px-6 lg:pt-9 lg:pb-16"
            >
              <h2 className="font-display text-[1.8rem] leading-[1.1] font-light tracking-[-0.01em] lg:text-[2.15rem]">{column.title}</h2>
              <ul className="mt-2.5 flex flex-col lg:mt-3.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={linkClass}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              {column.region && (
                <a href={column.region.href} className={cn(linkClass, "mt-4 inline-flex items-center gap-8 lg:mt-5")}>
                  {column.region.label}
                  <ChevronDown aria-hidden className="size-4.5" strokeWidth={2.5} />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-5 border-t border-border py-8 text-center text-xs lg:mt-0 lg:border-t-0 lg:pt-7.5 lg:pb-7.5">{copyright}</p>
    </footer>
  );
}
