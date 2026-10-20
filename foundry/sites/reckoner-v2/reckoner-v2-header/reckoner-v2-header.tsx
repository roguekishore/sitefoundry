import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ReckonerV2Button } from "@foundry/reckoner-v2-button";

export interface ReckonerV2HeaderLink {
  label: string;
  /** where the label itself goes (optional when it only opens a menu) */
  href?: string;
  /** the links in its menu; a chevron shows when there are some */
  items?: { label: string; href: string }[];
}

export interface ReckonerV2HeaderProps {
  /** the company name: the home link's label for screen readers */
  brand: string;
  /** the logo (e.g. reckoner-v2-wordmark) */
  logo: ReactNode;
  homeHref?: string;
  /** the links in the tinted group */
  links: ReckonerV2HeaderLink[];
  /** the solid button at the end of the group */
  cta?: { label: string; href: string };
  /** labels of the phone menu button, for screen readers */
  menuLabel?: string;
  closeLabel?: string;
  className?: string;
}

export function ReckonerV2Header({
  brand,
  logo,
  homeHref = "/",
  links,
  cta,
  menuLabel = "Open menu",
  closeLabel = "Close menu",
  className,
}: ReckonerV2HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-40 bg-primary text-primary-foreground lg:absolute lg:bg-transparent", className)}>
      <div className="mx-auto flex h-20 max-w-page items-center justify-between px-gutter lg:h-auto lg:pt-5">
        <a href={homeHref} aria-label={brand} className="flex items-center">
          {logo}
        </a>

        {/* desktop: one tinted group of links + the contact button */}
        <nav className="hidden items-center bg-primary-foreground/10 p-1 lg:flex">
          {links.map((link) => (
            <div key={link.label} className="group/item relative">
              <a
                href={link.href ?? link.items?.[0]?.href ?? "#"}
                className="flex h-[2.625rem] items-center gap-1.5 px-5 text-sm font-medium transition-colors duration-500 hover:bg-highlight/15 motion-reduce:transition-none"
              >
                {link.label}
                {link.items?.length ? <ChevronDown aria-hidden className="size-3 opacity-50" strokeWidth={2} /> : null}
              </a>
              {link.items?.length ? (
                <div
                  className={cn(
                    "invisible absolute top-full left-0 min-w-56 pt-2 opacity-0 transition-[opacity,visibility] duration-150 ease-[ease]",
                    "group-hover/item:visible group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:opacity-100 motion-reduce:transition-none",
                  )}
                >
                  <ul className="border border-primary-foreground/10 bg-primary p-1">
                    {link.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="block px-4 py-3 text-sm transition-colors duration-500 hover:bg-highlight/15 motion-reduce:transition-none">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
          {cta && (
            <ReckonerV2Button href={cta.href} variant="light" size="sm" className="ml-1">
              {cta.label}
            </ReckonerV2Button>
          )}
        </nav>

        {/* phones: a square tinted menu button */}
        <button
          type="button"
          aria-label={open ? closeLabel : menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center bg-primary-foreground/10 transition-colors duration-500 hover:bg-highlight/15 lg:hidden"
        >
          {open ? <X className="size-5" strokeWidth={1.25} /> : <Menu className="size-5" strokeWidth={1.25} />}
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100svh-5rem)] overflow-y-auto border-t border-primary-foreground/10 px-gutter pt-8 pb-10 lg:hidden">
          <ul className="space-y-8">
            {links.map((link) => (
              <li key={link.label}>
                {link.items?.length ? (
                  <>
                    <p className="text-[1.375rem] leading-none tracking-[-0.02em] text-primary-foreground/50">{link.label}</p>
                    <ul className="mt-4 space-y-4">
                      {link.items.map((item) => (
                        <li key={item.href}>
                          <a href={item.href} onClick={() => setOpen(false)} className="text-[1.375rem] leading-none tracking-[-0.02em]">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={link.href ?? "#"} onClick={() => setOpen(false)} className="text-[1.375rem] leading-none tracking-[-0.02em]">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
          {cta && (
            <ReckonerV2Button href={cta.href} variant="light" size="md" className="mt-10 w-full">
              {cta.label}
            </ReckonerV2Button>
          )}
        </nav>
      )}
    </header>
  );
}
