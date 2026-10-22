import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { GranolaWordmark } from "@foundry/granola-wordmark";

export interface GranolaFooterLink {
  /** the link text */
  label: string;
  /** where it goes */
  href: string;
}

export interface GranolaFooterGroup {
  /** the serif column heading */
  heading: string;
  /** the links under it */
  links: GranolaFooterLink[];
}

export interface GranolaFooterProps {
  /** the company name, set as a giant wordmark across the foot */
  brand: string;
  /** link columns: the first sits alone on the left on desktop, the rest on the right */
  groups: GranolaFooterGroup[];
  /** social links, shown as small icons */
  socials?: (GranolaFooterLink & { icon: ReactNode })[];
  /** the copyright line */
  legal: string;
  /** on desktop, stay pinned under the page so the content above slides up off it */
  reveal?: boolean;
  className?: string;
}

export function GranolaFooter({ brand, groups, socials = [], legal, reveal = true, className }: GranolaFooterProps) {
  const [first, ...rest] = groups;
  const column = (g: GranolaFooterGroup) => (
    <div key={g.heading}>
      <h2 className="font-display text-2xl leading-none">{g.heading}</h2>
      <ul className="mt-5 flex flex-col gap-[0.9375rem] text-sm leading-5 lg:mt-4 lg:gap-2.5">
        {g.links.map((l) => (
          <li key={l.href + l.label}>
            <a href={l.href} className="text-foreground/85 transition-colors duration-150 hover:text-foreground motion-reduce:transition-none">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={cn("bg-background text-foreground", reveal && "lg:sticky lg:bottom-0 lg:-z-10", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)_+_2*var(--page-gutter))] px-gutter pt-16 pb-12">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-x-16">
          {first && column(first)}
          {rest.map(column)}
        </div>

        <div className="mt-14 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-between">
          {socials.length > 0 && (
            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="block text-muted-foreground transition-colors duration-150 hover:text-foreground motion-reduce:transition-none [&_svg]:size-5"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="text-sm text-muted-foreground">{legal}</p>
        </div>

        <GranolaWordmark name={brand} mode="fill" className="mt-14 lg:mt-20" />
      </div>
    </footer>
  );
}
