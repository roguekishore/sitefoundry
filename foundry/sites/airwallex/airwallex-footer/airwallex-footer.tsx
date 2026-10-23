import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AirwallexWordmark } from "@foundry/airwallex-wordmark";

export interface AirwallexFooterLink {
  label: string;
  href: string;
}

export interface AirwallexFooterGroup {
  /** the bold heading */
  title: string;
  links: AirwallexFooterLink[];
}

export interface AirwallexStoreBadge {
  /** the tiny line on top ("Get it on") */
  kicker: string;
  /** the store's name */
  label: string;
  href: string;
  /** an icon before the text */
  icon?: ReactNode;
}

export interface AirwallexFooterProps {
  /** the company name */
  wordmark: string;
  /** the small mark before the name */
  mark?: ReactNode;
  /** the dark app-store pills */
  badges?: AirwallexStoreBadge[];
  /** link groups in reading order (ten fill the grid) */
  groups: AirwallexFooterGroup[];
  /** the copyright line */
  copyright: string;
  /** small icon links beside the copyright */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** fine-print paragraphs at the very bottom */
  legal?: string[];
  className?: string;
}

const linkClass = "text-sm leading-[1.3] text-foreground/80 transition-colors duration-250 hover:text-primary motion-reduce:transition-none";

function Group({ group }: { group: AirwallexFooterGroup }) {
  return (
    <div>
      <p className="text-sm leading-[1.3] font-bold text-foreground">{group.title}</p>
      <ul className="mt-3.5 flex flex-col gap-3.5">
        {group.links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={linkClass}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Wordmark, a grid of link groups and the legal line. */
export function AirwallexFooter({ wordmark, mark, badges, groups, copyright, socials, legal, className }: AirwallexFooterProps) {
  const half = Math.ceil(groups.length / 2);
  const columns = [groups.slice(0, half), groups.slice(half)];
  return (
    <footer className={cn("border-t border-border bg-muted text-foreground", className)}>
      <div className="mx-auto max-w-[76rem] px-4 pt-[4.5rem] pb-8 lg:px-12 lg:pt-20 lg:pb-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <AirwallexWordmark name={wordmark} mark={mark} size="lg" />
          {badges && (
            <div className="flex gap-6">
              {badges.map((b) => (
                <a key={b.label} href={b.href} className="flex h-8 items-center gap-1.5 rounded-sm bg-foreground px-2.5 text-background [&_svg]:size-4">
                  {b.icon}
                  <span className="flex flex-col leading-none">
                    <span className="text-[0.4375rem] tracking-[0.02em] uppercase">{b.kicker}</span>
                    <span className="text-[0.8125rem] font-semibold">{b.label}</span>
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-x-4 lg:mt-[4.5rem] lg:grid-cols-5 lg:gap-x-8 lg:gap-y-14">
          {columns.map((col, c) => (
            <div key={c} className="flex flex-col gap-14 lg:contents">
              {col.map((g) => (
                <Group key={g.title} group={g} />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-20 border-t border-input pt-7 lg:mt-14">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-muted-foreground">{copyright}</p>
            {socials && (
              <ul className="flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} aria-label={s.label} className="grid size-5 place-items-center text-foreground transition-colors duration-250 hover:text-primary [&_svg]:size-[1.125rem]">
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {legal?.map((p) => (
            <p key={p} className="mt-6 text-xs leading-[1.5] text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
