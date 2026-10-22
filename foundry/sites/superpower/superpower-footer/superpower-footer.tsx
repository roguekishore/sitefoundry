import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { SuperpowerButton } from "@foundry/superpower-button";
import { SuperpowerMedia } from "@foundry/superpower-media";

export interface SuperpowerFooterLink {
  label: string;
  href: string;
  /** a small icon before the label (social links) */
  icon?: ReactNode;
}

export interface SuperpowerFooterGroup {
  title: string;
  links: SuperpowerFooterLink[];
  /** on desktop, start a new column with this group */
  newColumn?: boolean;
}

export interface SuperpowerFooterProps {
  /** the wordmark */
  logo: ReactNode;
  /** the newsletter line: the dark lead, then the grey rest */
  blurbLead?: string;
  blurb?: string;
  emailPlaceholder?: string;
  signUpLabel?: string;
  /** the app box: a QR code (empty: a placeholder) and a small tag under it */
  app?: { qr?: ReactNode; qrLabel?: string; icon?: ReactNode; label: string; href: string };
  /** a label over a row of small icon tiles (e.g. ask an assistant) */
  tilesLabel?: string;
  tiles?: { icon: ReactNode; label: string; href: string }[];
  groups: SuperpowerFooterGroup[];
  copyright: string;
  legal: SuperpowerFooterLink[];
  /** a certification note at the end of the bottom row */
  certification?: { label: string; icon?: ReactNode };
  className?: string;
}

export function SuperpowerFooter({
  logo,
  blurbLead,
  blurb,
  emailPlaceholder,
  signUpLabel,
  app,
  tilesLabel,
  tiles,
  groups,
  copyright,
  legal,
  certification,
  className,
}: SuperpowerFooterProps) {
  // desktop columns: a group with newColumn starts the next one
  const columns: SuperpowerFooterGroup[][] = [];
  for (const g of groups) {
    if (!columns.length || g.newColumn) columns.push([]);
    columns[columns.length - 1].push(g);
  }
  const groupBlock = (g: SuperpowerFooterGroup) => (
    <div key={g.title}>
      <p className="text-[0.875rem] text-muted-foreground/80 lg:text-[0.9375rem]">{g.title}</p>
      <ul className="mt-4 flex flex-col gap-3.5 lg:gap-3">
        {g.links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="flex items-center gap-2.5 truncate text-[0.875rem] transition-colors duration-200 hover:text-foreground/70 motion-reduce:transition-none lg:text-[0.9375rem] [&_svg]:size-5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground"
            >
              {l.icon}
              <span className="truncate">{l.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className={cn("bg-secondary text-foreground lg:rounded-lg lg:bg-card", className)}>
      <div className="mx-auto max-w-page px-gutter pt-14 pb-12 lg:max-w-none lg:px-[2.4rem] lg:pt-[5.4rem] lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,30.5rem)_minmax(0,1fr)] lg:gap-x-12 lg:gap-y-0 xl:gap-x-[10rem]">
          <div className="lg:col-start-1 lg:row-start-1">
            <div>{logo}</div>
            {(blurbLead || blurb) && (
              <p className="mt-6 max-w-[26rem] text-[0.875rem] leading-[1.45] text-muted-foreground lg:mt-7 lg:text-[0.8125rem]">
                {blurbLead && <span className="text-foreground">{blurbLead} </span>}
                {blurb}
              </p>
            )}
            {signUpLabel && (
              <form className="mt-8 flex gap-2 lg:mt-6" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  aria-label={emailPlaceholder}
                  placeholder={emailPlaceholder}
                  className="h-12 min-w-0 flex-1 rounded-full border border-input bg-transparent px-3.5 text-[0.9375rem] placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none lg:h-[2.875rem] lg:max-w-[24.4rem]"
                />
                <SuperpowerButton type="submit" className="h-12 text-[1rem] lg:h-[2.875rem]">
                  {signUpLabel}
                </SuperpowerButton>
              </form>
            )}
          </div>

          <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1">
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:hidden">{groups.map(groupBlock)}</div>
            <div className="hidden grid-cols-3 gap-x-6 lg:grid xl:gap-x-8">
              {columns.map((col, i) => (
                <div key={i} className="flex min-w-0 flex-col gap-14">
                  {col.map(groupBlock)}
                </div>
              ))}
            </div>
          </div>

          {app && (
            <div className="lg:col-start-1 lg:row-start-2 lg:mt-11">
              <SuperpowerMedia media={app.qr} label={app.qrLabel} className="size-[8.625rem] rounded-lg border border-border bg-card lg:size-[7rem] lg:rounded-sm" />
              <a
                href={app.href}
                className="mt-2 flex h-12 w-[8.625rem] items-center justify-center gap-1.5 rounded-lg border border-border bg-card text-[0.875rem] transition-colors duration-200 hover:bg-muted lg:h-10 lg:w-[7rem] lg:rounded-sm lg:text-[0.8125rem] [&_svg]:size-4"
              >
                {app.icon}
                {app.label}
              </a>
            </div>
          )}

          {tiles && tiles.length > 0 && (
            <div className="hidden lg:col-start-1 lg:row-start-3 lg:mt-12 lg:block">
              {tilesLabel && <p className="text-[0.9375rem]">{tilesLabel}</p>}
              <ul className="mt-4 flex gap-2">
                {tiles.map((t) => (
                  <li key={t.label}>
                    <a
                      href={t.href}
                      aria-label={t.label}
                      className="grid size-[2.875rem] place-items-center rounded-sm border border-border bg-secondary text-muted-foreground/70 transition-colors duration-200 hover:text-foreground [&_svg]:size-5"
                    >
                      {t.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-7 text-[0.875rem] text-muted-foreground lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:text-[0.8125rem]">
          <p className="lg:max-w-[15rem]">{copyright}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-8">
            {legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors duration-200 hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          {certification && (
            <p className="flex items-center gap-3 text-foreground lg:flex-row-reverse lg:text-muted-foreground [&_svg]:size-8 [&_svg]:text-muted-foreground/70 lg:[&_svg]:size-11">
              {certification.icon}
              <span className="lg:max-w-[8rem]">{certification.label}</span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
