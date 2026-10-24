import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HermeusMedia } from "@foundry/hermeus-media";

export interface HermeusFooterLink {
  label: string;
  href: string;
}

export interface HermeusFooterSocial {
  /** accessible name, e.g. the network's name */
  label: string;
  href: string;
  /** a small line icon (e.g. from lucide-react) */
  icon: ReactNode;
}

export interface HermeusFooterProps {
  /** the wordmark at the top left, and the giant name at the bottom */
  name: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** the address, one entry per line (shown in capitals) */
  address: string[];
  /** a small flag or badge under the address (30×18); empty: a grey slot */
  badge?: ReactNode;
  /** what the badge shows, for screen readers while it is empty */
  badgeLabel?: string;
  /** link columns (two in the original), each a list of links */
  columns: HermeusFooterLink[][];
  /** heading of the social column, e.g. "Follow us" */
  socialTitle: string;
  socials: HermeusFooterSocial[];
  /** legal links in the bottom row, split by thin bars */
  legal: HermeusFooterLink[];
  /** the copyright line */
  copyright: string;
  className?: string;
}

/** pale grey capitals that turn amber on hover */
const small = "text-[clamp(0.58rem,0.519rem+0.257vw,0.75rem)]/[1.6] tracking-[0.06em] uppercase";
const link = "transition-colors duration-250 ease-in-out hover:text-primary motion-reduce:transition-none";

/** Near-white footer with address, link columns, legal row and a giant cropped name. */
export function HermeusFooter({
  name,
  homeHref = "#",
  address,
  badge,
  badgeLabel,
  columns,
  socialTitle,
  socials,
  legal,
  copyright,
  className,
}: HermeusFooterProps) {
  return (
    <footer className={cn("overflow-clip bg-card pt-[clamp(1.375rem,1rem+1.6vw,3.125rem)] text-muted-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col gap-[clamp(3rem,2.6rem+1.6vw,4rem)] lg:flex-row lg:justify-between">
          <div>
            <a
              href={homeHref}
              className={cn("text-[clamp(1.1rem,0.95rem+0.62vw,1.5rem)]/none font-bold tracking-[0.1em] text-foreground uppercase", link)}
            >
              {name}
            </a>
            <address className="mt-[clamp(1.1rem,1rem+0.4vw,1.4rem)] text-[clamp(0.79rem,0.667rem+0.509vw,1.125rem)]/[1.1] not-italic uppercase">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <HermeusMedia
              media={badge}
              label={badgeLabel}
              className="mt-[clamp(1rem,0.9rem+0.4vw,1.25rem)] h-[clamp(0.875rem,0.75rem+0.5vw,1.125rem)] w-[clamp(1.5rem,1.3rem+0.8vw,1.875rem)]"
            />
          </div>

          <div className="grid grid-cols-[auto_auto_auto] justify-between gap-x-6 sm:justify-start sm:gap-x-12 lg:gap-x-0 lg:[&>*]:w-[8.75rem]">
            {columns.map((col, c) => (
              <ul key={c}>
                {col.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={cn(small, link)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
            <div>
              <p className={small}>{socialTitle}</p>
              <ul className="mt-1.5 flex gap-2.5">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className={cn("block [&_svg]:size-4 [&_svg]:stroke-[1.5]", link)}>
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(3rem,2.5rem+2vw,5rem)] flex flex-col gap-1 lg:flex-row lg:justify-between">
          <ul className={cn(small, "flex flex-wrap")}>
            {legal.map((l, i) => (
              <li key={l.label}>
                {i > 0 && <span aria-hidden className="px-[0.25em]">|</span>}
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className={small}>{copyright}</p>
        </div>

        {/* the giant name, stretched to the column and cut off at the bottom */}
        <svg
          aria-hidden
          viewBox="0 0 1000 116"
          className="mt-[clamp(2.5rem,2.2rem+1.4vw,4.7rem)] block w-full text-secondary"
        >
          <text
            x="0"
            y="119"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            className="font-display text-[166px] font-bold uppercase"
          >
            {name}
          </text>
        </svg>
      </div>
    </footer>
  );
}
