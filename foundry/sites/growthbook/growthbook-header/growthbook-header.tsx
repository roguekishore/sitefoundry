import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { GrowthbookButton } from "@foundry/growthbook-button";

export interface GrowthbookHeaderLink {
  label: string;
  href: string;
  /** shows a chevron (the original opens a menu here) */
  menu?: boolean;
}

export interface GrowthbookHeaderAction {
  label: string;
  href: string;
}

export interface GrowthbookHeaderProps {
  /** the strip above the nav; leave out to hide it */
  announcement?: { text: string; linkLabel: string; href: string };
  /** wordmark text */
  brand: string;
  /** small mark before the wordmark (an svg or lucide icon) */
  brandIcon?: ReactNode;
  brandHref?: string;
  /** main links */
  links: GrowthbookHeaderLink[];
  /** the white pill with a repository's star count; leave out to hide it */
  stars?: { icon: ReactNode; count: string; href: string; label: string };
  /** quiet text link before the buttons */
  signIn?: GrowthbookHeaderAction;
  /** outline button */
  secondary?: GrowthbookHeaderAction;
  /** violet button */
  primary: GrowthbookHeaderAction;
  /** accessible labels for the phone menu button */
  menuLabel: string;
  closeLabel: string;
  className?: string;
}

export function GrowthbookHeader({
  announcement,
  brand,
  brandIcon,
  brandHref = "/",
  links,
  stars,
  signIn,
  secondary,
  primary,
  menuLabel,
  closeLabel,
  className,
}: GrowthbookHeaderProps) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // desktop: slide up while scrolling down (past the header's height), back on scrolling up
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setHidden(y > last && y > 120);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const link = "text-sm text-foreground transition-colors duration-250 ease-[ease] hover:text-primary motion-reduce:transition-none";

  return (
    <header
      data-hidden={hidden && !open}
      className={cn(
        "sticky top-0 z-40 transition-transform duration-400 ease-[ease] motion-reduce:transition-none lg:data-[hidden=true]:-translate-y-full",
        className,
      )}
    >
      {announcement && (
        <p className="bg-primary px-gutter py-2 text-center text-sm leading-[1.65] text-primary-foreground lg:py-[0.5625rem] lg:leading-5">
          <span>{announcement.text}</span>
          <ArrowRight aria-hidden className="ml-1 inline size-3.5 align-[-2px]" strokeWidth={2} />
          <a href={announcement.href} className="block underline underline-offset-4 hover:opacity-90 lg:ml-7 lg:inline">
            {announcement.linkLabel}
          </a>
        </p>
      )}
      <div className="border-b border-border bg-background">
        <nav className="mx-auto flex h-[4.125rem] max-w-[calc(var(--page-width)+var(--page-gutter)*4)] items-center gap-4 px-gutter md:px-[calc(var(--page-gutter)*2)] lg:h-[5.125rem] lg:gap-8">
          <a href={brandHref} className="flex items-center gap-1.5 text-[1.375rem] font-medium tracking-[-0.02em] text-foreground">
            {brandIcon && <span className="flex text-primary [&_svg]:size-6">{brandIcon}</span>}
            {brand}
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className={cn(link, "flex items-center gap-1.5")}>
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
                </a>
              </li>
            ))}
          </ul>
          {stars && (
            <a
              href={stars.href}
              aria-label={stars.label}
              className="ml-auto flex h-11 items-center gap-3 rounded-full bg-card px-3.5 text-xs text-card-foreground shadow-[0_4px_20px_color-mix(in_oklab,var(--foreground)_6%,transparent)] transition-colors duration-250 hover:text-primary lg:ml-0 [&_svg]:size-5"
            >
              {stars.icon}
              {stars.count}
            </a>
          )}
          <div className="ml-auto hidden items-center gap-6 lg:flex">
            {signIn && (
              <a href={signIn.href} className={link}>
                {signIn.label}
              </a>
            )}
            <div className="flex items-center gap-3">
              {secondary && (
                <GrowthbookButton href={secondary.href} variant="outline" size="sm">
                  {secondary.label}
                </GrowthbookButton>
              )}
              <GrowthbookButton href={primary.href} size="sm">
                {primary.label}
              </GrowthbookButton>
            </div>
          </div>
          <button
            type="button"
            aria-label={open ? closeLabel : menuLabel}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={cn("grid size-10 place-items-center text-foreground lg:hidden", !stars && "ml-auto")}
          >
            {open ? <X aria-hidden className="size-7" strokeWidth={1.75} /> : <Menu aria-hidden className="size-7" strokeWidth={1.75} />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border px-gutter pt-4 pb-6 lg:hidden">
            <ul className="divide-y divide-border">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={cn(link, "flex items-center justify-between py-4 text-base")}>
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={2} />}
                  </a>
                </li>
              ))}
              {signIn && (
                <li>
                  <a href={signIn.href} className={cn(link, "block py-4 text-base")}>
                    {signIn.label}
                  </a>
                </li>
              )}
            </ul>
            <div className="mt-4 grid gap-3">
              {secondary && (
                <GrowthbookButton href={secondary.href} variant="outline" className="w-full">
                  {secondary.label}
                </GrowthbookButton>
              )}
              <GrowthbookButton href={primary.href} className="w-full">
                {primary.label}
              </GrowthbookButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
