import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WarpButton } from "@foundry/warp-button";
import { WarpMark, type WarpMarkProps } from "@foundry/warp-mark";
import "./warp-header.css";

export interface WarpHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron, as for items that open a menu */
  menu?: boolean;
}

export interface WarpHeaderJump {
  /** the bracketed key shown before the label, e.g. "C" */
  key: string;
  label: string;
  /** usually an anchor on the page, e.g. "#config" */
  href: string;
}

export interface WarpHeaderProps {
  /** the logo */
  mark: WarpMarkProps;
  /** the main menu, left after the logo */
  links: WarpHeaderLink[];
  /** a quiet link with a chevron before the buttons (e.g. sign in) */
  signIn?: { label: string; href: string };
  /** the citron button */
  demo: { label: string; href: string };
  /** the solid ink button at the far right */
  cta: { label: string; href: string };
  /** jump links of the brand-blue bar that replaces the menu after the first screen (desktop) */
  jumps?: WarpHeaderJump[];
  /** the white button at the right of the jump bar */
  jumpCta?: { label: string; href: string };
  /** a short note set vertically at both window edges on wide screens */
  marginNote?: string;
  /** show the scroll progress line along the bottom of the window */
  progress?: boolean;
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

const navLink =
  "flex items-center gap-1 text-[0.8125rem] font-medium tracking-[calc(0.1em_-_var(--warp-squeeze,0em))] uppercase transition-colors duration-150 ease-out hover:text-primary motion-reduce:transition-none";

/** Warp's top bar: sticky, swaps to a jump bar after the first screen, with a scroll progress line. */
export function WarpHeader({ mark, links, signIn, demo, cta, jumps = [], jumpCta, marginNote, progress = true, menuLabel, className }: WarpHeaderProps) {
  return (
    <>
      <header className={cn("sticky top-0 z-40 h-16 overflow-clip border-b border-border bg-card text-foreground", className)}>
        <div className="warp-header-main relative mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-gutter lg:px-6">
          <div className="flex items-center gap-9">
            <WarpMark {...mark} />
            <nav className="hidden items-center gap-10 lg:flex">
              {links.map((l) => (
                <a key={l.label} href={l.href} className={navLink}>
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-3.5" strokeWidth={1.75} />}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {signIn && (
              <a href={signIn.href} className={cn(navLink, "mr-2 hidden lg:flex")}>
                {signIn.label}
                <ChevronDown aria-hidden className="size-3.5" strokeWidth={1.75} />
              </a>
            )}
            <WarpButton href={demo.href} variant="citron" size="sm">
              {demo.label}
            </WarpButton>
            <WarpButton href={cta.href} size="sm" className="hidden lg:inline-flex" icon={<ChevronUp aria-hidden className="size-3.5" strokeWidth={2.25} />}>
              {cta.label}
            </WarpButton>

            <details className="group lg:hidden">
              <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.5} />
                <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.5} />
              </summary>
              <div className="fixed inset-x-0 top-16 border-b border-border bg-card px-gutter pt-2 pb-6">
                <nav className="flex flex-col">
                  {links.map((l) => (
                    <a key={l.label} href={l.href} className={cn(navLink, "justify-between border-b border-border py-4")}>
                      {l.label}
                      {l.menu && <ChevronDown aria-hidden className="size-4 -rotate-90" strokeWidth={1.75} />}
                    </a>
                  ))}
                  {signIn && (
                    <a href={signIn.href} className={cn(navLink, "border-b border-border py-4")}>
                      {signIn.label}
                    </a>
                  )}
                </nav>
                <WarpButton href={cta.href} className="mt-5 w-full">
                  {cta.label}
                </WarpButton>
              </div>
            </details>
          </div>
        </div>

        {jumps.length > 0 && (
          <div className="warp-header-jumps absolute inset-0 hidden -translate-y-full bg-primary text-primary-foreground">
            <div className="mx-auto flex w-full max-w-page items-center justify-between gap-6 px-6">
              <nav className="flex items-center gap-5">
                {jumps.map((j) => (
                  <a key={j.key} href={j.href} className="group flex items-center gap-3 font-display text-[0.9375rem] font-semibold tracking-[-0.01em]">
                    <span className="flex h-[1.125rem] min-w-6 items-center justify-center border border-primary-foreground/40 px-1 font-mono text-[0.5rem] font-semibold transition-colors duration-150 group-hover:bg-primary-foreground group-hover:text-primary motion-reduce:transition-none">
                      [{j.key}]
                    </span>
                    {j.label}
                  </a>
                ))}
              </nav>
              {jumpCta && (
                <WarpButton href={jumpCta.href} variant="inverse" size="sm">
                  {jumpCta.label}
                </WarpButton>
              )}
            </div>
          </div>
        )}
      </header>

      {progress && <div aria-hidden className="warp-header-progress pointer-events-none fixed inset-x-0 bottom-0 z-40 h-0.5 bg-primary" />}

      {marginNote && (
        <>
          <p aria-hidden className="pointer-events-none fixed top-1/2 left-3 z-30 hidden -translate-y-1/2 rotate-180 font-mono text-[0.5625rem] tracking-[0.3em] text-foreground/40 uppercase [writing-mode:vertical-rl] min-[1300px]:block">
            {marginNote}
          </p>
          <p aria-hidden className="pointer-events-none fixed top-1/2 right-3 z-30 hidden -translate-y-1/2 font-mono text-[0.5625rem] tracking-[0.3em] text-foreground/40 uppercase [writing-mode:vertical-rl] min-[1300px]:block">
            {marginNote}
          </p>
        </>
      )}
    </>
  );
}
