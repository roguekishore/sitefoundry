import type { ReactNode } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ParsleyhealthButton } from "@foundry/parsleyhealth-button";
import { ParsleyhealthPlaceholder } from "@foundry/parsleyhealth-placeholder";
import { ParsleyhealthWordmark } from "@foundry/parsleyhealth-wordmark";

export interface ParsleyhealthFooterLink {
  /** the link's text */
  label: string;
  /** where it goes */
  href: string;
}

export interface ParsleyhealthFooterGroup {
  /** the clover group title */
  title: string;
  /** the group's links */
  links: ParsleyhealthFooterLink[];
}

export interface ParsleyhealthFooterProps {
  /** the company name, set as the wordmark */
  brand: string;
  /** the social handle at the top left */
  handle?: string;
  /** the "Follow →" link at the top right */
  follow?: ParsleyhealthFooterLink;
  /** the social feed strip under the handle; a placeholder when empty */
  feed?: ReactNode;
  /** link columns on desktop, each a stack of groups (three on the original) */
  columns: ParsleyhealthFooterGroup[][];
  /** the two pills (peach fill, outline) */
  actions?: ParsleyhealthFooterLink[];
  /** which desktop column the pills sit under */
  actionsColumn?: number;
  /** the newsletter form */
  newsletter?: { title: string; placeholder: string; button: string; inputLabel: string };
  /** the title over the social icons */
  shareTitle?: string;
  /** the social icons */
  social?: { label: string; href: string; icon: ReactNode }[];
  /** the small compliance badge after the icons */
  badge?: string;
  /** the copyright and address line */
  legal?: string;
  /** the small legal links */
  legalLinks?: ParsleyhealthFooterLink[];
  className?: string;
}

const linkClass =
  "text-[1.0312rem] font-medium text-foreground transition-colors duration-150 ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-accent-foreground motion-reduce:transition-none";

function Group({ group }: { group: ParsleyhealthFooterGroup }) {
  return (
    <div className="break-inside-avoid pb-7 lg:pb-9">
      <p className="text-[1.1rem] font-medium text-glow lg:text-[1.2375rem]">{group.title}</p>
      <ul className="mt-3 flex flex-col gap-2 lg:mt-3.5 lg:gap-2">
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={linkClass}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Actions({ actions, className }: { actions: ParsleyhealthFooterLink[]; className?: string }) {
  return (
    <div className={cn("flex w-[12.375rem] flex-col gap-3", className)}>
      {actions.map((action, i) => (
        <ParsleyhealthButton
          key={action.label}
          href={action.href}
          size="sm"
          variant={i === 0 ? "highlight" : "outline"}
          className={cn("w-full font-normal", i > 0 && "border-highlight text-highlight hover:bg-highlight/10")}
        >
          {action.label}
        </ParsleyhealthButton>
      ))}
    </div>
  );
}

/** Forest footer with a feed strip, newsletter and link columns. */
export function ParsleyhealthFooter({
  brand,
  handle,
  follow,
  feed,
  columns,
  actions,
  actionsColumn = 1,
  newsletter,
  shareTitle,
  social,
  badge,
  legal,
  legalLinks,
  className,
}: ParsleyhealthFooterProps) {
  const extras = (
    <>
      {newsletter ? (
        <form className="mt-10 lg:mt-11" action="#">
          <p className="text-[1.1rem] font-medium text-glow lg:text-[1.2375rem]">{newsletter.title}</p>
          <div className="mt-3 flex h-12 w-full overflow-clip rounded-full lg:mt-4 lg:w-[20.625rem]">
            <input
              type="email"
              aria-label={newsletter.inputLabel}
              placeholder={newsletter.placeholder}
              className="min-w-0 flex-1 bg-primary px-4 text-[1.1rem] text-primary-foreground placeholder:text-primary-foreground/80 focus:outline-none"
            />
            <button type="submit" className="w-[5.5rem] shrink-0 bg-glow text-[1.1rem] font-medium text-foreground transition-colors duration-150 hover:bg-glow/85">
              {newsletter.button}
            </button>
          </div>
        </form>
      ) : null}
      {shareTitle ? <p className="mt-9 text-[1.1rem] font-medium text-glow lg:mt-10 lg:text-[1.2375rem]">{shareTitle}</p> : null}
      {social?.length || badge ? (
        <div className="mt-5 flex items-center gap-6 lg:mt-6 lg:gap-5">
          {social?.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="text-foreground transition-opacity duration-150 hover:opacity-70 [&_svg]:size-6">
              {s.icon}
            </a>
          ))}
          {badge ? (
            <span className="ml-auto flex items-center gap-1.5 text-[0.7563rem] leading-tight font-medium tracking-[0.04em] uppercase lg:ml-4">
              <ShieldCheck aria-hidden className="size-7" strokeWidth={1.25} />
              <span className="max-w-[5.5rem]">{badge}</span>
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );

  return (
    <footer className={cn("dark bg-background px-gutter pt-10 pb-8 text-foreground lg:pt-30 lg:pb-32", className)}>
      <div className="mx-auto max-w-page">
        {handle || follow ? (
          <div className="flex items-center justify-between text-[0.9625rem] font-medium text-accent-foreground">
            {handle ? <span>{handle}</span> : <span />}
            {follow ? (
              <a href={follow.href} className="group inline-flex items-center gap-1.5">
                {follow.label}
                <ArrowRight aria-hidden className="size-3.5 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none" strokeWidth={1.75} />
              </a>
            ) : null}
          </div>
        ) : null}
        <div className="mt-6 h-[14.8rem] lg:h-[11.5625rem] [&>img]:size-full [&>img]:object-cover">
          {feed ?? <ParsleyhealthPlaceholder tone="tint" className="bg-foreground/5" />}
        </div>

        <div className="mt-8 border-t border-border pt-8 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,23.5rem)_minmax(0,1fr)] lg:pt-16">
          <div>
            <ParsleyhealthWordmark brand={brand} size="lg" />
            <div className="max-lg:hidden">{extras}</div>
          </div>

          {/* phones: every group in two balanced columns */}
          <div className="mt-8 columns-2 gap-x-6 lg:hidden">
            {columns.flat().map((group) => (
              <Group key={group.title} group={group} />
            ))}
          </div>
          {actions?.length ? <Actions actions={actions} className="mt-2 lg:hidden" /> : null}
          <div className="lg:hidden">{extras}</div>

          {/* desktop: the columns as given */}
          <div className="hidden grid-cols-[13rem_15.375rem_minmax(0,1fr)] lg:grid">
            {columns.map((groups, i) => (
              <div key={groups[0]?.title ?? i}>
                {groups.map((group) => (
                  <Group key={group.title} group={group} />
                ))}
                {actions?.length && i === actionsColumn ? <Actions actions={actions} className="-mt-3" /> : null}
              </div>
            ))}
          </div>
        </div>

        {legal || legalLinks?.length ? (
          <div className="mt-14 border-t border-border pt-8 text-center text-[0.825rem] leading-[1.455] font-medium lg:mt-6 lg:pt-7 lg:text-right lg:text-[0.8938rem]">
            {legal ? <p>{legal}</p> : null}
            {legalLinks?.length ? (
              <ul className="mt-1 flex flex-wrap justify-center gap-y-1 lg:mt-2 lg:justify-end">
                {legalLinks.map((link, i) => (
                  <li key={link.label} className={cn("px-2 last:pr-0", i > 0 && "border-l border-foreground/50")}>
                    <a href={link.href} className="transition-colors duration-150 hover:text-accent-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
