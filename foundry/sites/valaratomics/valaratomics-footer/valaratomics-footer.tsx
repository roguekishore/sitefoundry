import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./valaratomics-footer.css";

export interface ValaratomicsFooterLink {
  /** link text (shown uppercase in the mono face) */
  label: string;
  /** where it goes */
  href: string;
}

export interface ValaratomicsFooterSocial {
  /** accessible name, e.g. "Newsletter" */
  label: string;
  /** where it goes */
  href: string;
  /** the icon (e.g. a lucide icon) */
  icon: ReactNode;
}

export interface ValaratomicsFooterProps {
  /** the giant caps call, one string per line (e.g. ["Join", "the crew"]) */
  title: string[];
  /** the big link rows with arrows */
  actions: ValaratomicsFooterLink[];
  /** the arrow at the end of each row (e.g. lucide MoveRight) */
  arrow?: ReactNode;
  /** the small links spread across one row */
  links: ValaratomicsFooterLink[];
  /** the outlined pill before the icons, e.g. a press-kit link */
  badge?: ValaratomicsFooterLink;
  /** icon links after the pill */
  socials?: ValaratomicsFooterSocial[];
  /** the line in white at the bottom left (centred at the very bottom on phones) */
  tagline: string;
  /** the dim copyright line */
  copyright: string;
  /** the dim line at the bottom right */
  rights?: string;
  /** the big glowing brand mark centred below (an image); empty shows a soft glow */
  mark?: ReactNode;
  className?: string;
}

/**
 * A black footer about a window tall: a giant extra-wide caps call on the left, big mono link
 * rows with arrows on the right, then small links, a pill and icons, the legal lines, and a
 * large glowing mark centred underneath that fades in as the page lifts off it. Put it after
 * a `relative z-10` main to have the page slide away and uncover it (it is sticky at the
 * bottom, underneath).
 */
export function ValaratomicsFooter({
  title,
  actions,
  arrow,
  links,
  badge,
  socials = [],
  tagline,
  copyright,
  rights,
  mark,
  className,
}: ValaratomicsFooterProps) {
  return (
    <footer
      className={cn(
        "dark sticky bottom-0 isolate flex min-h-[min(52rem,100svh)] flex-col overflow-clip bg-background text-foreground",
        className,
      )}
    >
      <div
        aria-hidden={!mark}
        className="valaratomics-footer-mark pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-[1000/890] w-[min(62.5rem,170%)] -translate-x-1/2 translate-y-[18%] lg:translate-y-[32%] [&>*]:size-full [&_img]:object-contain"
      >
        {mark ?? (
          <div className="size-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_85%,transparent)_0%,color-mix(in_oklab,var(--glow)_30%,transparent)_30%,transparent_72%)]" />
        )}
      </div>

      <div className="mx-auto grid w-full max-w-page flex-1 grid-rows-[auto_auto_1fr] gap-y-12 px-gutter pt-[1.75rem] pb-5 lg:grid-cols-12 lg:grid-rows-none lg:flex-none lg:gap-x-[2vw] lg:pt-10">
        <div className="max-lg:contents lg:col-span-7 lg:flex lg:flex-col">
          <h2 className="font-display text-[2.625rem] leading-[0.88] font-black uppercase [font-stretch:var(--valaratomics-stretch,100%)] lg:col-span-7 lg:text-[5.3125rem] lg:leading-[0.88]">
            {title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="self-end text-center font-mono text-base leading-none uppercase max-lg:row-start-3 max-lg:w-full lg:mt-auto lg:self-start lg:text-left">
            <p>{tagline}</p>
            <p className="mt-4 text-foreground/40">{copyright}</p>
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <ul className="flex flex-col gap-[1.875rem] lg:gap-[2.125rem]">
            {actions.map((a) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  className="group flex items-center justify-between font-mono text-lg leading-none uppercase transition-colors duration-150 hover:text-primary lg:text-2xl lg:leading-none"
                >
                  <span>{a.label}</span>
                  {arrow && (
                    <span
                      aria-hidden
                      className="transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none [&_svg]:size-7 [&_svg]:stroke-[1.5]"
                    >
                      {arrow}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-12 flex justify-between font-mono text-base leading-none uppercase lg:mt-[5.25rem]">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors duration-150 hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {(badge || socials.length > 0) && (
            <div className="mt-5 flex items-center gap-6 lg:justify-end">
              {badge && (
                <a
                  href={badge.href}
                  className="rounded-[5px] border border-foreground px-3 py-1.5 font-sans text-sm leading-none font-semibold uppercase transition-colors duration-150 hover:border-primary hover:text-primary"
                >
                  {badge.label}
                </a>
              )}
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  className="transition-colors duration-150 hover:text-primary [&_svg]:size-6"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          )}
          {rights && (
            <p className="mt-5 hidden text-right font-mono text-base leading-none text-foreground/40 uppercase lg:block">{rights}</p>
          )}
        </div>

      </div>
    </footer>
  );
}
