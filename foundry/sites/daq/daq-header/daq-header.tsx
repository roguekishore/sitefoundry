import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { DaqWordmark } from "@foundry/daq-wordmark";

export interface DaqHeaderLink {
  label: string;
  href: string;
  /** links shown in a dropdown under this one (desktop) or indented under it (menu) */
  children?: { label: string; href: string }[];
}

export interface DaqHeaderProps {
  /** the company name of the wordmark */
  brand: string;
  /** the monospace line under the name */
  brandSub?: string;
  homeHref?: string;
  /** the centred links */
  links: DaqHeaderLink[];
  /** the square CTA at the right */
  cta: { label: string; href: string };
  /** labels of the small sound toggle; leave out to hide it */
  sound?: { label: string; on: string; off: string };
  /** called when the sound toggle flips */
  onSoundChange?: (on: boolean) => void;
  /** screen-reader labels of the phone menu button */
  menuLabel: string;
  closeLabel: string;
  /** how far (px) the page scrolls before the header tightens */
  threshold?: number;
  className?: string;
}

// The original's header transition: 0.5s on the standard ease.
const ease = "duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

export function DaqHeader({
  brand,
  brandSub,
  homeHref = "/",
  links,
  cta,
  sound,
  onSoundChange,
  menuLabel,
  closeLabel,
  threshold = 20,
  className,
}: DaqHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > threshold);
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  const flipSound = () => {
    setSoundOn((on) => {
      onSoundChange?.(!on);
      return !on;
    });
  };

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50", className)}>
      {/* the bar: transparent at the top, translucent black with a hairline once scrolled */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter]",
          ease,
          scrolled ? "border-border bg-background/55 backdrop-blur-md" : "border-transparent",
        )}
      />
      <div
        className={cn(
          "relative flex items-center justify-between px-9 transition-[height,padding]",
          ease,
          scrolled ? "h-[4.125rem] lg:px-gutter" : "h-24 lg:px-[9%]",
        )}
      >
        <DaqWordmark name={brand} sub={brandSub} href={homeHref} animate />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label} className="group/menu relative">
                <a
                  href={link.href}
                  className="flex items-center gap-1 py-2 text-[0.9375rem] font-medium text-foreground/72 transition-colors duration-300 hover:text-foreground"
                >
                  {link.label}
                  {link.children && <ChevronDown aria-hidden strokeWidth={1.5} className="size-3.5 opacity-60" />}
                </a>
                {link.children && (
                  <div className="invisible absolute top-full left-1/2 w-60 -translate-x-1/2 pt-3 opacity-0 transition-[opacity,visibility] duration-300 group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-hover/menu:visible group-hover/menu:opacity-100">
                    <ul className="border border-border bg-popover/95 py-2 backdrop-blur-md">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="group/item flex items-center justify-between px-4 py-2.5 font-mono text-[0.625rem] font-medium tracking-[0.2em] text-muted-foreground uppercase transition-colors duration-300 hover:bg-foreground/4 hover:text-foreground"
                          >
                            {child.label}
                            <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-3 transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-9 lg:flex">
          {sound && (
            <button
              type="button"
              aria-pressed={soundOn}
              onClick={flipSound}
              className="flex w-24 flex-col gap-2.5 font-mono text-[0.5rem] leading-none font-bold tracking-[0.15em] text-foreground/74 uppercase transition-colors duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:text-foreground"
            >
              <span className="flex justify-between">
                <span>{sound.label}</span>
                <span>{soundOn ? sound.on : sound.off}</span>
              </span>
              {/* the slider rule with end ticks; its fill grows when the sound is on */}
              <span aria-hidden className="relative h-1 border-x border-foreground/30">
                <span className="absolute inset-x-0 top-1/2 h-px bg-foreground/30" />
                <span
                  className={cn(
                    "absolute top-1/2 left-0 h-px w-full origin-left bg-foreground transition-transform duration-500",
                    soundOn ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </span>
            </button>
          )}
          <a
            href={cta.href}
            className="group/cta flex h-10 items-center gap-3 bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/85"
          >
            {cta.label}
            <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
          </a>
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="flex size-10 flex-col items-end justify-center gap-1.5 lg:hidden"
        >
          <span aria-hidden className="h-px w-5 bg-foreground" />
          <span aria-hidden className="h-px w-5 bg-foreground" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-10 flex flex-col bg-background px-9 lg:hidden">
          <div className="flex h-24 items-center justify-between">
            <DaqWordmark name={brand} sub={brandSub} href={homeHref} />
            <button type="button" aria-label={closeLabel} onClick={() => setOpen(false)} className="flex size-10 items-center justify-end">
              <X aria-hidden strokeWidth={1.25} className="size-6" />
            </button>
          </div>
          <ul className="mt-8 flex flex-col gap-5">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setOpen(false)} className="text-3xl font-light tracking-tight">
                  {link.label}
                </a>
                {link.children && (
                  <ul className="mt-3 flex flex-col gap-2.5 border-l border-border pl-4">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <a href={child.href} onClick={() => setOpen(false)} className="font-mono text-[0.625rem] tracking-[0.2em] text-muted-foreground uppercase">
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href={cta.href} className="mt-auto mb-10 flex h-14 items-center justify-between bg-primary px-5 text-base font-medium text-primary-foreground">
            {cta.label}
            <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-5" />
          </a>
        </div>
      )}
    </header>
  );
}
