import { useEffect, useState } from "react";
import { Equal, X } from "lucide-react";
import { EsrbespokeLabel } from "@foundry/esrbespoke-label";
import { toneClass, type EsrbespokeTone } from "@foundry/esrbespoke-tone";
import { cn } from "@foundry/foundry-utils";
import "./esrbespoke-header.css";

export interface EsrbespokeHeaderLink {
  label: string;
  href: string;
  /** the current page: marked with a small square */
  active?: boolean;
}

export interface EsrbespokeHeaderProps {
  /** the company name, top left on desktop */
  brand: string;
  /** the short wordmark shown top left on phones (set plainly in the label face, wide and bold) */
  mark: string;
  /** a short line at column 4 on desktop */
  tagline: string;
  /** the page links, stacked at column 9 */
  links: EsrbespokeHeaderLink[];
  /** the fixed contact chip */
  contact: { label: string; href: string };
  /** accessible names for the menu button and the close button */
  menuLabel?: string;
  closeLabel?: string;
  homeHref?: string;
  /** what the bar sits on: "dark" for a dark hero (white text), "light"/"charcoal" otherwise */
  tone?: EsrbespokeTone;
  className?: string;
}

const ease = "duration-300 ease-[cubic-bezier(0.19,1,0.22,1)]";

/** The site's top bar, its fixed CONTACT + menu chips and the full-screen menu. */
export function EsrbespokeHeader({
  brand,
  mark,
  tagline,
  links,
  contact,
  menuLabel = "Menu",
  closeLabel = "Close",
  homeHref = "/",
  tone = "light",
  className,
}: EsrbespokeHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className={cn("absolute inset-x-0 top-0 z-40", tone !== "light" && "dark", "text-foreground", className)}>
        <div className="grid grid-cols-2 gap-x-4 px-gutter pt-5 lg:grid-cols-12 lg:pt-7">
          <a href={homeHref} className={cn("self-start transition-opacity hover:opacity-50 lg:col-span-3", ease)}>
            <span className="block font-mono text-[1.75rem] leading-none font-bold tracking-[0.02em] uppercase font-stretch-[125%] lg:hidden">
              {mark}
            </span>
            <EsrbespokeLabel className="hidden lg:block">{brand}</EsrbespokeLabel>
          </a>
          <EsrbespokeLabel className="hidden lg:col-span-4 lg:col-start-4 lg:block">{tagline}</EsrbespokeLabel>
          <nav className="hidden lg:col-span-3 lg:col-start-9 lg:block">
            <ul className="-mt-px">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={cn(
                      "group relative block w-fit font-mono text-[0.875rem] leading-[1.25] tracking-[0.09em] uppercase font-stretch-[88%] transition-opacity hover:opacity-50",
                      ease,
                    )}
                  >
                    <span
                      aria-hidden
                      className={cn(
                        "absolute top-1/2 -left-4 size-1.5 -translate-y-1/2 bg-current transition-transform",
                        ease,
                        link.active ? "scale-100" : "scale-0 group-hover:scale-100",
                      )}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={menuLabel}
            className={cn("hidden self-start justify-self-end transition-opacity hover:opacity-50 lg:col-start-12 lg:block", ease)}
          >
            <Equal className="size-6" strokeWidth={1} />
          </button>
        </div>
      </header>

      <div className="esrbespoke-header-chips dark fixed top-5 right-gutter z-50 flex gap-1 lg:top-6">
        <a
          href={contact.href}
          className={cn("flex h-6 items-center rounded-lg bg-muted px-2 font-mono text-[0.8125rem] leading-none font-semibold tracking-[0.08em] text-foreground uppercase font-stretch-[88%] transition-opacity hover:opacity-70", ease)}
        >
          {contact.label}
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={menuLabel}
          aria-expanded={open}
          className={cn("flex size-6 items-center justify-center rounded-lg bg-muted text-foreground transition-opacity hover:opacity-70", ease)}
        >
          <Equal className="size-5" strokeWidth={1} />
        </button>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-label={menuLabel}
        className={cn(
          toneClass("dark"),
          "fixed inset-0 z-[60] flex flex-col px-gutter pt-5 pb-8 transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:pt-7",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex items-start justify-between">
          <EsrbespokeLabel>{brand}</EsrbespokeLabel>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={closeLabel}
            className={cn("flex size-6 items-center justify-center rounded-lg bg-muted transition-opacity hover:opacity-70", ease)}
          >
            <X className="size-4" strokeWidth={1.25} />
          </button>
        </div>
        <nav className="mt-auto grid grid-cols-2 gap-x-4 lg:grid-cols-12">
          <ul className="col-span-2 lg:col-span-4 lg:col-start-9">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block font-display text-[2.5rem] leading-none font-medium tracking-[-0.01em] font-stretch-[106%] transition-opacity hover:opacity-50 lg:text-[3.875rem]",
                    ease,
                    link.active && "opacity-50",
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
