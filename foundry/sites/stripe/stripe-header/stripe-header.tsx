import { useState, type ReactNode } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StripeButton } from "@foundry/stripe-button";

export interface StripeHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron after the label (decoration: no dropdown is built) */
  hasMenu?: boolean;
}

export interface StripeHeaderProps {
  /** the wordmark; also the home link's label */
  brand: string;
  /** optional logo shown instead of the text wordmark (an svg or img) */
  logo?: ReactNode;
  homeHref?: string;
  links: StripeHeaderLink[];
  /** quiet white button before the main action (e.g. sign in) */
  secondary?: { label: string; href: string };
  /** the indigo button at the right end */
  primary?: { label: string; href: string };
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** transparent lets the next block's art show behind the header (as on the original) */
  transparent?: boolean;
  className?: string;
}

/**
 * Light header: a bold lowercase wordmark, plain navy nav links with small chevrons, a white
 * "sign in" button and an indigo action. On phones a white square button opens a menu card.
 */
export function StripeHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  secondary,
  primary,
  menuLabel = "Menu",
  transparent = true,
  className,
}: StripeHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("relative z-30 font-sans text-foreground", !transparent && "bg-background", className)}>
      <div className="mx-auto flex h-16 max-w-page items-center gap-8 px-gutter lg:h-19">
        <a
          href={homeHref}
          aria-label={brand}
          className="font-display text-[1.6rem] leading-none font-bold tracking-[-0.06em] text-foreground [&_svg]:h-7 [&_svg]:w-auto"
        >
          {logo ?? brand}
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-normal text-foreground transition-colors duration-200 hover:text-muted-foreground"
            >
              {l.label}
              {l.hasMenu && <ChevronDown aria-hidden className="size-3.5 stroke-[2.25]" />}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          {secondary && (
            <StripeButton href={secondary.href} variant="white" size="sm" arrow={false}>
              {secondary.label}
            </StripeButton>
          )}
          {primary && (
            <StripeButton href={primary.href} size="sm">
              {primary.label}
            </StripeButton>
          )}
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto flex size-10 items-center justify-center rounded-md bg-background text-primary shadow-[0_3px_6px_0_color-mix(in_oklab,var(--foreground)_6%,transparent),0_15px_35px_0_color-mix(in_oklab,var(--foreground)_8%,transparent)] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-2 top-full rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-[0_30px_45px_-30px_color-mix(in_oklab,var(--foreground)_30%,transparent),0_18px_36px_-18px_color-mix(in_oklab,var(--foreground)_12%,transparent)] lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="flex items-center justify-between rounded-md px-3 py-3 text-base font-normal hover:bg-muted">
                {l.label}
                {l.hasMenu && <ChevronDown aria-hidden className="size-4 -rotate-90 text-muted-foreground" />}
              </a>
            ))}
          </nav>
          <div className="mt-2 grid gap-2 border-t border-border p-2 pt-4">
            {primary && (
              <StripeButton href={primary.href} className="w-full">
                {primary.label}
              </StripeButton>
            )}
            {secondary && (
              <StripeButton href={secondary.href} variant="outline" arrow={false} className="w-full">
                {secondary.label}
              </StripeButton>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
