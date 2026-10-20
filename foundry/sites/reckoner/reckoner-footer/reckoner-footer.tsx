import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerButton } from "@foundry/reckoner-button";
import { ReckonerWordmark, type ReckonerWordmarkProps } from "@foundry/reckoner-wordmark";

export interface ReckonerFooterLink {
  label: string;
  href: string;
}

export interface ReckonerFooterProps {
  /** the lockup at the top left (its icon takes the highlight colour) */
  brand: ReckonerWordmarkProps;
  /** the line at the top of the right half, e.g. the hero's title again */
  tagline: string;
  /** a short page list (bottom of the left half on desktop) */
  nav: ReckonerFooterLink[];
  /** legal links under the small print */
  legal: ReckonerFooterLink[];
  /** a line in the highlight colour above the small print, e.g. the parent company */
  parent?: string;
  /** the small print: registration and copyright */
  copyright: string;
  /** the email sign-up */
  subscribe: {
    /** screen-reader label of the email field */
    label: string;
    placeholder: string;
    button: string;
    /** the small consent line under the field */
    consent?: string;
    /** where the form posts to */
    action?: string;
  };
  /** groups of contact lines (label, then links) at the bottom right */
  contacts: { label: string; lines: ReckonerFooterLink[] }[];
  /** one social link with an icon and a small arrow */
  social?: { label: string; href: string; icon?: ReactNode };
  className?: string;
}

const linkClass =
  "decoration-1 underline-offset-2 transition-colors duration-500 ease-[ease] hover:text-highlight hover:underline motion-reduce:transition-none";

/**
 * Two halves split by a hairline. On phones the halves dissolve (display: contents) and the
 * pieces line up in reading order instead.
 */
export function ReckonerFooter({ brand, tagline, nav, legal, parent, copyright, subscribe, contacts, social, className }: ReckonerFooterProps) {
  return (
    <footer className={cn("border-t border-border bg-background text-foreground", className)}>
      <div className="mx-auto flex max-w-page flex-col px-gutter pt-10 pb-11 text-sm leading-[1.4] tracking-[0.01em] lg:grid lg:grid-cols-2 lg:px-0 lg:py-0">
        {/* left half */}
        <div className="contents lg:flex lg:flex-col lg:border-r lg:border-border lg:py-[3.75rem] lg:pr-10 lg:pl-gutter">
          <ReckonerWordmark {...brand} tone="highlight" className="order-1 self-start lg:order-none" />

          <div className="order-7 mt-[3.75rem] lg:order-none lg:mt-auto">
            {parent && <p className="text-highlight">{parent}</p>}
            <p className="mt-2.5 max-w-[19rem]">{copyright}</p>
          </div>

          <div className="contents lg:mt-3 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <ul className="order-8 mt-9 flex flex-wrap gap-x-8 gap-y-8 lg:order-none lg:mt-0 lg:gap-x-9 lg:gap-y-4.5">
              {legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="order-3 mt-10 flex flex-col gap-2.5 lg:order-none lg:mt-0 lg:gap-0.5">
              {nav.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right half */}
        <div className="contents lg:flex lg:flex-col lg:py-[3.75rem] lg:pr-gutter lg:pl-10">
          <h2 className="order-2 mt-[5.5rem] max-w-[11.5em] text-balance font-display text-[2rem] leading-[1.1] tracking-[-0.02em] lg:order-none lg:mt-0 lg:text-[max(1.75rem,2.222vw)]">
            {tagline}
          </h2>

          <form action={subscribe.action} method="post" className="order-4 mt-8 lg:order-none lg:mt-[8.125rem]">
            <div className="flex">
              <label className="min-w-0 flex-1">
                <span className="sr-only">{subscribe.label}</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={subscribe.placeholder}
                  className="h-14 w-full rounded-none border-b border-input bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring"
                />
              </label>
              <ReckonerButton type="submit" size="lg">
                {subscribe.button}
              </ReckonerButton>
            </div>
            {subscribe.consent && <p className="mt-3 max-w-[20rem] text-xs leading-[1.4]">{subscribe.consent}</p>}
          </form>

          <div className="contents lg:mt-[8.125rem] lg:grid lg:grid-cols-2 lg:items-end lg:gap-10">
            {social && (
              <a href={social.href} className={cn("group order-6 mt-9 inline-flex items-center gap-1.5 self-start lg:order-none lg:mt-0 lg:self-end", linkClass)}>
                {social.icon && (
                  <span className="flex size-[1.375rem] items-center justify-center rounded-sm bg-foreground text-background [&_svg]:size-3.5">
                    {social.icon}
                  </span>
                )}
                {social.label}
                <ArrowUpRight
                  aria-hidden
                  className="size-3.5 transition-transform duration-500 group-hover:translate-x-[0.125em] motion-reduce:transition-none"
                />
              </a>
            )}
            <div className="order-5 mt-14 flex flex-col gap-8 lg:order-none lg:mt-0">
              {contacts.map((group) => (
                <div key={group.label} className="flex flex-col gap-2.5 lg:gap-0.5">
                  <p className="text-muted-foreground">{group.label}</p>
                  {group.lines.map((line) => (
                    <a key={line.label} href={line.href} className={cn("self-start", linkClass)}>
                      {line.label}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
