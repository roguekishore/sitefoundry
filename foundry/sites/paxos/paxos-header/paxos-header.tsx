import { useEffect, useRef, useState } from "react";
import { Hexagon, Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PaxosButton } from "@foundry/paxos-button";

export interface PaxosHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface PaxosHeaderProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the centred nav items (five on the original) */
  links: PaxosHeaderLink[];
  /** the slate pill on the right */
  action: PaxosHeaderLink;
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  /** scroll distance in px after which scrolling down hides the bar */
  hideAfter?: number;
  className?: string;
}

/** Sticky white bar that tucks away while you scroll down and returns when you scroll up. */
export function PaxosHeader({ brand, brandHref = "#", links, action, menuLabel, hideAfter = 450, className }: PaxosHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // hide only while moving down and past the threshold; any upward scroll shows it again
      setHidden(y > hideAfter && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter]);

  return (
    <header
      data-hidden={hidden || undefined}
      className={cn(
        "sticky top-0 z-50 bg-background px-gutter",
        "transition-[translate,opacity] duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
        "data-hidden:-translate-y-[100px] data-hidden:opacity-0",
        className,
      )}
    >
      <div className="relative mx-auto flex h-20 max-w-page items-center lg:h-[6.375rem]">
        <a href={brandHref} className="flex items-center gap-2 text-foreground">
          <Hexagon aria-hidden className="size-7 text-chart-1" strokeWidth={2.5} />
          <span className="font-display text-xl tracking-[0.12em] uppercase">{brand}</span>
        </a>
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[0.9375rem] tracking-[-0.01em] text-foreground transition-colors duration-[400ms] ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-muted-foreground motion-reduce:transition-none"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <PaxosButton href={action.href} className="ml-auto max-lg:hidden">
          {action.label}
        </PaxosButton>
        <details className="group ml-auto lg:hidden">
          <summary
            aria-label={menuLabel}
            className="grid size-9 cursor-pointer list-none place-items-center rounded-full text-foreground [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden className="size-5" strokeWidth={1.5} />
          </summary>
          <nav className="absolute inset-x-0 top-full flex flex-col border-t border-border bg-background py-4">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="py-3 font-display text-xl tracking-[-0.01em] text-foreground">
                {link.label}
              </a>
            ))}
            <PaxosButton href={action.href} className="mt-4 self-start">
              {action.label}
            </PaxosButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
