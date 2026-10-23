import { ChevronDown, Equal } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LevelsButton } from "@foundry/levels-button";
import { LevelsWordmark } from "@foundry/levels-wordmark";

export interface LevelsHeaderLink {
  /** the item's text */
  label: string;
  /** where it goes */
  href: string;
  /** sub-links: turns the item into a small hover dropdown with a chevron */
  items?: { label: string; href: string }[];
}

export interface LevelsHeaderProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** where the wordmark links */
  brandHref?: string;
  /** the centred nav items (four on the original) */
  links: LevelsHeaderLink[];
  /** the quiet text link before the button (e.g. sign in) */
  secondary?: { label: string; href: string };
  /** the small white button on the right */
  action: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel?: string;
  className?: string;
}

const linkClass =
  "text-sm text-foreground/80 transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-foreground motion-reduce:transition-none";

/** Fixed, translucent ink bar with centred nav. */
export function LevelsHeader({ brand, brandHref = "#", links, secondary, action, menuLabel, className }: LevelsHeaderProps) {
  return (
    <header
      className={cn(
        "dark fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/85 px-gutter text-foreground backdrop-blur-md",
        className,
      )}
    >
      <div className="relative mx-auto flex h-[4.5rem] max-w-[calc(var(--page-width)+5rem)] items-center">
        <LevelsWordmark brand={brand} href={brandHref} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
          {links.map((link) =>
            link.items?.length ? (
              <div key={link.label} className="group relative">
                <a href={link.href} className={cn(linkClass, "inline-flex items-center gap-1 py-6 group-hover:text-foreground")}>
                  {link.label}
                  <ChevronDown aria-hidden className="size-4" strokeWidth={1.75} />
                </a>
                <div className="pointer-events-none invisible absolute top-full left-1/2 w-52 -translate-x-1/2 rounded-lg border border-border bg-card p-2 opacity-0 transition-opacity duration-150 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 motion-reduce:transition-none">
                  {link.items.map((item) => (
                    <a key={item.label} href={item.href} className={cn(linkClass, "block rounded-md px-3 py-2 hover:bg-foreground/5")}>
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

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          {secondary ? (
            <a href={secondary.href} className={cn(linkClass, "px-1")}>
              {secondary.label}
            </a>
          ) : null}
          <LevelsButton href={action.href} size="sm">
            {action.label}
          </LevelsButton>
        </div>

        <details className="group ml-auto lg:hidden">
          <summary
            aria-label={menuLabel}
            className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-foreground/15 text-foreground [&::-webkit-details-marker]:hidden"
          >
            <Equal aria-hidden className="size-5" strokeWidth={1.75} />
          </summary>
          <nav className="absolute inset-x-0 top-full -mx-gutter flex flex-col border-t border-foreground/10 bg-background px-gutter pt-2 pb-6">
            {links.flatMap((link) => [link, ...(link.items ?? [])]).map((link) => (
              <a key={link.label} href={link.href} className="border-b border-foreground/10 py-4 text-base text-foreground/86">
                {link.label}
              </a>
            ))}
            {secondary ? (
              <a href={secondary.href} className="py-4 text-base text-foreground/86">
                {secondary.label}
              </a>
            ) : null}
            <LevelsButton href={action.href} block className="mt-2">
              {action.label}
            </LevelsButton>
          </nav>
        </details>
      </div>
    </header>
  );
}
