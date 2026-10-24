import type { ReactNode } from "react";
import { ChevronDown, CircleCheck, Globe } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FramerMark } from "@foundry/framer-mark";

export interface FramerFooterLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
  /** a tiny tag after the link (e.g. "new") */
  badge?: string;
}

export interface FramerFooterGroup {
  /** the white group title */
  title: string;
  /** the grey links under it */
  links: FramerFooterLink[];
}

export interface FramerFooterProps {
  /** the company name (read to screen readers by the mark) */
  brand: string;
  /** the mark in the bottom row */
  mark: ReactNode;
  /** desktop columns (six on the original), each a stack of groups */
  columns: FramerFooterGroup[][];
  /** the language picker's current language */
  language?: string;
  /** social links: an icon and a screen-reader label each */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** short compliance badge texts (e.g. "ISO", "SOC 2") */
  badges?: string[];
  /** the blue-ticked status link */
  status?: { label: string; href: string };
  /** the copyright line on the far right */
  copyright: string;
  className?: string;
}

/** Six link columns and a low utility row. */
export function FramerFooter({ brand, mark, columns, language, socials = [], badges = [], status, copyright, className }: FramerFooterProps) {
  return (
    <footer className={cn("bg-background px-gutter pt-12 pb-6 text-foreground lg:pt-12 lg:pb-4", className)}>
      <div className="mx-auto max-w-page">
        {/* phones: groups flow into two columns · desktop: the given six columns */}
        <div className="columns-2 gap-x-5 lg:grid lg:grid-cols-6 lg:gap-x-5">
          {columns.map((groups, c) => (
            <div key={c} className="contents lg:block">
              {groups.map((group) => (
                <div key={group.title} className="mb-7 break-inside-avoid lg:mb-7">
                  <h3 className="text-sm leading-[1.6875rem] font-medium tracking-[-0.01em] text-foreground">{group.title}</h3>
                  <ul>
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="inline-flex items-center gap-1.5 text-sm leading-[1.6875rem] tracking-[-0.01em] text-muted-foreground transition-colors duration-150 ease-linear hover:text-foreground motion-reduce:transition-none"
                        >
                          {link.label}
                          {link.badge && (
                            <span className="rounded-sm bg-secondary px-1 py-0.5 text-[0.4375rem] leading-none font-semibold tracking-[0.03em] text-foreground uppercase">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start gap-6 lg:mt-6 lg:flex-row lg:items-center lg:justify-between lg:gap-4">
          <FramerMark brand={brand} mark={mark} hideName />
          {language && (
            <button type="button" className="inline-flex items-center gap-1 text-[0.8125rem] font-medium text-foreground">
              <Globe aria-hidden className="size-4" strokeWidth={1.75} />
              {language}
              <ChevronDown aria-hidden className="size-3.5" strokeWidth={2} />
            </button>
          )}
          {socials.length > 0 && (
            <ul className="flex items-center gap-5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="flex size-5 items-center justify-center text-foreground transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none [&_svg]:size-5"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
          {badges.length > 0 && (
            <ul className="flex items-center gap-4">
              {badges.map((b) => (
                <li
                  key={b}
                  className="grid size-6 place-items-center rounded-full border border-muted-foreground/60 text-[0.375rem] leading-none font-bold text-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          )}
          <div className="flex w-full items-center justify-between gap-8 lg:contents">
            {status && (
              <a href={status.href} className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
                <CircleCheck aria-hidden className="size-3.5 text-highlight" strokeWidth={2} />
                {status.label}
              </a>
            )}
            <span className="text-xs font-medium text-foreground">{copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
