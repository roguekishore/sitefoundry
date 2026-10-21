import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { AatArchitectenWordmark } from "@foundry/aat-architecten-wordmark";

export interface AatArchitectenHeaderLink {
  label: string;
  href: string;
  /** show a small arrow after the label (the original marks its contact link this way) */
  arrow?: boolean;
}

export interface AatArchitectenHeaderProps {
  /** the studio name in the wordmark */
  brand: string;
  /** the small word after the wordmark's hairline */
  descriptor?: string;
  homeHref?: string;
  /** the navigation links */
  links: AatArchitectenHeaderLink[];
  /** the phone menu trigger's label while closed */
  menuLabel: string;
  /** the phone menu trigger's label while open */
  closeLabel: string;
  className?: string;
}

// The original's colour transition on every link.
const fade = "transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none";

export function AatArchitectenHeader({ brand, descriptor, homeHref = "/", links, menuLabel, closeLabel, className }: AatArchitectenHeaderProps) {
  const [open, setOpen] = useState(false);

  // Escape closes the phone menu; the page behind doesn't scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const overflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = overflow;
    };
  }, [open]);

  return (
    <header className={cn("relative z-50 bg-background lg:absolute lg:inset-x-0 lg:top-0 lg:bg-transparent", className)}>
      <div className="mx-auto flex h-[6.5rem] max-w-page items-center px-gutter lg:grid lg:h-[6.875rem] lg:grid-cols-[27.3fr_72.7fr] lg:items-end lg:pb-10">
        <AatArchitectenWordmark name={brand} descriptor={descriptor} href={homeHref} className="relative z-10 pt-1 lg:pt-0" />

        {/* desktop links */}
        <nav className="hidden lg:block">
          <ul className="flex items-end gap-24">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={cn("inline-flex items-center gap-4 text-xl leading-none text-muted-foreground hover:text-foreground", fade)}>
                  {link.label}
                  {link.arrow && <ArrowRight aria-hidden className="size-4" strokeWidth={1.5} />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* phone: the trigger stays fixed at the top-right of the window */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="aat-architecten-menu"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "fixed top-[3.125rem] right-gutter z-[60] text-base leading-none hover:text-foreground lg:hidden",
          open ? "text-foreground" : "text-muted-foreground",
          fade,
        )}
      >
        {open ? closeLabel : menuLabel}
      </button>

      {/* phone: the full-window menu */}
      <nav
        id="aat-architecten-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-[55] flex flex-col bg-background px-gutter pt-[9.5rem] lg:hidden",
          "transition-[opacity,visibility] duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={cn("inline-flex items-center gap-4 text-[clamp(24px,1.8vw+1rem,40px)] leading-[1.25] text-muted-foreground hover:text-foreground", fade)}
              >
                {link.label}
                {link.arrow && <ArrowRight aria-hidden className="size-5" strokeWidth={1.5} />}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
