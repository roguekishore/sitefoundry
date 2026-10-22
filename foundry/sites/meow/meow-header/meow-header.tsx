import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { MeowButton } from "@foundry/meow-button";
import { MeowMark, type MeowMarkProps } from "@foundry/meow-mark";

export interface MeowHeaderMenuItem {
  label: string;
  /** one short line under the label */
  description?: string;
  href: string;
}

export interface MeowHeaderNavItem {
  label: string;
  /** a plain link when set and there are no items */
  href?: string;
  /** links shown in the drop-down panel (and in the phone menu) */
  items?: MeowHeaderMenuItem[];
}

export interface MeowHeaderProps {
  /** the logo */
  mark: MeowMarkProps;
  /** the navigation, left-aligned after the logo */
  nav: MeowHeaderNavItem[];
  /** the quiet link on the right, e.g. "Log in" */
  signIn?: { label: string; href: string };
  /** the orange button on the right */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** rest transparent with light text, for pages that open with a dark hero */
  overDark?: boolean;
  /** fixed to the window (the page's header) or in the flow (previews) */
  position?: "fixed" | "static";
  className?: string;
}

/**
 * Meow's top bar. Resting over the dark hero it is see-through with white text; once the
 * page scrolls (or the pointer is on it, or the phone menu is open) it turns into a white,
 * slightly see-through bar with ink text and a hairline underneath.
 */
export function MeowHeader({ mark, nav, signIn, cta, menuLabel, overDark = true, position = "fixed", className }: MeowHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !overDark || scrolled || hovered || open;

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        position === "fixed" ? "fixed inset-x-0 top-0" : "relative",
        "z-40 border-b text-foreground transition-[background-color,border-color,color] duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none",
        solid ? "border-border bg-background/80 backdrop-blur-md" : "dark border-transparent bg-transparent",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-page items-center px-gutter">
        <MeowMark {...mark} />

        <nav className="ml-12 hidden h-full items-center gap-6 lg:flex">
          {nav.map((item) => (
            <div key={item.label} className="group/nav relative flex h-full items-center">
              {item.items?.length ? (
                <button type="button" className="text-sm text-foreground transition-colors hover:text-foreground/70 motion-reduce:transition-none">
                  {item.label}
                </button>
              ) : (
                <a href={item.href} className="text-sm text-foreground transition-colors hover:text-foreground/70 motion-reduce:transition-none">
                  {item.label}
                </a>
              )}
              {item.items?.length ? (
                <div className="invisible absolute top-full left-[-1.25rem] w-[22rem] pt-1 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within/nav:visible group-focus-within/nav:opacity-100 group-hover/nav:visible group-hover/nav:opacity-100 motion-reduce:transition-none">
                  <ul className="rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-[0_12px_32px_-12px_color-mix(in_oklab,var(--foreground)_25%,transparent)]">
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href} className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-muted motion-reduce:transition-none">
                          <span className="block text-sm font-semibold">{sub.label}</span>
                          {sub.description && <span className="mt-0.5 block text-[0.8125rem]/[1.125rem] text-muted-foreground">{sub.description}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          {signIn && (
            <MeowButton variant="ghost" size="sm" href={signIn.href} className="px-3 font-normal">
              {signIn.label}
            </MeowButton>
          )}
          <MeowButton size="sm" arrow href={cta.href}>
            {cta.label}
          </MeowButton>
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="-mr-2 ml-auto flex size-10 items-center justify-center lg:hidden"
        >
          {open ? <X aria-hidden className="size-6" strokeWidth={1.5} /> : <Menu aria-hidden className="size-6" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-page flex-col px-gutter py-4">
            {nav.map((item) =>
              item.items?.length ? (
                <div key={item.label} className="border-b border-border py-3">
                  <p className="text-[0.8125rem] text-muted-foreground">{item.label}</p>
                  <ul className="mt-1">
                    {item.items.map((sub) => (
                      <li key={sub.label}>
                        <a href={sub.href} className="block py-2 text-base font-semibold">
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <a key={item.label} href={item.href} className="border-b border-border py-4 text-base font-semibold">
                  {item.label}
                </a>
              ),
            )}
            <div className="mt-5 grid gap-3">
              {signIn && (
                <MeowButton variant="outline" href={signIn.href}>
                  {signIn.label}
                </MeowButton>
              )}
              <MeowButton arrow href={cta.href}>
                {cta.label}
              </MeowButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
