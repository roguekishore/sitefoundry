import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ArcButton } from "@foundry/arc-button";

export interface ArcFooterLink {
  label: string;
  href: string;
}

export interface ArcFooterGroup {
  /** the bold group heading */
  title: string;
  links: ArcFooterLink[];
}

export interface ArcFooterProps {
  /** the wordmark, set bold in the display face */
  brand: { name: string; href: string };
  /** link columns; each inner list is one column, and a column can stack several groups */
  columns: ArcFooterGroup[][];
  /** the newsletter column */
  newsletter: { title: string; placeholder: string; button: string; inputLabel: string };
  /** the copyright line */
  copyright: string;
  /** the small legal links in the bottom row */
  legal: ArcFooterLink[];
  /** the social icons at the bottom right (an icon and a screen-reader label each) */
  socials: { label: string; href: string; icon: ReactNode }[];
  className?: string;
}

/** Arc's white footer: wordmark, three link columns and a newsletter form, then a hairline and a legal row. */
export function ArcFooter({ brand, columns, newsletter, copyright, legal, socials, className }: ArcFooterProps) {
  const linkClass = "transition-colors duration-200 hover:text-foreground motion-reduce:transition-none";
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[3.25rem] pb-12 lg:pt-[4.5rem] lg:pb-[7.5rem]">
        <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-5 lg:gap-x-[3.875rem]">
          <a href={brand.href} className="col-span-2 font-display text-[2.375rem]/none font-bold tracking-[-0.05em] lg:col-span-1 lg:text-[2.625rem]">
            {brand.name}
          </a>
          {columns.map((column, i) => (
            <div key={i} className={cn("space-y-11", i === columns.length - 1 && columns.length % 2 === 1 && "col-span-2 lg:col-span-1")}>
              {column.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[0.875rem] font-bold lg:text-[0.9375rem]">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-[0.875rem]/[1.5] text-muted-foreground lg:mt-6 lg:text-[0.9375rem]">
                    {group.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className={linkClass}>
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <form className="col-span-2 lg:col-span-1" action="#">
            <h3 className="text-[0.875rem] font-bold lg:text-[0.9375rem]">{newsletter.title}</h3>
            <label className="mt-4 block">
              <span className="sr-only">{newsletter.inputLabel}</span>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="h-9 w-full rounded-sm border border-border bg-background px-3.5 text-[0.8125rem] placeholder:text-muted-foreground focus:border-input focus:outline-none"
              />
            </label>
            <ArcButton type="submit" size="full" className="mt-3 text-xs font-bold">
              {newsletter.button}
            </ArcButton>
          </form>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-7 text-xs text-muted-foreground lg:mt-20 lg:flex-row lg:items-center lg:gap-12 lg:pt-11">
          <p>{copyright}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex items-center gap-4 text-foreground lg:ml-auto">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="flex size-5 items-center justify-center transition-opacity duration-200 hover:opacity-70 motion-reduce:transition-none [&_svg]:size-[1.125rem]">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
