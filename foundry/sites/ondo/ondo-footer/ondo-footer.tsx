import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface OndoFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** shows a small arrow (an outside site) */
  external?: boolean;
}

export interface OndoFooterColumn {
  /** the column heading */
  title: string;
  /** its links */
  links: OndoFooterLink[];
}

export interface OndoFooterProps {
  /** the link columns (six on the original) */
  columns: OndoFooterColumn[];
  /** fine-print paragraphs, left half */
  legal: string[];
  /** fine-print notes, right half (e.g. footnotes) */
  notes?: string[];
  /** bottom bar: company name and year, e.g. "Corvane © 2026" */
  copyright: string;
  /** bottom bar: legal links */
  bottomLinks?: OndoFooterLink[];
  /** bottom bar: icon links on the right */
  socials?: { label: string; href: string; icon: ReactNode }[];
  className?: string;
}

const link = "text-muted-foreground transition-colors duration-200 ease-out hover:text-foreground motion-reduce:transition-none";

/** Link columns, two halves of fine print, and a bottom bar. */
export function OndoFooter({ columns, legal, notes, copyright, bottomLinks, socials, className }: OndoFooterProps) {
  return (
    <footer className={cn("bg-background pt-12 lg:pt-14", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2.75)]">
        <nav className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-6 lg:gap-x-4 xl:grid-cols-[repeat(6,11.25rem)] xl:gap-0">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="text-base leading-6 font-medium text-foreground">{column.title}</h2>
              <ul>
                {column.links.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className={cn("inline-flex items-center gap-1.5 text-base leading-6", link)}>
                      {item.label}
                      {item.external && <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={1.75} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="mt-14 grid gap-10 lg:mt-[7.5rem] lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-4 border-t border-border pt-7 text-xs leading-[1.32] text-muted-foreground">
            {legal.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {notes?.length ? (
            <div className="flex flex-col gap-4 border-t border-border pt-7 text-xs leading-[1.32] text-muted-foreground">
              {notes.map((note, i) => (
                <p key={i}>{note}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-24 border-t border-border">
        <div className="mx-auto flex max-w-page flex-col gap-4 px-gutter py-6 text-sm lg:h-[4.375rem] lg:flex-row lg:items-center lg:gap-8 lg:px-[calc(var(--page-gutter)*2.75)] lg:py-0">
          <p className="font-medium text-foreground">{copyright}</p>
          {bottomLinks?.map((item) => (
            <a key={item.label} href={item.href} className={link}>
              {item.label}
            </a>
          ))}
          {socials?.length ? (
            <ul className="flex gap-5 lg:ml-auto">
              {socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} aria-label={social.label} className={cn("block [&_svg]:size-5", link)}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
