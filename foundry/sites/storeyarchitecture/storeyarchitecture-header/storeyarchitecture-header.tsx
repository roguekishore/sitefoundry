import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StoreyarchitectureButton } from "@foundry/storeyarchitecture-button";
import "./storeyarchitecture-header.css";

export interface StoreyarchitectureHeaderLink {
  label: string;
  href: string;
}

export interface StoreyarchitectureHeaderProps {
  /** the plain wordmark at the left */
  brand: string;
  homeHref?: string;
  /** the small links at the page's halfway line (desktop) and in the phone menu */
  links: StoreyarchitectureHeaderLink[];
  /** the black button at the right (desktop) and the last item of the phone menu */
  contact: StoreyarchitectureHeaderLink;
  /** the word that opens the phone menu */
  menuLabel: string;
  /** screen-reader label of the close button */
  closeLabel: string;
  className?: string;
}

export function StoreyarchitectureHeader({ brand, homeHref = "/", links, contact, menuLabel, closeLabel, className }: StoreyarchitectureHeaderProps) {
  const [open, setOpen] = useState(false);

  // close the phone menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={className}>
      {/* The blended layer: its own fixed box, so the blend reaches the page under it. */}
      <div className="storeyarchitecture-header-ink pointer-events-none fixed inset-x-0 top-0 z-50 grid grid-cols-6 gap-x-gutter px-gutter pt-[3vw] text-[8vw] leading-none font-[450] tracking-[-0.02em] sm:grid-cols-12 sm:pt-[1.5vw] sm:text-[2.2vw]">
        <a href={homeHref} className="pointer-events-auto col-span-3 justify-self-start sm:col-span-6">
          {brand}
        </a>
        <nav className="col-span-4 hidden items-center gap-[0.95vw] text-[1.1vw] sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="pointer-events-auto transition-opacity duration-200 hover:opacity-60">
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="pointer-events-auto col-span-3 justify-self-end leading-none sm:hidden"
        >
          {menuLabel}
        </button>
      </div>

      {/* Not blended: the solid button keeps its own colour. */}
      <div className="fixed top-[1.5vw] right-gutter z-50 hidden sm:block">
        <StoreyarchitectureButton href={contact.href} size="sm">
          {contact.label}
        </StoreyarchitectureButton>
      </div>

      {/* Phone menu: a full-screen black sheet of large links. */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-foreground font-[450] px-gutter pt-[3vw] pb-[10vw] text-background transition-opacity duration-300 sm:hidden motion-reduce:transition-none",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <div className="flex items-start justify-between text-[8vw] leading-none tracking-[-0.02em]">
          <a href={homeHref} onClick={() => setOpen(false)}>
            {brand}
          </a>
          <button type="button" aria-label={closeLabel} onClick={() => setOpen(false)}>
            <X className="size-[8vw]" strokeWidth={1.25} aria-hidden />
          </button>
        </div>
        <nav className="mt-auto flex flex-col gap-[2vw] text-[12vw] leading-none tracking-[-0.02em]">
          {[...links, contact].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
