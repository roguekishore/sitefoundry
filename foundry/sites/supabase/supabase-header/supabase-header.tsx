import type { ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { SupabaseButton } from "@foundry/supabase-button";
import "./supabase-header.css";

export interface SupabaseHeaderLink {
  label: string;
  href: string;
  /** one short line under the label inside a dropdown */
  description?: string;
}

export interface SupabaseHeaderNavItem {
  label: string;
  /** where a plain link goes (ignored when it has a menu) */
  href?: string;
  /** links shown in a small dropdown on hover or focus; the item gets a chevron */
  menu?: SupabaseHeaderLink[];
}

export interface SupabaseHeaderProps {
  /** the wordmark (icon + name) */
  logo: ReactNode;
  /** where the wordmark links to */
  logoHref?: string;
  /** the centre-left navigation */
  nav: SupabaseHeaderNavItem[];
  /** a quiet counter link before the buttons, e.g. a repository's stars (icon + figure) */
  counter?: { label: ReactNode; href: string };
  /** the small outline button */
  signIn: { label: string; href: string };
  /** the small green button */
  cta: { label: string; href: string };
  /** screen-reader label of the phone menu button */
  menuLabel?: string;
  className?: string;
}

/** A 65px sticky bar, 90% opaque with blur: wordmark, nav with dropdowns, counter and two small buttons. */
export function SupabaseHeader({ logo, logoHref = "/", nav, counter, signIn, cta, menuLabel = "Menu", className }: SupabaseHeaderProps) {
  return (
    <div className={cn("sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm", className)}>
      <div className="mx-auto flex h-16 max-w-page box-content items-center px-gutter">
        <a href={logoHref} className="flex shrink-0 items-center text-foreground">
          {logo}
        </a>

        <nav className="ml-10 hidden items-center gap-5 lg:flex">
          {nav.map((item) =>
            item.menu ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex h-16 items-center gap-1 text-[0.9375rem] text-foreground transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within:text-primary group-hover:text-primary motion-reduce:transition-none"
                >
                  {item.label}
                  <ChevronDown className="size-3.5 opacity-60 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180 motion-reduce:transition-none" />
                </button>
                <div className="invisible absolute top-full left-1/2 w-72 -translate-x-1/2 pt-1 opacity-0 transition-opacity duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                  <ul className="grid gap-0.5 rounded-xl border border-border bg-popover p-2 text-popover-foreground shadow-lg shadow-foreground/5">
                    {item.menu.map((link) => (
                      <li key={link.label}>
                        <a href={link.href} className="block rounded-md px-3 py-2 transition-colors duration-150 hover:bg-accent">
                          <span className="block text-sm text-foreground">{link.label}</span>
                          {link.description && <span className="block text-xs text-muted-foreground">{link.description}</span>}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.9375rem] text-foreground transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-primary motion-reduce:transition-none"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="supabase-header-actions ml-auto hidden items-center gap-2 lg:flex">
          {counter && (
            <a
              href={counter.href}
              className="mr-2 flex h-[1.625rem] items-center gap-2 rounded-md px-2 text-xs text-foreground/75 transition-colors duration-200 hover:bg-foreground/4 hover:text-foreground [&_svg]:size-[1.125rem]"
            >
              {counter.label}
            </a>
          )}
          <SupabaseButton href={signIn.href} variant="outline" size="sm">
            {signIn.label}
          </SupabaseButton>
          <SupabaseButton href={cta.href} size="sm">
            {cta.label}
          </SupabaseButton>
        </div>

        {/* phones: a disclosure, so the menu needs no JavaScript */}
        <details className="group/menu ml-auto lg:hidden">
          <summary className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md text-foreground/70 [&::-webkit-details-marker]:hidden" aria-label={menuLabel}>
            <Menu className="size-5 group-open/menu:hidden" strokeWidth={1.5} />
            <X className="hidden size-5 group-open/menu:block" strokeWidth={1.5} />
          </summary>
          <div className="absolute inset-x-0 top-16 hidden h-[calc(100svh-4rem)] group-open/menu:block overflow-y-auto border-t border-border bg-background px-gutter pt-6 pb-10">
            <ul className="grid gap-1">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.menu ? (
                    <>
                      <p className="py-2 text-base text-foreground">{item.label}</p>
                      <ul className="mb-2 grid gap-1 border-l border-border pl-4">
                        {item.menu.map((link) => (
                          <li key={link.label}>
                            <a href={link.href} className="block py-1.5 text-sm text-muted-foreground">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a href={item.href} className="block py-2 text-base text-foreground">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <SupabaseButton href={signIn.href} variant="outline">
                {signIn.label}
              </SupabaseButton>
              <SupabaseButton href={cta.href}>{cta.label}</SupabaseButton>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
