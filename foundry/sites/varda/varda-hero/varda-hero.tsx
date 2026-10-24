import { Fragment, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./varda-hero.css";

export interface VardaHeroLink {
  /** the link cell's label */
  label: string;
  href: string;
}

export interface VardaHeroProps {
  /** the headline, one entry per desktop line (phones wrap it freely) */
  title: string[];
  /** the paragraph at the foot of the framed right half */
  lead: string;
  /** three link cells under the lead */
  links: VardaHeroLink[];
  /** full-bleed photo or video behind everything (empty: a drifting navy wash) */
  background?: ReactNode;
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.165,0.84,0.44,1)] motion-reduce:transition-none";

/** Blueprint-grid hero: dashed square cells, a huge orange headline, a lead and three link cells. */
export function VardaHero({ title, lead, links, background, className }: VardaHeroProps) {
  return (
    <section className={cn("relative isolate overflow-clip text-foreground lg:p-gutter", className)}>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [&>img]:size-full [&>img]:object-cover [&>video]:size-full [&>video]:object-cover"
      >
        {background ?? <div className="varda-hero-wash size-full" />}
      </div>

      <div className="@container relative mx-auto grid max-w-page grid-cols-3 lg:aspect-[2/1] lg:grid-cols-6 lg:grid-rows-3 lg:border lg:border-muted-foreground">
        {/* the drawing grid: 6 × 3 square cells in dashed hairlines (desktop) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 hidden grid-cols-6 grid-rows-3 lg:grid">
          {Array.from({ length: 18 }, (_, i) => (
            <span key={i} className={cn("border-dashed border-border", i % 6 !== 5 && "border-r", i < 12 && "border-b")} />
          ))}
        </div>
        {/* solid frame round the right half and over its link row */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 left-1/2 hidden border-l border-muted-foreground lg:block" />
        <div aria-hidden className="pointer-events-none absolute top-2/3 right-0 left-1/2 hidden border-t border-muted-foreground lg:block" />

        <h1 className="relative col-span-2 flex min-h-[16.25rem] items-end p-gutter font-display text-[2.8rem]/none font-bold tracking-[-0.03em] text-primary lg:col-span-3 lg:row-start-2 lg:min-h-0 lg:items-start lg:pt-1 lg:text-[min(7.69cqw,6.716rem)]/none">
          <span>
            {title.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br className="max-lg:hidden" />}
                {i > 0 && " "}
                {line}
              </Fragment>
            ))}
          </span>
        </h1>

        <p className="relative col-span-3 border-t border-border p-gutter text-xl/[1.45] lg:col-span-3 lg:col-start-4 lg:row-start-2 lg:self-end lg:border-t-0 lg:text-[clamp(1.125rem,1.5625vw,1.408rem)]/[1.333]">
          {lead}
        </p>

        <ul className="relative col-span-3 grid lg:col-start-4 lg:row-start-3 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.label} className="flex">
              <a
                href={link.href}
                className={cn(
                  "group flex w-full items-start justify-between gap-3 px-gutter py-4 text-[1.3rem]/[1.5] transition-colors hover:bg-secondary hover:text-secondary-foreground lg:p-gutter lg:text-[clamp(1.125rem,1.514vw,1.363rem)]/[1.5]",
                  ease,
                )}
              >
                {link.label}
                <ArrowUpRight
                  aria-hidden
                  strokeWidth={2.25}
                  className={cn("mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5", ease)}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
