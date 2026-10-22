import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AndurilLink } from "@foundry/anduril-link";
import "./anduril-platforms.css";

export interface AndurilPlatformsRow {
  /** the big name, top left */
  title: string;
  /** the small all-caps line under it */
  kicker: string;
  /** the link words shown under the line (always on phones, on hover on desktop) */
  linkLabel: string;
  /** link target for the whole row */
  href: string;
  /** an <img> or <video> for the strip on the right; empty shows a placeholder */
  media?: ReactNode;
}

export interface AndurilPlatformsProps {
  /** the rows, top to bottom */
  rows: AndurilPlatformsRow[];
  className?: string;
}

/** Grey band of hairline-ruled rows: name and line left, a wide media strip right; rows invert on hover. */
export function AndurilPlatforms({ rows, className }: AndurilPlatformsProps) {
  return (
    <section className={cn("bg-secondary pt-[2.625rem] text-secondary-foreground md:pt-12", className)}>
      {rows.map((row) => (
        <a
          key={row.title}
          href={row.href}
          className="anduril-platforms-row group block px-gutter transition-colors duration-300 ease-out motion-reduce:transition-none md:hover:bg-secondary-foreground md:hover:text-secondary"
        >
          <div className="grid border-t border-current/30 pt-8 pb-14 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:pt-8 md:pb-16 md:group-hover:border-transparent">
            <div className="flex flex-col md:justify-between">
              <h3 className="font-display text-[2.25rem] leading-[1.1] font-semibold tracking-[-0.02em] lg:text-[3.5rem]">{row.title}</h3>
              <div className="mt-5 md:mt-0">
                <p className="max-w-[20rem] text-[0.8125rem] leading-[1.05] font-medium tracking-[0.02em] uppercase md:text-[0.75rem]">{row.kicker}</p>
                {/* Phones: always open. Desktop: opens on hover and pushes the line up. */}
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100">
                  <div className="min-h-0 overflow-hidden">
                    <AndurilLink as="span" label={row.linkLabel} underline="hover" className="mt-4 opacity-60 md:mt-5 md:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 aspect-[1.89] overflow-clip rounded-lg bg-current/15 md:mt-0 md:aspect-[4.25] [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover">
              {row.media}
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}
