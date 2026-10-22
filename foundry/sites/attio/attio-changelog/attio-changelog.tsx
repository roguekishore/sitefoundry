import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioButton } from "@foundry/attio-button";
import { AttioHeading } from "@foundry/attio-heading";

export interface AttioChangelogEntry {
  /** when it shipped, as text */
  date: string;
  title: string;
  /** one or two grey lines */
  text: string;
  href?: string;
}

export interface AttioChangelogProps {
  /** the small label over the heading */
  badge?: string;
  /** the heading: dark lead… */
  lead: string;
  /** …and grey rest */
  rest?: string;
  /** the small outline button under the heading */
  action?: { label: string; href: string };
  /** four recent releases */
  entries: AttioChangelogEntry[];
  /** the newsletter row under the releases; leave out for none */
  newsletter?: { lead: string; rest?: string; placeholder: string; submitLabel: string; action?: string };
  className?: string;
}

/**
 * A white framed changelog: badge, two-tone heading and a small button, four releases in
 * hairline-ruled columns (a sideways scroller on phones) standing on a strip of fine
 * vertical ticks, then a newsletter row with an email field and a dark button.
 */
export function AttioChangelog({ badge, lead, rest, action, entries, newsletter, className }: AttioChangelogProps) {
  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page border-b border-border lg:border-x">
        <div className="px-8 pt-[5.5rem] lg:px-[3.6875rem] lg:pt-section">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} className="mt-5 max-w-[17rem] sm:max-w-[37.5rem] lg:mt-6" />
          {action && (
            <AttioButton href={action.href} size="sm" arrow className="mt-7">
              {action.label}
            </AttioButton>
          )}
        </div>

        <div className="relative mt-10 border-b border-border lg:mt-20">
          {/* fine ticks along the foot of the columns */}
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-14 bg-[repeating-linear-gradient(to_right,var(--border)_0_1px,transparent_1px_14.5px)] lg:mx-[0.875rem]" />
          <ul className="relative flex snap-x snap-mandatory overflow-x-auto px-6 [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-[3.6875rem]">
            {entries.map((e) => (
              <li key={e.title} className="w-[19.2rem] shrink-0 snap-start border-l border-border lg:w-auto">
                <a href={e.href} className="group block h-[15rem] px-6 lg:h-[19.5rem]">
                  <p className="text-[0.8125rem] font-medium tracking-[-0.01em] text-muted-foreground">{e.date}</p>
                  <h3 className="mt-4 max-w-[17rem] text-lg leading-[1.35] font-medium tracking-[-0.01em] text-foreground lg:mt-5">{e.title}</h3>
                  <p className="mt-1 line-clamp-2 max-w-[17rem] text-base leading-[1.4] font-medium tracking-[-0.01em] text-muted-foreground">{e.text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {newsletter && (
          <form
            action={newsletter.action}
            className="flex flex-col items-center gap-7 px-6 py-[5.5rem] text-center lg:flex-row lg:justify-between lg:gap-10 lg:px-[3.6875rem] lg:py-20 lg:text-left"
          >
            <AttioHeading as="h3" size="statement" lead={newsletter.lead} rest={newsletter.rest} restOnNewLine className="leading-[1.25]" />
            <div className="flex w-full flex-col gap-2 lg:w-auto lg:flex-row">
              <input
                type="email"
                name="email"
                required
                placeholder={newsletter.placeholder}
                aria-label={newsletter.placeholder}
                className="h-10 rounded-lg border border-input bg-card px-3.5 text-[0.9375rem] text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none lg:w-[15.625rem]"
              />
              <AttioButton type="submit" variant="primary" size="lg" className="lg:w-auto lg:rounded-lg">
                {newsletter.submitLabel}
              </AttioButton>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
