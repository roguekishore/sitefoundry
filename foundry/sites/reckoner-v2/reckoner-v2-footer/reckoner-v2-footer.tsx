import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerV2Button } from "@foundry/reckoner-v2-button";

export interface ReckonerV2FooterLink {
  label: string;
  href: string;
}

export interface ReckonerV2FooterProps {
  /** the company name: the home link's label for screen readers */
  brand: string;
  /** the logo (e.g. reckoner-v2-wordmark) */
  logo: ReactNode;
  homeHref?: string;
  /** the statement at the top of the right half */
  statement: string;
  /** the sign-up row */
  subscribe?: {
    /** label of the email field, for screen readers */
    label: string;
    placeholder: string;
    button: string;
    /** small print under the field */
    consent?: string;
    /** where the form posts */
    action?: string;
  };
  /** the short sitemap */
  sitemap: ReckonerV2FooterLink[];
  /** contact groups: a grey label over a few links (email, phone) */
  contacts?: { label: string; links: ReckonerV2FooterLink[] }[];
  /** a social profile link, with a small icon */
  social?: ReckonerV2FooterLink & { icon?: ReactNode };
  /** the parent-company line, in the accent colour */
  parent?: string;
  /** the legal note (registration, copyright) */
  legal?: string;
  /** legal links under the note */
  legalLinks?: ReckonerV2FooterLink[];
  className?: string;
}

const link =
  "underline-offset-2 transition-colors duration-500 ease-[ease] hover:text-glow hover:underline motion-reduce:transition-none";

export function ReckonerV2Footer({
  brand,
  logo,
  homeHref = "/",
  statement,
  subscribe,
  sitemap,
  contacts = [],
  social,
  parent,
  legal,
  legalLinks = [],
  className,
}: ReckonerV2FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-background text-sm text-foreground", className)}>
      {/* Phones: one column, ordered with `order-*` (the two halves use display: contents).
          Desktop: two halves split by a hairline. */}
      <div className="mx-auto flex max-w-page flex-col px-gutter pt-10 pb-12 lg:grid lg:grid-cols-2 lg:px-0 lg:py-0">
        {/* left half */}
        <div className="contents lg:flex lg:flex-col lg:justify-between lg:border-r lg:border-border lg:pt-[3.75rem] lg:pr-10 lg:pb-[3.75rem] lg:pl-gutter">
          <a href={homeHref} aria-label={brand} className="order-1 lg:order-none flex w-fit">
            {logo}
          </a>
          <div className="contents lg:mt-24 lg:flex lg:items-end lg:justify-between lg:gap-10">
            <div className="order-7 lg:order-none mt-[4.5rem] lg:mt-0 lg:max-w-[22rem]">
              {parent && <p className="text-glow">{parent}</p>}
              {legal && <p className="mt-3 leading-[1.45]">{legal}</p>}
              {legalLinks.length > 0 && (
                <ul className="mt-10 flex flex-wrap gap-x-9 gap-y-6 lg:mt-12">
                  {legalLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className={link}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <ul className="order-3 lg:order-none mt-11 space-y-2.5 lg:mt-0 lg:space-y-0 lg:leading-[1.375rem]">
              {sitemap.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right half */}
        <div className="contents lg:flex lg:flex-col lg:pt-[3.75rem] lg:pr-gutter lg:pb-[3.75rem] lg:pl-10">
          <p className="order-2 lg:order-none mt-24 max-w-[23rem] font-display text-[2rem] leading-[1.1] tracking-[-0.02em] lg:mt-0">{statement}</p>

          {subscribe && (
            <form action={subscribe.action} method="post" className="order-4 lg:order-none mt-10 lg:mt-[8.125rem]">
              <div className="flex items-stretch">
                <label className="flex flex-1 border-b border-border">
                  <span className="sr-only">{subscribe.label}</span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={subscribe.placeholder}
                    className="w-full min-w-0 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
                  />
                </label>
                <ReckonerV2Button type="submit" size="lg">
                  {subscribe.button}
                </ReckonerV2Button>
              </div>
              {subscribe.consent && <p className="mt-5 max-w-[20rem] text-xs leading-[1.4]">{subscribe.consent}</p>}
            </form>
          )}

          <div className="contents lg:mt-auto lg:grid lg:grid-cols-2 lg:items-end lg:gap-10 lg:pt-24">
            {social && (
              <a href={social.href} className={cn("order-6 lg:order-none mt-11 flex w-fit items-center gap-1.5 lg:mt-0", link)}>
                {social.icon && (
                  <span aria-hidden className="grid size-[1.375rem] place-items-center rounded-lg bg-foreground text-background [&_svg]:size-3.5">
                    {social.icon}
                  </span>
                )}
                {social.label}
                <ArrowUpRight aria-hidden className="size-3.5" strokeWidth={2} />
              </a>
            )}
            {contacts.length > 0 && (
              <div className="order-5 lg:order-none mt-[4.25rem] space-y-10 lg:mt-0">
                {contacts.map((group) => (
                  <div key={group.label}>
                    <p className="text-muted-foreground">{group.label}</p>
                    <ul className="mt-2 space-y-2">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <a href={l.href} className={link}>
                            {l.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
