import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SuperhumanFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
  /** a small icon before the label (social column) */
  icon?: ReactNode;
}

export interface SuperhumanFooterColumn {
  /** the column heading */
  title: string;
  /** the links */
  links: SuperhumanFooterLink[];
}

export interface SuperhumanFooterProps {
  /** the lockup at the top left (a SuperhumanMark, tile light) */
  brand: ReactNode;
  /** the line under the lockup */
  tagline: string;
  /** the link columns */
  columns: SuperhumanFooterColumn[];
  /** the giant ghost word at the bottom, usually the company name */
  wordmark: string;
  className?: string;
}

export function SuperhumanFooter({ brand, tagline, columns, wordmark, className }: SuperhumanFooterProps) {
  return (
    <footer className={cn("bg-sidebar px-gutter pt-8 text-sidebar-foreground lg:pt-16", className)}>
      <div className="mx-auto max-w-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_repeat(4,minmax(0,10.625rem))] lg:gap-x-10">
          <div className="max-lg:mb-4">
            {brand}
            <p className="mt-4 max-w-[14rem] text-base/[1.2] font-[460] tracking-[-0.01em] lg:mt-5 lg:max-w-[20rem] lg:text-[1.5625rem]/[1.28] lg:tracking-[-0.0275em]">{tagline}</p>
          </div>
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <h3 className="text-lg/[1.5] font-semibold">{c.title}</h3>
              <ul className="mt-5 space-y-4">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="inline-flex h-6 items-center gap-2 text-base/6 font-[460] text-sidebar-foreground/80 transition-colors duration-200 hover:text-sidebar-foreground motion-reduce:transition-none [&_svg]:size-4">
                      {l.icon}
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div aria-hidden className="@container mt-4 overflow-clip pb-5 lg:mt-10 lg:pb-12">
          <p className="flex justify-between text-[14cqw] leading-[0.72] font-extrabold whitespace-nowrap text-sidebar-foreground/5 uppercase select-none">
            {[...wordmark].map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
