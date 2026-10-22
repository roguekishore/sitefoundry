import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ModerntreasuryButton } from "@foundry/moderntreasury-button";
import { ModerntreasuryMark, type ModerntreasuryMarkProps } from "@foundry/moderntreasury-mark";

export interface ModerntreasuryHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron, as for items that open a menu */
  menu?: boolean;
}

export interface ModerntreasuryHeaderProps {
  /** the logo */
  mark: ModerntreasuryMarkProps;
  /** the centred navigation */
  links: ModerntreasuryHeaderLink[];
  /** outlined buttons on the right, e.g. sign in and sign up */
  secondary?: { label: string; href: string }[];
  /** the solid ink button at the far right */
  cta: { label: string; href: string };
  /** screen-reader label for the phone menu button */
  menuLabel: string;
  className?: string;
}

/** Modern Treasury's top bar: wordmark, centred nav, square buttons; sticky on desktop. */
export function ModerntreasuryHeader({ mark, links, secondary = [], cta, menuLabel, className }: ModerntreasuryHeaderProps) {
  return (
    <header
      className={cn(
        "relative z-40 bg-background text-foreground shadow-[0_4px_6px_-1px_color-mix(in_oklab,var(--foreground)_10%,transparent),0_2px_4px_-2px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:sticky lg:top-0",
        className,
      )}
    >
      <div className="flex h-14 items-center justify-between px-gutter lg:h-[4.0625rem] lg:px-8">
        <ModerntreasuryMark {...mark} />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="group flex h-8 items-center gap-1 rounded-[calc(var(--radius)/4)] px-3 text-sm font-medium transition-colors duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-foreground/5 motion-reduce:transition-none"
            >
              {l.label}
              {l.menu && (
                <ChevronDown
                  aria-hidden
                  className="size-4 text-foreground/70 transition-transform duration-200 group-hover:rotate-180 motion-reduce:transition-none"
                  strokeWidth={1.75}
                />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {secondary.map((s) => (
            <ModerntreasuryButton key={s.label} href={s.href} variant="outline" size="sm">
              {s.label}
            </ModerntreasuryButton>
          ))}
          <ModerntreasuryButton href={cta.href} size="sm" className="font-semibold">
            {cta.label}
          </ModerntreasuryButton>
        </div>

        <details className="group lg:hidden">
          <summary aria-label={menuLabel} className="flex size-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
            <Menu aria-hidden className="size-6 group-open:hidden" strokeWidth={1.5} />
            <X aria-hidden className="hidden size-6 group-open:block" strokeWidth={1.5} />
          </summary>
          <div className="absolute inset-x-0 top-full border-t border-border bg-background px-gutter pt-2 pb-6 shadow-[0_12px_16px_-8px_color-mix(in_oklab,var(--foreground)_12%,transparent)]">
            <nav className="flex flex-col">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="flex items-center justify-between border-b border-border py-3.5 text-base font-medium">
                  {l.label}
                  {l.menu && <ChevronDown aria-hidden className="size-4 -rotate-90 text-foreground/60" strokeWidth={1.75} />}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex flex-wrap gap-3">
              {secondary.map((s) => (
                <ModerntreasuryButton key={s.label} href={s.href} variant="outline" size="md" className="flex-1">
                  {s.label}
                </ModerntreasuryButton>
              ))}
              <ModerntreasuryButton href={cta.href} size="md" className="flex-1">
                {cta.label}
              </ModerntreasuryButton>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
