import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LinearFooterLink {
  label: string;
  href: string;
}

export interface LinearFooterGroup {
  /** the white heading */
  title: string;
  links: LinearFooterLink[];
}

export interface LinearFooterProps {
  /** the brand's name, for the home link */
  brand: string;
  /** the small brand mark at the top left (desktop) */
  mark: ReactNode;
  homeHref?: string;
  /** link groups; five fill the desktop row */
  groups: LinearFooterGroup[];
  /** the dim legal links: a row on desktop, a titled group on phones */
  legal?: LinearFooterGroup;
  className?: string;
}

const linkClass =
  "text-[0.8125rem] leading-[1.875rem] text-muted-foreground transition-colors duration-100 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:text-foreground motion-reduce:transition-none";

/** Brand mark, five link columns and a legal row. */
export function LinearFooter({ brand, mark, homeHref = "/", groups, legal, className }: LinearFooterProps) {
  const group = (g: LinearFooterGroup, extra?: string) => (
    <div key={g.title} className={extra}>
      <h3 className="text-[0.8125rem] leading-5 font-[510] text-foreground">{g.title}</h3>
      <ul className="mt-4 lg:mt-6">
        {g.links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={linkClass}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={cn("border-t border-border bg-background pt-14 pb-12 text-foreground lg:pt-16", className)}>
      <div className="mx-auto grid max-w-[calc(var(--page-width)+2*var(--page-gutter))] grid-cols-2 gap-x-6 gap-y-12 px-gutter lg:grid-cols-6 lg:gap-x-6 lg:gap-y-0">
        <a href={homeHref} aria-label={brand} className="hidden h-5 items-center text-foreground lg:flex [&_svg]:size-5">
          {mark}
        </a>
        {groups.map((g) => group(g))}
        {legal && group(legal, "lg:hidden")}
        {legal && (
          <ul className="col-span-5 col-start-2 mt-[5.5rem] hidden gap-5 lg:flex">
            {legal.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={cn(linkClass, "text-muted-foreground/70")}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
}
