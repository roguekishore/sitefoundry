import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AnchorageButton } from "@foundry/anchorage-button";
import { AnchorageMark, type AnchorageMarkProps } from "@foundry/anchorage-mark";
import "./anchorage-header.css";

export interface AnchorageHeaderLink {
  label: string;
  href: string;
}

export interface AnchorageHeaderProps {
  /** the logo */
  mark: AnchorageMarkProps;
  /** the main navigation, left of centre on desktop */
  links: AnchorageHeaderLink[];
  /** the quiet text link on the right, e.g. "Log in" */
  login?: AnchorageHeaderLink;
  /** the cobalt button on the right */
  cta: AnchorageHeaderLink;
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** lie on top of the next section instead of pushing it down (default on) */
  overlay?: boolean;
  className?: string;
}

/**
 * Sticky header. Desktop: a full-width black bar that floats into a rounded box as the page
 * scrolls. Phones: a rounded box inset from the edges, with a disclosure menu.
 */
export function AnchorageHeader({ mark, links, login, cta, menuLabel, overlay = true, className }: AnchorageHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-50 px-2.5 pt-6 lg:h-[4.375rem] lg:p-0", overlay && "-mb-[6rem] lg:-mb-[4.375rem]", className)}>
      <div className="anchorage-header-shift relative h-[4.5rem] lg:h-full">
        {/* the black box; on desktop it starts edge to edge and draws in on scroll */}
        <div aria-hidden className="anchorage-header-bg absolute inset-0 rounded-lg border border-foreground/12 bg-background lg:rounded-none lg:border-x-transparent lg:border-t-transparent" />

        <div className="relative mx-auto flex h-full max-w-page items-center justify-between px-4 lg:px-[0.9375rem]">
          <AnchorageMark {...mark} />

          <nav className="hidden items-center gap-1 lg:ml-[4rem] lg:mr-auto lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-sm px-[1.125rem] py-2 font-display text-base font-bold text-foreground transition-colors duration-300 ease-[ease] hover:bg-accent motion-reduce:transition-none"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {login && (
              <a href={login.href} className="rounded-sm px-2 py-2 font-display text-base font-bold text-foreground transition-colors duration-300 ease-[ease] hover:text-highlight motion-reduce:transition-none">
                {login.label}
              </a>
            )}
            <AnchorageButton href={cta.href}>{cta.label}</AnchorageButton>
          </div>

          <details className="group lg:hidden">
            <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center text-foreground [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={2} />
              <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={2} />
            </summary>
            <div className="absolute inset-x-0 top-full mt-2 rounded-lg border border-foreground/12 bg-background p-4">
              <nav className="flex flex-col">
                {links.map((l) => (
                  <a key={l.label} href={l.href} className="rounded-sm px-2 py-3 text-lg font-semibold text-foreground hover:bg-accent">
                    {l.label}
                  </a>
                ))}
                {login && (
                  <a href={login.href} className="rounded-sm px-2 py-3 text-lg font-semibold text-foreground hover:bg-accent">
                    {login.label}
                  </a>
                )}
              </nav>
              <AnchorageButton href={cta.href} className="mt-4 w-full">
                {cta.label}
              </AnchorageButton>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
