import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { VastspaceButton } from "@foundry/vastspace-button";

export interface VastspaceNavLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface VastspaceHeaderProps {
  /** the logo at the left (a VastspaceWordmark) */
  brand: ReactNode;
  /** where the logo links */
  brandHref?: string;
  /** the main links, shown from 1280px up */
  links: VastspaceNavLink[];
  /** the quiet link before the button */
  extra: VastspaceNavLink;
  /** the button at the right */
  cta: VastspaceNavLink;
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

const ease = "ease-[cubic-bezier(0.62,0.05,0.01,0.99)]";

export function VastspaceHeader({ brand, brandHref = "/", links, extra, cta, menuLabel, className }: VastspaceHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (Math.abs(y - last) > 4) {
        setHidden(y > last && y > window.innerHeight);
        last = y;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bar = scrolled || open;
  const linkClass = cn(
    "relative isolate inline-flex h-11 items-center px-5 text-base transition-colors duration-500 min-[90rem]:px-9 motion-reduce:transition-none",
    ease,
    "before:absolute before:inset-0 before:-z-10 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-500 hover:before:scale-y-100 motion-reduce:before:transition-none",
    "before:ease-[cubic-bezier(0.62,0.05,0.01,0.99)]",
    bar ? "before:bg-primary hover:text-primary-foreground" : "before:bg-popover hover:text-popover-foreground",
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-[650ms] motion-reduce:transition-none",
        ease,
        hidden && !open ? "-translate-y-[108px]" : "translate-y-0",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex h-20 items-center px-gutter transition-[margin,padding,background-color,box-shadow,color] duration-[650ms] motion-reduce:transition-none xl:mt-7",
          ease,
          bar ? "bg-popover text-popover-foreground shadow-[0_0_10px_0] shadow-foreground/20 xl:mx-7 xl:px-6" : "text-highlight-foreground",
        )}
      >
        <a href={brandHref} className="shrink-0">
          {brand}
        </a>
        <nav aria-label="Main" className="ml-16 hidden items-center xl:flex min-[90rem]:ml-24">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={linkClass}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center xl:flex">
          <a href={extra.href} className={linkClass}>
            {extra.label}
          </a>
          <VastspaceButton label={cta.label} href={cta.href} variant={bar ? "dark" : "light"} className="ml-3 min-[90rem]:ml-11" />
        </div>
        <button type="button" aria-label={menuLabel} aria-expanded={open} onClick={() => setOpen(!open)} className="ml-auto flex h-10 w-8 flex-col items-stretch justify-center gap-[0.4rem] xl:hidden">
          <span className={cn("h-0.5 bg-current transition-transform duration-500 motion-reduce:transition-none", ease, open && "translate-y-[0.3rem] rotate-12")} />
          <span className={cn("h-0.5 bg-current transition-transform duration-500 motion-reduce:transition-none", ease, open && "-translate-y-[0.3rem] -rotate-12")} />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-popover px-gutter pb-6 text-popover-foreground xl:hidden">
          {[...links, extra].map((l) => (
            <a key={l.label} href={l.href} className="block py-3 text-2xl/none font-medium tracking-[-0.01em]">
              {l.label}
            </a>
          ))}
          <VastspaceButton label={cta.label} href={cta.href} className="mt-4 w-full" />
        </div>
      )}
    </header>
  );
}
