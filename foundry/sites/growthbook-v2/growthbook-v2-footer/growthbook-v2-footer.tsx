import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface GrowthbookV2FooterLink {
  label: string;
  href: string;
  /** a small violet tag after the label, e.g. "New" */
  badge?: string;
}

export interface GrowthbookV2FooterProps {
  /** the wordmark, drawn larger than in the header */
  brand: ReactNode;
  /** one or two sentences under it */
  blurb: string;
  /** icon links (YouTube, code host…) */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** round outline badges, e.g. compliance marks; each line is a line of text */
  badges?: { label: string; lines: string[] }[];
  /** up to five columns */
  columns: { title: string; links: GrowthbookV2FooterLink[] }[];
  /** the mono line at the bottom left */
  copyright: string;
  /** the mono links at the bottom right */
  legal: { label: string; href: string }[];
  className?: string;
}

export function GrowthbookV2Footer({ brand, blurb, socials, badges = [], columns, copyright, legal, className }: GrowthbookV2FooterProps) {
  const link = "transition-colors duration-250 hover:text-accent-foreground motion-reduce:transition-none";
  const brandBlock = (
    <div className="lg:max-w-[25rem]">
      <div className="[&_svg]:size-9 lg:[&_svg]:size-10">{brand}</div>
      <p className="mt-6 text-sm/[1.8]">{blurb}</p>
    </div>
  );
  const extras = (
    <div>
      <ul className="flex gap-8 lg:gap-11">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} aria-label={s.label} className={cn("flex size-11 items-center justify-center text-muted-foreground [&_svg]:size-7", link)}>
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
      {badges.length > 0 && (
        <ul className="mt-8 flex gap-2">
          {badges.map((b) => (
            <li
              key={b.label}
              aria-label={b.label}
              className="flex size-[4.5rem] flex-col items-center justify-center rounded-full border border-border text-center font-mono text-xs/[1.35] text-foreground/85 lg:size-24 lg:font-sans lg:text-base/[1.2]"
            >
              {b.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter pt-12 pb-10 lg:pt-16 lg:pb-16">
        <div className="lg:flex lg:justify-between lg:gap-16">
          <div className="lg:flex lg:max-w-[25rem] lg:shrink lg:flex-col lg:gap-12">
            {brandBlock}
            <div className="hidden lg:block">{extras}</div>
          </div>
          <nav className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-0 lg:min-w-0 lg:flex-1 lg:grid-cols-[repeat(5,minmax(0,10.625rem))] lg:justify-end lg:gap-x-0 lg:gap-y-0">
            {columns.map((c) => (
              <div key={c.title} className="lg:pr-4">
                <p className="text-sm lg:text-base">{c.title}</p>
                <ul className="mt-6 flex flex-col gap-3.5 text-sm lg:mt-5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={cn("inline-flex items-center gap-2", link)}>
                        {l.label}
                        {l.badge && (
                          <span className="rounded-sm bg-primary px-1.5 py-0.5 text-[0.6875rem]/none font-bold tracking-[0.1em] text-primary-foreground uppercase">
                            {l.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="mt-16 lg:hidden">{extras}</div>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 font-mono text-xs/[1.7] lg:mt-52 lg:flex lg:items-center lg:justify-between">
          <p>{copyright}</p>
          <ul className="contents lg:flex lg:gap-8">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={link}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
