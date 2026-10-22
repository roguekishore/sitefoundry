import { useState, type ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioButton } from "@foundry/attio-button";
import { AttioHeading } from "@foundry/attio-heading";
import "./attio-customers.css";

export interface AttioCustomerStory {
  /** the company's name, for the tab's label */
  name: string;
  /** its full wordmark, for the desktop tab */
  logo: ReactNode;
  /** just its mark, for the narrow phone tab */
  mark: ReactNode;
  /** the small uppercase line over the story (e.g. the industry) */
  eyebrow?: string;
  /** the story's headline: dark result… */
  lead: string;
  /** …and grey explanation */
  rest?: string;
  /** a link to the full story */
  href?: string;
  /** the story's photo (≈695×429); empty shows a placeholder */
  media?: ReactNode;
  mediaLabel?: string;
}

export interface AttioCustomersProps {
  /** the small label over the heading */
  badge?: string;
  /** the heading: dark lead… */
  lead: string;
  /** …and grey rest */
  rest?: string;
  /** the small outline button under the heading */
  action?: { label: string; href: string };
  /** four stories, one per tab */
  stories: AttioCustomerStory[];
  className?: string;
}

/**
 * A white framed customer-stories section: badge, two-tone heading and a small button, then
 * a row of four logo tabs (the picked one greyed) over a split of the story's headline,
 * bottom-left, and a muted photo on the right that comes into focus as it scrolls in.
 */
export function AttioCustomers({ badge, lead, rest, action, stories, className }: AttioCustomersProps) {
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page border-b border-border lg:border-x">
        <div className="px-8 pt-[5.5rem] pb-16 lg:px-[3.6875rem] lg:pt-section lg:pb-20">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <AttioHeading lead={lead} rest={rest} className="mt-5 max-w-[19rem] sm:max-w-[38rem] lg:mt-6" />
          {action && (
            <AttioButton href={action.href} size="sm" arrow className="mt-7">
              {action.label}
            </AttioButton>
          )}
        </div>

        <div role="tablist" className="grid grid-cols-4 border-y border-border">
          {stories.map((s, i) => (
            <button
              key={s.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={s.name}
              onClick={() => setActive(i)}
              className={cn(
                "flex h-14 items-center justify-center transition-colors duration-200 ease-[cubic-bezier(0,0,0,1)] motion-reduce:transition-none lg:h-20",
                i > 0 && "border-l border-border",
                active === i ? "bg-secondary" : "bg-background hover:bg-muted",
              )}
            >
              <span className="text-foreground lg:hidden [&_svg]:size-6">{s.mark}</span>
              <span className="hidden text-foreground lg:flex [&_svg]:h-6 [&_svg]:w-auto">{s.logo}</span>
            </button>
          ))}
        </div>

        {story && (
          <div key={active} role="tabpanel" className="attio-customers-swap grid lg:grid-cols-2">
            <div className="order-2 flex flex-col justify-end px-8 pt-6 pb-10 lg:order-1 lg:px-[3.6875rem] lg:pb-9">
              {story.eyebrow && <p className="text-[0.8125rem] font-semibold tracking-[0.02em] text-muted-foreground uppercase">{story.eyebrow}</p>}
              <a href={story.href} className="group mt-2 block">
                <AttioHeading as="h3" lead={story.lead} rest={story.rest} className="max-w-[24rem] text-[1.75rem] leading-[1.15] lg:text-[1.75rem] lg:leading-[1.33]" />
              </a>
            </div>
            <div
              role="img"
              aria-label={story.mediaLabel}
              className="attio-customers-photo order-1 aspect-[390/240] overflow-clip bg-secondary lg:order-2 lg:aspect-[695/429] lg:border-l lg:border-border [&>*]:size-full [&>*]:saturate-[0.55] [&>img]:object-cover"
            >
              {story.media}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
