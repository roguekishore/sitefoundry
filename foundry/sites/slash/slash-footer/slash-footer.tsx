import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface SlashFooterLink {
  label: string;
  href: string;
}

export interface SlashFooterProps {
  /** the company name, set as a serif wordmark */
  wordmark: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** link groups, each with a white title */
  groups: { title: string; links: SlashFooterLink[] }[];
  /** the copyright line */
  copyright: string;
  /** a link beside the copyright ("Cookie settings") */
  cookies?: SlashFooterLink;
  /** social links: an icon each (e.g. from lucide) and an accessible label */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** the app download badge: an icon, a small top line and a bigger second line */
  app?: { href: string; icon: ReactNode; small: string; big: string };
  /** numbered footnotes and small print, one paragraph each */
  legal: ReactNode[];
  /** the company's name and address lines at the very end */
  address?: string[];
  className?: string;
}

const link = "transition-colors duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:text-foreground motion-reduce:transition-none";

/** A tall dark footer: wordmark and five link columns, a copyright row with socials and an app badge, then the small print. */
export function SlashFooter({ wordmark, homeHref = "#", groups, copyright, cookies, socials, app, legal, address, className }: SlashFooterProps) {
  const badge = app && (
    <a href={app.href} className={cn("flex h-10 items-center gap-2 rounded-lg border border-foreground/15 px-2.5 text-foreground hover:border-foreground/40", link)}>
      {app.icon}
      <span className="leading-none">
        <span className="block text-[0.5625rem] font-medium">{app.small}</span>
        <span className="block text-[1.0625rem] font-semibold tracking-[-0.02em]">{app.big}</span>
      </span>
    </a>
  );
  const social = (
    <ul className="flex items-center gap-6">
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} aria-label={s.label} className={cn("text-foreground hover:text-muted-foreground [&_svg]:size-5", link)}>
            {s.icon}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={cn("border-t border-border bg-background pt-8 pb-14 text-foreground lg:pt-10 lg:pb-8", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="lg:flex lg:gap-12">
          <a href={homeHref} className={cn("font-display text-[1.75rem] leading-none font-medium tracking-[-0.03em] hover:text-muted-foreground lg:text-[1.625rem]", link)}>
            {wordmark}
          </a>
          <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-14 lg:mt-0 lg:flex-1 lg:grid-cols-5 lg:gap-x-6">
            {groups.map((group) => (
              <nav key={group.title} aria-label={group.title}>
                <h3 className="text-base font-medium tracking-[-0.02em]">{group.title}</h3>
                <ul className="mt-5 space-y-3.5 lg:mt-5">
                  {group.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className={cn("text-base leading-[1.4] tracking-[0.005em] text-muted-foreground", link)}>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-b border-border pb-5 lg:mt-[5.5rem] lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-0">
          <div className="flex items-center gap-8 lg:flex-row-reverse lg:gap-6">
            {badge}
            {social}
          </div>
          <div className="flex flex-col gap-4 text-muted-foreground lg:flex-row lg:items-center lg:gap-4">
            <p className="text-sm tracking-[-0.02em]">{copyright}</p>
            {cookies && (
              <>
                <span aria-hidden className="hidden size-1 rounded-full bg-muted-foreground/50 lg:block" />
                <a href={cookies.href} className={cn("text-center text-base tracking-[-0.01em] lg:text-left", link)}>
                  {cookies.label}
                </a>
              </>
            )}
          </div>
        </div>

        <div className="mt-6 space-y-6 text-sm leading-[1.5] tracking-[-0.02em] text-muted-foreground/75 [&_a]:font-semibold [&_a]:text-muted-foreground [&_a:hover]:text-foreground">
          {legal.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          {address && (
            <p>
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
