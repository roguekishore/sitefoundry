import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { AttioBadge } from "@foundry/attio-badge";
import { AttioButton } from "@foundry/attio-button";
import "./attio-stack.css";

export interface AttioStackApp {
  /** the app's name, for screen readers */
  name: string;
  /** its mark (an svg, img or a lucide icon) */
  icon: ReactNode;
}

export interface AttioStackProps {
  /** the small label over the heading */
  badge?: string;
  /** the white heading */
  title: string;
  /** one or two grey lines under it */
  text?: string;
  /** the small outline button */
  action?: { label: string; href: string };
  /** about a dozen apps for the tile row */
  apps: AttioStackApp[];
  className?: string;
}

/**
 * A centred dark pinstriped band about integrations: badge, white heading, grey line and a
 * small button over a row of rounded graphite app tiles that fades out at both edges and
 * drifts sideways as the band scrolls past.
 */
export function AttioStack({ badge, title, text, action, apps, className }: AttioStackProps) {
  return (
    <section data-header-tone="dark" className={cn("dark bg-background text-foreground lg:px-gutter", className)}>
      <div className="mx-auto max-w-page overflow-clip border-b border-border bg-[repeating-linear-gradient(to_right,color-mix(in_oklab,var(--foreground)_3.5%,transparent)_0_1px,transparent_1px_8px)] pt-[6.25rem] pb-[4.5rem] lg:border-x lg:pt-section lg:pb-28">
        <div className="flex flex-col items-center px-gutter text-center">
          {badge && <AttioBadge>{badge}</AttioBadge>}
          <h2 className="mt-5 max-w-[16rem] font-display text-[2rem] leading-[1.125] font-medium tracking-[-0.025em] text-balance sm:max-w-none lg:mt-6 lg:text-[2.5rem] lg:leading-[1.1]">
            {title}
          </h2>
          {text && <p className="mt-4 max-w-[18.5rem] text-[0.9375rem] leading-[1.35] font-medium text-muted-foreground lg:max-w-[19rem]">{text}</p>}
          {action && (
            <AttioButton href={action.href} size="sm" arrow className="mt-8">
              {action.label}
            </AttioButton>
          )}
        </div>

        <div className="mt-16 flex justify-center [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:mt-24">
          <ul className="attio-stack-row flex w-max shrink-0 gap-6 lg:gap-8">
            {apps.map((app) => (
              <li
                key={app.name}
                role="img"
                aria-label={app.name}
                className="grid size-20 shrink-0 place-items-center rounded-[1.1875rem] bg-[linear-gradient(-30deg,var(--card)_25%,var(--accent)_160%)] text-foreground shadow-[inset_0.2px_0.2px_2px_0_color-mix(in_oklab,var(--foreground)_10%,transparent),0_1.5px_1.5px_0_color-mix(in_oklab,var(--background)_60%,transparent)] lg:size-24 lg:rounded-[1.4375rem] [&_svg]:size-9 lg:[&_svg]:size-11"
              >
                {app.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
