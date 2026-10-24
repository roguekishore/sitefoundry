import { useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import "./valaratomics-header.css";

export interface ValaratomicsHeaderLink {
  /** link text (shown uppercase in the mono face) */
  label: string;
  /** where it goes */
  href: string;
}

export interface ValaratomicsHeaderProps {
  /** the company name as two short lines, e.g. ["Tallgrass", "Fission"]: set in the wide caps face */
  wordmark: [string, string] | [string];
  /** the brand mark beside it (an svg, img or lucide icon); it stays when the rest fades */
  mark: ReactNode;
  /** accessible name of the home link, e.g. "Tallgrass Fission home" */
  homeLabel: string;
  /** where the mark links (usually "/") */
  homeHref?: string;
  /** the links: in a row from 1024px, in the menu panel on phones */
  links: ValaratomicsHeaderLink[];
  /** the phone menu button's icon when closed (e.g. lucide WavesHorizontal) */
  menuIcon: ReactNode;
  /** the phone menu button's icon when open (e.g. lucide X) */
  closeIcon: ReactNode;
  /** accessible name of the phone menu button, e.g. "Menu" */
  menuLabel: string;
  className?: string;
}

/**
 * A fixed, transparent bar in difference blend: white over the black bands, black over the
 * light ones. Mark + two-line wide wordmark on the left, mono caps links on the right; the
 * wordmark and links fade out as soon as the page scrolls, the mark stays.
 */
export function ValaratomicsHeader({
  wordmark,
  mark,
  homeLabel,
  homeHref = "/",
  links,
  menuIcon,
  closeIcon,
  menuLabel,
  className,
}: ValaratomicsHeaderProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "dark pointer-events-none fixed inset-x-0 top-0 z-50 text-foreground mix-blend-difference",
          className,
        )}
      >
        <div className="mx-auto flex h-[4.75rem] max-w-page items-center justify-between px-gutter lg:h-[6.625rem]">
          <a href={homeHref} aria-label={homeLabel} className="pointer-events-auto flex items-center gap-2.5">
            <span className="grid size-[3.125rem] place-items-center [&_svg]:size-full" aria-hidden>
              {mark}
            </span>
            <span
              aria-hidden
              className="valaratomics-header-fade font-display text-lg leading-[0.82] font-black tracking-[-0.01em] uppercase [font-stretch:var(--valaratomics-stretch,100%)]"
            >
              {wordmark.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </a>
          <nav className="valaratomics-header-fade pointer-events-auto hidden lg:block">
            <ul className="flex gap-9">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-mono text-base leading-none uppercase transition-opacity duration-150 hover:opacity-70 motion-reduce:transition-none"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className="pointer-events-auto -mr-1 grid size-8 place-items-center lg:hidden [&_svg]:size-6 [&_svg]:stroke-[1.5]"
          >
            {open ? closeIcon : menuIcon}
          </button>
        </div>
      </header>
      <nav
        id={panelId}
        hidden={!open}
        className="dark fixed inset-0 z-40 bg-background pt-[6.5rem] text-foreground lg:hidden"
      >
        <ul className="flex flex-col px-gutter">
          {links.map((l) => (
            <li key={l.href} className="border-b border-border">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-mono text-[1.375rem] leading-none uppercase transition-colors duration-150 hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
