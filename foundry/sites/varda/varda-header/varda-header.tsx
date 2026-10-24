import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./varda-header.css";

export interface VardaHeaderAction {
  /** the cell's label */
  label: string;
  href: string;
  /** a line icon at the cell's right (e.g. a lucide icon) */
  icon: ReactNode;
}

export interface VardaHeaderLink {
  label: string;
  href: string;
}

export interface VardaHeaderProps {
  /** the wordmark, set in wide capitals */
  name: string;
  /** the brand glyph shown in the logo cell (stays when the header collapses) */
  icon: ReactNode;
  /** where the logo cell links to */
  homeHref?: string;
  /** the two labelled link cells on desktop (e.g. jobs and contact) */
  actions: VardaHeaderAction[];
  /** label of the menu cell */
  menuLabel: string;
  /** accessible name of the menu button while the menu is open */
  closeLabel: string;
  /** the links listed in the full-screen menu */
  menu: VardaHeaderLink[];
  /** pixels scrolled before the header collapses (default: half the window height) */
  collapseAt?: number;
  className?: string;
}

/** pale fill with navy text on hover (timing in varda-header.css) */
const hover = "varda-header-cell hover:bg-accent hover:text-accent-foreground";
/** the labels that fade away when the header collapses */
const fades = "varda-header-cell group-data-[compact=true]/header:opacity-0";

/** Fixed grid-cell header that collapses to two squares after the first screen. */
export function VardaHeader({
  name,
  icon,
  homeHref = "#",
  actions,
  menuLabel,
  closeLabel,
  menu,
  collapseAt,
  className,
}: VardaHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const check = () => setScrolled(window.scrollY > (collapseAt ?? window.innerHeight * 0.5));
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [collapseAt]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const compact = scrolled || open;

  return (
    <header
      data-compact={compact}
      className={cn("varda-header group/header pointer-events-none fixed inset-x-0 top-0 z-40 text-foreground lg:px-gutter lg:pt-gutter", className)}
    >
      {/* full-screen menu, behind the cells */}
      <nav
        aria-hidden={!open}
        className={cn(
          "varda-header-cell pointer-events-auto fixed inset-0 -z-10 overflow-y-auto bg-background px-gutter pt-36 pb-12 lg:pt-40",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <ul className="mx-auto max-w-page border-t border-border">
          {menu.map((link) => (
            <li key={link.label} className="border-b border-border">
              <a
                href={link.href}
                tabIndex={open ? undefined : -1}
                onClick={() => setOpen(false)}
                className={cn("flex items-center justify-between gap-4 px-gutter py-4 font-display text-[2rem]/[1.15] font-medium tracking-[-0.02em] lg:py-6 lg:text-[3.42rem]/[1.15]", hover)}
              >
                {link.label}
                <ArrowUpRight aria-hidden strokeWidth={1.75} className="size-6 shrink-0 lg:size-8" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={cn(
          "varda-header-cell relative ml-auto flex max-w-page flex-col border-l border-border max-lg:w-1/3 lg:mx-auto lg:flex-row lg:border-l-0",
          "max-lg:group-data-[compact=true]/header:w-16 max-lg:group-data-[compact=true]/header:bg-background",
        )}
      >
        {/* logo cell: icon top right and wordmark bottom left on phones, side by side on desktop */}
        <a
          href={homeHref}
          aria-label={name}
          className={cn(
            "pointer-events-auto relative h-[9.6875rem] shrink-0 overflow-clip border-b border-border lg:flex lg:h-18 lg:w-1/6 lg:items-center lg:gap-3 lg:border lg:border-foreground lg:bg-background lg:px-4.5",
            "max-lg:group-data-[compact=true]/header:h-16 lg:group-data-[compact=true]/header:w-18",
            hover,
          )}
        >
          <span aria-hidden className="absolute top-3 right-3.5 grid size-9 shrink-0 place-items-center lg:static [&_svg]:size-9">
            {icon}
          </span>
          <span
            aria-hidden
            className={cn("absolute bottom-3 left-3 text-base/none font-extrabold tracking-[0.06em] uppercase lg:static lg:text-[clamp(1.125rem,1.67vw,1.5rem)]", fades)}
          >
            {name}
          </span>
        </a>

        {/* see-through spacer cells (desktop) */}
        <span
          aria-hidden
          className="varda-header-cell hidden flex-1 border-y border-foreground lg:block group-data-[compact=true]/header:border-transparent"
        />

        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            tabIndex={compact ? -1 : undefined}
            className={cn(
              "pointer-events-auto hidden h-18 w-1/6 items-center justify-between gap-3 border-y border-l border-foreground bg-background px-3.5 text-[1.0625rem]/none lg:flex [&_svg]:size-9 [&_svg]:shrink-0 [&_svg]:stroke-[1.25]",
              "group-data-[compact=true]/header:invisible group-data-[compact=true]/header:opacity-0",
              hover,
            )}
          >
            {action.label}
            <span aria-hidden>{action.icon}</span>
          </a>
        ))}

        {/* menu cell: hamburger top right and label bottom left on phones, label then icon on desktop */}
        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? closeLabel : menuLabel}
          onClick={() => setOpen((o) => !o)}
          className={cn(
            "pointer-events-auto relative h-[6.5625rem] shrink-0 cursor-pointer overflow-clip border-b border-border text-left lg:flex lg:h-18 lg:w-1/6 lg:flex-row-reverse lg:items-center lg:justify-between lg:border lg:border-foreground lg:bg-background lg:pr-4 lg:pl-3.5",
            "max-lg:group-data-[compact=true]/header:h-16 lg:group-data-[compact=true]/header:w-18",
            hover,
          )}
        >
          <span aria-hidden className="absolute top-4 right-4 lg:static">
            {open ? <X strokeWidth={2} className="size-8" /> : <Menu strokeWidth={2.25} className="size-8" />}
          </span>
          <span aria-hidden className={cn("absolute bottom-3 left-3 text-base/none lg:static lg:text-[1.0625rem]/none", fades)}>
            {menuLabel}
          </span>
        </button>
      </div>
    </header>
  );
}
