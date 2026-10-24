import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { StokespacePlaceholder } from "@foundry/stokespace-placeholder";
import { StokespaceWordmark } from "@foundry/stokespace-wordmark";
import "./stokespace-footer.css";

export interface StokespaceFooterLink {
  /** link text */
  label: string;
  /** where it goes */
  href: string;
  /** opens another site: adds a small up-right arrow */
  external?: boolean;
}

export interface StokespaceFooterProps {
  /** the "get in touch" line */
  contactTitle: string;
  /** the contact button */
  contact: { label: string; href: string };
  /** up to three link columns */
  columns: StokespaceFooterLink[][];
  /** the legal links (their own column) */
  legal: StokespaceFooterLink[];
  /** company name for the giant wordmark */
  brand: string;
  /** address lines, shown small and uppercase */
  address: string[];
  /** contact e-mail under the address */
  email?: string;
  /** the small 80×43 badge above the address (a flag or seal) */
  badge?: ReactNode;
  className?: string;
}

const ease = "duration-350 ease-[cubic-bezier(0.165,0.84,0.44,1)]";

function FooterLink({ link }: { link: StokespaceFooterLink }) {
  return (
    <a
      href={link.href}
      {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
      className={cn("inline-flex items-center gap-1 text-base leading-6 font-light tracking-[-0.02em] transition-colors hover:text-primary", ease)}
    >
      {link.label}
      {link.external && <ArrowUpRight aria-hidden strokeWidth={1.5} className="size-3.5" />}
    </a>
  );
}

/**
 * Footer. Desktop: "get in touch" and a frosted contact button on the left, link columns from
 * the 8th of 12 columns, then a giant wordmark across the left with a badge and a small
 * uppercase address beside it. Phones: links first, then the contact row, badge, and a small
 * wordmark with the address. A dusk gradient rises up behind the bottom as the footer scrolls
 * in; the contact button's border shimmers on hover.
 */
export function StokespaceFooter({
  contactTitle,
  contact,
  columns,
  legal,
  brand,
  address,
  email,
  badge,
  className,
}: StokespaceFooterProps) {
  return (
    <footer className={cn("relative overflow-clip px-gutter pt-section pb-5 [view-timeline-name:--stokespace-footer]", className)}>
      <div aria-hidden className="stokespace-footer-glow pointer-events-none absolute inset-x-0 top-[44%] h-full" />

      <div className="relative grid grid-cols-3 gap-x-2 pt-section lg:grid-cols-12 lg:gap-x-5">
        {columns.slice(0, 3).map((col, i) => (
          <ul key={i} className={cn("flex flex-col lg:row-start-1", ["lg:col-start-8", "lg:col-start-9", "lg:col-start-10"][i])}>
            {col.map((link) => (
              <li key={link.label}>
                <FooterLink link={link} />
              </li>
            ))}
          </ul>
        ))}
        <ul className="col-span-3 mt-16 flex flex-col lg:col-span-2 lg:col-start-11 lg:row-start-1 lg:mt-0">
          {legal.map((link) => (
            <li key={link.label}>
              <FooterLink link={link} />
            </li>
          ))}
        </ul>

        <div className="col-span-3 mt-28 flex items-center justify-between lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start lg:justify-start lg:gap-14">
          <p className="text-[length:clamp(1.25rem,1.018rem+0.952vw,1.875rem)] leading-none font-light tracking-[-0.04em]">{contactTitle}</p>
          <a
            href={contact.href}
            className="stokespace-footer-shimmer group relative inline-flex h-[3.2rem] w-34 items-center justify-center gap-2 rounded-lg bg-foreground/5 text-sm font-light backdrop-blur-xl lg:h-[2.625rem] lg:w-auto lg:gap-5 lg:px-2.5 lg:text-[length:clamp(0.875rem,0.7625rem+0.462vw,1.178rem)]"
          >
            <span>{contact.label}</span>
            <ArrowRight
              aria-hidden
              strokeWidth={1.5}
              className={cn("size-[1em] transition-transform group-hover:translate-x-[0.15em] motion-reduce:transition-none", ease)}
            />
          </a>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 items-end gap-x-5 lg:mt-35 lg:grid-cols-12">
        <div className="col-span-2 h-[2.6875rem] w-20 lg:col-span-2 lg:col-start-8 lg:row-start-1 lg:self-start [&>img]:size-full [&>img]:object-cover">
          {badge ?? <StokespacePlaceholder />}
        </div>
        <div className="mt-9 w-[8.5rem] lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:w-[96%]">
          <StokespaceWordmark name={brand} fit />
        </div>
        <address className="mt-9 justify-self-end text-[length:clamp(0.5625rem,0.506rem+0.23vw,0.714rem)] leading-[1.4] font-normal tracking-[0.25em] not-italic uppercase lg:col-span-2 lg:col-start-8 lg:row-start-1 lg:mt-0 lg:self-end lg:justify-self-start lg:tracking-[0.12em]">
          {address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
          {email && (
            <a href={`mailto:${email}`} className="block transition-opacity hover:opacity-70">
              {email}
            </a>
          )}
        </address>
      </div>
    </footer>
  );
}
