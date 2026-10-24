import { Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyWordmark } from "@foundry/formenergy-wordmark";

export interface FormenergyNavLink {
  /** link text (shown uppercase) */
  label: string;
  /** where it goes */
  href: string;
  /** links in its dropdown; a small caret shows when there are any */
  children?: { label: string; href: string }[];
}

export interface FormenergyHeaderProps {
  /** wordmark: the larger first word */
  brand: string;
  /** wordmark: the smaller tracked word under it */
  brandSuffix?: string;
  /** where the wordmark links */
  homeHref?: string;
  /** the main links, left to right */
  links: FormenergyNavLink[];
  /** screen-reader label of the phone menu button */
  menuLabel: string;
  /** true: transparent and absolutely placed over the hero · false: a black bar in the flow */
  overlay?: boolean;
  className?: string;
}

function Caret() {
  return (
    <span
      aria-hidden
      className="inline-block size-0 border-x-[4.5px] border-t-[5px] border-x-transparent border-t-current"
    />
  );
}

/** Transparent overlay header with mono uppercase links, hover dropdowns and a phone menu. */
export function FormenergyHeader({
  brand,
  brandSuffix,
  homeHref = "/",
  links,
  menuLabel,
  overlay = true,
  className,
}: FormenergyHeaderProps) {
  return (
    <header
      className={cn(
        "dark z-30 text-foreground",
        overlay ? "absolute inset-x-0 top-0" : "relative bg-background",
        className,
      )}
    >
      <div className="flex items-center justify-between px-5 pt-5 pb-4 lg:px-[1.875rem] lg:pt-[1.75rem] lg:pb-6">
        <FormenergyWordmark
          name={brand}
          suffix={brandSuffix}
          href={homeHref}
          label={brand}
          className="text-[1.45rem] lg:text-[1.8rem]"
        />

        {/* desktop links */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {links.map((link) => (
              <li key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="flex items-center gap-2.5 py-3 font-mono text-sm leading-none font-medium tracking-[0.07em] uppercase transition-colors duration-400 ease-[ease] group-focus-within:text-primary group-hover:text-primary motion-reduce:transition-none"
                >
                  {link.label}
                  {link.children && link.children.length > 0 && <Caret />}
                </a>
                {link.children && link.children.length > 0 && (
                  <ul className="invisible absolute top-full left-0 min-w-56 bg-background py-2 opacity-0 transition-opacity duration-300 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-5 py-2.5 font-mono text-[0.8125rem] leading-tight font-medium tracking-[0.04em] transition-colors duration-300 hover:text-primary focus-visible:text-primary"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* phone menu */}
        <details className="group/menu lg:hidden">
          <summary
            aria-label={menuLabel}
            className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden strokeWidth={1.5} className="size-8 group-open/menu:hidden" />
            <X aria-hidden strokeWidth={1.5} className="hidden size-8 group-open/menu:block" />
          </summary>
          <nav className="absolute inset-x-0 top-full bg-background px-5 pt-2 pb-6">
            <ul>
              {links.map((link) => (
                <li key={link.label} className="border-b border-border">
                  <a
                    href={link.href}
                    className="block py-3.5 font-mono text-sm leading-none font-medium tracking-[0.07em] uppercase transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                  </a>
                  {link.children && link.children.length > 0 && (
                    <ul className="pb-3 pl-4">
                      {link.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block py-1.5 font-mono text-[0.8125rem] leading-tight text-muted-foreground transition-colors duration-300 hover:text-primary"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
