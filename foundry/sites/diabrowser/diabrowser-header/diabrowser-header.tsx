import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { DiabrowserButton } from "@foundry/diabrowser-button";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-header.css";

export interface DiabrowserNavLink {
  label: string;
  href: string;
}

export interface DiabrowserHeaderProps {
  /** the wordmark (shown on phones, and on desktop when there is no mark) */
  logo: ReactNode;
  /** a small symbol before the wordmark; desktop shows the symbol alone */
  mark?: ReactNode;
  /** where the logo links */
  logoHref?: string;
  /** the links in the centred pill */
  nav: DiabrowserNavLink[];
  /** the waitlist pill that appears at the top right once the hero is scrolled away (desktop), and closes the phone menu */
  cta?: DiabrowserNavLink;
  /** screen-reader label of the phone menu button */
  menuLabel?: string;
  className?: string;
}

/** A floating, fixed pill header: full width on phones with a plus menu, centred and compact on desktop. */
export function DiabrowserHeader({ logo, mark, logoHref = "/", nav, cta, menuLabel = "Menu", className }: DiabrowserHeaderProps) {
  return (
    <header className={cn("pointer-events-none fixed inset-x-0 top-[14px] z-50 px-[10px] lg:top-7", className)}>
      {/* phones: a full-width pill with a plus that opens the links below it */}
      <details className="diabrowser-header-menu pointer-events-auto rounded-[20px] border border-border bg-popover/90 text-popover-foreground backdrop-blur-md lg:hidden">
        <summary className="flex h-[50px] cursor-pointer list-none items-center justify-between pr-4 pl-5">
          <a href={logoHref} className="flex items-center gap-1.5 font-display text-[26px] leading-none tracking-[-0.04em] [&_svg]:size-6">
            {mark}
            {logo}
          </a>
          <span className="diabrowser-header-plus flex size-7 items-center justify-center transition-[rotate] duration-300 motion-reduce:transition-none [&_svg]:size-7" aria-label={menuLabel}>
            <Plus strokeWidth={1.25} />
          </span>
        </summary>
        <nav className="flex flex-col gap-1 px-5 pt-2 pb-5">
          {nav.map((link) => (
            <a key={link.label} href={link.href} className="py-2 text-[20px] leading-6 text-foreground/80">
              {link.label}
            </a>
          ))}
          {cta && (
            <DiabrowserButton href={cta.href} className="mt-3 w-full">
              {cta.label}
            </DiabrowserButton>
          )}
        </nav>
      </details>

      {/* desktop: the centred pill */}
      <nav className="pointer-events-auto mx-auto hidden h-[52px] w-fit items-center gap-4 rounded-lg border border-border bg-popover/90 px-[14px] text-popover-foreground backdrop-blur-md lg:flex">
        <a
          href={logoHref}
          className="flex items-center gap-1.5 font-display text-[24px] leading-none tracking-[-0.04em] transition-opacity duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-70 [&_svg]:size-6"
        >
          {mark ?? logo}
          {mark && <span className="sr-only">{logo}</span>}
        </a>
        <ul className="flex items-center gap-4">
          {nav.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-[16px] leading-5 tracking-[0.01em] opacity-70 transition-opacity duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {cta && (
        <div className="diabrowser-header-cta pointer-events-auto absolute top-0 right-[10px] hidden lg:block">
          <DiabrowserButton tone="outline" href={cta.href} className="h-12 rounded-lg px-6">
            {cta.label}
          </DiabrowserButton>
        </div>
      )}
    </header>
  );
}
