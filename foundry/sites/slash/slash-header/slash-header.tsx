import type { ReactNode } from "react";
import { ArrowRight, ArrowUp, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SlashButton } from "@foundry/slash-button";
import "./slash-header.css";

export interface SlashNavLink {
  label: string;
  href: string;
  /** shows a small chevron, as for a link that opens a menu */
  menu?: boolean;
}

export interface SlashHeaderProps {
  /** the company name, set as a serif wordmark */
  wordmark: string;
  /** a small mark before the wordmark (optional) */
  mark?: ReactNode;
  /** where the wordmark links to */
  homeHref?: string;
  /** the news line in the thin bar above the nav; leave out to drop the bar */
  announcement?: { text: string; link: SlashNavLink };
  /** the centred links */
  links: SlashNavLink[];
  /** the quiet text link on the right ("Log in") */
  signIn: SlashNavLink;
  /** the outline pill on the right */
  action: SlashNavLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  /** accessible name of the floating back-to-top button; leave out to drop it */
  toTopLabel?: string;
  /** fixed to the top of the window (the original), or in the flow */
  fixed?: boolean;
  className?: string;
}

const linkClass =
  "text-[0.9375rem] tracking-[-0.02em] text-foreground transition-colors duration-150 ease-[cubic-bezier(.4,0,.2,1)] hover:text-muted-foreground motion-reduce:transition-none";

/** A thin news bar over a translucent black nav bar, both fixed; a back-to-top button appears once you scroll. */
export function SlashHeader({
  wordmark,
  mark,
  homeHref = "#",
  announcement,
  links,
  signIn,
  action,
  menuLabel,
  toTopLabel,
  fixed = true,
  className,
}: SlashHeaderProps) {
  return (
    <>
      <header className={cn(fixed ? "fixed inset-x-0 top-0" : "relative", "z-50 text-foreground", className)}>
        {announcement && (
          <div className="slash-header-bar relative flex h-9 items-center justify-center overflow-clip bg-accent px-gutter text-[0.9375rem] tracking-[-0.03em]">
            <p className="min-w-0 truncate">{announcement.text}</p>
            <span aria-hidden className="mx-4 h-4 w-px shrink-0 bg-foreground/20 lg:mx-4" />
            <a href={announcement.link.href} className="group flex shrink-0 items-center gap-1 text-foreground/90 transition-colors duration-150 hover:text-foreground/70">
              {announcement.link.label}
              <ArrowRight aria-hidden className="size-3.5 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.75} />
            </a>
          </div>
        )}
        <div className="border-b border-foreground/12 bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-page items-center px-gutter lg:h-16">
            <a href={homeHref} className="flex items-center gap-2 font-display text-[1.75rem] leading-none font-medium tracking-[-0.03em] transition-colors duration-150 hover:text-muted-foreground lg:text-[1.625rem]">
              {mark}
              {wordmark}
            </a>
            <nav className="mx-auto hidden items-center gap-7 lg:flex">
              {links.map((link) => (
                <a key={link.label} href={link.href} className={cn(linkClass, "flex items-center gap-1.5")}>
                  {link.label}
                  {link.menu && <ChevronDown aria-hidden className="size-3.5 text-muted-foreground" strokeWidth={1.5} />}
                </a>
              ))}
            </nav>
            <div className="ml-auto hidden items-center gap-4 lg:ml-0 lg:flex">
              <a href={signIn.href} className={linkClass}>
                {signIn.label}
              </a>
              <SlashButton href={action.href} variant="outline" size="sm">
                {action.label}
              </SlashButton>
            </div>
            <details className="group ml-auto lg:hidden">
              <summary aria-label={menuLabel} className="-mr-1 grid size-9 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
                <Menu aria-hidden className="size-7 group-open:hidden" strokeWidth={1.25} />
                <X aria-hidden className="hidden size-7 group-open:block" strokeWidth={1.25} />
              </summary>
              <nav className="absolute inset-x-0 top-full flex flex-col border-b border-foreground/12 bg-background px-gutter pt-2 pb-6">
                {[...links, signIn].map((link) => (
                  <a key={link.label} href={link.href} className={cn(linkClass, "border-b border-border py-4 text-base")}>
                    {link.label}
                  </a>
                ))}
                <SlashButton href={action.href} className="mt-6">
                  {action.label}
                </SlashButton>
              </nav>
            </details>
          </div>
        </div>
      </header>
      {toTopLabel && (
        <a
          href="#"
          aria-label={toTopLabel}
          className="slash-header-totop fixed right-5 bottom-5 z-40 grid size-10 place-items-center rounded-full border border-foreground/10 bg-secondary/80 text-muted-foreground backdrop-blur transition-colors duration-150 hover:text-foreground lg:right-8 lg:bottom-8"
        >
          <ArrowUp aria-hidden className="size-4" strokeWidth={1.5} />
        </a>
      )}
    </>
  );
}
