import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./structureengineering-header.css";

export interface StructureengineeringLink {
  /** the link text (set in uppercase mono) */
  label: string;
  /** where it goes */
  href: string;
}

export interface StructureengineeringHeaderProps {
  /** the logo: a short mark (one or two letters) typeset in the display face */
  brand: { mark: string; name: string; href: string };
  /** the main links: a row of white pills at desktop, the menu panel on phones */
  links: StructureengineeringLink[];
  /** the line that scrolls along the black bar on phones */
  marquee: string;
  /** the fixed link at the right end of that bar */
  contact: StructureengineeringLink;
  /** the second box beside "Menu" on phones */
  shortcut: StructureengineeringLink;
  /** the label of the phone menu button */
  menuLabel: string;
  /** the accessible label of the menu's close button */
  closeLabel: string;
  className?: string;
}

const pill =
  "flex items-center rounded-md border border-transparent bg-secondary font-mono text-base leading-none text-secondary-foreground uppercase transition-colors duration-250 ease-out hover:border-background hover:bg-foreground hover:text-background focus-visible:bg-foreground focus-visible:text-background motion-reduce:transition-none";

// A fixed header that overlays the page. Desktop: the logo at the far left and a row of small
// white mono pills. Phones: a black bar with a looping marquee and a contact link, then the logo
// with "Menu" and a shortcut box; Menu opens a full-screen ink panel. The logo is white with
// switches to white whenever the section under it is marked data-tone="dark" (the photo
// sections), and is ink everywhere else.
export function StructureengineeringHeader({ brand, links, marquee, contact, shortcut, menuLabel, closeLabel, className }: StructureengineeringHeaderProps) {
  const [open, setOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

  // Look at what's under the logo after every scroll frame: white over dark sections.
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    let frame = 0;
    const check = () => {
      frame = 0;
      const r = logo.getBoundingClientRect();
      const under = document.elementsFromPoint(r.left + r.width / 2, r.top + r.height / 2);
      const hit = under.find((el) => !logo.contains(el) && el.closest("[data-tone]"));
      setOnDark(hit?.closest("[data-tone]")?.getAttribute("data-tone") === "dark");
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const repeated = Array.from({ length: 6 }, () => marquee);

  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-40", className)}>
        {/* phones: the black marquee bar */}
        <div className="relative flex h-[2.875rem] items-center overflow-clip bg-primary font-mono text-base text-primary-foreground uppercase lg:hidden">
          <div aria-hidden className="structureengineering-header-marquee flex w-max shrink-0 whitespace-nowrap">
            {[0, 1].map((half) => (
              <span key={half} className="flex">
                {repeated.map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </span>
            ))}
          </div>
          <span className="sr-only">{marquee}</span>
          <a href={contact.href} className="absolute inset-y-0 right-0 flex items-center gap-2 bg-primary pr-2 pl-3">
            {contact.label}
            <ArrowRight className="size-4" strokeWidth={1.25} />
          </a>
        </div>

        <div className="flex items-start pt-3.5 pl-[4.25rem] pr-5 lg:pt-7 lg:pl-24 lg:pr-gutter">
          {/* phones: Menu + shortcut */}
          <div className="grid flex-1 grid-cols-2 gap-[3px] lg:hidden">
            <button type="button" onClick={() => setOpen(true)} aria-expanded={open} className={cn(pill, "h-[2.625rem] justify-center gap-2")}>
              {menuLabel}
              <Menu className="size-4" strokeWidth={1.25} />
            </button>
            <a href={shortcut.href} className={cn(pill, "h-[2.625rem] justify-center")}>
              {shortcut.label}
            </a>
          </div>

          {/* desktop: the pill row */}
          <nav className="hidden lg:block">
            <ul className="flex flex-wrap gap-0.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={cn(pill, "h-[2.3rem] px-5")}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <a
        ref={logoRef}
        href={brand.href}
        aria-label={brand.name}
        className={cn(
          "fixed top-[3.6rem] left-2 z-50 font-display text-[3.25rem] leading-none font-medium tracking-tight transition-colors duration-250 motion-reduce:transition-none lg:top-[1.15rem] lg:left-7 lg:text-[3.4rem]",
          onDark ? "text-card dark:text-card-foreground" : "text-foreground",
        )}
      >
        {brand.mark}
      </a>

      {/* phones: the menu panel */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-primary px-gutter pt-4 pb-10 text-primary-foreground transition-[opacity,visibility] duration-400 ease-out motion-reduce:transition-none lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={closeLabel}
          className="ml-auto flex size-11 items-center justify-center rounded-md border border-primary-foreground transition-colors duration-250 hover:bg-primary-foreground hover:text-primary"
        >
          <X className="size-5" strokeWidth={1.25} />
        </button>
        <ul className="mt-10">
          {links.map((link) => (
            <li key={link.label} className="border-b border-primary-foreground/25">
              <a href={link.href} onClick={() => setOpen(false)} className="block py-3 font-display text-[2.1rem] leading-tight tracking-tight">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
