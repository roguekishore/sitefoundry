import type { ReactNode } from "react";
import { Menu, UserRound, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { EzraButton } from "@foundry/ezra-button";

export interface EzraNavLink {
  label: string;
  href: string;
}

export interface EzraHeaderProps {
  /** the wordmark on the left (e.g. an EzraLockup) */
  logo: ReactNode;
  /** accessible name of the wordmark link */
  logoLabel: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** the plain links on the right */
  links: EzraNavLink[];
  /** the sign-in link, shown with a person icon */
  signIn?: EzraNavLink;
  /** the terracotta pill */
  action: EzraNavLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass = "text-base text-foreground transition-colors duration-200 hover:text-primary motion-reduce:transition-none";

/** The sticky cream top bar: wordmark left, links + sign-in + pill right. */
export function EzraHeader({ logo, logoLabel, homeHref = "#", links, signIn, action, menuLabel, className }: EzraHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-30 bg-background text-foreground", className)}>
      <div className="mx-auto flex h-17.5 max-w-page items-center gap-5 px-gutter lg:h-22.5 lg:box-content">
        <a href={homeHref} aria-label={logoLabel} className="flex items-center text-[1.375rem] lg:-mt-2 lg:text-[1.5rem]">
          {logo}
        </a>
        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
          {signIn && (
            <a href={signIn.href} className={cn(linkClass, "flex items-center gap-1.5")}>
              <UserRound aria-hidden className="size-4.5" strokeWidth={1.5} />
              {signIn.label}
            </a>
          )}
        </nav>
        <EzraButton href={action.href} className="hidden lg:inline-flex">
          {action.label}
        </EzraButton>
        <details className="group ml-auto lg:hidden">
          <summary aria-label={menuLabel} className="-mr-1 grid size-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-5.5 group-open:hidden" strokeWidth={2.25} />
            <X aria-hidden className="hidden size-5.5 group-open:block" strokeWidth={2} />
          </summary>
          <nav className="absolute inset-x-0 top-full flex flex-col gap-1 border-b border-border bg-background px-gutter pt-2 pb-6">
            {[...links, ...(signIn ? [signIn] : [])].map((link) => (
              <a key={link.label} href={link.href} className={cn(linkClass, "border-b border-border py-3.5")}>
                {link.label}
              </a>
            ))}
            <EzraButton href={action.href} className="mt-5 self-start">
              {action.label}
            </EzraButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
