import type { ReactNode } from "react";
import { CfsRingLink } from "@foundry/cfs-ring-link";
import { cn } from "@foundry/foundry-utils";

export interface CfsFooterLink {
  /** the link's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface CfsFooterContact {
  /** a small heading such as "Press"; leave out for a lone link */
  label?: string;
  /** the email or page link under it */
  link: CfsFooterLink;
}

export interface CfsFooterProps {
  /** the big centred call to action */
  call: string;
  /** the label before the social icons, e.g. "Follow us" */
  followLabel: string;
  /** social links: an icon each, with an accessible label */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** the ring-arrow link at the end of the row */
  cta: CfsFooterLink;
  /** the large mark in the first column (an icon or logo, ~105px) */
  mark?: ReactNode;
  /** company name and address, one line each */
  address: string[];
  /** the copyright / trademark paragraph */
  legal: string;
  /** labelled contacts in the third column */
  contacts: CfsFooterContact[];
  /** site links in the last column */
  links: CfsFooterLink[];
  className?: string;
}

const underline =
  "border-b border-primary transition-colors duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:border-foreground motion-reduce:transition-none";

/** Navy footer: centred call, social row, hairline, then mark/address/contacts/links. */
export function CfsFooter({ call, followLabel, socials, cta, mark, address, legal, contacts, links, className }: CfsFooterProps) {
  return (
    <footer className={cn("dark bg-card pt-section pb-24 text-foreground lg:pt-[calc(var(--section-y)*1.5)] lg:pb-[8.5rem]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[clamp(1.875rem,3.2vw,2.886rem)] leading-[1.2] font-light">{call}</h2>

          <div className="mt-10 flex flex-col items-center lg:flex-row">
            <p className="font-mono text-sm leading-[1.2]">{followLabel}</p>
            <ul className="mt-5 flex items-center gap-5 lg:mt-0 lg:ml-5">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="block text-primary transition-colors duration-150 hover:text-foreground motion-reduce:transition-none [&_svg]:size-[22px]"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
            <span aria-hidden className="mt-[1.875rem] h-px w-[12.8rem] bg-primary/60 lg:mx-5 lg:mt-0 lg:w-[50px] lg:bg-foreground/30" />
            <CfsRingLink {...cta} className="mt-10 lg:mt-0" />
          </div>
        </div>

        <hr className="mt-[3.75rem] border-border lg:mt-[6.25rem]" />

        <div className="mt-[3.75rem] grid justify-items-center gap-y-[3.75rem] text-center font-mono text-sm leading-[2] lg:grid-cols-[232fr_463fr_463fr_212fr] lg:justify-items-start lg:gap-y-0 lg:text-left">
          <div className="text-primary [&_svg]:size-[105px]">{mark}</div>

          <div className="max-w-[26rem] lg:max-w-[27.5rem]">
            <p>
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-7">{legal}</p>
          </div>

          <ul className="flex flex-col gap-5">
            {contacts.map((contact) => (
              <li key={contact.link.label}>
                {contact.label && <p>{contact.label}</p>}
                <a href={contact.link.href} className={underline}>
                  {contact.link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className={underline}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
