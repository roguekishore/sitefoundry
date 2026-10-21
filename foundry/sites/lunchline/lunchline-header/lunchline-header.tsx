import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface LunchlineHeaderLink {
  label: string;
  /** an in-page anchor (#story) lights the link up while that section is on screen */
  href: string;
}

export interface LunchlineHeaderProps {
  /** the wordmark, one entry per line (two short words stack like the original) */
  brand: string[];
  homeHref?: string;
  links: LunchlineHeaderLink[];
  /** screen-reader labels of the phone menu button */
  menuLabel: string;
  closeLabel: string;
  /** true: on wide screens it starts transparent with light text over a full-window hero
      and turns cream once the hero has scrolled past */
  overMedia?: boolean;
  className?: string;
}

// The original's ease: cubic-bezier(0.215, 0.61, 0.355, 1)
const ease = "ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none";

export function LunchlineHeader({ brand, homeHref = "/", links, menuLabel, closeLabel, overMedia = true, className }: LunchlineHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(!overMedia);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 64rem)");
    let last = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      // wide screens: tuck away while scrolling down, come back on the way up
      setHidden(wide.matches && y > last && y > 120);
      last = y;
      // cream once the full-window hero has gone under the header
      setSolid(!overMedia || y > window.innerHeight - 104);
      // the last linked section whose top has passed 40% of the window
      let current = 0;
      links.forEach((link, i) => {
        if (!link.href.startsWith("#") || link.href.length < 2) return;
        const target = document.getElementById(link.href.slice(1));
        if (target && target.getBoundingClientRect().top < window.innerHeight * 0.4) current = i;
      });
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [links, overMedia]);

  const light = !solid && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 text-foreground transition-transform duration-500",
        ease,
        hidden && !open && "-translate-y-[120%]",
        light && "lg:text-background",
        className,
      )}
    >
      {/* phones: a cream glass bar with a hairline; wide screens: a solid cream backdrop
          that wipes down into place once the hero has passed */}
      <span aria-hidden className="absolute inset-0 border-b border-border bg-background/25 backdrop-blur-md lg:hidden" />
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 hidden border-b border-border bg-background transition-[clip-path] duration-300 lg:block",
          ease,
          light ? "[clip-path:inset(0_0_100%_0)]" : "[clip-path:inset(0_0_0_0)]",
        )}
      />

      <div className="relative mx-auto flex h-19 max-w-page items-center justify-between px-gutter lg:h-26 lg:items-start">
        <a href={homeHref} className="font-display text-[1.65rem] leading-[0.8] font-medium tracking-[-0.03em] lg:pt-6 lg:text-[2.05rem]">
          {brand.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </a>

        <nav className="hidden lg:mt-[3.1rem] lg:block">
          <ul className="flex gap-4 border-t border-current">
            {links.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={i === active ? "true" : undefined}
                  className={cn(
                    "relative block pt-3 text-[1.0625rem] leading-none transition-opacity duration-300 hover:opacity-70",
                    ease,
                    "before:absolute before:inset-x-0 before:-top-px before:h-1 before:origin-left before:scale-x-0 before:bg-current before:transition-transform before:duration-300",
                    i === active && "before:scale-x-100",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? closeLabel : menuLabel}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-sm border border-border bg-secondary text-foreground lg:hidden"
        >
          {open ? <X className="size-6" strokeWidth={2.25} /> : <Menu className="size-6" strokeWidth={2.25} />}
        </button>
      </div>

      {open && (
        <nav className="relative h-[calc(100svh-4.75rem)] overflow-y-auto bg-background px-gutter pt-8 lg:hidden">
          <ul className="flex flex-col gap-3">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block font-display text-[2.375rem] leading-[1.2] font-light">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
