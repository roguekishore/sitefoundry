import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherButton, hhhusherEase, hhhusherLabel } from "@foundry/hhhusher-button";

export interface HhhusherHeaderLink {
  label: string;
  href: string;
}

export interface HhhusherHeaderProps {
  /** the wordmark, set in the display face at black weight */
  brand: string;
  /** where the wordmark links to */
  brandHref?: string;
  /** the links inside the centred pill (desktop) and the menu panel (phones) */
  links: HhhusherHeaderLink[];
  /** the yellow button at the end of the pill, also shown on phones */
  cta: HhhusherHeaderLink;
  /** the currency box at the right (desktop), e.g. "$USD" */
  currency?: string;
  /** screen-reader name of the currency box */
  currencyLabel?: string;
  /** the small language square at the far right (desktop) */
  language?: HhhusherHeaderLink;
  /** screen-reader names of the phone menu button */
  menuLabels?: { open: string; close: string };
  className?: string;
}

/**
 * A fixed header over a dark first screen: a chunky wordmark left, a centred translucent pill
 * holding small mono links and a yellow buy button, and two glass squares right (currency,
 * language). It slides up out of view while you scroll down and comes back, on solid dark,
 * when you scroll up. Phones keep the wordmark, the buy button and a menu square.
 */
export function HhhusherHeader({
  brand,
  brandHref = "/",
  links,
  cta,
  currency,
  currencyLabel,
  language,
  menuLabels = { open: "Open menu", close: "Close menu" },
  className,
}: HhhusherHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 120 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 text-foreground transition-[translate,background-color] duration-400 motion-reduce:transition-none",
        hhhusherEase,
        hidden && !open && "-translate-y-full",
        (solid || open) && "bg-background",
        className,
      )}
    >
      <div className="mx-auto flex h-[5.25rem] max-w-page items-center gap-3 px-gutter lg:h-30">
        <a href={brandHref} className="mr-auto font-display text-[1.75rem] leading-none font-black tracking-[-0.03em] lg:text-[2.5rem]">
          {brand}
        </a>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-lg bg-foreground/15 p-1 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(hhhusherLabel, "flex h-8 items-center px-4 transition-colors duration-300 hover:text-primary", hhhusherEase)}
            >
              {link.label}
            </a>
          ))}
          <HhhusherButton href={cta.href} size="sm" className="ml-4">
            {cta.label}
          </HhhusherButton>
        </nav>

        <HhhusherButton href={cta.href} className="h-10 px-[1.3rem] lg:hidden">
          {cta.label}
        </HhhusherButton>

        {currency && (
          <button
            type="button"
            aria-label={currencyLabel}
            className={cn(
              hhhusherLabel,
              "hidden h-10 w-[5.625rem] items-center justify-between rounded-lg border-2 border-transparent bg-foreground/15 pr-3 pl-3 lg:flex",
              "transition-[background-color,border-color] duration-300 hover:border-foreground hover:bg-transparent",
              hhhusherEase,
            )}
          >
            {currency}
            <ChevronDown aria-hidden className="size-4" strokeWidth={2.5} />
          </button>
        )}
        {language && (
          <a
            href={language.href}
            className={cn(
              hhhusherLabel,
              "hidden size-10 items-center justify-center rounded-lg border-2 border-transparent bg-foreground/15 lg:flex",
              "transition-[background-color,border-color] duration-300 hover:border-foreground hover:bg-transparent",
              hhhusherEase,
            )}
          >
            {language.label}
          </a>
        )}

        <button
          type="button"
          aria-label={open ? menuLabels.close : menuLabels.open}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg bg-foreground/15 lg:hidden"
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex h-[calc(100svh-5.25rem)] flex-col gap-2 px-gutter pt-8 pb-10 lg:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-display text-[2.6rem] leading-[1.1] font-medium tracking-[-0.02em] hover:text-primary">
              {link.label}
            </a>
          ))}
          <div className="mt-auto flex gap-2">
            {currency && <span className={cn(hhhusherLabel, "flex h-10 items-center rounded-lg bg-foreground/15 px-3")}>{currency}</span>}
            {language && (
              <a href={language.href} className={cn(hhhusherLabel, "flex size-10 items-center justify-center rounded-lg bg-foreground/15")}>
                {language.label}
              </a>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
