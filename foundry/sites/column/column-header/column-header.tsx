import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ColumnButton } from "@foundry/column-button";

export interface ColumnNavLink {
  label: string;
  href: string;
  /** show a small chevron (the original opens a menu there) */
  menu?: boolean;
}

export interface ColumnHeaderProps {
  /** the strip above the nav: a bold lead-in, then a lighter link; leave out to hide it */
  announcement?: { text: string; linkLabel: string; href: string };
  /** the wordmark (text, svg or img) */
  brand: ReactNode;
  /** where the wordmark links to */
  brandHref?: string;
  /** the centred links */
  links: ColumnNavLink[];
  /** the quiet text link before the button */
  signIn?: { label: string; href: string };
  /** the white ringed button on the right */
  action: { label: string; href: string };
  /** label of the burger button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function ColumnHeader({ announcement, brand, brandHref = "/", links, signIn, action, menuLabel = "Menu", className }: ColumnHeaderProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Slide the nav away while scrolling down past the first 100px; bring it back on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 100);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {announcement && (
        <a
          href={announcement.href}
          className="group relative z-50 flex h-10 items-center justify-center gap-2 bg-linear-to-r from-[color-mix(in_oklab,var(--primary)_55%,var(--chart-1))] to-[color-mix(in_oklab,var(--primary)_30%,var(--chart-1))] px-gutter text-[0.9375rem] font-semibold tracking-[-0.01em] text-primary-foreground"
        >
          <span className="truncate">{announcement.text}</span>
          <span className="shrink-0 font-medium text-primary-foreground/75 transition-colors duration-200 group-hover:text-primary-foreground">
            {announcement.linkLabel}
          </span>
          <ChevronRight aria-hidden className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={2} />
        </a>
      )}
      <header
        className={cn(
          "sticky top-0 z-40 text-foreground transition-[translate,background-color,box-shadow] duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
          scrolled && "bg-background/85 shadow-[0_1px_0_var(--border)] backdrop-blur-md",
          hidden && !open && "-translate-y-full",
          className,
        )}
      >
        <nav className="mx-auto flex h-[2.8125rem] max-w-[calc(var(--page-width)+var(--page-gutter)*2)] items-center px-gutter lg:h-[3.875rem]">
          <a href={brandHref} className="flex shrink-0 items-center lg:ml-1">
            {brand}
          </a>
          <ul className="mx-auto hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex items-center gap-1.5 text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground/90 transition-colors duration-200 ease-[ease] hover:text-foreground">
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4 text-foreground/70" strokeWidth={1.75} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden items-center gap-6 lg:flex">
            {signIn && (
              <a href={signIn.href} className="text-[0.9375rem] font-medium tracking-[-0.01em] text-foreground/90 transition-colors duration-200 hover:text-foreground">
                {signIn.label}
              </a>
            )}
            <ColumnButton href={action.href} variant="secondary" icon="menu">
              {action.label}
            </ColumnButton>
          </div>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="-mr-2 ml-auto flex size-10 items-center justify-center lg:hidden"
          >
            {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border bg-background px-gutter pt-2 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.label} className="border-b border-border">
                  <a href={l.href} className="flex items-center justify-between py-3.5 text-base font-medium">
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4 text-muted-foreground" strokeWidth={1.75} />}
                  </a>
                </li>
              ))}
              {signIn && (
                <li>
                  <a href={signIn.href} className="block py-3.5 text-base font-medium">
                    {signIn.label}
                  </a>
                </li>
              )}
            </ul>
            <ColumnButton href={action.href} fullOnMobile className="mt-3">
              {action.label}
            </ColumnButton>
          </div>
        )}
      </header>
    </>
  );
}
