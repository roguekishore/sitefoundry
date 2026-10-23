import type { ReactNode } from "react";
import { Check, ChevronDown, MapPin, X, type LucideIcon } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { PlaidWordmark } from "@foundry/plaid-wordmark";

export interface PlaidFooterGroup {
  /** the bold heading */
  title: string;
  links: { label: string; href: string }[];
}

export interface PlaidFooterProps {
  /** the mark at the top left */
  brand: { name: string; href: string; icon: LucideIcon };
  /** the link groups: four to a row on desktop, two on phones */
  groups: PlaidFooterGroup[];
  /** social links, each with its icon */
  socials: { label: string; href: string; icon: ReactNode }[];
  /** the copyright line */
  copyright: string;
  /** the region picker */
  region: { label: string; href: string };
  /** the privacy-choices link with its toggle badge */
  privacy: { label: string; href: string };
  /** pull up over the band before it, so the rounded corners show that band */
  overlap?: boolean;
  className?: string;
}

const heading = "text-[color-mix(in_oklab,var(--highlight)_22%,var(--background))]";

/** Plaid's navy footer. */
export function PlaidFooter({ brand, groups, socials, copyright, region, privacy, overlap = false, className }: PlaidFooterProps) {
  return (
    <footer
      className={cn(
        "relative rounded-t-[calc(var(--radius)+1rem)] bg-[color-mix(in_oklab,var(--foreground)_55%,var(--primary))] text-background dark:bg-card dark:text-foreground",
        overlap && "-mt-10",
        className,
      )}
    >
      <div className="mx-auto max-w-[65.125rem] px-13 pt-12 pb-20 lg:px-0 lg:pt-[5.5rem] lg:pb-24">
        <div className="lg:grid lg:grid-cols-[12.9375rem_1fr]">
          <PlaidWordmark {...brand} markOnly className="self-start" />
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-0 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-[2.875rem]">
            {groups.map((g) => (
              <div key={g.title}>
                <h3 className={cn("text-base font-semibold", heading, "dark:text-highlight")}>{g.title}</h3>
                <ul className="mt-2.5 lg:mt-2">
                  {g.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-base/6 transition-colors duration-100 ease-in-out hover:text-highlight motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-16 flex gap-4 lg:mt-[7.5rem]">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} className="grid size-8 place-items-center transition-colors duration-100 hover:text-highlight [&_svg]:size-8">
                {s.icon}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-4 text-base lg:flex-row lg:items-center lg:gap-[2.1rem]">
          <span>{copyright}</span>
          <a href={region.href} className="inline-flex items-center gap-2 font-semibold transition-colors duration-100 hover:text-highlight">
            <MapPin aria-hidden className="size-5" strokeWidth={1.75} />
            {region.label}
            <ChevronDown aria-hidden className="size-4" />
          </a>
          <a href={privacy.href} className="inline-flex items-center gap-2 font-semibold transition-colors duration-100 hover:text-highlight">
            {privacy.label}
            <span aria-hidden className="inline-flex h-5 items-center gap-0.5 rounded-full bg-glow px-1.5 text-background">
              <Check className="size-3" strokeWidth={3} />
              <X className="size-3" strokeWidth={3} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
