import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendFrame } from "@foundry/resend-frame";
import "./resend-footer.css";

export interface ResendFooterProps {
  /** the address lines */
  address: string[];
  /** round social buttons */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the status pill */
  status?: { label: string; href: string };
  /** link groups (five on desktop) */
  groups: { title: string; links: { label: string; href: string }[] }[];
  className?: string;
}

export function ResendFooter({ address, socials = [], status, groups, className }: ResendFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <ResendFrame edge="line">
        <div className="mx-auto flex max-w-page flex-col gap-12 px-gutter pt-36 pb-36 lg:flex-row lg:gap-0">
          <div className="lg:w-[21rem] lg:shrink-0">
            <address className="text-xs leading-4 text-foreground/80 not-italic">
              {address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            {socials.length > 0 && (
              <ul className="mt-8 flex gap-4">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="flex size-8 items-center justify-center rounded-full border border-border bg-card/60 text-foreground/80 transition-colors duration-200 hover:text-foreground [&_svg]:size-4"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {status && (
              <a
                href={status.href}
                className="mt-12 inline-flex h-8 items-center gap-2.5 rounded-full bg-accent px-3.5 text-xs text-foreground transition-colors duration-200 hover:bg-foreground/15"
              >
                <span aria-hidden className="relative flex size-2">
                  <span className="resend-footer-pulse absolute -inset-1 rounded-full bg-chart-2/60" />
                  <span className="relative size-2 rounded-full bg-chart-2" />
                </span>
                {status.label}
              </a>
            )}
          </div>
          <nav className="grid flex-1 grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-5 lg:gap-y-0">
            {groups.map((g) => (
              <div key={g.title} className="px-1 lg:px-0">
                <h3 className="text-sm leading-5 text-foreground">{g.title}</h3>
                <ul className="mt-7 space-y-5">
                  {g.links.map((l) => (
                    <li key={l.href} className="leading-5">
                      <a href={l.href} className="text-sm leading-5 text-muted-foreground transition-colors duration-200 hover:text-foreground motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </ResendFrame>
    </footer>
  );
}
