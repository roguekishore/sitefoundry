import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";

export interface PaxosFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface PaxosFooterGroup {
  /** the grey group head */
  title: string;
  /** the group's links */
  links: PaxosFooterLink[];
}

export interface PaxosFooterProps {
  /** desktop columns, each holding one or more stacked groups (on phones all groups flow in two columns) */
  columns: PaxosFooterGroup[][];
  /** the newsletter on the right */
  newsletter: {
    /** the line above the field */
    label: ReactNode;
    /** the field's placeholder */
    placeholder: string;
    /** fine print under the field */
    note?: ReactNode;
    /** the submit pill's text */
    submit: string;
    /** where the form posts */
    action?: string;
  };
  /** the large mark before the wordmark (e.g. a lucide icon) */
  mark?: ReactNode;
  /** the company name, set spaced and large */
  brand: string;
  /** small icon links (social) */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** tiny legal links */
  legal?: PaxosFooterLink[];
  /** the copyright line */
  copyright?: ReactNode;
  className?: string;
}

const linkClass =
  "text-xs/[1.85] tracking-[0.01em] text-foreground transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-muted-foreground motion-reduce:transition-none";

function Group({ group }: { group: PaxosFooterGroup }) {
  return (
    <div>
      <p className="text-xs/[1.85] font-medium tracking-[0.01em] text-muted-foreground">{group.title}</p>
      <ul className="mt-0.5">
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Link columns, newsletter, wordmark and legal row. */
export function PaxosFooter({ columns, newsletter, mark, brand, socials, legal, copyright, className }: PaxosFooterProps) {
  return (
    <footer className={cn("bg-background px-gutter pt-12 pb-8 lg:pt-[6.25rem] lg:pb-10", className)}>
      <div className="mx-auto max-w-page lg:border-t lg:border-border lg:pt-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:order-none lg:flex lg:gap-10 xl:gap-[2.4rem]">
            {columns.map((column, i) => (
              <div key={i} className="contents lg:flex lg:flex-col lg:gap-5">
                {column.map((group) => (
                  <Group key={group.title} group={group} />
                ))}
              </div>
            ))}
          </div>
          <form action={newsletter.action} className="-order-1 w-full lg:order-none lg:w-[17.5rem] lg:shrink-0">
            <label className="block text-xs/[1.15] font-medium tracking-[0.01em] text-muted-foreground">
              {newsletter.label}
              <input
                type="email"
                name="email"
                placeholder={newsletter.placeholder}
                className="mt-[1.375rem] h-10 w-full rounded-2xl border border-input bg-secondary px-4 text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:outline-2 focus-visible:outline-ring"
              />
            </label>
            {newsletter.note ? <p className="mt-3 text-[0.625rem]/[1] text-foreground">{newsletter.note}</p> : null}
            <PaxosButton variant="bold" type="submit" className="mt-9">
              {newsletter.submit}
            </PaxosButton>
          </form>
        </div>
        <div className="mt-14 flex flex-col gap-6 lg:mt-12 lg:flex-row lg:items-end lg:justify-between">
          <p className="flex items-center gap-3 text-foreground [&>svg]:size-10">
            {mark}
            <span className="font-display text-2xl tracking-[0.12em] uppercase">{brand}</span>
          </p>
          <div className="flex items-center gap-6 lg:gap-5">
            {socials?.length ? (
              <ul className="flex items-center gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="text-muted-foreground transition-colors duration-[400ms] hover:text-foreground [&>svg]:size-4">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            <div className="text-[0.625rem]/[1.7] text-muted-foreground">
              {legal?.length ? (
                <p className="flex gap-1.5">
                  {legal.map((link, i) => (
                    <span key={link.label} className="flex gap-1.5">
                      {i > 0 ? <span aria-hidden>|</span> : null}
                      <a href={link.href} className="underline underline-offset-2 hover:text-foreground">
                        {link.label}
                      </a>
                    </span>
                  ))}
                </p>
              ) : null}
              {copyright ? <p className="mt-1.5">{copyright}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
