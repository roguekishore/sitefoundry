import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspaceButton } from "@foundry/vastspace-button";
import { VastspacePlaceholder } from "@foundry/vastspace-placeholder";

export interface VastspaceFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface VastspaceFooterColumn {
  /** the mono heading, e.g. "Products" */
  title: string;
  /** the links under it */
  links: VastspaceFooterLink[];
}

export interface VastspaceSocial extends VastspaceFooterLink {
  /** a 16px icon (lucide-react or your own svg) */
  icon: ReactNode;
}

export interface VastspaceFooterProps {
  /** the sign-up panel */
  signup: {
    /** the panel title */
    title: string;
    /** screen-reader label and placeholder of the email field */
    emailLabel: string;
    /** the button label */
    button: string;
    /** the small consent note: text before the link, the link, text after */
    note: { before: string; linkLabel: string; linkHref: string; after: string };
    /** the form's action URL */
    action?: string;
  };
  /** the mono heading of the contact block */
  contactTitle: string;
  /** address lines */
  address: string[];
  /** phone number */
  phone: string;
  /** email address */
  email: string;
  /** the flag image (about 59×31); empty shows a placeholder */
  flag?: ReactNode;
  /** the two link columns */
  columns: VastspaceFooterColumn[];
  /** the wordmark above the legal links (a VastspaceWordmark) */
  brand: ReactNode;
  /** the legal links */
  legal: VastspaceFooterLink[];
  /** the social icons */
  socials: VastspaceSocial[];
  /** the copyright line */
  copyright: string;
  className?: string;
}

const mono = "font-mono text-xs/3 font-medium tracking-[0.02em] uppercase";

export function VastspaceFooter({ signup, contactTitle, address, phone, email, flag, columns, brand, legal, socials, copyright, className }: VastspaceFooterProps) {
  return (
    <footer className={cn("bg-chart-5 p-4 pt-10 text-popover-foreground md:p-10", className)}>
      <form action={signup.action} className="grid grid-cols-1 gap-y-[2.3rem] bg-card px-4 pt-4 pb-[1.6rem] text-card-foreground md:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] md:gap-y-0 md:px-12 md:pt-10 md:pb-10">
        <h2 className="text-xl/none font-[560] tracking-[-0.01em]">{signup.title}</h2>
        <div>
          <div className="flex h-[3.75rem] min-w-0 items-center bg-popover pr-3 pl-[1.0625rem] text-popover-foreground md:h-20 md:pl-6">
            <input type="email" name="email" placeholder={signup.emailLabel} aria-label={signup.emailLabel} className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-popover-foreground" />
            <VastspaceButton label={signup.button} type="submit" size="lg" className="h-12 px-5 md:h-14 md:px-5" />
          </div>
          <p className="mt-6 text-xs/[1.4] md:mt-6">
            {signup.note.before}{" "}
            <a href={signup.note.linkHref} className="underline underline-offset-4">
              {signup.note.linkLabel}
            </a>{" "}
            {signup.note.after}
          </p>
        </div>
      </form>

      <div className="mt-2 grid grid-cols-1 bg-popover lg:min-h-[30.6875rem] lg:grid-cols-[minmax(0,1fr)_minmax(0,34rem)] lg:grid-rows-[auto_1fr]">
        <div className="px-4 pt-7 pb-8 lg:px-10 lg:pt-10">
          <p className={mono}>{contactTitle}</p>
          <address className="mt-9 text-base/[1.375] not-italic">
            {address.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
            <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="mt-3.5 block">
              {phone}
            </a>
            <a href={`mailto:${email}`} className="mt-3 block">
              {email}
            </a>
          </address>
          <div className="mt-4 h-[1.9375rem] w-[3.6875rem] [&>*]:size-full [&>*]:object-cover">{flag ?? <VastspacePlaceholder className="size-full" />}</div>
        </div>

        <div className="grid grid-cols-2 border-t border-border px-4 pt-7 pb-[6.5rem] lg:border-t-0 lg:border-l lg:px-10 lg:pt-10 lg:pb-0">
          {columns.map((c) => (
            <nav key={c.title} aria-label={c.title}>
              <p className={mono}>{c.title}</p>
              <ul className="mt-4 space-y-[0.1875rem] text-base/[1.375]">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-opacity duration-500 hover:opacity-60 motion-reduce:transition-none">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-col justify-end px-4 pb-6 lg:px-10 lg:pb-11">
          <div className="text-[1.2rem] lg:text-[1.75rem]">{brand}</div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs/none lg:mt-8 lg:gap-x-10">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-opacity duration-500 hover:opacity-60 motion-reduce:transition-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-end gap-7 px-4 pb-7 lg:flex-row lg:items-end lg:justify-start lg:gap-10 lg:border-l lg:border-border lg:px-10 lg:pb-11">
          <ul className="flex items-center gap-1 lg:-mb-1.5">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="flex size-8 items-center justify-center transition-opacity duration-500 hover:opacity-60 motion-reduce:transition-none [&>svg]:size-4">
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs/none">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
