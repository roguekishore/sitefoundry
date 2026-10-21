import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { WildAgButton } from "@foundry/wild-ag-button";
import { WildAgWordmark } from "@foundry/wild-ag-wordmark";

export interface WildAgHeaderLink {
  label: string;
  href: string;
}

export interface WildAgHeaderProps {
  /** the brand name, set as a thin wordmark */
  brand: string;
  homeHref?: string;
  /** screen-reader labels of the burger and the menu's close button */
  menuLabel: string;
  closeLabel: string;
  /** the menu's links */
  links: WildAgHeaderLink[];
  /** the pill in the compact bar and at the foot of the menu */
  contact: WildAgHeaderLink;
  /** how far the page scrolls, as a fraction of the window height, before the compact bar drops in */
  threshold?: number;
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] motion-reduce:transition-none";

/** Two bars; on hover the lower one shrinks to half, from the right. */
function Burger({ tone }: { tone: "light" | "ink" }) {
  const bar = cn("block h-[2px] rounded-full", tone === "light" ? "bg-primary-foreground" : "bg-primary");
  return (
    <span aria-hidden className="flex w-10 flex-col items-end gap-2">
      <span className={cn(bar, "w-full")} />
      <span className={cn(bar, "w-full transition-[width] group-hover/burger:w-1/2", ease)} />
    </span>
  );
}

export function WildAgHeader({
  brand,
  homeHref = "/",
  menuLabel,
  closeLabel,
  links,
  contact,
  threshold = 0.9,
  className,
}: WildAgHeaderProps) {
  const [open, setOpen] = useState(false);
  const [past, setPast] = useState(false);

  useEffect(() => {
    const check = () => setPast(window.scrollY > window.innerHeight * threshold);
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [threshold]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("relative z-40", className)}>
      {/* the bare row over the footage */}
      <div className="absolute inset-x-0 top-0 px-gutter">
        <div className="mx-auto flex max-w-page items-center justify-between pt-[1.4rem] lg:pt-10">
          <a href={homeHref} className="text-[1.5rem] lg:text-[1.75rem]">
            <WildAgWordmark text={brand} tone="light" />
          </a>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="group/burger -m-2 p-2"
          >
            <Burger tone="light" />
          </button>
        </div>
      </div>

      {/* the compact pair that drops in after the first screen */}
      <div
        className={cn(
          "fixed top-4 right-[max(var(--page-gutter),calc((100vw_-_var(--page-width))/2))] flex items-center gap-3 transition-[translate,opacity] lg:top-6",
          ease,
          past && !open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[150%] opacity-0",
        )}
      >
        <WildAgButton href={contact.href} variant="gradient" size="sm" className="hidden sm:inline-flex">
          {contact.label}
        </WildAgButton>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={cn(
            "group/burger flex size-[3.4rem] items-center justify-center rounded-full bg-background shadow-[0_6px_30px_color-mix(in_oklab,var(--foreground)_8%,transparent)]",
          )}
        >
          <span className="scale-[0.65]">
            <Burger tone="ink" />
          </span>
        </button>
      </div>

      {/* the full-window menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-background">
          <div className="mx-auto flex w-full max-w-[calc(var(--page-width)+2*var(--page-gutter))] items-center justify-between px-gutter pt-[1.4rem] lg:pt-10">
            <a href={homeHref} className="text-[1.5rem] lg:text-[1.75rem]">
              <WildAgWordmark text={brand} />
            </a>
            <button
              type="button"
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
              className={cn(
                "flex size-[3.4rem] items-center justify-center rounded-full bg-muted text-primary transition-colors hover:bg-accent hover:text-accent-foreground",
                ease,
              )}
            >
              <X className="size-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
          <nav className="mx-auto flex w-full max-w-[calc(var(--page-width)+2*var(--page-gutter))] flex-1 flex-col justify-center gap-10 px-gutter py-12">
            <ul className="grid gap-1 lg:gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group/link relative inline-block font-sans text-[2.25rem] leading-[1.15] font-medium tracking-[-0.01em] text-foreground uppercase lg:text-[3.5rem]"
                  >
                    {link.label}
                    {/* the same word in the brand gradient fades in on top */}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-0 bg-linear-15 from-primary to-highlight bg-clip-text text-transparent opacity-0 transition-opacity group-hover/link:opacity-100",
                        ease,
                      )}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <WildAgButton href={contact.href} variant="gradient">
                {contact.label}
              </WildAgButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
