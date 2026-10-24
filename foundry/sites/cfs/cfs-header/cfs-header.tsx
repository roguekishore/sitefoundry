import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface CfsHeaderLink {
  /** the link's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface CfsHeaderProps {
  /** the company name, set in monospace beside the mark */
  name: string;
  /** where the mark and name go (usually "/") */
  homeHref: string;
  /** a small square mark (an icon or logo, ~40px) */
  mark?: ReactNode;
  /** the navigation links, one cell each on wide screens */
  links: CfsHeaderLink[];
  /** accessible name of the phone menu button, e.g. "Menu" */
  menuLabel: string;
  /** sit absolutely over the top of the parent (a hero); default true */
  overlay?: boolean;
  className?: string;
}

const ease = "transition-colors duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] motion-reduce:transition-none";

/** Hairline-boxed navigation for the top of a photo hero. */
export function CfsHeader({ name, homeHref, mark, links, menuLabel, overlay = true, className }: CfsHeaderProps) {
  return (
    <header className={cn("dark z-30 px-gutter pt-gutter text-foreground", overlay ? "absolute inset-x-0 top-0" : "relative", className)}>
      <div className="relative flex h-[74px] border border-foreground lg:h-[70px]">
        <a href={homeHref} className="group flex min-w-0 flex-1 items-center gap-3 pr-4 pl-2.5 lg:gap-5">
          <span
            className={cn(
              "grid size-[55px] shrink-0 place-items-center group-hover:bg-foreground group-hover:text-card [&_svg]:size-12",
              ease,
            )}
          >
            {mark}
          </span>
          <span className="font-mono text-sm leading-[1.5]">{name}</span>
        </a>

        <nav className="hidden lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "grid w-40 place-items-center border-l border-foreground font-mono text-sm hover:bg-foreground hover:text-card",
                ease,
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <details className="group/menu lg:hidden">
          <summary
            aria-label={menuLabel}
            className={cn(
              "grid h-full w-[74px] cursor-pointer list-none place-items-center border-l border-foreground hover:bg-foreground hover:text-card [&::-webkit-details-marker]:hidden",
              ease,
            )}
          >
            <Menu aria-hidden strokeWidth={1} className="size-8" />
          </summary>
          <nav className="absolute inset-x-[-1px] top-full flex flex-col border border-t-0 border-foreground bg-card">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn("border-t border-border px-5 py-4 font-mono text-sm first:border-t-0 hover:bg-foreground hover:text-card", ease)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
