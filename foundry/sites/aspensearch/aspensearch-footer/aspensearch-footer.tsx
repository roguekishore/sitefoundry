import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchCityTime, AspensearchClockFace } from "@foundry/aspensearch-city-time";

export interface AspensearchFooterLink {
  label: string;
  href: string;
}

export interface AspensearchFooterClock {
  /** city name, e.g. "CHI" */
  city: string;
  /** IANA time zone, e.g. "America/Chicago" */
  timeZone: string;
  /** what static HTML shows before the live clock runs, e.g. "09:00 AM" */
  fallback: string;
}

export interface AspensearchFooterProps {
  /** the line top left; "\n" breaks it */
  tagline: string;
  /** the stacked section links */
  links: AspensearchFooterLink[];
  /** cities with a live clock face */
  clocks: AspensearchFooterClock[];
  /** the email cell under the links */
  email: AspensearchFooterLink;
  /** the outbound link cell beside it (gets a ↗) */
  social: AspensearchFooterLink;
  /** the big wordmark on the ink panel (plain text in the display face) */
  wordmark: string;
  /** a mark above the wordmark; optional */
  logo?: ReactNode;
  /** the mono line bottom left of the ink panel, e.g. "© 2026 Corvo Talent" */
  legal: string;
  /** small link after it, e.g. privacy */
  legalLink?: AspensearchFooterLink;
  /** the mono credit bottom right: text, then an underlined link */
  credit?: { text: string; link: AspensearchFooterLink };
  /** the mint panel: a 38px line top left and a small link bottom left, with a big thin arrow */
  cta: { title: string; label: string; href: string };
  /** anchor id */
  id?: string;
  className?: string;
}

const fill =
  "relative isolate overflow-clip transition-colors duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:bg-foreground before:transition-transform before:duration-800 before:ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-background hover:before:scale-y-100 motion-reduce:transition-none motion-reduce:before:transition-none";

/**
 * A two-row footer on the hairline grid. Top row: a tagline in the left half; links, live
 * clock faces, and email / outbound cells (an ink fill rises on hover) in the right half.
 * Bottom row: an ink panel with a large plain wordmark and mono legal line, and a mint panel
 * with a call to action and a big thin arrow. On desktop the bottom row stays pinned to the
 * bottom of the window while the top row slides up over it. Phones stack every cell.
 */
export function AspensearchFooter({ tagline, links, clocks, email, social, wordmark, logo, legal, legalLink, credit, cta, id, className }: AspensearchFooterProps) {
  return (
    <footer id={id} className={cn("relative isolate grid border-t border-border bg-background font-sans tracking-[-0.04em] text-foreground lg:grid-cols-4", className)}>
      {/* Top row, above the pinned bottom row. */}
      <div className="relative z-10 grid bg-background lg:col-span-4 lg:h-[29.2vw] lg:grid-cols-4 lg:border-b lg:border-border">
        <p className="h-[51vw] border-b border-border px-3 pt-5 text-2xl/[1.1] whitespace-pre-line lg:col-span-2 lg:h-auto lg:border-r lg:border-b-0 lg:px-5 lg:text-[2.63vw]/[1.1]">
          {tagline}
        </p>
        <div className="flex flex-col lg:col-span-2 lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_3.75rem]">
          <ul className="flex flex-col gap-5 border-b border-border px-4 pt-8 pb-7 text-base/none lg:border-b-0 lg:px-6 lg:pt-8">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-5 border-b border-border px-4 pt-6 pb-6 lg:border-b-0 lg:border-l lg:px-6">
            {clocks.map((c) => (
              <li key={c.city} className="flex items-center gap-4">
                <AspensearchClockFace timeZone={c.timeZone} fallback={c.fallback} />
                <div>
                  <p className="text-base/tight font-medium">{c.city}</p>
                  <AspensearchCityTime timeZone={c.timeZone} fallback={c.fallback} className="font-mono text-xs/none tracking-normal text-muted-foreground" />
                </div>
              </li>
            ))}
          </ul>
          <a href={email.href} className={cn(fill, "flex h-[3.75rem] items-center border-b border-border px-3 text-base/none lg:border-t lg:border-b-0 lg:px-5")}>
            {email.label}
          </a>
          <a href={social.href} className={cn(fill, "flex h-[3.75rem] items-center justify-between border-b border-border px-3 text-base/none lg:border-t lg:border-b-0 lg:border-l lg:px-5")}>
            {social.label}
            <ArrowUpRight aria-hidden className="size-4" strokeWidth={1.25} />
          </a>
        </div>
      </div>

      {/* Bottom row: pinned under the top row on desktop. */}
      <div className="grid lg:sticky lg:bottom-0 lg:col-span-4 lg:h-[29.2vw] lg:grid-cols-2">
        <a href={cta.href} className="group relative order-1 flex min-h-[100vw] flex-col justify-between bg-highlight px-3 pt-4 pb-5 text-highlight-foreground lg:order-2 lg:min-h-0">
          <span className="text-2xl/[1.1] whitespace-pre-line lg:text-[2.63vw]/[1.1]">{cta.title}</span>
          <span className="text-base/none">{cta.label}</span>
          <ArrowUpRight
            aria-hidden
            className="absolute right-3 bottom-5 size-28 transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none"
            strokeWidth={1}
            absoluteStrokeWidth
          />
        </a>
        <div className="order-2 flex flex-col items-center justify-between gap-10 bg-foreground px-5 pt-12 pb-6 text-background lg:order-1 lg:pt-[3.5vw]">
          <div className="flex flex-col items-center gap-3">
            {logo}
            <p className="font-display text-[19vw]/none font-medium tracking-[-0.05em] lg:text-[9vw]/none">{wordmark}</p>
          </div>
          <div className="flex w-full flex-col items-center gap-2 font-mono text-xs/none tracking-normal uppercase lg:flex-row lg:justify-between">
            <p>
              {legal}
              {legalLink && (
                <>
                  {" • "}
                  <a href={legalLink.href} className="normal-case hover:underline">
                    {legalLink.label}
                  </a>
                </>
              )}
            </p>
            {credit && (
              <p>
                {credit.text}{" "}
                <a href={credit.link.href} className="underline underline-offset-2">
                  {credit.link.label}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
