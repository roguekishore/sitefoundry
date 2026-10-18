import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface ClerkFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface ClerkFooterProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** logo (wordmark included) */
  logo: ReactNode;
  homeHref?: string;
  /** up to five link columns */
  columns: ClerkFooterColumn[];
  /** e.g. "© 2026 Latch, Inc." */
  copyright: string;
  /** small icon links at the bottom right */
  socials?: { label: string; href: string; icon: ReactNode }[];
  className?: string;
}

export function ClerkFooter({ brand, logo, homeHref = "/", columns, copyright, socials = [], className }: ClerkFooterProps) {
  return (
    <footer className={cn("bg-background pt-8 text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-x-6 gap-y-12 lg:grid-cols-[18.875rem_repeat(5,minmax(0,1fr))]">
          {/* the logo inside dotted crop marks */}
          <a href={homeHref} aria-label={brand} className="relative -mt-2 inline-flex h-fit w-fit items-center p-2.5 [&_svg]:h-[1.375rem] [&_svg]:w-auto">
            <span aria-hidden className="absolute -inset-x-2.5 top-0 border-t border-dotted border-foreground/25" />
            <span aria-hidden className="absolute -inset-x-2.5 bottom-0 border-t border-dotted border-foreground/25" />
            <span aria-hidden className="absolute -inset-y-2.5 left-0 border-l border-dotted border-foreground/25" />
            <span aria-hidden className="absolute -inset-y-2.5 right-0 border-l border-dotted border-foreground/25" />
            {logo}
          </a>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:col-span-5 lg:grid-cols-5">
            {columns.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-[0.8125rem] leading-4 text-muted-foreground/80">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <a href={l.href} className="text-[0.8125rem] leading-4 font-medium transition-colors duration-200 hover:text-muted-foreground">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8 pb-16 lg:mt-14 lg:pb-[5.5rem]">
          <p className="text-[0.8125rem] text-muted-foreground">{copyright}</p>
          {socials.length > 0 && (
            <ul className="flex items-center gap-4 lg:gap-5">
              {socials.map((s) => (
                <li key={s.href}>
                  <a href={s.href} aria-label={s.label} className="flex text-muted-foreground transition-colors duration-200 hover:text-foreground [&_svg]:size-5">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
