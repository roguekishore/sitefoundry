import { useState, type ReactNode } from "react";
import { ArrowRight, Asterisk } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AspensearchCityTime } from "@foundry/aspensearch-city-time";
import "./aspensearch-header.css";

export interface AspensearchHeaderCity {
  /** short city tag shown after the time, e.g. "CHI" */
  name: string;
  /** IANA time zone, e.g. "America/Chicago" */
  timeZone: string;
  /** the time static HTML shows before the live clock runs, e.g. "09:00 AM" */
  fallback: string;
}

export interface AspensearchHeaderLink {
  label: string;
  href: string;
}

export interface AspensearchHeaderProps {
  /** the firm's name, for screen readers on the logo square */
  brand: string;
  /** the mark in the ink square on the left; empty: a plain asterisk icon */
  logo?: ReactNode;
  /** where the logo links to */
  homeHref?: string;
  /** one or two cities whose live time shows next to the logo; with two, they flip as the page scrolls */
  cities: AspensearchHeaderCity[];
  /** the section links (desktop row, phone menu) */
  links: AspensearchHeaderLink[];
  /** the ink button on the right */
  contact: AspensearchHeaderLink;
  /** label of the phone menu button, e.g. "Menu" */
  menuLabel: string;
  /** shows the little light/dark switch, which toggles `.dark` on <html>; its value is its screen-reader name */
  themeToggleLabel?: string;
  className?: string;
}

const ease = "duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none";

/**
 * The original's sticky 60px bar: an ink logo square, the live time of two cities that flip
 * as you scroll, then from the middle line the section links (their text rolls up on hover
 * over a rising ink fill), a light/dark switch and a 200px ink Contact button. On phones the
 * right half is a mint Menu button that opens a link panel.
 */
export function AspensearchHeader({ brand, logo, homeHref = "#", cities, links, contact, menuLabel, themeToggleLabel, className }: AspensearchHeaderProps) {
  const [open, setOpen] = useState(false);
  const toggleTheme = () => document.documentElement.classList.toggle("dark");

  return (
    <header className={cn("sticky top-0 z-50 border-b border-border bg-background font-sans tracking-[-0.04em] text-foreground", className)}>
      <div className="flex h-[3.75rem]">
        <a href={homeHref} aria-label={brand} className="flex size-[3.75rem] shrink-0 items-center justify-center bg-foreground text-background">
          {logo ?? <Asterisk aria-hidden className="size-8" strokeWidth={1.5} />}
        </a>

        {/* City times: a one-line window; with two cities the stack slides as the page scrolls. */}
        <div className="flex min-w-0 flex-1 items-center justify-center text-sm/none lg:w-[calc(50%-3.75rem)] lg:flex-none lg:justify-start lg:pl-20">
          <div className="h-[1.25em] overflow-clip leading-[1.25em]">
            <div className={cn(cities.length > 1 && "aspensearch-header-flip")}>
              {cities.slice(0, 2).map((city) => (
                <p key={city.name} className="whitespace-nowrap">
                  <AspensearchCityTime timeZone={city.timeZone} fallback={city.fallback} /> {city.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: links, switch and contact from the middle line. */}
        <nav className="hidden w-1/2 items-center border-l border-border lg:flex">
          <ul className="flex items-center gap-1 pl-5">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cn("group relative isolate flex h-7 items-start overflow-clip px-1 text-base/none transition-colors hover:text-background", ease)}>
                  <span aria-hidden className={cn("absolute inset-0 -z-10 origin-bottom scale-y-0 bg-foreground transition-transform group-hover:scale-y-100", ease)} />
                  {/* The label and a copy under it; hovering slides the pair up one line. */}
                  <span className={cn("flex flex-col transition-transform group-hover:-translate-y-1/2", ease)}>
                    <span className="flex h-7 items-center">{link.label}</span>
                    <span aria-hidden className="flex h-7 items-center">
                      {link.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          {themeToggleLabel && (
            <button type="button" onClick={toggleTheme} aria-label={themeToggleLabel} className="ml-auto mr-5 flex items-center p-1">
              <span aria-hidden className="size-2.5 rounded-full border border-foreground" />
              <span aria-hidden className="-ml-px size-2.5 rounded-full bg-foreground" />
            </button>
          )}
          <a
            href={contact.href}
            className={cn(
              "group relative isolate flex h-full w-[12.5rem] items-center justify-between overflow-clip bg-primary px-5 text-base/none text-primary-foreground transition-colors hover:text-highlight-foreground",
              !themeToggleLabel && "ml-auto",
              "duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
            )}
          >
            <span aria-hidden className="absolute inset-0 -z-10 origin-left scale-x-0 bg-highlight transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100 motion-reduce:transition-none" />
            {contact.label}
            <ArrowRight aria-hidden className="size-5" strokeWidth={1.25} />
          </a>
        </nav>

        {/* Phone: the mint menu button fills the right half. */}
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex w-1/2 shrink-0 items-center justify-between bg-highlight px-3 text-base/none text-highlight-foreground lg:hidden"
        >
          {menuLabel}
          <span aria-hidden className="flex w-4 flex-col gap-1">
            <span className={cn("h-px bg-current transition-transform", ease, open && "translate-y-[2.5px] rotate-45")} />
            <span className={cn("h-px bg-current transition-transform", ease, open && "-translate-y-[2.5px] -rotate-45")} />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <ul>
            {links.map((link) => (
              <li key={link.href} className="border-b border-border">
                <a href={link.href} onClick={() => setOpen(false)} className="flex h-[3.75rem] items-center px-3 text-2xl/none">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={contact.href} className="flex h-[3.75rem] items-center justify-between bg-primary px-3 text-base/none text-primary-foreground">
            {contact.label}
            <ArrowRight aria-hidden className="size-5" strokeWidth={1.25} />
          </a>
        </nav>
      )}
    </header>
  );
}
