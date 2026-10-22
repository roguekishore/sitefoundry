import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface RadiantnuclearFooterLink {
  label: string;
  href: string;
}

export interface RadiantnuclearFooterSocial {
  /** the network's name, for screen readers */
  label: string;
  href: string;
  /** the icon (an svg, img or lucide icon) */
  icon: ReactNode;
}

export interface RadiantnuclearFooterProps {
  /** the street address, one entry per line */
  address?: string[];
  /** a contact email, shown and linked */
  email?: string;
  /** site links, in the left column */
  links: RadiantnuclearFooterLink[];
  /** legal links, in the right column */
  legal?: RadiantnuclearFooterLink[];
  /** the small icon row */
  socials?: RadiantnuclearFooterSocial[];
  /** the copyright line */
  copyright?: string;
  className?: string;
}

const linkLook = "transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none";

export function RadiantnuclearFooter({ address, email, links, legal = [], socials = [], copyright, className }: RadiantnuclearFooterProps) {
  return (
    <footer className={cn("bg-secondary pt-14 pb-[4.5rem] font-sans text-base leading-[1.375] font-bold text-secondary-foreground lg:pt-20 lg:pb-16", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-12">
          <div>
            {address && (
              <address className="not-italic">
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            )}
            {email && (
              <a href={`mailto:${email}`} className={cn("mt-7 block w-fit", linkLook)}>
                {email}
              </a>
            )}
          </div>

          <div className="mt-12 flex justify-between gap-6 lg:mt-0 lg:w-[28rem]">
            <ul className="flex flex-col gap-3.5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkLook}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            {legal.length > 0 && (
              <ul className="flex flex-col items-end gap-3.5">
                {legal.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className={linkLook}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {socials.length > 0 && (
          <ul className="mt-12 flex items-center justify-center gap-6 lg:mt-16">
            {socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} aria-label={s.label} className={cn("block [&_svg]:size-7", linkLook)}>
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        )}

        {copyright && <p className="mt-12 text-center text-sm font-medium lg:mt-10">{copyright}</p>}
      </div>
    </footer>
  );
}
