import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface LithicFooterGroup {
  /** the black heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface LithicFooterProps {
  /** up to six columns; each holds one or more groups */
  columns: LithicFooterGroup[][];
  /** the company name, set as a bold caps wordmark */
  wordmark: string;
  /** a small mark before the wordmark (e.g. a lucide icon) */
  mark?: ReactNode;
  /** the legal lines in the middle of the bottom row */
  legal: string[];
  /** social links on the right */
  socials: { label: string; href: string; icon: ReactNode }[];
  className?: string;
}

/** Link columns, then wordmark, legal lines and socials. */
export function LithicFooter({ columns, wordmark, mark, legal, socials, className }: LithicFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-[82.5rem] px-6 pt-6 pb-10 lg:px-gutter lg:pt-[1.4rem] lg:pb-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-8">
          {columns.map((groups, i) => (
            <div key={i} className="flex flex-col gap-6 lg:gap-[1.6rem]">
              {groups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-sm/[1.4] font-semibold">{group.title}</h2>
                  <ul className="mt-4 flex flex-col gap-2 text-sm/[1.4] lg:mt-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm/[1.4] tracking-[0.01em] text-muted-foreground transition-colors duration-200 hover:text-foreground motion-reduce:transition-none">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14 grid gap-8 lg:mt-14 lg:grid-cols-6 lg:items-start lg:gap-x-8">
          <p className="flex items-center gap-1.5 text-[1.1rem]/[1] font-extrabold tracking-[-0.02em] uppercase">
            {mark}
            {wordmark}
          </p>
          <div className="flex flex-col gap-5 text-sm/[1.4] font-semibold text-muted-foreground lg:col-span-4 lg:gap-4 lg:text-center">
            {legal.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <ul className="flex items-center gap-6 lg:gap-5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="block text-muted-foreground transition-colors duration-200 hover:text-foreground motion-reduce:transition-none [&>svg]:size-[1.15rem]">
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
