import type { ReactNode } from "react";
import { ChevronDown, Equal } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { FramerButton } from "@foundry/framer-button";
import { FramerMark } from "@foundry/framer-mark";
import "./framer-header.css";

export interface FramerHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
  /** sub-links: adds a chevron and a small hover menu */
  items?: { label: string; href: string }[];
}

export interface FramerHeaderProps {
  /** the company name next to the mark */
  brand: string;
  /** the mark (an svg or lucide icon) */
  mark: ReactNode;
  /** nav items after the wordmark (five on the original) */
  links: FramerHeaderLink[];
  /** the quiet text link before the button (e.g. log in) */
  login: { label: string; href: string };
  /** the small white button on the far right */
  action: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

const linkClass =
  "text-sm tracking-[-0.01em] text-foreground/80 transition-colors duration-150 ease-linear hover:text-foreground motion-reduce:transition-none";

/** Fixed black bar with nav on the left and log in / sign up on the right. */
export function FramerHeader({ brand, mark, links, login, action, menuLabel, className }: FramerHeaderProps) {
  return (
    <>
      <header className={cn("fixed inset-x-0 top-0 z-50 bg-background px-gutter text-foreground", className)}>
        <div className="relative mx-auto flex h-16 max-w-page items-center">
          <FramerMark brand={brand} mark={mark} />

          <nav className="ml-7 hidden items-center gap-6 lg:flex">
            {links.map((link) =>
              link.items?.length ? (
                <div key={link.label} className="group relative">
                  <a href={link.href} className={cn(linkClass, "inline-flex items-center gap-1 py-5 group-hover:text-foreground")}>
                    {link.label}
                    <ChevronDown aria-hidden className="size-3" strokeWidth={2} />
                  </a>
                  <div className="pointer-events-none invisible absolute top-full -left-3 w-52 rounded-xl bg-popover p-1.5 opacity-0 ring-1 ring-border transition-opacity duration-200 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                    {link.items.map((item) => (
                      <a key={item.label} href={item.href} className={cn(linkClass, "block rounded-lg px-3 py-2 hover:bg-accent")}>
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ),
            )}
          </nav>

          <div className="framer-header-action ml-auto flex items-center gap-3.5">
            <a
              href={login.href}
              className="text-sm tracking-[-0.01em] text-muted-foreground transition-colors duration-150 ease-linear hover:text-foreground motion-reduce:transition-none"
            >
              {login.label}
            </a>
            <FramerButton href={action.href} size="sm">
              {action.label}
            </FramerButton>
          </div>

          <details className="group ml-4 lg:hidden">
            <summary
              aria-label={menuLabel}
              className="grid size-8 cursor-pointer list-none place-items-center text-foreground [&::-webkit-details-marker]:hidden"
            >
              <Equal aria-hidden className="size-6" strokeWidth={1.5} />
            </summary>
            <nav className="absolute inset-x-0 top-full -mx-gutter flex h-[calc(100svh-4rem)] flex-col overflow-y-auto bg-background px-gutter pt-2 pb-8">
              {links.flatMap((link) => [link, ...(link.items ?? [])]).map((link) => (
                <a key={link.label} href={link.href} className="border-b border-border py-3.5 text-lg text-foreground">
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </header>
      <div aria-hidden className="h-16" />
    </>
  );
}
