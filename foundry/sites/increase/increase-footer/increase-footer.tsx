import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface IncreaseFooterGroup {
  /** the column's heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface IncreaseFooterProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the wordmark (an svg, img or styled text) */
  logo: ReactNode;
  homeHref?: string;
  /** link columns: four across on desktop, flowing into two columns on phones */
  groups: IncreaseFooterGroup[];
  /** the small print under the rule, one paragraph per item */
  legal?: string[];
  className?: string;
}

/** A dark navy footer: wordmark, four link columns, a hairline rule and the small print. */
export function IncreaseFooter({ brand, logo, homeHref = "/", groups, legal = [], className }: IncreaseFooterProps) {
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[4.75rem] pb-24 lg:pt-[5.75rem] lg:pb-24">
        <a href={homeHref} aria-label={brand} className="inline-flex items-center text-foreground [&_svg]:h-4 [&_svg]:w-auto">
          {logo}
        </a>
        <nav className="mt-10 columns-2 gap-x-6 lg:mt-14 lg:grid lg:columns-auto lg:grid-cols-4">
          {groups.map((group) => (
            <div key={group.title} className="mb-12 break-inside-avoid lg:mb-0">
              <h2 className="text-sm leading-7 font-semibold text-foreground">{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm leading-7 text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        {legal.length > 0 && (
          <div className="mt-0 border-t border-input pt-8 text-sm leading-5 text-muted-foreground/90 lg:mt-12">
            {legal.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
