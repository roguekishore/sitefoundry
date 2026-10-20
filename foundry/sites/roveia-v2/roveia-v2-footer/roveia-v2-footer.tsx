import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Button } from "@foundry/roveia-v2-button";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-footer.css";

export interface RoveiaV2FooterColumn {
  /** the small grey label, e.g. "Sectors:" */
  label: string;
  /** the links under it */
  links: { label: string; href: string }[];
}

export interface RoveiaV2FooterProps {
  /** the big closing line */
  heading: string;
  /** the line under it */
  lead?: string;
  /** the blue pill button */
  cta?: { label: string; href: string };
  /** the company name, set as a plain wordmark */
  brand: string;
  /** small social links: an icon and a name for screen readers */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the copyright line */
  legal?: string;
  /** link columns on the right */
  columns: RoveiaV2FooterColumn[];
  className?: string;
}

export function RoveiaV2Footer({ heading, lead, cta, brand, socials = [], legal, columns, className }: RoveiaV2FooterProps) {
  return (
    <footer className={cn("relative overflow-clip bg-background text-foreground", className)}>
      {/* soft blurred blue hills behind everything (a placeholder for the original's art) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-[30%] bottom-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--glow)_45%,var(--background))_55%,color-mix(in_oklab,var(--glow)_25%,var(--background))_85%,var(--background))]" />
        <div className="absolute top-[28%] -left-[10%] h-[45%] w-[45%] rounded-full bg-glow/30 blur-3xl" />
        <div className="absolute top-[34%] left-[30%] h-[40%] w-[30%] rounded-full bg-glow/20 blur-3xl" />
        <div className="absolute top-[25%] -right-[8%] h-[50%] w-[40%] rounded-full bg-glow/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        <div className="roveia-v2-footer-cta flex flex-col items-center pt-16 text-center lg:pt-[7rem]">
          <RoveiaV2Heading size="statement" className="max-w-[22rem] lg:max-w-[52rem] lg:leading-[1.15]">
            {heading}
          </RoveiaV2Heading>
          {lead && <p className="mt-8 text-base text-muted-foreground lg:mt-10">{lead}</p>}
          {cta && (
            <RoveiaV2Button href={cta.href} className="mt-12 px-6 lg:mt-10">
              {cta.label}
            </RoveiaV2Button>
          )}
        </div>

        <div className="pt-[7.5rem] pb-12 lg:flex lg:items-start lg:justify-between lg:pt-[13.5rem] lg:pb-11">
          <div>
            <p className="text-[1.375rem] font-medium tracking-[0.01em]">{brand}</p>
            {socials.length > 0 && (
              <ul className="mt-6 flex gap-6 lg:mt-7">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="block text-foreground/70 transition-colors duration-300 hover:text-primary motion-reduce:transition-none [&_svg]:size-5">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {legal && <p className="mt-10 text-sm text-foreground/60 lg:mt-14">{legal}</p>}
          </div>

          <div className="mt-[4.5rem] grid grid-cols-[1fr_auto_auto] gap-x-8 lg:mt-0 lg:flex lg:gap-x-[3.25rem]">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="text-base text-foreground/40">{col.label}</p>
                <ul className="mt-6 lg:mt-7">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-base leading-7 transition-colors duration-300 hover:text-primary motion-reduce:transition-none">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
