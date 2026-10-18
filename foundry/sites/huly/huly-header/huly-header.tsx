import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HulyButton } from "@foundry/huly-button";

export interface HulyHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron after the label */
  hasMenu?: boolean;
}

export interface HulyHeaderProps {
  /** wordmark next to the logo; also the home link's label */
  brand: string;
  /** logo mark (an svg or img) shown before the wordmark */
  logo?: ReactNode;
  homeHref?: string;
  links: HulyHeaderLink[];
  /** quiet link with an icon before the buttons (e.g. "Star us") */
  star?: { label: string; href: string; icon?: ReactNode };
  /** small outline pills at the right end (e.g. log in, sign up) */
  actions?: { label: string; href: string }[];
  /** label of the phone menu button, for screen readers */
  menuLabel?: string;
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  /** absolute floats over the next block; sticky stays on screen */
  position?: "absolute" | "sticky" | "static";
  className?: string;
}

export function HulyHeader({
  brand,
  logo,
  homeHref = "/",
  links,
  star,
  actions = [],
  menuLabel = "Menu",
  tone = "dark",
  position = "absolute",
  className,
}: HulyHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={cn(
        "inset-x-0 top-0 z-40 text-foreground",
        tone === "dark" && "dark",
        position === "absolute" && "absolute",
        position === "sticky" && "sticky bg-background/80 backdrop-blur",
        open && "bg-background",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-page items-center gap-6 px-gutter">
        <a href={homeHref} aria-label={brand} className="flex items-center gap-1.5 font-display text-2xl font-bold tracking-[-0.04em] [&_svg]:size-6">
          {logo}
          <span>{brand}</span>
        </a>

        <nav className="ml-16 hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 text-[0.9375rem] font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-foreground/70"
            >
              {link.label}
              {link.hasMenu && <ChevronDown className="size-3.5 opacity-60" />}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-4 lg:flex">
          {star && (
            <a href={star.href} className="flex items-center gap-1.5 text-[0.9375rem] transition-colors duration-200 hover:text-foreground/70 [&_svg]:size-5">
              {star.icon}
              {star.label}
            </a>
          )}
          {actions.map((a) => (
            <HulyButton key={a.href} href={a.href} size="sm" className="border-foreground/25 bg-transparent">
              {a.label}
            </HulyButton>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative ml-auto size-10 lg:hidden"
        >
          {/* two bars that cross into an X */}
          <span
            className={cn(
              "absolute right-1.5 h-0.5 w-7 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
              open ? "top-[19px] rotate-45" : "top-[14px]",
            )}
          />
          <span
            className={cn(
              "absolute right-1.5 h-0.5 w-7 rounded-full bg-foreground transition-transform duration-300 motion-reduce:transition-none",
              open ? "top-[19px] -rotate-45" : "top-[24px]",
            )}
          />
        </button>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-4rem)] overflow-y-auto bg-background px-gutter pt-4 pb-10 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-border py-4 font-display text-2xl font-medium tracking-[-0.03em]"
            >
              {link.label}
              {link.hasMenu && <ChevronDown className="size-5 opacity-50" />}
            </a>
          ))}
          {star && (
            <a href={star.href} className="mt-6 flex items-center gap-2 text-base text-muted-foreground [&_svg]:size-5">
              {star.icon}
              {star.label}
            </a>
          )}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {actions.map((a, i) => (
              <HulyButton key={a.href} href={a.href} variant={i === actions.length - 1 ? "glow" : "outline"} className="px-4">
                {a.label}
              </HulyButton>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
