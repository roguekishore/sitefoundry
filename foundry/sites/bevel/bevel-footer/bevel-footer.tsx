import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BevelPlaceholder } from "@foundry/bevel-placeholder";

export interface BevelFooterLink {
  label: ReactNode;
  href: string;
}

export interface BevelFooterColumn {
  /** the small grey heading */
  title: ReactNode;
  /** its links */
  links: BevelFooterLink[];
}

export interface BevelFooterProps {
  /** the wordmark (a small mark + name) */
  brand: ReactNode;
  /** the copyright line under it */
  legal: ReactNode;
  /** up to four link columns */
  columns: BevelFooterColumn[];
  /** social links: an icon and a screen-reader label each */
  socials?: { icon: ReactNode; label: string; href: string }[];
  /** compliance badges at the bottom right (images); round placeholders when empty */
  badges?: ReactNode[];
  /** how many badge placeholders to show when badges is empty */
  badgeCount?: number;
  className?: string;
}

/**
 * A quiet white footer: the wordmark and copyright on the left, four link columns (grey
 * headings, ink links) running to the right edge, then a row of social icons and small
 * round compliance badges. On phones everything stacks.
 */
export function BevelFooter({ brand, legal, columns, socials = [], badges, badgeCount = 2, className }: BevelFooterProps) {
  const badgeItems: ReactNode[] = badges?.length ? badges : Array.from({ length: badgeCount }, () => null);
  const badgeRow = (
    <div className="flex items-center gap-6">
      {badgeItems.map((badge, i) => (
        <div key={i} className="size-10 overflow-clip rounded-full">
          {badge ?? <BevelPlaceholder tone="muted" className="size-full bg-foreground/80" />}
        </div>
      ))}
    </div>
  );
  const socialRow = (
    <ul className="flex items-center gap-8">
      {socials.map((s, i) => (
        <li key={i}>
          <a href={s.href} aria-label={s.label} className="flex text-foreground transition-opacity duration-150 hover:opacity-60 [&_svg]:size-6">
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <footer className={cn("bg-background pt-[5.5rem] pb-16 text-foreground lg:pt-[calc(var(--section-y)*2)] lg:pb-36", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*2)]">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <div className="flex items-center gap-2.5 text-2xl leading-none font-medium tracking-[-0.01em] [&_svg]:size-8">{brand}</div>
            <p className="mt-2 text-xs font-semibold text-muted-foreground">{legal}</p>
            <div className="mt-10 lg:hidden">{socialRow}</div>
          </div>
          <div className="mt-10 flex flex-col gap-10 lg:mt-0 lg:flex-row lg:gap-[7.6rem]">
            {columns.map((col, i) => (
              <div key={i}>
                <p className="text-[1.125rem] leading-none font-medium text-muted-foreground">{col.title}</p>
                <ul className="mt-6 flex flex-col gap-[0.6rem]">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href={link.href} className="text-[1.125rem] leading-[1.3] font-medium transition-colors duration-150 hover:text-muted-foreground">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex items-center justify-between lg:mt-24">
          <div className="hidden lg:block">{socialRow}</div>
          {badgeRow}
        </div>
      </div>
    </footer>
  );
}
