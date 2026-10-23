import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { BridgeButton } from "@foundry/bridge-button";
import { BridgeWordmark } from "@foundry/bridge-wordmark";

export interface BridgeHeaderLink {
  label: string;
  href: string;
  /** shows a small chevron, as for items that open a menu */
  menu?: boolean;
  /** draws the thin vertical divider before this link */
  dividerBefore?: boolean;
}

export interface BridgeHeaderProps {
  /** the wordmark: company name, small icon and parent-company tagline */
  brand: { name: string; href: string; icon?: ReactNode; tagline?: string };
  /** the centred nav links */
  links: BridgeHeaderLink[];
  /** the outlined button on the right */
  action: { label: string; href: string };
  /** the word beside the phone menu icon, e.g. "Menu" */
  menuLabel: string;
  className?: string;
}

/** Bridge's sticky, translucent, blurred header. */
export function BridgeHeader({ brand, links, action, menuLabel, className }: BridgeHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40 bg-background/25 text-foreground backdrop-blur-lg", className)}>
      <nav className="mx-auto flex h-[5.5rem] max-w-page items-center justify-between gap-6 px-gutter lg:h-[4.375rem]">
        <BridgeWordmark {...brand} layout="responsive" />

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.label} className="flex items-center gap-10">
              {l.dividerBefore && <span aria-hidden className="h-3.5 w-px bg-muted-foreground/60" />}
              <a
                href={l.href}
                className="flex items-center gap-2 text-[0.9375rem]/none tracking-[-0.02em]"
              >
                {l.label}
                {l.menu && <ChevronDown aria-hidden className="size-3" strokeWidth={1.5} />}
              </a>
            </li>
          ))}
        </ul>

        <BridgeButton href={action.href} variant="ghost" className="hidden lg:inline-flex">
          {action.label}
        </BridgeButton>

        <details className="group lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 font-mono text-[0.9375rem]/none tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
            {menuLabel}
            <span aria-hidden className="flex w-6 flex-col gap-[0.3125rem]">
              <span className="h-px w-full bg-foreground transition-transform duration-250 group-open:translate-y-[3px] group-open:rotate-12 motion-reduce:transition-none" />
              <span className="h-px w-full bg-foreground transition-transform duration-250 group-open:-translate-y-[3px] group-open:-rotate-12 motion-reduce:transition-none" />
            </span>
          </summary>
          <div className="absolute inset-x-0 top-full max-h-[calc(100svh-5.5rem)] overflow-y-auto border-b border-border bg-background px-gutter pt-2 pb-8">
            <ul className="divide-y divide-border">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="flex items-center justify-between py-4 text-[1.375rem]/none tracking-[-0.03em]">
                    {l.label}
                    {l.menu && <ChevronDown aria-hidden className="size-4" strokeWidth={1.5} />}
                  </a>
                </li>
              ))}
            </ul>
            <BridgeButton href={action.href} variant="ghost" className="mt-6 w-full">
              {action.label}
            </BridgeButton>
          </div>
        </details>
      </nav>
    </header>
  );
}
