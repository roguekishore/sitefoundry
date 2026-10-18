import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MercuryButton } from "@foundry/mercury-button";
import { MercuryMark, type MercuryMarkProps } from "@foundry/mercury-mark";

export interface MercuryHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron, as for items that open a menu */
  menu?: boolean;
}

export interface MercuryHeaderProps {
  /** the logo (emblem + spaced wordmark) */
  mark: MercuryMarkProps;
  /** the centred navigation */
  links: MercuryHeaderLink[];
  /** the quiet text link on the right, e.g. "Log in" */
  login?: { label: string; href: string };
  /** the pill on the right */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** lie on top of the next section (a hero with art behind) instead of pushing it down */
  overlay?: boolean;
  className?: string;
}

/**
 * Mercury's top bar: transparent, edge to edge, logo left, nav centred, a text link and a
 * periwinkle pill right. On phones a three-line button opens a simple panel (no JavaScript:
 * it's a native disclosure).
 */
export function MercuryHeader({ mark, links, login, cta, menuLabel, overlay = true, className }: MercuryHeaderProps) {
  return (
    <header className={cn("relative z-20 h-[4.5rem] text-foreground", overlay && "-mb-[4.5rem]", className)}>
      <div className="flex h-full items-center justify-between px-gutter lg:px-8">
        <MercuryMark {...mark} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[3.25rem] lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="flex items-center gap-1 text-base font-[480] text-foreground transition-colors hover:text-foreground/75 motion-reduce:transition-none">
              {l.label}
              {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          {login && (
            <a href={login.href} className="text-base font-[480] text-foreground/90 hover:text-foreground">
              {login.label}
            </a>
          )}
          <MercuryButton href={cta.href}>{cta.label}</MercuryButton>
        </div>

        <details className="group lg:hidden">
          <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <span aria-hidden className="flex w-[1.375rem] flex-col gap-[0.375rem]">
              <span className="h-[1.5px] bg-current transition-transform group-open:translate-y-[7.5px] group-open:rotate-45 motion-reduce:transition-none" />
              <span className="h-[1.5px] bg-current group-open:opacity-0" />
              <span className="h-[1.5px] bg-current transition-transform group-open:-translate-y-[7.5px] group-open:-rotate-45 motion-reduce:transition-none" />
            </span>
          </summary>
          <div className="absolute inset-x-gutter top-[4.25rem] rounded-xl bg-card p-2 text-card-foreground shadow-[0_16px_40px_color-mix(in_oklab,var(--background)_50%,transparent)] ring-1 ring-border/50">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-[480] hover:bg-muted">
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4 -rotate-90 text-muted-foreground" strokeWidth={1.5} />}
                </a>
              ))}
            </nav>
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/60 p-2 pt-4">
              {login && (
                <MercuryButton variant="secondary" href={login.href}>
                  {login.label}
                </MercuryButton>
              )}
              <MercuryButton href={cta.href} className={cn(!login && "col-span-2")}>
                {cta.label}
              </MercuryButton>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
