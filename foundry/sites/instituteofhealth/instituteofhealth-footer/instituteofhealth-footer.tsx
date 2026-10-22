import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";

export interface InstituteofhealthFooterLink {
  label: string;
  href: string;
}

export interface InstituteofhealthFooterProps {
  /** the small wordmark at the top left */
  brand: ReactNode;
  /** first link column (desktop: from 40% across) */
  primary: { title: string; links: InstituteofhealthFooterLink[] };
  /** second link column */
  secondary?: { title: string; links: InstituteofhealthFooterLink[] };
  /** contact block under the first column */
  contact?: { title: string; links: InstituteofhealthFooterLink[] };
  /** round social buttons at the top right (pass lucide icons or small svgs) */
  socials?: { label: string; href: string; icon: ReactNode }[];
  /** the giant grey name across the bottom; sized for about 14 characters */
  wordmark: string;
  /** small line at the bottom left */
  legal: string;
  /** small line at the bottom right */
  credit?: string;
  className?: string;
}

const link = "transition-opacity duration-400 ease-[ease] hover:opacity-65 motion-reduce:transition-none";

function Column({ title, links, className }: { title: string; links: InstituteofhealthFooterLink[]; className?: string }) {
  return (
    <div className={className}>
      <p className="text-muted-foreground">{title}</p>
      <ul className="mt-4 lg:mt-3.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className={link}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Always dark: it switches itself to the theme's dark tokens. */
export function InstituteofhealthFooter({ brand, primary, secondary, contact, socials = [], wordmark, legal, credit, className }: InstituteofhealthFooterProps) {
  return (
    <footer className={cn("dark bg-background text-foreground", className)}>
      <div className="grid grid-cols-2 gap-x-4 px-gutter pt-10 text-[0.975rem] leading-[1.42] font-medium tracking-[-0.03em] lg:grid-cols-[40%_20.7%_1fr_auto] lg:gap-x-0 lg:pt-12 lg:text-[0.81rem] lg:leading-[1.46]">
        <div className="col-span-2 lg:col-span-1">{brand}</div>
        <div className="mt-[3.6rem] lg:mt-0">
          <Column {...primary} />
          {contact && <Column {...contact} className="mt-[3.4rem] lg:mt-[5.5rem]" />}
        </div>
        {secondary && <Column {...secondary} className="mt-[3.6rem] lg:mt-0" />}
        {socials.length > 0 && (
          <ul className="col-span-2 mt-14 flex gap-1.5 lg:col-span-1 lg:col-start-4 lg:mt-0 lg:self-start">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className={cn("flex size-11 items-center justify-center rounded-full bg-foreground text-background [&_svg]:size-[1.15rem]", link)}
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p
        aria-hidden
        className="mt-32 overflow-clip px-gutter font-display text-[13.3vw] leading-[0.8] font-medium tracking-[-0.05em] whitespace-nowrap text-foreground/25 lg:mt-[16.5rem] lg:text-[13.8vw]"
      >
        {wordmark}
      </p>

      <div className="mt-5 flex items-center justify-between gap-4 border-t border-border px-gutter py-6 text-[0.8775rem] leading-none font-medium tracking-[-0.03em] text-muted-foreground lg:mt-[2.6rem] lg:py-[1.6rem] lg:text-[0.81rem]">
        <span>{legal}</span>
        {credit && <span>{credit}</span>}
      </div>
    </footer>
  );
}
