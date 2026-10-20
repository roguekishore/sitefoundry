import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaButton } from "@foundry/roveia-button";
import { RoveiaWordmark } from "@foundry/roveia-wordmark";
import "./roveia-footer.css";

export interface RoveiaFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface RoveiaFooterProps {
  /** the big closing line */
  heading: string;
  /** one quiet line under it */
  subheading?: string;
  cta: { label: string; href: string };
  brand: string;
  brandMark?: ReactNode;
  /** social links, each with a small icon (e.g. lucide) */
  socials?: { label: string; href: string; icon: ReactNode }[];
  copyright: string;
  columns: RoveiaFooterColumn[];
  className?: string;
}

/**
 * The closing CTA and footer in one, over a soft blurred blue glow rising from below: a big
 * centred two-line line, a quiet sentence and a blue pill; then the wordmark, social icons and
 * copyright on the left and three small link columns on the right (links turn blue on hover).
 * Both halves fade in as they come into view.
 */
export function RoveiaFooter({ heading, subheading, cta, brand, brandMark, socials = [], copyright, columns, className }: RoveiaFooterProps) {
  return (
    <footer className={cn("relative isolate overflow-clip bg-background text-foreground", className)}>
      <div
        aria-hidden
        className="absolute inset-x-[-10%] top-[30%] bottom-0 -z-10 bg-[radial-gradient(ellipse_30%_32%_at_12%_46%,color-mix(in_oklab,var(--glow)_55%,transparent),transparent),radial-gradient(ellipse_26%_34%_at_42%_30%,color-mix(in_oklab,var(--glow)_30%,transparent),transparent),radial-gradient(ellipse_30%_30%_at_86%_28%,color-mix(in_oklab,var(--glow)_38%,transparent),transparent),radial-gradient(ellipse_70%_26%_at_50%_68%,color-mix(in_oklab,var(--glow)_75%,transparent),transparent)] blur-2xl"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-background to-transparent" />

      <div className="roveia-footer-rise mx-auto flex max-w-page flex-col items-center px-gutter pt-16 text-center lg:pt-28">
        <h2 className="max-w-[46rem] text-[2.25rem] leading-[1.15] font-normal tracking-[-0.06em] text-balance lg:text-[4rem] lg:leading-[1.2] lg:tracking-[-0.03em]">
          {heading}
        </h2>
        {subheading && <p className="mt-10 text-base text-muted-foreground lg:mt-14">{subheading}</p>}
        <RoveiaButton href={cta.href} className="mt-12 px-6 lg:mt-10">
          {cta.label}
        </RoveiaButton>
      </div>

      <div className="roveia-footer-rise mx-auto mt-28 flex max-w-page flex-col gap-16 px-gutter pb-12 lg:mt-52 lg:flex-row lg:justify-between lg:pb-10">
        <div className="flex flex-col">
          <RoveiaWordmark name={brand} mark={brandMark} className="text-[1.375rem] lg:text-2xl" />
          {socials.length > 0 && (
            <ul className="mt-8 flex gap-6 lg:mt-7">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} aria-label={s.label} className="block opacity-80 transition-[color,opacity] duration-300 hover:text-primary hover:opacity-100 [&_svg]:size-5">
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-10 text-sm text-muted-foreground lg:mt-auto lg:pt-12">{copyright}</p>
        </div>
        <div className="flex gap-10 lg:gap-14">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-base text-foreground/45">{col.title}</p>
              <ul className="mt-6 flex flex-col gap-1">
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
    </footer>
  );
}
