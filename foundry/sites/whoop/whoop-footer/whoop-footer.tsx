import { cn } from "@foundry/foundry-utils";
import { WhoopWordmark } from "@foundry/whoop-wordmark";

export interface WhoopFooterGroup {
  /** the small grey heading */
  heading: string;
  /** its links */
  links: { label: string; href: string }[];
}

export interface WhoopFooterProps {
  /** the link groups */
  groups: WhoopFooterGroup[];
  /** the brand name for the big wordmark */
  brand: string;
  /** the short line under the wordmark */
  mission: string;
  className?: string;
}

/** A black footer: link groups, then a huge centred wordmark and a mission line. */
export function WhoopFooter({ groups, brand, mission, className }: WhoopFooterProps) {
  return (
    <footer className={cn("bg-foreground pt-4 pb-5 text-background dark:bg-card dark:text-card-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="flex flex-col gap-[3.4rem] lg:grid lg:grid-cols-4 lg:gap-10 lg:border-t lg:border-current/15 lg:pt-14">
          {groups.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <h2 className="text-sm leading-none opacity-60">{g.heading}</h2>
              <ul className="mt-[1.85rem] flex flex-col gap-[1.4rem] lg:mt-6 lg:gap-4">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm leading-none transition-opacity duration-125 ease-in-out hover:opacity-60 motion-reduce:transition-none"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-[5.5rem] text-center lg:mt-28">
          <WhoopWordmark name={brand} className="text-[4.4rem] lg:text-[9rem]" />
          <p className="mx-auto mt-3 max-w-[22rem] text-[0.8125rem] leading-[1.7] opacity-60 lg:max-w-none lg:text-sm">
            {mission}
          </p>
        </div>
      </div>
    </footer>
  );
}
