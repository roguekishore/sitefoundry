import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, type LucideIcon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidButton } from "@foundry/plaid-button";
import { PlaidWordmark } from "@foundry/plaid-wordmark";

export interface PlaidHeaderLink {
  label: string;
  href: string;
  /** shows a chevron: the link stands for a menu */
  menu?: boolean;
}

export interface PlaidHeaderProps {
  /** the wordmark */
  brand: { name: string; href: string; icon: LucideIcon };
  /** the links in the middle of the pill (hidden on phones, listed in the menu panel instead) */
  links: PlaidHeaderLink[];
  /** the outlined 'log in' link */
  login: { label: string; href: string };
  /** the near-black call to action */
  cta: { label: string; href: string };
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Plaid's floating pill nav; hides while scrolling down, returns on scrolling up. */
export function PlaidHeader({ brand, links, login, cta, menuLabel, className }: PlaidHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 120 && y > last + 2) setHidden(true);
      else if (y < last - 2 || y <= 120) setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-6 z-50 px-[0.8125rem] transition-[opacity,translate] duration-300 ease-out motion-reduce:transition-none lg:px-gutter",
        hidden && !open && "pointer-events-none -translate-y-10 opacity-0",
        className,
      )}
    >
      <nav className="relative mx-auto flex h-14 max-w-[70.625rem] items-center rounded-full bg-card/70 pr-3 pl-6 text-primary backdrop-blur-md lg:h-[4.4375rem] lg:pr-5">
        <PlaidWordmark {...brand} />
        <ul className="mx-6 hidden flex-1 items-center justify-evenly lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-base font-medium transition-colors duration-150 ease-out hover:bg-background/50 motion-reduce:transition-none"
              >
                {l.label}
                {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden items-center gap-[1.125rem] lg:flex">
          <PlaidButton href={login.href} variant="outline" size="md">
            {login.label}
          </PlaidButton>
          <PlaidButton href={cta.href} size="md">
            {cta.label}
          </PlaidButton>
        </div>
        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="ml-auto grid size-11 place-items-center rounded-full transition-colors duration-150 hover:bg-background/50 lg:hidden"
        >
          {open ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        </button>

        {open && (
          <div className="absolute inset-x-0 top-[calc(100%+0.5rem)] rounded-[1.75rem] bg-card p-6 shadow-[0_20px_40px_-16px] shadow-foreground/25 lg:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center justify-between border-b border-border py-3 text-lg font-medium">
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4 -rotate-90" />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex gap-3">
              <PlaidButton href={login.href} variant="outline" size="md" className="flex-1">
                {login.label}
              </PlaidButton>
              <PlaidButton href={cta.href} size="md" className="flex-1">
                {cta.label}
              </PlaidButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
