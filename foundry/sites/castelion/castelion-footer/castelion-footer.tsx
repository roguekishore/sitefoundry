import { Fragment } from "react";
import { cn } from "@foundry/foundry-utils";

export interface CastelionFooterLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface CastelionFooterProps {
  /** the company name, set as an italic wordmark */
  brand: string;
  /** where the wordmark links (usually "/") */
  homeHref?: string;
  /** up to three short link columns */
  columns: CastelionFooterLink[][];
  /** office towns, one per line */
  addresses: string[];
  /** legal links, separated by bars */
  legal: CastelionFooterLink[];
  /** the copyright line */
  copyright: string;
  className?: string;
}

/** how many stripes close the page, and how thick the first and last are (px) */
const STRIPES = 13;
const THIN = 1;
const THICK = 14;

const link =
  "underline decoration-transparent decoration-[1.5px] underline-offset-4 transition-[text-decoration-color] duration-500 ease-[ease] hover:decoration-current motion-reduce:transition-none";

/** Wordmark, link columns, towns and legal row, ending in navy stripes that thicken downwards. */
export function CastelionFooter({ brand, homeHref = "/", columns, addresses, legal, copyright, className }: CastelionFooterProps) {
  return (
    <footer className={cn("border-t-2 border-border bg-background text-foreground", className)}>
      <div className="mx-auto grid max-w-page grid-cols-3 gap-x-4 px-gutter pt-7 pb-8 text-base/[1.4] font-medium lg:grid-cols-[23rem_17.5rem_17.5rem_1fr_auto] lg:gap-x-0 lg:pt-12">
        <a
          href={homeHref}
          className="col-span-3 justify-self-start font-display text-[2.5rem]/none font-semibold tracking-[-0.03em] italic lg:col-span-1 lg:text-[2.875rem]"
        >
          {brand}
        </a>
        {columns.slice(0, 3).map((col, i) => (
          <ul key={i} className="mt-8 space-y-4 lg:mt-2.5">
            {col.map((l) => (
              <li key={l.href + l.label}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ))}
        <address className="col-span-3 mt-7 not-italic lg:col-span-1 lg:col-start-5 lg:mt-2">
          {addresses.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
        <p className="col-span-3 mt-10 lg:col-span-2 lg:col-start-4 lg:row-start-2 lg:mt-12 lg:justify-self-end">
          {legal.map((l, i) => (
            <Fragment key={l.href + l.label}>
              {i > 0 && (
                <span aria-hidden className="px-2">
                  |
                </span>
              )}
              <a href={l.href} className={link}>
                {l.label}
              </a>
            </Fragment>
          ))}
        </p>
        <p className="col-span-3 mt-2 lg:col-start-1 lg:row-start-2 lg:mt-12">{copyright}</p>
      </div>

      {/* the closing stripes */}
      <div aria-hidden className="flex h-[18.625rem] flex-col justify-between lg:h-[20.625rem]">
        {Array.from({ length: STRIPES }, (_, i) => (
          <span key={i} className="block bg-foreground" style={{ height: `${THIN + ((THICK - THIN) * i) / (STRIPES - 1)}px` }} />
        ))}
      </div>
    </footer>
  );
}
