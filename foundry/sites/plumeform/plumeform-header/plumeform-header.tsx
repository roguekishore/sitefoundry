import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlumeformButton } from "@foundry/plumeform-button";

export interface PlumeformHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron after the label (a menu on the original) */
  hasMenu?: boolean;
}

export interface PlumeformHeaderProps {
  /** wordmark next to the logo; also the home link's label */
  brand: string;
  /** logo mark (an svg, img or lucide icon) before the wordmark */
  logo?: ReactNode;
  homeHref?: string;
  /** the centred links (desktop) and the menu's links (phones) */
  links: PlumeformHeaderLink[];
  /** quiet text link before the button, e.g. log in */
  secondary?: { label: string; href: string };
  /** the pill button at the right end */
  cta: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /**
   * auto: turns dark while it sits over a band marked data-tone="dark" (plumeform-band does
   * this) and light elsewhere · light / dark: fixed
   */
  tone?: "auto" | "light" | "dark";
  /** the tone in the static HTML, before the page's script runs (dark when the page opens on a dark hero) */
  initialTone?: "light" | "dark";
  className?: string;
}

/** Floating pill navigation, sticky 8px from the top, glass in light or dark depending on what's beneath it. */
export function PlumeformHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  secondary,
  cta,
  menuLabel = "Menu",
  tone = "auto",
  initialTone = "light",
  className,
}: PlumeformHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [autoTone, setAutoTone] = useState(initialTone);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (tone !== "auto") return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const pill = ref.current;
      if (!pill) return;
      const box = pill.getBoundingClientRect();
      const y = box.top + box.height / 2;
      let dark = false;
      document.querySelectorAll<HTMLElement>('[data-tone="dark"]').forEach((band) => {
        const r = band.getBoundingClientRect();
        if (r.top <= y && r.bottom >= y) dark = true;
      });
      setAutoTone(dark ? "dark" : "light");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [tone]);

  const dark = (tone === "auto" ? autoTone : tone) === "dark";
  const linkClass =
    "rounded-full px-2.5 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-foreground/8 hover:text-foreground motion-reduce:transition-none";

  return (
    <header className={cn("sticky top-0 z-50 -mb-[3.75rem] h-[3.75rem] px-4 pt-2 lg:px-gutter", className)}>
      <div ref={ref} className={cn(dark && "dark", "relative mx-auto max-w-page text-foreground")}>
        <div
          className={cn(
            "flex h-[3.25rem] items-center gap-4 rounded-full border border-border bg-card/75 pr-1.5 pl-4 backdrop-blur-xl transition-colors duration-200",
            "shadow-[inset_0_1px_0_color-mix(in_oklab,var(--foreground)_8%,transparent),0_8px_24px_-14px_color-mix(in_oklab,var(--foreground)_25%,transparent)]",
            "dark:bg-card/70",
          )}
        >
          <a href={homeHref} aria-label={brand} className="flex items-center gap-1.5 text-[1.0625rem] font-bold tracking-[-0.02em] [&_svg]:size-5 [&_svg]:text-highlight">
            {logo}
            <span>{brand}</span>
          </a>

          <nav className="mx-auto hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <a key={link.href + link.label} href={link.href} className={cn(linkClass, "flex items-center gap-1")}>
                {link.label}
                {link.hasMenu && <ChevronDown aria-hidden className="size-3.5 opacity-70" />}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            {secondary && (
              <a href={secondary.href} className={cn(linkClass, "mr-1 hidden lg:block")}>
                {secondary.label}
              </a>
            )}
            <PlumeformButton href={cta.href} size="sm" className="h-9 px-4 text-sm font-bold">
              {cta.label}
            </PlumeformButton>
            <button
              type="button"
              aria-label={menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid size-9 place-items-center rounded-full text-foreground transition-colors hover:bg-foreground/8 lg:hidden"
            >
              {open ? <X className="size-5" strokeWidth={1.5} /> : <Menu className="size-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="absolute inset-x-0 top-full mt-2 grid gap-1 rounded-2xl border border-border bg-card/95 p-3 backdrop-blur-xl lg:hidden">
            {links.map((link) => (
              <a key={link.href + link.label} href={link.href} className="rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium hover:bg-foreground/8">
                {link.label}
              </a>
            ))}
            {secondary && (
              <a href={secondary.href} className="rounded-xl px-3 py-2.5 text-[0.9375rem] font-medium text-muted-foreground hover:bg-foreground/8">
                {secondary.label}
              </a>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
