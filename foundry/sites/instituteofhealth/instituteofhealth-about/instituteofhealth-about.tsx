import { cn } from "@foundry/foundry-utils";
import { InstituteofhealthButton } from "@foundry/instituteofhealth-button";

export interface InstituteofhealthAboutProps {
  /** the statement at the top left */
  heading: string;
  /** small chips at the bottom left */
  chips?: string[];
  /** the paragraph at the top right */
  body: string;
  /** the dark button at the bottom right */
  action?: { label: string; href: string };
  className?: string;
}

export function InstituteofhealthAbout({ heading, chips = [], body, action, className }: InstituteofhealthAboutProps) {
  return (
    <section className={cn("grid border-b border-border bg-muted text-foreground lg:min-h-[27rem] lg:grid-cols-2", className)}>
      {/* Left: heading on top, chips at the bottom. */}
      <div className="flex flex-col justify-between gap-[4.8rem] px-gutter pt-8 pb-5 lg:gap-8 lg:pt-10 lg:pb-[1.55rem]">
        <h2 className="max-w-[22rem] font-display text-[1.46rem] leading-[1.2] font-medium tracking-[-0.03em] lg:max-w-[33rem] lg:text-[2.79rem] lg:leading-[0.95] lg:tracking-[-0.035em]">
          {heading}
        </h2>
        {chips.length > 0 && (
          <ul className="flex flex-wrap gap-1">
            {chips.map((c) => (
              <li key={c} className="flex h-[2.4rem] items-center rounded-md bg-background px-3 text-[0.8775rem] leading-none font-medium tracking-[-0.02em] lg:h-9 lg:px-4 lg:text-[0.765rem]">
                {c}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right: paragraph on top, button at the bottom; a hairline separates the halves. */}
      <div className="flex flex-col justify-between gap-[4.6rem] border-t border-border px-gutter pt-[1.4rem] pb-6 lg:gap-8 lg:border-t-0 lg:border-l lg:pt-10 lg:pb-[1.75rem]">
        <p className="max-w-[37rem] text-[1.097rem] leading-[1.3] font-normal tracking-[-0.01em] lg:text-[1.53rem] lg:leading-[1.28] lg:tracking-[-0.0135em]">{body}</p>
        {action && (
          <InstituteofhealthButton href={action.href} className="lg:w-[14.55rem]">
            {action.label}
          </InstituteofhealthButton>
        )}
      </div>
    </section>
  );
}
