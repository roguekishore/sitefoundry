import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookV2Button } from "@foundry/growthbook-v2-button";

export interface GrowthbookV2NavLink {
  label: string;
  href: string;
  /** show a small chevron (the original opens a menu there) */
  menu?: boolean;
}

export interface GrowthbookV2HeaderAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface GrowthbookV2HeaderProps {
  /** the strip above the nav; leave out to hide it */
  announcement?: { text: string; linkLabel: string; href: string };
  /** the wordmark (text, svg or img) */
  brand: ReactNode;
  /** where the wordmark links to */
  brandHref?: string;
  /** the main links */
  links: GrowthbookV2NavLink[];
  /** the round pill after the links, e.g. repository stars */
  pill?: { icon?: ReactNode; label: string; href: string; ariaLabel?: string };
  /** the quiet text link before the buttons */
  signIn?: { label: string; href: string };
  /** the buttons on the right, outline first */
  actions: GrowthbookV2HeaderAction[];
  /** label of the burger button, for screen readers */
  menuLabel?: string;
  className?: string;
}

export function GrowthbookV2Header({
  announcement,
  brand,
  brandHref = "/",
  links,
  pill,
  signIn,
  actions,
  menuLabel = "Menu",
  className,
}: GrowthbookV2HeaderProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Desktop only (the class is lg:): hide while scrolling down past the first 160px, show on the way up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 160);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillEl = pill && (
    <a
      href={pill.href}
      aria-label={pill.ariaLabel}
      className="flex h-[2.625rem] items-center gap-3 rounded-full bg-card px-3 text-xs text-card-foreground shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_6%,transparent)] transition-colors duration-250 hover:text-primary motion-reduce:transition-none"
    >
      {pill.icon && <span className="flex [&_svg]:size-6">{pill.icon}</span>}
      {pill.label}
    </a>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-40 text-foreground transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
        hidden && !open && "lg:-translate-y-full",
        className,
      )}
    >
      {announcement && (
        <div className="bg-primary px-gutter py-2 text-center text-[0.9375rem]/[1.55] text-primary-foreground lg:text-sm/[1.65]">
          <p className="mx-auto flex max-w-page flex-col items-center lg:flex-row lg:justify-center lg:gap-4">
            <span className="text-balance">{announcement.text}</span>
            <a href={announcement.href} className="underline underline-offset-4 transition-opacity duration-250 hover:opacity-90">
              {announcement.linkLabel}
            </a>
          </p>
        </div>
      )}
      <div className="border-b border-border bg-background">
        <nav className="mx-auto flex h-[4.375rem] max-w-[calc(var(--page-width)+var(--page-gutter)*2)] items-center gap-10 px-gutter lg:h-20">
          <a href={brandHref} className="flex shrink-0 items-center">
            {brand}
          </a>
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="flex items-center gap-1.5 text-[0.9375rem] text-foreground transition-colors duration-250 hover:text-primary motion-reduce:transition-none">
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-auto flex items-center gap-4 lg:ml-0">{pillEl}</div>
          <div className="hidden items-center gap-3 lg:ml-auto lg:flex">
            {signIn && (
              <a href={signIn.href} className="mr-4 text-sm text-foreground transition-colors duration-250 hover:text-primary motion-reduce:transition-none">
                {signIn.label}
              </a>
            )}
            {actions.map((a) => (
              <GrowthbookV2Button key={a.label} href={a.href} variant={a.variant ?? "primary"} size="sm">
                {a.label}
              </GrowthbookV2Button>
            ))}
          </div>
          <button
            type="button"
            aria-label={menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="-mr-1 flex size-10 items-center justify-center lg:hidden"
          >
            {open ? <X className="size-7" strokeWidth={1.75} /> : <Menu className="size-7" strokeWidth={1.75} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border px-gutter pt-4 pb-6 lg:hidden">
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.label} className="border-b border-border">
                  <a href={l.href} className="flex items-center justify-between py-4 text-lg">
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-5" strokeWidth={1.75} />}
                  </a>
                </li>
              ))}
              {signIn && (
                <li>
                  <a href={signIn.href} className="block py-4 text-lg">
                    {signIn.label}
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-2 flex flex-col gap-3">
              {actions.map((a) => (
                <GrowthbookV2Button key={a.label} href={a.href} variant={a.variant ?? "primary"} fullOnMobile>
                  {a.label}
                </GrowthbookV2Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
