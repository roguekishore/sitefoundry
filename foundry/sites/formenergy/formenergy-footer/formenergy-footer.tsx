import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyWordmark } from "@foundry/formenergy-wordmark";

interface FooterLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface FormenergyFooterProps {
  /** wordmark: the larger first word */
  brand: string;
  /** wordmark: the smaller tracked word under it */
  brandSuffix?: string;
  /** the tagline under the wordmark, one entry per line on desktop */
  taglineLines: string[];
  /** heading over the menu links (shown uppercase) */
  menuTitle: string;
  /** the menu links */
  menu: FooterLink[];
  /** heading over the contact column (shown uppercase) */
  contactTitle: string;
  /** postal address, one entry per line */
  addressLines: string[];
  /** email links under the address */
  emails: FooterLink[];
  /** square social buttons */
  social: { label: string; href: string; icon: ReactNode }[];
  /** legal links in the bottom row, split by thin orange rules */
  legal: FooterLink[];
  /** copyright line at the bottom right */
  copyright: string;
  className?: string;
}

const hover = "transition-colors duration-300 hover:text-primary motion-reduce:transition-none";

/** Black four-column footer with mono headings, orange-outlined social squares and a legal row. */
export function FormenergyFooter({
  brand,
  brandSuffix,
  taglineLines,
  menuTitle,
  menu,
  contactTitle,
  addressLines,
  emails,
  social,
  legal,
  copyright,
  className,
}: FormenergyFooterProps) {
  const heading = "font-mono text-[0.6rem] leading-none font-bold tracking-[0.2em] uppercase lg:text-sm lg:tracking-[0.143em]";
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter pt-[3.75rem] pb-[3.3rem] lg:pt-[5.75rem] lg:pb-[3.4rem]">
        <div className="grid justify-items-center gap-y-[2.4rem] text-center lg:grid-cols-[383fr_281fr_428fr_164fr] lg:justify-items-start lg:px-2.5 lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <FormenergyWordmark name={brand} suffix={brandSuffix} className="text-[2.6rem] lg:text-[3.1rem]" />
            <p className="mt-[2.4rem] text-lg leading-[1.4] font-medium lg:mt-[3.6rem] lg:text-[1.75rem] lg:leading-[1.32]">
              {taglineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <nav aria-label={menuTitle}>
            <p className={heading}>{menuTitle}</p>
            <ul className="mt-[2.4rem] flex flex-col gap-[1.2rem] leading-none lg:mt-[2.6rem] lg:gap-[1.28rem]">
              {menu.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={cn("text-base leading-none font-medium lg:text-xl", hover)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={heading}>{contactTitle}</p>
            <address className="mt-[2.4rem] text-base leading-[1.4] font-light not-italic lg:mt-[2.6rem] lg:text-xl">
              {addressLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </address>
            <ul className="mt-4 flex flex-col gap-[1.3rem] leading-none lg:mt-[0.9rem] lg:gap-[1.45rem]">
              {emails.map((email) => (
                <li key={email.label}>
                  <a href={email.href} className={cn("text-base leading-none font-medium lg:text-xl", hover)}>
                    {email.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex max-w-[8rem] flex-wrap content-start justify-start gap-2.5 lg:max-w-[10.25rem] lg:justify-self-end">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className="flex size-9 items-center justify-center rounded-[5px] border border-primary transition-colors duration-300 hover:text-primary motion-reduce:transition-none lg:size-12 [&_svg]:size-4 lg:[&_svg]:size-5"
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[3.4rem] border-t border-border pt-[2.6rem] lg:mt-[6.5rem] lg:flex lg:items-center lg:justify-between lg:pt-[2.6rem]">
          <ul className="flex flex-col items-center lg:flex-row lg:gap-0">
            {legal.map((link, i) => (
              <li key={link.label} className={cn("lg:px-[1.1rem] lg:first:pl-2", i > 0 && "lg:border-l lg:border-primary")}>
                <a href={link.href} className={cn("font-mono text-[0.9rem] leading-[1.9rem] font-medium lg:text-sm", hover)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-[2.9rem] text-center font-mono text-[0.6rem] leading-none font-medium lg:mt-0 lg:text-xs">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
