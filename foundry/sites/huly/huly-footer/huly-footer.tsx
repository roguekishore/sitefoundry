import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface HulyFooterProps {
  /** e.g. "© 2026 Tessel Labs. All rights reserved." */
  copyright: string;
  links: { label: string; href: string }[];
  /** icon links; the label is read out by screen readers */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** a small warm sign-off at the far end, with an optional icon */
  note?: { text: string; icon?: ReactNode };
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

export function HulyFooter({ copyright, links, socials = [], note, tone = "dark", className }: HulyFooterProps) {
  return (
    <footer className={cn("bg-background text-foreground", tone === "dark" && "dark", className)}>
      <div className="mx-auto flex max-w-page flex-col items-center gap-6 px-gutter pt-4 pb-10 text-center lg:min-h-[5.125rem] lg:flex-row lg:gap-0 lg:py-6 lg:text-left">
        <p className="order-3 max-w-[15rem] text-sm text-muted-foreground sm:max-w-none lg:order-none lg:w-[23.75rem]">{copyright}</p>

        <nav className="order-2 flex items-center gap-6 lg:order-none lg:w-[18.25rem]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.9375rem] tracking-[-0.01em] transition-colors duration-200 hover:text-foreground/70 lg:text-sm">
              {l.label}
            </a>
          ))}
        </nav>

        {socials.length > 0 && (
          <div className="order-1 flex items-center gap-6 lg:order-none lg:gap-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                aria-label={s.label}
                className="text-foreground/60 transition-colors duration-200 hover:text-foreground [&_svg]:size-5"
              >
                {s.icon}
              </a>
            ))}
          </div>
        )}

        {note && (
          <p className="order-4 flex items-center gap-2 text-sm text-highlight/75 lg:order-none lg:ml-auto [&_svg]:size-5 [&_svg]:text-highlight">
            {note.icon}
            {note.text}
          </p>
        )}
      </div>
    </footer>
  );
}
