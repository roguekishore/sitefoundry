import type { ReactNode } from "react";
import { Cylinder } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RollersBand } from "@foundry/rollers-band";
import { RollersRule } from "@foundry/rollers-rule";

export interface RollersFooterLink {
  label: string;
  href: string;
  /** the page you are on: set in orange */
  current?: boolean;
}

export interface RollersFooterGroup {
  /** the orange uppercase heading over its hairline */
  title: string;
  links: RollersFooterLink[];
}

export interface RollersFooterDepot {
  /** the town, set as an orange uppercase heading */
  town: string;
  /** address and phone lines, one paragraph each (a "\n" breaks a paragraph without a gap) */
  lines: string[];
}

export interface RollersFooterProps {
  /** the wordmark under the mark */
  brand: string;
  homeHref?: string;
  /** the large mark above the wordmark; an orange roller-drum icon by default */
  mark?: ReactNode;
  /** the sign-off on the right, word by word; every other word is orange */
  tagline: string[];
  /** link columns (four on wide screens, two on phones) */
  groups: RollersFooterGroup[];
  /** depot addresses (five on wide screens, two on phones) */
  depots: RollersFooterDepot[];
  /** the copyright line */
  legal: string;
  /** a link on the right of the bottom row (privacy, credits) */
  credit?: RollersFooterLink;
  className?: string;
}

const heading = "border-b border-border/60 pb-2.5 font-display text-[0.875rem] leading-none text-primary uppercase md:text-[1.125rem]";
const link = "transition-colors duration-200 ease-linear hover:text-primary motion-reduce:transition-none";

/** The charcoal footer: a big orange mark over a bold wordmark with a spaced two-tone sign-off
    on the right, then hairline-ruled rows of link columns, depot addresses and the legal line.
    Links turn orange on hover. */
export function RollersFooter({ brand, homeHref = "/", mark, tagline, groups, depots, legal, credit, className }: RollersFooterProps) {
  return (
    <RollersBand as="footer" className={cn("font-display", className)}>
      <div className="relative flex flex-col gap-2 px-gutter pt-7.5 pb-7.5 md:flex-row md:items-end md:justify-between md:pt-20 md:pb-9">
        <RollersRule className="inset-x-0 top-0" />
        <a href={homeHref} className="flex flex-col items-start">
          <span aria-hidden className="ml-6 flex size-16 items-center justify-center text-primary">
            {mark ?? <Cylinder className="size-16" strokeWidth={2.5} />}
          </span>
          <span className="mt-2 text-[2.05rem] leading-none font-bold tracking-[-0.02em]">{brand}</span>
        </a>
        <p className="text-[1.35rem] leading-none font-bold tracking-[0.06em] uppercase md:text-[1.75rem]">
          {tagline.map((word, i) => (
            <span key={i} className={i % 2 === 0 ? "text-primary" : undefined}>
              {i > 0 ? " " : null}
              {word}
            </span>
          ))}
        </p>
      </div>

      <div className="relative grid grid-cols-2 gap-x-3.5 gap-y-10 px-gutter pt-10 pb-10 md:grid-cols-4 md:gap-x-13.5 md:pt-13 md:pb-13">
        <RollersRule className="inset-x-0 top-0" />
        {groups.map((group) => (
          <div key={group.title}>
            <h2 className={heading}>{group.title}</h2>
            <ul className="mt-4 flex flex-col gap-1 text-[0.875rem] leading-[1.45] md:mt-5 md:gap-1.5 md:text-[1.125rem]">
              {group.links.map((item) => (
                <li key={item.label}>
                  <a href={item.href} aria-current={item.current ? "page" : undefined} className={cn(link, item.current && "text-primary")}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative grid grid-cols-2 gap-x-10 gap-y-10 px-gutter pt-10 pb-15 md:grid-cols-5 md:pt-13 md:pb-13">
        <RollersRule className="inset-x-0 top-0" />
        {depots.map((depot) => (
          <div key={depot.town}>
            <h2 className={cn(heading, "pb-4 md:pb-3.5")}>{depot.town}</h2>
            <div className="mt-4 flex flex-col gap-2.5 text-[0.875rem] leading-[1.5] whitespace-pre-line md:text-[1.125rem]">
              {depot.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 border-t border-border/60 px-gutter pt-6 pb-8 text-[0.875rem] md:flex-row md:justify-between md:pt-7 md:pb-6 md:text-[1.125rem]">
        <p>{legal}</p>
        {credit ? (
          <a href={credit.href} className={link}>
            {credit.label}
          </a>
        ) : null}
      </div>
    </RollersBand>
  );
}
