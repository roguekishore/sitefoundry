import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LedupFooterLink {
  label: string;
  href: string;
}

export interface LedupFooterColumn {
  /** the column's heading (also the phone accordion's label) */
  title: string;
  /** the links under it */
  links: LedupFooterLink[];
  /** hide the heading on desktop (the original's contact column has none) */
  untitledOnDesktop?: boolean;
}

export interface LedupFooterProps {
  /** the big thin statement at the top */
  statement: ReactNode;
  /** the link columns (four in the original) */
  columns: LedupFooterColumn[];
  /** the copyright line */
  copyright: string;
  /** the legal links after it */
  legal?: LedupFooterLink[];
  /** the background video or photo; empty shows soft warm light */
  media?: ReactNode;
  className?: string;
}

export function LedupFooter({ statement, columns, copyright, legal = [], media, className }: LedupFooterProps) {
  return (
    <footer className={cn("bg-background font-sans", className)}>
      <div className="relative isolate overflow-clip rounded-t-[3.125rem] bg-foreground text-background">
        <div aria-hidden={!media} className="absolute inset-0 -z-10 [&>*]:size-full [&>*]:object-cover">
          {media ?? (
            <div className="bg-[radial-gradient(60%_80%_at_75%_45%,color-mix(in_oklch,var(--glow)_35%,transparent),transparent),radial-gradient(40%_60%_at_15%_10%,color-mix(in_oklch,var(--highlight)_18%,transparent),transparent)]" />
          )}
        </div>

        <div className="mx-auto max-w-page px-gutter pt-[5.25rem] pb-5 lg:pt-[5.5rem] lg:pb-6">
          <div className="px-4 lg:px-[2.2rem]">
            <p className="max-w-[11em] text-[1.75rem] leading-[1.2] font-extralight lg:max-w-none lg:text-[3.24rem]">{statement}</p>

            {/* phones: hairline accordion rows */}
            <div className="mt-14 lg:hidden">
              {columns.map((col) => (
                <details key={col.title} className="group border-b border-background/50">
                  <summary className="flex h-[3.75rem] cursor-pointer list-none items-center justify-between text-sm font-semibold [&::-webkit-details-marker]:hidden">
                    {col.title}
                    <Plus aria-hidden strokeWidth={1} className="size-6 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" />
                  </summary>
                  <ul className="flex flex-col gap-3 pb-5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-background/85 transition-colors duration-200 hover:text-background">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>

            {/* desktop: four columns */}
            <div className="mt-24 hidden grid-cols-4 gap-8 lg:grid">
              {columns.map((col) => (
                <div key={col.title}>
                  <p className={cn("mb-2 text-sm font-semibold", col.untitledOnDesktop && "sr-only")}>{col.title}</p>
                  <ul className="flex flex-col">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="block py-1 text-sm leading-5 text-background/85 transition-colors duration-[180ms] hover:text-background motion-reduce:transition-none"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-5 text-xs lg:mt-24 lg:flex-row lg:gap-11">
              <p>{copyright}</p>
              {legal.length > 0 && (
                <ul className="flex gap-5">
                  {legal.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="font-medium transition-colors duration-[180ms] hover:text-background/75 motion-reduce:transition-none">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
