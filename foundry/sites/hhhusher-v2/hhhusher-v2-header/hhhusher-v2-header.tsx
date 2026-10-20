import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button, hhhusherV2Ease } from "@foundry/hhhusher-v2-button";

export interface HhhusherV2Link {
  label: string;
  href: string;
}

export interface HhhusherV2HeaderProps {
  /** the wordmark, set in the display face at black weight */
  brand: string;
  /** where the wordmark links to */
  brandHref?: string;
  /** the links inside the centre pill */
  links: HhhusherV2Link[];
  /** the yellow button at the end of the pill (and next to the menu on phones) */
  buy: HhhusherV2Link;
  /** currencies for the glass picker; the first is selected */
  currencies?: string[];
  /** label for the currency picker, for screen readers */
  currencyLabel?: string;
  /** the language switch square (e.g. "FR") */
  language?: HhhusherV2Link;
  /** labels for the phone menu button, for screen readers */
  menuLabel?: string;
  closeLabel?: string;
  className?: string;
}

/** Fixed, transparent header that hides while scrolling down and returns on the way up. */
export function HhhusherV2Header({ brand, brandHref = "#", links, buy, currencies = [], currencyLabel, language, menuLabel, closeLabel, className }: HhhusherV2HeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // hide once past the first 120px going down; come back on any upward scroll
      if (Math.abs(y - last) > 4) setHidden(y > last && y > 120);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shown = !hidden || open;

  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 text-foreground transition-[transform,background-color] duration-400 ease-[cubic-bezier(0.32,0.94,0.6,1)] motion-reduce:transition-none",
        shown ? "translate-y-0" : "-translate-y-full",
        (scrolled || open) && "bg-background/95",
        className,
      )}
    >
      <div className="mx-auto flex max-w-page items-center justify-between gap-4 px-gutter py-[1.3rem] lg:grid lg:grid-cols-[1fr_auto_1fr] lg:py-10">
        <a href={brandHref} className="font-display text-[1.9rem] leading-none font-black tracking-[-0.045em] lg:text-[2.6rem]">
          {brand}
        </a>

        {/* the glass pill (desktop) */}
        <nav className="hidden h-10 items-center rounded-lg bg-foreground/15 px-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn("px-4 font-mono text-[0.75rem] font-bold uppercase transition-colors hover:text-primary", hhhusherV2Ease)}
            >
              {link.label}
            </a>
          ))}
          <HhhusherV2Button href={buy.href} size="sm" className="ml-4 h-8 px-5">
            {buy.label}
          </HhhusherV2Button>
        </nav>

        <div className="flex items-center justify-end gap-2.5">
          {currencies.length > 0 && (
            <label className="relative hidden lg:block">
              <span className="sr-only">{currencyLabel}</span>
              <select
                defaultValue={currencies[0]}
                className={cn(
                  "h-10 w-[5.625rem] cursor-pointer appearance-none rounded-lg border-2 border-transparent bg-foreground/15 pr-7 pl-3 font-mono text-[0.75rem] font-bold text-foreground transition-colors hover:border-foreground hover:bg-transparent",
                  hhhusherV2Ease,
                )}
              >
                {currencies.map((c) => (
                  <option key={c} value={c} className="bg-background">
                    {c}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-2.5 size-3.5 -translate-y-1/2" strokeWidth={2.5} />
            </label>
          )}
          {language && (
            <a
              href={language.href}
              className={cn(
                "hidden size-10 items-center justify-center rounded-lg border-2 border-transparent bg-foreground/15 font-mono text-[0.75rem] font-bold transition-colors hover:border-foreground hover:bg-transparent lg:flex",
                hhhusherV2Ease,
              )}
            >
              {language.label}
            </a>
          )}
          <HhhusherV2Button href={buy.href} className="h-[2.55rem] px-4 lg:hidden">
            {buy.label}
          </HhhusherV2Button>
          <HhhusherV2Button variant="glass" size="icon" className="size-[2.55rem] text-foreground lg:hidden" label={open ? closeLabel : menuLabel} onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-6" strokeWidth={1.75} /> : <Menu className="size-6" strokeWidth={1.75} />}
          </HhhusherV2Button>
        </div>
      </div>

      {/* phone menu */}
      {open && (
        <nav className="border-t border-border px-gutter pt-4 pb-8 lg:hidden">
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a href={link.href} onClick={() => setOpen(false)} className="block py-4 font-mono text-[0.85rem] font-bold uppercase hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-2.5">
            {currencies.map((c) => (
              <span key={c} className="rounded-lg bg-foreground/15 px-3 py-2 font-mono text-[0.75rem] font-bold">
                {c}
              </span>
            ))}
            {language && (
              <a href={language.href} className="rounded-lg bg-foreground/15 px-3 py-2 font-mono text-[0.75rem] font-bold">
                {language.label}
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
