import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReflectButton } from "@foundry/reflect-button";

export interface ReflectNavLink {
  label: string;
  href: string;
}

export interface ReflectHeaderProps {
  /** the product name next to the icon tile */
  name: string;
  /** the glyph inside the violet icon tile (e.g. a lucide icon) */
  icon: ReactNode;
  /** where the name links to */
  homeHref?: string;
  /** the links inside the centred pill */
  links: ReflectNavLink[];
  /** the plain text link at the right (desktop) */
  signIn?: ReflectNavLink;
  /** the violet button at the right (phones too) */
  action: ReflectNavLink;
  /** accessible name of the phone menu button */
  menuLabel: string;
  className?: string;
}

const linkClass =
  "text-[0.9375rem]/6 text-foreground/90 transition-colors duration-300 ease-[cubic-bezier(0.6,0.6,0,1)] hover:text-foreground/60 motion-reduce:transition-none";

/** The app's icon tile: a violet square with a lilac rim and an inner glow. */
export function ReflectIconTile({ icon, className }: { icon: ReactNode; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-9 place-items-center rounded-[0.625rem] border border-highlight/40 bg-[radial-gradient(80%_80%_at_50%_30%,color-mix(in_oklab,var(--glow)_75%,var(--primary)),var(--primary))] text-primary-foreground shadow-[inset_0_0_12px_color-mix(in_oklab,var(--foreground)_18%,transparent)] [&_svg]:size-6",
        className,
      )}
    >
      {icon}
    </span>
  );
}

/** Glassy top bar: icon and name, links in a pill, sign-in and the violet button. */
export function ReflectHeader({ name, icon, homeHref = "#", links, signIn, action, menuLabel, className }: ReflectHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 -mb-[4.75rem] h-[4.75rem] bg-background/55 text-foreground backdrop-blur-xl lg:-mb-[5.5rem] lg:h-[5.5rem]",
        className,
      )}
    >
      <div className="relative flex h-full items-center px-5 lg:px-[4.5rem]">
        <a href={homeHref} className="flex items-center gap-3 text-[1.0625rem]/6 font-medium">
          <ReflectIconTile icon={icon} />
          {name}
        </a>
        <nav className="absolute left-1/2 hidden h-[2.625rem] -translate-x-1/2 items-center gap-6 rounded-full border border-foreground/10 bg-foreground/[0.02] px-6 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-6">
          {signIn && (
            <a href={signIn.href} className={cn(linkClass, "hidden font-medium text-foreground lg:inline")}>
              {signIn.label}
            </a>
          )}
          <ReflectButton href={action.href}>{action.label}</ReflectButton>
          <details className="group lg:hidden">
            <summary
              aria-label={menuLabel}
              className="-mr-1 grid size-8 cursor-pointer list-none place-items-center [&::-webkit-details-marker]:hidden"
            >
              <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.5} />
              <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.5} />
            </summary>
            <nav className="absolute inset-x-0 top-full flex flex-col border-b border-border bg-background/95 px-5 pt-2 pb-6 backdrop-blur-xl">
              {[...links, ...(signIn ? [signIn] : [])].map((link) => (
                <a key={link.label} href={link.href} className={cn(linkClass, "py-2.5 text-base")}>
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
        {/* hairline that fades out at both ends */}
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent_5%,var(--border)_25%,var(--border)_75%,transparent_95%)]"
        />
      </div>
    </header>
  );
}
