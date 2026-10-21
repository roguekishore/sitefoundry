import type { ReactNode } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineDrawRule } from "@foundry/lunchline-draw-rule";
import "./lunchline-footer.css";

export interface LunchlineFooterLink {
  label: string;
  href: string;
}

export interface LunchlineFooterProps {
  /** the giant wordmark, one entry per line */
  brand: string[];
  /** the site's sections */
  links: LunchlineFooterLink[];
  /** the legal pages, in the second column */
  legal: LunchlineFooterLink[];
  /** a social icon link (its icon is required; the label is for screen readers) */
  social?: { label: string; href: string; icon: ReactNode };
  /** the copyright line */
  copyright: string;
  /** a credit line with a link, e.g. who made the site */
  credit?: { before: string; label: string; href: string };
  /** the back-to-top link */
  backToTop?: { label: string; href: string };
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none";

function LinkList({ items }: { items: LunchlineFooterLink[] }) {
  return (
    // hovering the list dims every other link to 32%
    <ul className="group/links flex flex-col gap-[1.2rem] lg:gap-[1.1rem]">
      {items.map((link) => (
        <li key={link.href + link.label}>
          <a href={link.href} className={cn("text-lg leading-[1.3] transition-opacity group-hover/links:opacity-[0.32] hover:opacity-100!", ease)}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function LunchlineFooter({ brand, links, legal, social, copyright, credit, backToTop, className }: LunchlineFooterProps) {
  return (
    <footer className={cn("relative bg-foreground text-background", className)}>
      <LunchlineDrawRule className="z-10" />
      <div className="relative mx-auto grid max-w-page px-gutter pt-8 pb-14 lg:min-h-[22.75rem] lg:grid-cols-2 lg:grid-rows-[1fr_auto] lg:pt-10 lg:pb-[2.6rem]">
        {/* the centre hairline on wide screens */}
        <span aria-hidden className="absolute inset-y-0 left-1/2 hidden w-px bg-border lg:block" />

        <p className="lunchline-footer-mark font-display text-[3.6rem] leading-[0.8] font-medium tracking-[-0.04em] lg:col-start-1 lg:row-start-1 lg:text-[5.3rem]">
          {brand.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </p>

        <nav className="mt-16 grid grid-cols-2 gap-x-6 lg:col-start-2 lg:row-start-1 lg:mt-3 lg:grid-cols-[1fr_1fr_auto] lg:pl-[3.8rem]">
          <LinkList items={links} />
          <div className="flex flex-col justify-between">
            <LinkList items={legal} />
            {social && (
              <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={cn("mt-8 block size-7 transition-opacity hover:opacity-70 lg:hidden [&>svg]:size-full", ease)}>
                {social.icon}
              </a>
            )}
          </div>
          {social && (
            <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={cn("hidden size-7 transition-opacity hover:opacity-70 lg:block [&>svg]:size-full", ease)}>
              {social.icon}
            </a>
          )}
        </nav>

        <p className="mt-10 text-sm leading-none lg:col-start-1 lg:row-start-2 lg:mt-0 lg:self-end">{copyright}</p>

        <div className="mt-9 flex items-center justify-between gap-12 text-sm leading-none lg:col-start-2 lg:row-start-2 lg:mt-0 lg:justify-end lg:self-end lg:pb-2 lg:pl-[3.8rem]">
          {credit && (
            <p>
              {credit.before}
              <a href={credit.href} className={cn("underline underline-offset-2 transition-opacity hover:opacity-60", ease)}>
                {credit.label}
              </a>
            </p>
          )}
          {backToTop && (
            <a href={backToTop.href} className="group inline-flex items-center gap-1">
              {backToTop.label}
              <ArrowUp aria-hidden className={cn("size-3.5 transition-transform group-hover:-translate-y-[3px]", ease)} strokeWidth={1.5} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
