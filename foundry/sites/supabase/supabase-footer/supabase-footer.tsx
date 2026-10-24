import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";

export interface SupabaseFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SupabaseFooterProps {
  /** the wordmark, shown large at the top left */
  logo: ReactNode;
  /** the trust row above the footer: an ink lead, a green link and checked badges */
  trust?: {
    lead: string;
    link?: { label: string; href: string };
    /** each badge: an ink name and a grey note after it (the note is hidden on phones) */
    badges: { name: string; note?: string }[];
  };
  /** social links as icons (22px) */
  socials?: { label: string; icon: ReactNode; href: string }[];
  /** the newsletter form under the socials */
  newsletter?: { text: string; placeholder: string; button: string; action?: string };
  /** the link columns: six sit in a row on desktop, two per row on phones */
  columns: SupabaseFooterColumn[];
  /** the small line at the bottom left */
  copyright: string;
  /** something small for the bottom right, e.g. a theme switch */
  end?: ReactNode;
  className?: string;
}

/** A light footer: a trust row over a fading hairline, the wordmark with socials and a newsletter, six link columns, a bottom bar. */
export function SupabaseFooter({ logo, trust, socials, newsletter, columns, copyright, end, className }: SupabaseFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      {trust && (
        <div className="relative">
          <div className="mx-auto box-content grid max-w-[57rem] grid-cols-2 gap-6 px-gutter py-8 text-[0.9375rem] lg:flex lg:items-center lg:justify-between lg:py-9">
            <p className="flex flex-col gap-3 lg:flex-row lg:gap-2">
              <span className="font-[450] text-foreground">{trust.lead}</span>
              {trust.link && (
                <a href={trust.link.href} className="text-primary transition-colors duration-150 hover:text-foreground">
                  {trust.link.label}
                </a>
              )}
            </p>
            <ul className="flex flex-col gap-2 lg:flex-row lg:gap-8">
              {trust.badges.map((badge) => (
                <li key={badge.name} className="flex items-center gap-2">
                  <Check className="size-3.5 shrink-0" strokeWidth={2} />
                  <span className="text-foreground">{badge.name}</span>
                  {badge.note && <span className="hidden text-muted-foreground lg:inline">{badge.note}</span>}
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto h-px max-w-[calc(var(--page-width)+14rem)] bg-linear-to-r from-transparent via-border to-transparent" />
        </div>
      )}

      <div className="mx-auto box-content max-w-page px-gutter pt-16 lg:pt-24">
        <div className="grid gap-16 lg:grid-cols-[19.6875rem_1fr] lg:gap-0">
          <div>
            <a href="/" className="inline-flex text-foreground">
              {logo}
            </a>
            {socials && (
              <ul className="mt-8 flex gap-5 lg:mt-9">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex text-foreground/75 transition-colors duration-150 hover:text-foreground [&_svg]:size-[1.375rem]"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {newsletter && (
              <form action={newsletter.action} className="mt-8 lg:mt-10 lg:max-w-60">
                <label className="block text-sm text-muted-foreground lg:text-[0.9375rem]">
                  {newsletter.text}
                  <input
                    type="email"
                    name="email"
                    placeholder={newsletter.placeholder}
                    className="mt-2 block h-8 w-full rounded-md border border-input bg-muted/50 px-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-ring lg:h-[2.125rem]"
                  />
                </label>
                <SupabaseButton type="submit" size="sm" className="mt-2">
                  {newsletter.button}
                </SupabaseButton>
              </form>
            )}
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-16 lg:grid-cols-6 lg:gap-x-0">
            {columns.map((column) => (
              <div key={column.title} className="lg:pr-4">
                <h3 className="text-[0.9375rem] font-medium text-foreground">{column.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="block text-sm leading-5 text-muted-foreground transition-colors duration-150 hover:text-foreground">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28 flex items-center justify-between border-t border-border pt-9 pb-24 lg:mt-32">
          <p className="text-xs text-muted-foreground">{copyright}</p>
          {end}
        </div>
      </div>
    </footer>
  );
}
