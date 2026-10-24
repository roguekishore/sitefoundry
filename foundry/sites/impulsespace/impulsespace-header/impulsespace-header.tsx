import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ImpulsespaceWordmark } from "@foundry/impulsespace-wordmark";
import "./impulsespace-header.css";

export interface ImpulsespaceHeaderLink {
  /** the link's text (set in uppercase mono) */
  label: string;
  href: string;
}

export interface ImpulsespaceHeaderProps {
  /** the company's name, as the wordmark */
  name: string;
  /** where the wordmark goes */
  homeHref?: string;
  /** the main links, in the bar on desktop (about six) */
  links: ImpulsespaceHeaderLink[];
  /** the links behind the chevron on desktop; on phones they follow the main links */
  more?: ImpulsespaceHeaderLink[];
  /** accessible name for the chevron menu */
  moreLabel: string;
  /** accessible name for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Fixed header in white with a difference blend; a centred cluster on desktop, burger on phones. */
export function ImpulsespaceHeader({ name, homeHref = "/", links, more = [], moreLabel, menuLabel, className }: ImpulsespaceHeaderProps) {
  return (
    // display: contents, so the bar's blend reaches the page (a positioned wrapper with a
    // z-index would keep the blend inside itself); the menus are separate fixed layers.
    <header className={cn("impulsespace-header dark contents", className)}>
      {/* the blended bar: white drawn with difference over whatever is underneath */}
      <div className="fixed inset-x-0 top-0 z-50 flex h-[4.5rem] items-center justify-between px-gutter text-foreground mix-blend-difference lg:h-[4.3125rem] lg:justify-center lg:gap-[1.3rem]">
        <ImpulsespaceWordmark name={name} href={homeHref} />
        <nav aria-label={name} className="hidden lg:block">
          <ul className="flex items-center gap-[1.3rem]">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-sm leading-[1.5] tracking-[0.08em] uppercase opacity-50 transition-opacity duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {more.length > 0 && (
          <details className="impulsespace-header-more hidden lg:block">
            <summary
              aria-label={moreLabel}
              className="grid size-7 cursor-pointer place-items-center opacity-50 transition-opacity duration-250 hover:opacity-100 motion-reduce:transition-none"
            >
              <ChevronDown aria-hidden className="impulsespace-header-chevron size-4 transition-[rotate] duration-200" strokeWidth={1.5} />
            </summary>
          </details>
        )}
        <details className="impulsespace-header-burger lg:hidden">
          <summary aria-label={menuLabel} className="grid h-8 w-6 cursor-pointer content-center gap-[5px]">
            <span className="impulsespace-header-line-a block h-[1.5px] w-6 bg-current transition-[translate,rotate] duration-200" />
            <span className="impulsespace-header-line-b block h-[1.5px] w-6 bg-current transition-[translate,rotate] duration-200" />
          </summary>
        </details>
      </div>

      {/* desktop: the small "more" menu, under the chevron's end of the cluster */}
      {more.length > 0 && (
        <div className="impulsespace-header-panel impulsespace-header-panel--more fixed top-[4.3125rem] left-1/2 z-50 translate-x-[calc(-50%+19rem)]">
          <ul className="min-w-44 rounded-lg border border-border bg-popover p-2 text-popover-foreground">
            {more.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base leading-[1.4] transition-colors duration-150 hover:bg-accent motion-reduce:transition-none"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* phones: a full-screen black menu under the bar */}
      <div className="impulsespace-header-panel impulsespace-header-panel--menu fixed inset-x-0 top-0 bottom-0 z-40 bg-background pt-[4.5rem]">
        <nav aria-label={menuLabel} className="flex h-full flex-col gap-10 overflow-y-auto px-gutter pt-10 pb-12 text-foreground">
          <ul className="grid gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em] transition-opacity duration-150 hover:opacity-70">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {more.length > 0 && (
            <ul className="grid gap-3 border-t border-border pt-6">
              {more.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-mono text-sm tracking-[0.08em] text-muted-foreground uppercase transition-colors duration-150 hover:text-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}
