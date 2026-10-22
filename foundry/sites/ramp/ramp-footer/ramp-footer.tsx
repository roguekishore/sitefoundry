import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RampEmailForm, type RampEmailFormProps } from "@foundry/ramp-email-form";

export interface RampFooterLink {
  label: string;
  href: string;
}

export interface RampFooterProps {
  /** the first column, in white (company pages) */
  primaryLinks: RampFooterLink[];
  /** the titled columns; they fold into chevron rows on phones */
  groups: { title: string; links: RampFooterLink[] }[];
  /** the underlined legal links */
  legalLinks: RampFooterLink[];
  /** fine-print paragraphs */
  legal: string[];
  /** address lines */
  address?: string[];
  /** small outlined badges, e.g. app-store links (label + optional icon) */
  badges?: { label: string; href: string; icon?: ReactNode }[];
  /** the underlined social links */
  socials?: RampFooterLink[];
  /** the line above the footer's sign-up bar (may hold bold parts) */
  signupLead?: ReactNode;
  /** the footer's sign-up bar */
  form?: RampEmailFormProps;
  /** pull up under a rounded band above it */
  tuck?: boolean;
  className?: string;
}

function Underlined({ links, className }: { links: RampFooterLink[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-4 gap-y-1", className)}>
      {links.map((l) => (
        <li key={l.label}>
          <a href={l.href} className="underline underline-offset-2 hover:text-foreground">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Ramp's dark footer: link columns, fine print, apps, socials and one more sign-up bar. */
export function RampFooter({ primaryLinks, groups, legalLinks, legal, address, badges, socials, signupLead, form, tuck, className }: RampFooterProps) {
  const signup = form && (
    <div>
      {signupLead && <p className="text-sm text-muted-foreground [&_b]:font-normal [&_b]:text-foreground">{signupLead}</p>}
      <RampEmailForm {...form} className="mt-4" />
    </div>
  );
  const extras = (
    <div className="grid gap-5">
      {badges && (
        <ul className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <li key={b.label}>
              <a href={b.href} className="flex h-8 items-center gap-1.5 rounded-[calc(var(--radius)-8px)] border border-foreground/30 px-2.5 text-xs transition-colors hover:bg-foreground/10 [&_svg]:size-4">
                {b.icon}
                {b.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {socials && <Underlined links={socials} className="text-sm text-muted-foreground sm:flex-col sm:gap-y-2" />}
    </div>
  );

  return (
    <footer className={cn("dark bg-background text-foreground", tuck && "-mt-[calc(var(--radius)*2.5)] pt-[calc(var(--radius)*2.5)]", className)}>
      <div className="mx-auto max-w-page px-gutter pt-12 pb-20 lg:px-[calc(var(--page-gutter)*4)] lg:pt-[5.25rem] lg:pb-[8.5rem]">
        {/* link columns */}
        <div className="lg:grid lg:grid-cols-6 lg:gap-x-6">
          <ul className="grid content-start gap-y-[0.875rem] text-base/5 lg:gap-y-1.5">
            {primaryLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-200 hover:text-muted-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {groups.map((g) => (
            <div key={g.title} className="hidden lg:block">
              <p className="text-base/5">{g.title}</p>
              <ul className="mt-1.5 grid gap-y-1.5 text-base/5 text-muted-foreground">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="transition-colors duration-200 hover:text-foreground">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="mt-9 border-t border-foreground/40 lg:hidden">
            {groups.map((g) => (
              <details key={g.title} className="group border-b border-foreground/40">
                <summary className="flex cursor-pointer list-none items-center justify-between py-5 text-base [&::-webkit-details-marker]:hidden">
                  {g.title}
                  <ChevronRight aria-hidden className="size-5 transition-transform duration-200 group-open:rotate-90 motion-reduce:transition-none" strokeWidth={1.5} />
                </summary>
                <ul className="grid gap-y-3 pb-5 text-base text-muted-foreground">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>

        {/* phones: sign-up, apps, address before the fine print */}
        <div className="mt-[4.5rem] grid gap-10 lg:hidden">
          {signup}
          {extras}
          {address && (
            <address className="text-sm/[1.35] text-muted-foreground not-italic">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          )}
        </div>

        <div className="mt-8 grid gap-10 lg:mt-14 lg:grid-cols-6 lg:gap-x-6 lg:border-t lg:border-foreground/40 lg:pt-12">
          <div className="lg:col-span-3">
            <Underlined links={legalLinks} className="text-sm text-muted-foreground" />
            <div className="mt-4 grid gap-3 text-sm/[1.35] text-muted-foreground">
              {legal.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-12 hidden lg:block">{signup}</div>
          </div>
          {address && (
            <address className="hidden text-sm/[1.35] text-muted-foreground not-italic lg:col-span-2 lg:block">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          )}
          <div className="hidden lg:block">{extras}</div>
        </div>
      </div>
    </footer>
  );
}
