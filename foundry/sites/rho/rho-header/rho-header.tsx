import { Menu } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RhoButton } from "@foundry/rho-button";

export interface RhoLink {
  /** visible text */
  label: string;
  /** where it goes */
  href: string;
}

export interface RhoHeaderProps {
  /** the company name, set as a wordmark */
  brand: string;
  /** where the wordmark links to */
  brandHref?: string;
  /** main navigation, beside the wordmark on desktop */
  links: RhoLink[];
  /** quiet text links on the right (sign in, demo) */
  secondary: RhoLink[];
  /** the mint button on the right */
  cta: RhoLink;
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  /** dark or light bar (inside rho-tone-flow it follows the page instead) */
  tone?: "dark" | "light";
  className?: string;
}

export function RhoHeader({ brand, brandHref = "/", links, secondary, cta, menuLabel, tone = "dark", className }: RhoHeaderProps) {
  const link = "transition-colors duration-[160ms] hover:text-foreground/80 motion-reduce:transition-none";
  return (
    <header
      data-rho-tone={tone}
      className={cn(tone === "dark" && "dark", "sticky top-0 z-40 border-b border-border bg-background text-foreground", className)}
    >
      <div className="flex h-14 items-center gap-6 px-gutter lg:h-[4.5rem] lg:px-10">
        <a href={brandHref} className="font-display text-[2rem] leading-none font-normal tracking-[-0.04em] lg:text-[2.25rem]">
          {brand}
        </a>
        <nav className="ml-[4.25rem] hidden items-center gap-7 text-[0.9375rem] lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto hidden items-center gap-5 text-[0.9375rem] lg:flex">
          {secondary.map((l) => (
            <a key={l.label} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
          <RhoButton href={cta.href} size="sm" className="ml-1">
            {cta.label}
          </RhoButton>
        </div>
        <details className="group relative ml-auto lg:hidden">
          <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-md [&::-webkit-details-marker]:hidden" aria-label={menuLabel}>
            <Menu className="size-6" strokeWidth={1.5} />
          </summary>
          <div className="absolute top-12 right-0 flex w-[min(20rem,calc(100vw-2rem))] flex-col gap-1 rounded-lg border border-border bg-popover p-3 text-popover-foreground shadow-lg">
            {[...links, ...secondary].map((l) => (
              <a key={l.label} href={l.href} className="rounded-md px-3 py-2.5 text-[0.9375rem] transition-colors hover:bg-card">
                {l.label}
              </a>
            ))}
            <RhoButton href={cta.href} className="mt-2 w-full">
              {cta.label}
            </RhoButton>
          </div>
        </details>
      </div>
    </header>
  );
}
