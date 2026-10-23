import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Menu, ShoppingCart, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface OuraringNavItem {
  label: string;
  href: string;
  /** shows a small chevron (the original opens a menu from it) */
  hasMenu?: boolean;
}

export interface OuraringHeaderProps {
  /** one line in the cream strip above the bar (links inside are underlined); omit to hide the strip */
  announcement?: ReactNode;
  /** the wordmark, set light and widely tracked */
  logo: ReactNode;
  /** where the wordmark links */
  logoHref?: string;
  /** the centred links */
  nav: OuraringNavItem[];
  /** the round cart button */
  cart: { href: string; label: string };
  /** screen-reader labels for the phone menu button */
  menuLabels?: { open: string; close: string };
  className?: string;
}

export function OuraringHeader({ announcement, logo, logoHref = "/", nav, cart, menuLabels = { open: "Menu", close: "Close" }, className }: OuraringHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const last = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      // slide away going down (past the first screen's top), come back going up
      setHidden(y > 240 && y > last.current);
      last.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wordmark = <span className="block text-[26px] leading-none font-light tracking-[0.09em] uppercase">{logo}</span>;

  return (
    <div className={cn("contents", className)}>
      {announcement && (
        <div className="relative z-50 flex min-h-[52px] items-center justify-center bg-background px-gutter py-3 text-center text-[13px] leading-[1.3] font-semibold text-foreground lg:text-[14px] [&_a]:underline [&_a]:underline-offset-2">
          {announcement}
        </div>
      )}

      {/* desktop bar: sticky, takes no height, so it floats over the hero */}
      <header
        className={cn(
          "sticky top-0 z-40 -mb-[90px] hidden h-[90px] text-foreground lg:block",
          "transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          hidden && !open && "-translate-y-full",
        )}
      >
        <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-b from-card from-45% to-transparent" />
        <div
          aria-hidden
          className={cn(
            "absolute inset-0 -z-10 bg-background/90 backdrop-blur-md transition-opacity duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        />
        <div className="mx-auto grid h-full max-w-page grid-cols-[1fr_auto_1fr] items-center px-gutter">
          <a href={logoHref} className="justify-self-start">
            {wordmark}
          </a>
          <nav className="flex items-center gap-[50px]">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="group flex items-center gap-2 text-[16px] tracking-[0.03em] transition-colors duration-150 hover:text-foreground/70">
                {item.label}
                {item.hasMenu && (
                  <ChevronDown aria-hidden strokeWidth={1.5} className="size-4 transition-transform duration-150 group-hover:translate-y-0.5 motion-reduce:transition-none" />
                )}
              </a>
            ))}
          </nav>
          <a
            href={cart.href}
            aria-label={cart.label}
            className="flex size-12 items-center justify-center justify-self-end rounded-full border border-border transition-colors duration-300 hover:border-foreground hover:bg-foreground/10 motion-reduce:transition-none"
          >
            <ShoppingCart aria-hidden strokeWidth={1.5} className="size-5" />
          </a>
        </div>
      </header>

      {/* phones: a frosted pill fixed to the bottom of the screen */}
      <div className="fixed inset-x-3 bottom-3 z-40 lg:hidden">
        {open && (
          <nav className="mb-2 flex flex-col rounded-xl bg-background p-3 text-foreground shadow-[0_0_18px_0] shadow-foreground/20">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="flex h-12 items-center justify-between rounded-md px-3 text-[18px] hover:bg-card">
                {item.label}
                {item.hasMenu && <ChevronDown aria-hidden strokeWidth={1.5} className="size-4 -rotate-90" />}
              </a>
            ))}
          </nav>
        )}
        <div className="flex h-16 items-center justify-between rounded-xl bg-foreground/60 pr-3 pl-4 text-background backdrop-blur-md">
          <a href={logoHref}>{wordmark}</a>
          <div className="flex items-center gap-2">
            <a href={cart.href} aria-label={cart.label} className="flex size-10 items-center justify-center rounded-full border border-background/30">
              <ShoppingCart aria-hidden strokeWidth={1.5} className="size-5" />
            </a>
            <button
              type="button"
              aria-expanded={open}
              aria-label={open ? menuLabels.close : menuLabels.open}
              onClick={() => setOpen((v) => !v)}
              className="flex size-10 items-center justify-center rounded-full border border-background/30"
            >
              {open ? <X aria-hidden strokeWidth={1.5} className="size-5" /> : <Menu aria-hidden strokeWidth={1.5} className="size-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
