import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { CursorButton } from "@foundry/cursor-button";

export interface CursorNavLink {
  label: string;
  href: string;
}

export interface CursorHeaderProps {
  /** the wordmark on the left (e.g. an icon and the name in bold capitals) */
  logo: ReactNode;
  /** accessible name of the wordmark link */
  logoLabel: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** the nav links centred on the page */
  links: CursorNavLink[];
  /** the plain text link at the right (shown on phones too) */
  signIn?: CursorNavLink;
  /** the hairline outline pill */
  secondaryAction?: CursorNavLink;
  /** the ink pill */
  action: CursorNavLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass =
  "text-sm text-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground/75 motion-reduce:transition-none";

/** The paper top bar: wordmark left, links centred, sign-in and two pills right. */
export function CursorHeader({ logo, logoLabel, homeHref = "#", links, signIn, secondaryAction, action, menuLabel, className }: CursorHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40 bg-background text-foreground", className)}>
      <div className="relative mx-auto flex h-14 max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center px-gutter lg:h-[3.25rem]">
        <a href={homeHref} aria-label={logoLabel} className="flex items-center">
          {logo}
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {signIn && (
            <a href={signIn.href} className={cn(linkClass, "mr-1 max-lg:mr-3")}>
              {signIn.label}
            </a>
          )}
          {secondaryAction && (
            <CursorButton href={secondaryAction.href} variant="outline" size="sm" className="hidden lg:inline-flex">
              {secondaryAction.label}
            </CursorButton>
          )}
          <CursorButton href={action.href} size="sm" className="hidden lg:inline-flex">
            {action.label}
          </CursorButton>
          <details className="group lg:hidden">
            <summary
              aria-label={menuLabel}
              className="-mr-1.5 grid size-9 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.5} />
              <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.5} />
            </summary>
            <nav className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background px-gutter pt-2 pb-6">
              {links.map((link) => (
                <a key={link.label} href={link.href} className={cn(linkClass, "py-2.5 text-base")}>
                  {link.label}
                </a>
              ))}
              <div className="mt-4 flex gap-2">
                {secondaryAction && (
                  <CursorButton href={secondaryAction.href} variant="outline" size="lg" className="flex-1">
                    {secondaryAction.label}
                  </CursorButton>
                )}
                <CursorButton href={action.href} size="lg" className="flex-1">
                  {action.label}
                </CursorButton>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
