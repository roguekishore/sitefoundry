import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerButton } from "@foundry/reckoner-button";
import { ReckonerWordmark, type ReckonerWordmarkProps } from "@foundry/reckoner-wordmark";

export interface ReckonerHeaderLink {
  label: string;
  href: string;
  /** links shown in a small dropdown under this one (desktop) and indented in the phone menu */
  children?: { label: string; href: string }[];
}

export interface ReckonerHeaderProps {
  /** the lockup at the left */
  brand: ReckonerWordmarkProps;
  /** the links in the tray (desktop) and the menu panel (phones) */
  links: ReckonerHeaderLink[];
  /** the solid button at the end of the tray */
  cta: { label: string; href: string };
  /** screen-reader names of the menu button */
  menuLabels?: { open: string; close: string };
  className?: string;
}

/**
 * Wordmark and a translucent nav tray over a dark band. Fixed on phones (on the band's own
 * colour), absolute from lg up so it scrolls away with the hero.
 */
export function ReckonerHeader({
  brand,
  links,
  cta,
  menuLabels = { open: "Open menu", close: "Close menu" },
  className,
}: ReckonerHeaderProps) {
  const [open, setOpen] = useState(false);

  // close the phone menu when the window grows past the phone layout
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 64rem)");
    const onChange = () => wide.matches && setOpen(false);
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={cn("dark fixed inset-x-0 top-0 z-50 bg-background text-foreground lg:absolute lg:bg-transparent", className)}>
      <div className="mx-auto flex h-[5.125rem] max-w-page items-center justify-between px-gutter lg:h-[5.625rem] lg:items-start lg:pt-5">
        <ReckonerWordmark {...brand} className="lg:mt-[0.4375rem]" />

        <nav className="hidden items-center bg-foreground/[0.06] p-1 lg:flex">
          {links.map((link) => (
            <div key={link.label} className="group relative">
              <a
                href={link.href}
                className="flex h-[2.625rem] items-center gap-1.5 px-5 text-sm font-semibold tracking-[0.01em] transition-colors duration-500 ease-[ease] hover:bg-glow/15 motion-reduce:transition-none"
              >
                {link.label}
                {link.children?.length ? <ChevronDown aria-hidden className="size-3 opacity-40" /> : null}
              </a>
              {link.children?.length ? (
                <ul className="invisible absolute top-full left-0 min-w-56 translate-y-1 bg-popover p-1 opacity-0 transition-[opacity,translate,visibility] duration-150 ease-[ease] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block px-4 py-3 text-sm text-popover-foreground transition-colors duration-500 hover:bg-glow/15"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
          <ReckonerButton href={cta.href} variant="primary" className="ml-1 h-[2.625rem] px-5">
            {cta.label}
          </ReckonerButton>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? menuLabels.close : menuLabels.open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center bg-foreground/[0.06] lg:hidden [&_svg]:size-5"
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100svh-5.125rem)] overflow-y-auto border-t border-border px-gutter pt-8 pb-10 lg:hidden">
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[1.375rem] leading-none tracking-[-0.02em]" onClick={() => setOpen(false)}>
                  {link.label}
                </a>
                {link.children?.length ? (
                  <ul className="mt-4 flex flex-col gap-3 pl-4">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <ReckonerButton href={cta.href} variant="primary" block className="mt-10">
            {cta.label}
          </ReckonerButton>
        </nav>
      )}
    </header>
  );
}
