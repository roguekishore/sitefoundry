import type { CSSProperties, ReactNode } from "react";
import { LeomeAndPartnersRollText } from "@foundry/leome-and-partners-roll-text";
import { cn } from "@foundry/foundry-utils";
import "./leome-and-partners-footer.css";

export interface LeomeAndPartnersFooterLink {
  label: string;
  href: string;
}

export interface LeomeAndPartnersFooterProps {
  /** the brand mark shown large at the top-left, e.g. a lucide icon */
  mark?: ReactNode;
  /** the main links, in a column */
  links: LeomeAndPartnersFooterLink[];
  /** a small block beside the links: a heading line, then its lines (opening hours, address…) */
  hours?: { title: string; lines: string[] };
  /** the firm's name, set across the panel; its letters rise one by one as it scrolls in */
  wordmark: string;
  /** the small credit at the bottom-left */
  credit?: string;
  /** small legal links along the bottom (two read best) */
  legal?: LeomeAndPartnersFooterLink[];
  /** the short note at the bottom-right, e.g. the year */
  note?: string;
  /**
   * A backdrop photo filling the whole footer; it shows as a frame around the panel. Give it
   * `className="size-full object-cover"`. A soft glow gradient when empty.
   */
  media?: ReactNode;
  className?: string;
}

/**
 * A footer framed by a backdrop photo: an inset panel holding a large mark, a column of
 * links and an opening-hours note (with a small square), the firm's name set huge across the
 * panel whose letters rise one after another as it scrolls in, and a row of small uppercase
 * legal links. Links roll on hover.
 */
export function LeomeAndPartnersFooter({
  mark,
  links,
  hours,
  wordmark,
  credit,
  legal = [],
  note,
  media,
  className,
}: LeomeAndPartnersFooterProps) {
  const letters = Array.from(wordmark);
  const [first, ...rest] = legal;
  return (
    <footer className={cn("relative isolate p-4 font-sans text-foreground lg:p-7", className)}>
      <div className="absolute inset-0 -z-10 overflow-clip [&>*]:size-full">
        {media ?? <div className="bg-linear-to-tr from-glow via-muted to-highlight/40" />}
      </div>

      <div className="bg-background px-4 pt-24 pb-7 lg:px-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-8">
          <div aria-hidden className="col-span-2 h-[10.4rem] w-[12.25rem] [&_svg]:size-full">
            {mark}
          </div>
          <nav className="lg:col-start-3">
            <ul className="flex flex-col gap-[0.55em] text-2xl leading-[1.15] font-medium tracking-[-0.01em]">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group/roll inline-block">
                    <LeomeAndPartnersRollText text={link.label} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="relative pr-6 text-base leading-normal font-medium">
            <span aria-hidden className="absolute top-[0.35em] right-0 size-[0.6875rem] bg-primary" />
            {hours && (
              <>
                <p>{hours.title}</p>
                <p className="mt-6">
                  {hours.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </>
            )}
          </div>
        </div>

        <p
          className="leome-and-partners-footer-wordmark mt-52 font-display text-[10.2vw] leading-none font-medium tracking-[-0.02em] whitespace-nowrap lg:mt-48 lg:text-[11vw]"
        >
          <span className="sr-only">{wordmark}</span>
          {letters.map((letter, i) => (
            <span
              key={i}
              aria-hidden
              className="leome-and-partners-footer-letter"
              style={{ "--lp-t": letters.length > 1 ? (i / (letters.length - 1)).toFixed(3) : "0" } as CSSProperties}
            >
              {letter}
            </span>
          ))}
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 text-xs leading-none font-medium uppercase lg:mt-12 lg:grid-cols-4 lg:gap-x-8">
          <p className="col-span-2">{credit}</p>
          <div>
            {first && (
              <a href={first.href} className="group/roll inline-block">
                <LeomeAndPartnersRollText text={first.label} />
              </a>
            )}
          </div>
          <div className="flex justify-between gap-4">
            {rest.map((link) => (
              <a key={link.href} href={link.href} className="group/roll inline-block">
                <LeomeAndPartnersRollText text={link.label} />
              </a>
            ))}
            {note && <span className="ml-auto">{note}</span>}
          </div>
        </div>
      </div>
    </footer>
  );
}
