import { ArrowUpRight, SquareArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./rioproperty-footer.css";

export interface RiopropertyFooterLink {
  label: string;
  href: string;
}

export interface RiopropertyFooterProps {
  /** the big yellow address at the top, e.g. a mailto link */
  email: RiopropertyFooterLink;
  /** the phone number line */
  phone: RiopropertyFooterLink;
  /** the street address, one entry per line */
  address: string[];
  /** the page links in the middle column */
  links: RiopropertyFooterLink[];
  /** social links at the right, each with a small square arrow badge */
  socials: RiopropertyFooterLink[];
  /** the wordmark at the bottom, in very wide-tracked capitals */
  brand: string;
  /** the capital line under the wordmark */
  tagline: string;
  className?: string;
}

// The original's hover timing: 0.75s on a long, snappy ease.
const ease = "duration-[750ms] ease-[cubic-bezier(0.625,0.05,0,1)] motion-reduce:transition-none";
const linkHover = "transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:text-secondary-foreground";

export function RiopropertyFooter({ email, phone, address, links, socials, brand, tagline, className }: RiopropertyFooterProps) {
  return (
    <footer className={cn("rioproperty-footer overflow-clip bg-secondary text-accent", className)}>
      <div className="rioproperty-footer-inner mx-auto flex max-w-page flex-col px-gutter pt-24 pb-10 lg:pt-36 lg:pb-9">
        <div className="lg:pl-[37%]">
          {/* the address rolls up to an identical copy on hover, and the arrow is swapped */}
          <a
            href={email.href}
            className="group/mail flex items-center justify-between gap-3 font-display text-[clamp(1.4rem,0.6rem+3.3vw,3.25rem)] leading-none font-semibold text-highlight uppercase"
          >
            <span className="relative block overflow-clip py-[0.08em]">
              <span className={cn("block transition-[translate] group-hover/mail:-translate-y-[120%]", ease)}>{email.label}</span>
              <span aria-hidden className={cn("absolute inset-x-0 top-full block py-[0.08em] transition-[translate] group-hover/mail:-translate-y-full", ease)}>
                {email.label}
              </span>
            </span>
            <span aria-hidden className="relative size-[0.8em] shrink-0 overflow-clip">
              <ArrowUpRight
                strokeWidth={1.25}
                className={cn("absolute inset-0 size-full transition-[translate] group-hover/mail:translate-x-full group-hover/mail:-translate-y-full", ease)}
              />
              <ArrowUpRight
                strokeWidth={1.25}
                className={cn("absolute inset-0 size-full -translate-x-full translate-y-full transition-[translate] group-hover/mail:translate-0", ease)}
              />
            </span>
          </a>

          <div className="mt-14 grid grid-cols-[1fr_auto] gap-x-6 gap-y-16 uppercase lg:mt-12 lg:grid-cols-[51.5%_1fr_auto]">
            <div>
              <a href={phone.href} className={cn("block", linkHover)}>
                {phone.label}
              </a>
              <address className="mt-2 not-italic">
                {address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <ul className="flex flex-col gap-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={linkHover}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="col-span-2 flex flex-col items-end gap-2 lg:col-span-1">
              {socials.map((social) => (
                <li key={social.href}>
                  <a href={social.href} className={cn("group/social flex items-center gap-3", linkHover)}>
                    {social.label}
                    <SquareArrowUpRight aria-hidden strokeWidth={1.5} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 lg:mt-32">
          <p aria-label={brand} className="font-display text-[1.75rem] leading-none font-semibold tracking-[0.35em] whitespace-nowrap text-secondary-foreground uppercase lg:text-[1.875rem]">
            {brand}
          </p>
          <p className="mt-5 max-w-[18rem] text-[1.0625rem] leading-normal text-secondary-foreground uppercase lg:mt-6 lg:max-w-[22rem] lg:text-base">{tagline}</p>
        </div>
      </div>
    </footer>
  );
}
