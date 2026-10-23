import type { CSSProperties, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@foundry/foundry-utils";

export interface UltrahumanFooterLink {
  /** the link's text */
  label: string;
  /** where it goes */
  href: string;
  /** a tiny grey badge after the text, e.g. "New" */
  badge?: string;
}

export interface UltrahumanFooterGroup {
  /** the small uppercase group title */
  title: string;
  links: UltrahumanFooterLink[];
}

export interface UltrahumanFooterIconLink {
  /** the name, read to screen readers */
  label: string;
  href: string;
  /** the icon (about 20px) */
  icon: ReactNode;
}

export interface UltrahumanFooterBadge {
  /** the small top line, e.g. "Get it on" */
  small: string;
  /** the big line, e.g. "Google Play" */
  label: string;
  href: string;
  /** the store icon */
  icon: ReactNode;
}

export interface UltrahumanFooterProps {
  /** four columns, each a stack of link groups split by a hairline (desktop); one accordion list on phones */
  columns: UltrahumanFooterGroup[][];
  /** the contact cell: a title and lines such as an email and a phone number */
  contact: { title: string; links: UltrahumanFooterLink[] };
  /** the social icons cell */
  follow: { title: string; links: UltrahumanFooterIconLink[] };
  /** the app cell: black store badges */
  apps: { title: string; badges: UltrahumanFooterBadge[] };
  /** small grey legal lines (copyright, address…) */
  legal: string[];
  /** small rounded pills under the legal lines (region, store finder) */
  pills?: { label: string; href: string; icon?: ReactNode }[];
  /** the company name, set huge and pale across the bottom */
  brand: string;
  /** which phone accordion group starts open (index in reading order), or -1 for none */
  openGroup?: number;
  className?: string;
}

const groupTitle = "text-[0.8125rem] leading-none font-medium tracking-[0.01em] text-foreground/50 uppercase";
const linkText = "text-base leading-[1.375rem] tracking-[-0.0175em] text-foreground transition-colors duration-200 hover:text-foreground/60";

function FooterLink({ link }: { link: UltrahumanFooterLink }) {
  return (
    <a href={link.href} className={cn(linkText, "inline-flex items-center gap-2")}>
      {link.label}
      {link.badge && (
        <span className="rounded-[3px] bg-foreground/8 px-1.5 py-0.5 text-[0.5625rem] leading-none font-medium tracking-[0.04em] text-foreground/60 uppercase">
          {link.badge}
        </span>
      )}
    </a>
  );
}

/** A white store footer: four link columns split by pale vertical rules (an accordion on phones),
 *  a three-cell row for contact, socials and app badges, small legal lines with two pills, and the
 *  company name set huge in pale italic across the bottom. */
export function UltrahumanFooter({ columns, contact, follow, apps, legal, pills = [], brand, openGroup = 0, className }: UltrahumanFooterProps) {
  const groups = columns.flat();
  return (
    <footer className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-4 pt-10 pb-12 lg:px-0 lg:pt-0 lg:pb-14">
        {/* phones: one accordion list */}
        <div className="lg:hidden">
          {groups.map((group, i) => (
            <details key={group.title} open={i === openGroup} className="group">
              <summary className={cn(groupTitle, "flex cursor-pointer list-none items-center justify-between py-[1.6rem] [&::-webkit-details-marker]:hidden")}>
                {group.title}
                <ChevronDown aria-hidden className="size-4 text-foreground/60 transition-transform duration-200 group-open:rotate-180" strokeWidth={1.75} />
              </summary>
              <ul className="-mt-2 grid gap-4 pb-6">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        {/* desktop: four ruled columns */}
        <div className="hidden grid-cols-4 lg:grid">
          {columns.map((column, c) => (
            <div key={c} className={cn("flex flex-col", c > 0 && "border-l border-foreground/6")}>
              {column.map((group, g) => (
                <div key={group.title} className={cn("pt-[3.75rem] pb-8", c > 0 && "pl-7", g > 0 && "border-t border-foreground/6 pt-7", g === column.length - 1 && "flex-1")}>
                  <p className={groupTitle}>{group.title}</p>
                  <ul className="mt-[1.4rem] grid gap-5">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <FooterLink link={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-2 grid gap-8 border-t border-foreground/10 pt-8 lg:mt-0 lg:grid-cols-3 lg:gap-0 lg:pt-0">
          <div className="lg:py-9">
            <p className={groupTitle}>{contact.title}</p>
            <ul className="mt-4 grid gap-2">
              {contact.links.map((link) => (
                <li key={link.label}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-foreground/6 lg:py-9 lg:pl-7">
            <p className={groupTitle}>{follow.title}</p>
            <ul className="mt-4 flex gap-6">
              {follow.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} aria-label={link.label} className="flex text-foreground transition-opacity duration-200 hover:opacity-60 [&_svg]:size-5">
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:border-l lg:border-foreground/6 lg:py-9 lg:pl-7">
            <p className={groupTitle}>{apps.title}</p>
            <ul className="mt-4 flex gap-2">
              {apps.badges.map((badge) => (
                <li key={badge.label}>
                  <a
                    href={badge.href}
                    className="flex h-[2.0625rem] items-center gap-1.5 rounded-[5px] bg-foreground px-2.5 text-background transition-opacity duration-200 hover:opacity-85 [&_svg]:size-5"
                  >
                    {badge.icon}
                    <span className="flex flex-col leading-none">
                      <span className="text-[0.5rem] tracking-[0.02em]">{badge.small}</span>
                      <span className="text-[0.9375rem] font-medium tracking-[-0.02em]">{badge.label}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-foreground/10 pt-5 lg:mt-0 lg:pt-6">
          {legal.map((line, i) => (
            <p key={line} className={cn("text-xs leading-[1.125rem] tracking-[-0.005em] text-foreground/55", i === 1 && "mt-2 lg:mt-3")}>
              {line}
            </p>
          ))}
          {pills.length > 0 && (
            <div className="mt-4 flex gap-2 lg:mt-5">
              {pills.map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  className="flex h-[1.6875rem] items-center gap-1.5 rounded-full border border-foreground/10 px-2.5 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors duration-200 hover:bg-foreground/4 [&_svg]:size-4"
                >
                  {pill.icon}
                  {pill.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="@container mt-5 border-t border-foreground/10 pt-10 lg:mt-5 lg:pt-11">
          <p
            aria-hidden
            className="overflow-clip text-center leading-[0.8] font-black tracking-[-0.02em] whitespace-nowrap text-muted uppercase italic"
            style={{ fontSize: `calc(100cqw / ${(brand.length * 0.7).toFixed(2)})` } as CSSProperties}
          >
            {brand}
          </p>
        </div>
      </div>
    </footer>
  );
}
