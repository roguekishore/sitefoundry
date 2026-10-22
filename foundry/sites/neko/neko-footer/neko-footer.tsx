import type { CSSProperties, ReactNode } from "react";
import { Globe } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { NekoButton } from "@foundry/neko-button";
import { NekoSectionLabel } from "@foundry/neko-section-label";
import { NekoSlot } from "@foundry/neko-slot";
import "./neko-footer.css";

export interface NekoFooterColumn {
  /** the column heading, shown in capitals */
  title: string;
  links: { label: string; href: string; badge?: ReactNode }[];
}

export interface NekoFooterProps {
  /** small tracked line above the call to action */
  eyebrow: string;
  /** the big call to action; its words slide up in */
  title: string;
  /** the blue button under it */
  cta: { label: string; href: string };
  /** the divider row above the links */
  label?: string;
  /** a short line beside the link columns (desktop) */
  tagline?: string;
  columns: NekoFooterColumn[];
  /** the spaced-out wordmark on the strip */
  wordmark: string;
  /** the locale switcher link */
  locale?: { label: string; href: string };
  copyright: string;
  /** the contact pill at the right of the strip */
  contact?: { title: string; email: string; media?: ReactNode };
  className?: string;
}

export function NekoFooter({ eyebrow, title, cta, label, tagline, columns, wordmark, locale, copyright, contact, className }: NekoFooterProps) {
  const words = title.split(" ");
  return (
    <footer className={cn("bg-secondary font-sans text-foreground", className)}>
      <div className="rounded-b-[2.5rem] bg-linear-to-b from-background to-accent to-55% lg:rounded-b-[4rem]">
        <div className="mx-auto max-w-page px-gutter pb-section">
          <div className="pt-[18.5rem] text-center lg:pt-[25rem]">
            <p className="text-sm tracking-[0.04em] uppercase lg:text-base">{eyebrow}</p>
            <h2 className="neko-footer-title mx-auto mt-10 max-w-[12ch] font-display text-[2.5rem] leading-[1.1] tracking-[-0.025em] lg:mt-12 lg:max-w-none lg:text-[4.25rem] lg:leading-[1.18]">
              {words.map((w, i) => (
                <span key={i}>
                  {i > 0 && " "}
                  <span className="-mb-[0.14em] inline-block overflow-clip pb-[0.14em] align-top">
                    <span
                      className="neko-footer-word inline-block"
                      style={{ "--nf-range": `cover ${260 + i * 50}px cover ${480 + i * 60}px` } as CSSProperties}
                    >
                      {w}
                    </span>
                  </span>
                </span>
              ))}
            </h2>
            <div className="mt-12 flex justify-center">
              <NekoButton href={cta.href} variant="primary">
                {cta.label}
              </NekoButton>
            </div>
          </div>

          {label && <NekoSectionLabel label={label} className="mt-[18rem] lg:mt-[25rem]" />}

          <div className="mt-[7.5rem] grid grid-cols-2 gap-x-6 gap-y-14 lg:mt-[13rem] lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
            {tagline && <p className="hidden max-w-[24rem] text-[1.75rem] leading-8 lg:block">{tagline}</p>}
            {columns.map((c) => (
              <div key={c.title}>
                <p className="text-sm tracking-[0.04em] uppercase lg:text-base">{c.title}</p>
                <ul className="mt-6 flex flex-col gap-5 text-sm leading-5 lg:text-base">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="inline-flex items-center gap-1 transition-colors duration-150 hover:text-primary">
                        {l.label}
                        {l.badge}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-page px-gutter pt-16 pb-12 text-secondary-foreground lg:flex lg:items-center lg:py-[4.5rem]">
        <div className="flex items-start justify-between lg:contents">
          <p className="text-[2.25rem] leading-none font-normal tracking-[0.3em] uppercase lg:basis-[33.6%] lg:text-[2.5rem]">{wordmark}</p>
          <p className="max-w-[9rem] text-right text-sm text-secondary-foreground/75 lg:order-3 lg:mr-6 lg:max-w-none lg:text-base">{copyright}</p>
        </div>
        {locale && (
          <a href={locale.href} className="mt-14 inline-flex items-center gap-3 text-sm underline underline-offset-4 lg:order-2 lg:mt-0 lg:flex-1 lg:text-base">
            <Globe aria-hidden className="size-5 shrink-0" strokeWidth={1.5} />
            {locale.label}
          </a>
        )}
        {contact && (
          <div className="mt-14 flex items-center gap-5 rounded-2xl bg-secondary-foreground/10 p-1 lg:order-4 lg:mt-0 lg:w-[22.7rem]">
            <NekoSlot media={contact.media} className="size-18 shrink-0 rounded-xl bg-secondary-foreground/15" />
            <div>
              <p className="text-base font-medium lg:text-lg">{contact.title}</p>
              <a href={`mailto:${contact.email}`} className="text-sm text-secondary-foreground/75 underline underline-offset-2 lg:text-base">
                {contact.email}
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
