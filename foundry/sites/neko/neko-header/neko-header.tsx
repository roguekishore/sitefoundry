import { useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NekoButton } from "@foundry/neko-button";
import "./neko-header.css";

export interface NekoHeaderLink {
  label: string;
  href: string;
}

export interface NekoHeaderProps {
  /** the brand's name: the home link's label for screen readers */
  brand: string;
  /** the mark inside the charcoal square (an svg, img or lucide icon) */
  logo: ReactNode;
  homeHref?: string;
  /** the centre links */
  links: NekoHeaderLink[];
  /** the blue button on the right (also at the foot of the phone menu) */
  cta: NekoHeaderLink;
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** label of the phone menu's close button, for screen readers */
  closeLabel?: string;
  className?: string;
}

export function NekoHeader({ brand, logo, homeHref = "/", links, cta, menuLabel = "Menu", closeLabel = "Close", className }: NekoHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-50 h-0 font-sans text-foreground", className)}>
      <div className="relative flex h-16 items-center justify-between px-gutter lg:h-26">
        <a
          href={homeHref}
          aria-label={brand}
          className="flex size-12 items-center justify-center rounded-lg bg-foreground text-background lg:size-15 [&_svg]:size-6 lg:[&_svg]:size-8"
        >
          {logo}
        </a>

        <nav className="neko-header-nav absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center lg:flex pointer-events-none">
          <ul className="pointer-events-auto flex items-center gap-12">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-base transition-colors duration-150 hover:text-primary motion-reduce:transition-none">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <NekoButton href={cta.href} variant="primary" className="hidden lg:inline-flex">
          {cta.label}
        </NekoButton>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex size-12 flex-col items-end justify-center gap-[7px] pr-1.5 lg:hidden"
        >
          <span className="h-[1.5px] w-5 bg-foreground" />
          <span className="h-[1.5px] w-5 bg-foreground" />
        </button>
      </div>

      {/* Phone menu: a full-screen sheet; parked inside a clipped layer so it never widens the page. */}
      <div className={cn("pointer-events-none fixed inset-0 overflow-clip lg:hidden", open && "pointer-events-auto")} aria-hidden={!open}>
        <div
          className={cn(
            "flex h-full flex-col bg-background px-gutter transition-[opacity,translate] duration-300 motion-reduce:transition-none",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <div className="flex h-16 items-center justify-between">
            <a href={homeHref} aria-label={brand} tabIndex={open ? 0 : -1} className="flex size-12 items-center justify-center rounded-lg bg-foreground text-background [&_svg]:size-6">
              {logo}
            </a>
            <button type="button" aria-label={closeLabel} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="flex size-12 items-center justify-center">
              <X aria-hidden className="size-6" strokeWidth={1.5} />
            </button>
          </div>
          <ul className="mt-10 flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="block py-2 font-display text-[2.5rem] leading-[1.1] tracking-[-0.02em]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-8">
            <NekoButton href={cta.href} variant="primary" className="w-full">
              {cta.label}
            </NekoButton>
          </div>
        </div>
      </div>
    </header>
  );
}
