import { type ReactNode, useEffect, useState } from "react";
import { ChevronDown, Search, User } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LedupButton } from "@foundry/ledup-button";

export interface LedupHeaderLink {
  /** the link text */
  label: string;
  href: string;
  /** shows a small chevron (the original opens a mega menu there) */
  hasMenu?: boolean;
}

export interface LedupHeaderProps {
  /** the wordmark text */
  brand: string;
  /** where the wordmark goes */
  brandHref?: string;
  /** the links in the centre pill (four in the original) */
  links: LedupHeaderLink[];
  /** the taupe pill at the right */
  cta: { label: string; href: string };
  /** the search circle */
  search?: { label: string; href: string };
  /** the account circle */
  account?: { label: string; href: string };
  /** screen-reader labels for the phone menu button */
  menuLabels?: { open: string; close: string };
  className?: string;
}

export function LedupHeader({
  brand,
  brandHref = "#",
  links,
  cta,
  search,
  account,
  menuLabels = { open: "Open menu", close: "Close menu" },
  className,
}: LedupHeaderProps) {
  const [open, setOpen] = useState(false);

  // Lock the page behind the open phone menu.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 font-sans text-foreground", className)}>
      <div className="relative z-10 mx-auto flex max-w-page items-center px-gutter pt-6 lg:pt-10">
        <a href={brandHref} className="font-display text-[1.75rem] leading-10 font-semibold tracking-[-0.04em] italic lg:text-[2rem]">
          {brand}
        </a>

        <nav className="ml-20 hidden h-10 max-w-[48.5rem] flex-1 items-center justify-center gap-2 rounded-full bg-muted/75 backdrop-blur-xl lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-10 items-center gap-2 rounded-full px-5 text-sm transition-colors duration-100 ease-in-out hover:bg-secondary motion-reduce:transition-none"
            >
              {link.label}
              {link.hasMenu && <ChevronDown aria-hidden strokeWidth={1.5} className="size-3.5" />}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2.5 lg:flex">
          <LedupButton href={cta.href} className="text-[0.9375rem]">
            {cta.label}
          </LedupButton>
          {search && <Circle href={search.href} label={search.label} icon={<Search strokeWidth={1.5} className="size-3.5" />} />}
          {account && <Circle href={account.href} label={account.label} icon={<User strokeWidth={2} className="size-4" />} />}
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? menuLabels.close : menuLabels.open}
          onClick={() => setOpen((o) => !o)}
          className="relative ml-auto flex size-10 flex-col items-end justify-center gap-2 lg:hidden"
        >
          <span
            className={cn(
              "h-px w-[1.625rem] bg-foreground transition-transform duration-300 motion-reduce:transition-none",
              open && "translate-y-[4.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-[1.625rem] bg-foreground transition-transform duration-300 motion-reduce:transition-none",
              open && "-translate-y-[4.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 flex flex-col bg-background px-gutter pt-28 pb-10 transition-opacity duration-300 lg:hidden motion-reduce:transition-none",
          open ? "opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav className="flex flex-col">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="border-b border-border py-4 text-2xl">
              {link.label}
            </a>
          ))}
        </nav>
        <LedupButton href={cta.href} className="mt-10 self-start">
          {cta.label}
        </LedupButton>
      </div>
    </header>
  );
}

function Circle({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid size-9 place-items-center rounded-full bg-primary/90 text-primary-foreground backdrop-blur-md transition-colors duration-100 ease-in-out hover:bg-foreground/85 motion-reduce:transition-none"
    >
      {icon}
    </a>
  );
}
