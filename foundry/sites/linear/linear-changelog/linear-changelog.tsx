import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LinearArrowLink } from "@foundry/linear-arrow-link";

export interface LinearChangelogEntry {
  /** the release title */
  title: ReactNode;
  /** a sentence or two; clipped to two lines */
  text: ReactNode;
  /** the date as shown, e.g. "Oct 8, 2026" */
  date: string;
  href: string;
}

export interface LinearChangelogProps {
  /** the section title */
  title: ReactNode;
  /** four entries, newest first */
  entries: LinearChangelogEntry[];
  /** the link under the row (e.g. view all) */
  link?: { label: string; href: string };
  /** show the block on phones (stacked) instead of hiding it below lg */
  showOnPhones?: boolean;
  className?: string;
}

/** A timeline row of the latest releases. */
export function LinearChangelog({ title, entries, link, showOnPhones = false, className }: LinearChangelogProps) {
  return (
    <section
      className={cn(
        "border-t border-border bg-background pt-section pb-section text-foreground lg:pt-40 lg:pb-40",
        !showOnPhones && "hidden lg:block",
        className,
      )}
    >
      <div className="mx-auto max-w-[calc(var(--page-width)+2*var(--page-gutter))] px-gutter">
        <h2 className="font-display text-[2rem] leading-none font-[510] tracking-[-0.022em] lg:text-5xl">{title}</h2>
        <ol className="mt-12 grid gap-10 lg:mt-20 lg:grid-cols-4 lg:gap-0 xl:grid-cols-[repeat(3,21rem)_minmax(0,1fr)]">
          {entries.map((e, i) => (
            <li key={i}>
              <a href={e.href} className="group block">
                <span aria-hidden className="flex items-center">
                  <span
                    className={cn(
                      "grid size-4 shrink-0 place-items-center rounded-full",
                      i === 0 ? "bg-chart-1/15" : "bg-foreground/10",
                    )}
                  >
                    <span className={cn("size-[5px] rounded-full", i === 0 ? "bg-chart-1" : "bg-muted-foreground")} />
                  </span>
                  <span className="ml-1 h-px flex-1 bg-border" />
                </span>
                <h3 className="mt-6 text-[0.9375rem] leading-6 font-[510] text-foreground/90 transition-colors duration-100 group-hover:text-foreground motion-reduce:transition-none lg:mt-[3.75rem]">
                  {e.title}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-[17.5rem] text-[0.9375rem] leading-6 text-muted-foreground">{e.text}</p>
                <p className="mt-6 font-mono text-xs tracking-[0.04em] text-muted-foreground/70 uppercase">{e.date}</p>
              </a>
            </li>
          ))}
        </ol>
        {link && (
          <LinearArrowLink href={link.href} className="mt-12 lg:mt-[5.5rem]">
            {link.label}
          </LinearArrowLink>
        )}
      </div>
    </section>
  );
}
