import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LithicButton } from "@foundry/lithic-button";

export interface LithicNavLink {
  label: string;
  href: string;
}

export interface LithicHeaderProps {
  /** the company name, set as a bold caps wordmark */
  wordmark: string;
  /** a small mark before the wordmark (e.g. a lucide icon) */
  mark?: ReactNode;
  /** where the wordmark links to */
  homeHref?: string;
  /** the main links, beside the wordmark on desktop */
  links: LithicNavLink[];
  /** the quiet text link on the right ("Contact us") */
  secondary?: LithicNavLink;
  /** the dark pill on the right ("Dashboard") */
  action: LithicNavLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass =
  "text-sm font-semibold text-foreground transition-colors duration-300 ease-[cubic-bezier(.215,.61,.355,1)] hover:text-foreground/70 motion-reduce:transition-none";

/** The top bar: wordmark and links left, a text link and a dark pill right. */
export function LithicHeader({ wordmark, mark, homeHref = "#", links, secondary, action, menuLabel, className }: LithicHeaderProps) {
  return (
    <header className={cn("relative z-20 bg-background text-foreground", className)}>
      <div className="mx-auto flex h-18 max-w-[82.5rem] items-center gap-8 px-gutter lg:h-[4.0625rem]">
        <a href={homeHref} className="flex items-center gap-1.5 text-[1.1rem] font-extrabold tracking-[-0.02em] uppercase">
          {mark}
          {wordmark}
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-8">
          {secondary && (
            <a href={secondary.href} className={cn(linkClass, "hidden lg:inline")}>
              {secondary.label}
            </a>
          )}
          <LithicButton href={action.href} variant="dark" arrow={false} className="px-[1.125rem]">
            {action.label}
          </LithicButton>
          <details className="group lg:hidden">
            <summary aria-label={menuLabel} className="-mr-1 grid size-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
              <Menu aria-hidden className="size-7 group-open:hidden" strokeWidth={1.5} />
              <X aria-hidden className="hidden size-7 group-open:block" strokeWidth={1.5} />
            </summary>
            <nav className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-gutter pt-2 pb-6">
              {[...links, ...(secondary ? [secondary] : [])].map((link) => (
                <a key={link.label} href={link.href} className={cn(linkClass, "border-b border-border py-4 text-base")}>
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
