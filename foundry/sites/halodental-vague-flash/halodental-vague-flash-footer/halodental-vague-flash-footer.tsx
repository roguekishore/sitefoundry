import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HalodentalVagueFlashButton } from "@foundry/halodental-vague-flash-button";

export interface HalodentalVagueFlashFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface HalodentalVagueFlashFooterProps {
  /** navigation columns (Company, Resources, Follow us) */
  columns: HalodentalVagueFlashFooterColumn[];
  /** outline secondary CTA on the right */
  secondaryCta?: { label: string; href: string };
  /** orange primary CTA on the right */
  primaryCta?: { label: string; href: string };
  /** bottom-left legal links */
  legalLinks: { label: string; href: string }[];
  /** bottom-right copyright notice */
  copyright: string;
  /** technical illustration / wireframe slot in the background */
  media?: ReactNode;
  className?: string;
}

/**
 * Architectural technical wireframe placeholder matching the horizontal (desktop)
 * and vertical (mobile) instrument line drawing in Halo Dental's footer.
 */
function DefaultFooterWireframe() {
  return (
    <div aria-hidden className="pointer-events-none select-none">
      {/* Desktop horizontal wireframe (left ~465px, width ~815px) */}
      <div className="hidden lg:block">
        <svg
          viewBox="0 0 920 340"
          className="ml-auto h-[320px] w-[920px] fill-none stroke-current text-foreground"
        >
          {/* Faint concentric halo circles around the optical head */}
          <circle cx="760" cy="175" r="155" className="stroke-foreground/12" strokeWidth="1" />
          <circle cx="760" cy="175" r="105" className="stroke-foreground/15" strokeWidth="1" />
          {/* Handle body */}
          <rect
            x="30"
            y="152"
            width="315"
            height="46"
            rx="23"
            className="stroke-foreground/75"
            strokeWidth="1"
          />
          {/* Collar ring */}
          <rect
            x="70"
            y="152"
            width="6"
            height="46"
            className="fill-foreground/85 stroke-none"
          />
          {/* Small double-capsule mark on handle */}
          <ellipse
            cx="98"
            cy="172"
            rx="6"
            ry="3"
            transform="rotate(42 98 172)"
            className="fill-foreground/85 stroke-none"
          />
          <ellipse
            cx="102"
            cy="178"
            rx="6"
            ry="3"
            transform="rotate(42 102 178)"
            className="fill-foreground/85 stroke-none"
          />
          {/* Indicator dot */}
          <circle cx="298" cy="175" r="3" className="fill-foreground/85 stroke-none" />
          {/* Tapered neck */}
          <path
            d="M345 153 L695 162 M345 197 L695 188"
            className="stroke-foreground/65"
            strokeWidth="1"
          />
          {/* Circular mirror head */}
          <circle cx="760" cy="175" r="56" className="stroke-foreground/85" strokeWidth="1" />
          <circle cx="760" cy="175" r="50" className="stroke-foreground/65" strokeWidth="1" />
          <circle cx="760" cy="175" r="43" className="stroke-foreground/85" strokeWidth="1" />
          {/* Camera sensor dot */}
          <circle cx="792" cy="175" r="4.5" className="fill-foreground/90 stroke-none" />
        </svg>
      </div>

      {/* Mobile vertical wireframe centred in the lower half of the footer */}
      <div className="flex justify-center lg:hidden">
        <svg
          viewBox="0 0 340 360"
          className="h-[340px] w-[340px] fill-none stroke-current text-foreground"
        >
          <circle cx="170" cy="135" r="130" className="stroke-foreground/12" strokeWidth="1" />
          <circle cx="170" cy="135" r="88" className="stroke-foreground/15" strokeWidth="1" />
          <circle cx="170" cy="135" r="52" className="stroke-foreground/85" strokeWidth="1" />
          <circle cx="170" cy="135" r="46" className="stroke-foreground/65" strokeWidth="1" />
          <circle cx="170" cy="135" r="39" className="stroke-foreground/85" strokeWidth="1" />
          <circle cx="170" cy="104" r="4" className="fill-foreground/90 stroke-none" />
          <path
            d="M158 186 L149 355 M182 186 L191 355"
            className="stroke-foreground/65"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
}

/**
 * Halo Dental's pure black architectural footer.
 */
export function HalodentalVagueFlashFooter({
  columns,
  secondaryCta,
  primaryCta,
  legalLinks,
  copyright,
  media,
  className,
}: HalodentalVagueFlashFooterProps) {
  return (
    <footer className={cn("dark relative overflow-hidden bg-background text-foreground", className)}>
      <div className="mx-auto flex min-h-[803px] max-w-[var(--page-width)] flex-col justify-between px-[var(--page-gutter)] pt-9 pb-6 lg:min-h-[497px] lg:pt-10 lg:pb-7">
        <div className="relative z-10 grid grid-cols-6 gap-y-[30px] lg:grid-cols-12 lg:gap-x-5">
          {columns.map((col) => (
            <div key={col.title} className="col-span-3 lg:col-span-2">
              <h2 className="mb-4 font-display text-[1.3rem] leading-[1.1] font-normal text-foreground lg:text-[1.5rem]">
                {col.title}
              </h2>
              <ul className="flex flex-col gap-y-2.5 text-[0.91rem] font-normal text-foreground lg:text-base">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="underline decoration-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {(secondaryCta || primaryCta) && (
            <div className="col-span-6 flex flex-col items-start gap-2.5 pt-2 lg:col-span-6 lg:flex-row lg:items-start lg:justify-end lg:pt-0">
              {secondaryCta && (
                <HalodentalVagueFlashButton variant="outline" href={secondaryCta.href}>
                  {secondaryCta.label}
                </HalodentalVagueFlashButton>
              )}
              {primaryCta && (
                <HalodentalVagueFlashButton variant="primary" href={primaryCta.href}>
                  {primaryCta.label}
                </HalodentalVagueFlashButton>
              )}
            </div>
          )}
        </div>

        <div className="relative z-0 my-auto lg:-my-12">
          {media ?? <DefaultFooterWireframe />}
        </div>

        <div className="relative z-10 flex flex-col items-center gap-y-2.5 text-xs font-normal text-foreground/90 lg:flex-row lg:justify-between">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 lg:gap-x-10">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="underline decoration-foreground/50 underline-offset-4 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center lg:ml-auto">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}
