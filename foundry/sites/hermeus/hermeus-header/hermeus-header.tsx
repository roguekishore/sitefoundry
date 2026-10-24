import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface HermeusHeaderLink {
  label: string;
  href: string;
}

export interface HermeusHeaderProps {
  /** the wordmark, set in bold tracked capitals */
  name: string;
  /** where the wordmark links to */
  homeHref?: string;
  /** the navigation links (shown in capitals) */
  links: HermeusHeaderLink[];
  /** accessible name of the phone menu button */
  menuLabel: string;
  /** accessible name of the button that closes the phone menu */
  closeLabel: string;
  className?: string;
}

/** amber on hover, 0.25s ease-[ease-in-out] like the original's links */
const link = "transition-colors duration-250 ease-[ease-in-out] hover:text-primary motion-reduce:transition-none";

/** Transparent sticky bar: wordmark left, small uppercase links right, full-screen menu on phones. */
export function HermeusHeader({ name, homeHref = "#", links, menuLabel, closeLabel, className }: HermeusHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cn("sticky top-0 z-40 h-[3.625rem] text-secondary-foreground lg:h-[5.875rem]", className)}>
      <div className="mx-auto flex h-full max-w-page items-center justify-between gap-8 px-gutter">
        <a
          href={homeHref}
          className={cn("text-[clamp(0.95rem,0.85rem+0.4vw,1.2rem)]/none font-bold tracking-[0.1em] uppercase", link)}
        >
          {name}
        </a>

        <nav className="hidden lg:block">
          <ul className="flex gap-[clamp(1.25rem,-0.5rem+2.4vw,1.875rem)]">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={cn("text-xs/none tracking-[0.06em] uppercase", link)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={menuLabel}
          onClick={() => setOpen(true)}
          className={cn("-mr-1 grid size-8 cursor-pointer place-items-center lg:hidden", link)}
        >
          <Menu aria-hidden strokeWidth={1} className="size-7" />
        </button>
      </div>

      {/* phone menu: a full-screen grey sheet of large capitals */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-secondary px-gutter text-secondary-foreground transition-opacity duration-300 ease-[ease-in-out] motion-reduce:transition-none lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-[3.625rem] shrink-0 items-center justify-between">
          <span className="text-[clamp(0.95rem,0.85rem+0.4vw,1.2rem)]/none font-bold tracking-[0.1em] uppercase">{name}</span>
          <button
            type="button"
            aria-label={closeLabel}
            tabIndex={open ? undefined : -1}
            onClick={() => setOpen(false)}
            className={cn("-mr-1 grid size-8 cursor-pointer place-items-center", link)}
          >
            <X aria-hidden strokeWidth={1} className="size-7" />
          </button>
        </div>
        <ul className="mt-10 border-t border-border">
          {links.map((l) => (
            <li key={l.label} className="border-b border-border">
              <a
                href={l.href}
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className={cn("block py-4 text-2xl/none tracking-[0.06em] uppercase", link)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
