import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface VardaFooterLink {
  label: string;
  href: string;
}

export interface VardaFooterDetail {
  /** small uppercase label, e.g. "Address" */
  label: string;
  /** the lines under it */
  lines: string[];
  /** makes the lines a link (e.g. mailto:) */
  href?: string;
}

export interface VardaFooterSocial {
  /** the network's name, for screen readers */
  label: string;
  href: string;
  /** a 24px line icon */
  icon: ReactNode;
}

export interface VardaFooterGroup {
  /** small uppercase label over the links */
  title: string;
  links: VardaFooterLink[];
}

export interface VardaFooterProps {
  /** the wordmark, set in wide capitals */
  name: string;
  /** the brand glyph before the wordmark */
  icon: ReactNode;
  homeHref?: string;
  /** label + lines blocks under the logo (address, contact) */
  details: VardaFooterDetail[];
  /** social icon links */
  socials: VardaFooterSocial[];
  /** link columns; each column stacks one or more groups */
  columns: VardaFooterGroup[][];
  /** the small line at the bottom left */
  copyright: string;
  /** small links at the bottom right */
  legal: VardaFooterLink[];
  className?: string;
}

const label = "block text-[0.8rem]/[1.5] tracking-[0.05em] text-muted-foreground uppercase lg:text-[0.863rem]";
const link = "underline-offset-4 hover:underline";

/** Navy footer inside dashed side hairlines: logo, details and socials, link columns, legal row. */
export function VardaFooter({ name, icon, homeHref = "#", details, socials, columns, copyright, legal, className }: VardaFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-gutter border-x border-dashed border-border px-[calc(var(--page-gutter)+0.0625rem)] pt-[calc(var(--page-gutter)*2)] pb-[calc(var(--page-gutter)*2.4)]">
        <div className="mx-auto max-w-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-6">
            <div>
              <a href={homeHref} className="inline-flex items-center gap-3.5">
                <span aria-hidden className="[&_svg]:size-10 lg:[&_svg]:size-[2.625rem]">
                  {icon}
                </span>
                <span className="text-[1.75rem]/none font-extrabold tracking-[0.06em] uppercase lg:text-[1.875rem]">{name}</span>
              </a>
              <dl className="mt-8 flex flex-col gap-4 lg:mt-9 lg:gap-6">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className={label}>{d.label}</dt>
                    <dd className="mt-1 text-base/6 font-medium lg:max-w-[16.5rem] lg:text-[1.079rem]/[1.5]">
                      {d.href ? (
                        <a href={d.href} className={cn(link, "transition-colors hover:text-card")}>
                          {d.lines.join(" ")}
                        </a>
                      ) : (
                        d.lines.join(" ")
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <ul className="mt-6 flex gap-6">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="block opacity-100 transition-opacity hover:opacity-70 [&_svg]:size-6">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 lg:pl-3">
              {columns.map((groups, i) => (
                <div key={i} className="flex flex-col gap-10">
                  {groups.map((g) => (
                    <div key={g.title}>
                      <h2 className={label}>{g.title}</h2>
                      <ul className="mt-2 flex flex-col gap-2 lg:mt-2.5 lg:gap-[1.0625rem]">
                        {g.links.map((l) => (
                          <li key={l.label}>
                            <a href={l.href} className={cn(link, "text-base/6 font-medium lg:text-[1.063rem]/none")}>
                              {l.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-dashed border-border pt-6 text-[0.8rem]/[1.5] font-medium lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:pt-8">
            <p>{copyright}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={link}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
