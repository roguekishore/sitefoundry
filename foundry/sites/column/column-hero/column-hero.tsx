import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ColumnButton } from "@foundry/column-button";
import "./column-hero.css";

export interface ColumnHeroLogo {
  /** a customer's name, shown as a plain wordmark */
  name: string;
  /** optional small mark before the name (a lucide icon works) */
  icon?: ReactNode;
}

export interface ColumnHeroProps {
  /** the small ringed badge above the headline */
  badge?: { mark: string; label: string };
  /** the big headline */
  title: ReactNode;
  /** one or two lines under it */
  lead: ReactNode;
  /** the navy button */
  primary: { label: string; href: string };
  /** the white button beside it */
  secondary?: { label: string; href: string };
  /** customer names along the bottom (six fill the row) */
  logos?: ColumnHeroLogo[];
  /** the art canvas; fills the area like object-fit: cover. Empty: a placeholder */
  media?: ReactNode;
  /** slide up under a sticky header so the art runs behind the nav (as on the original page) */
  underHeader?: boolean;
  className?: string;
}

/** Placeholder art: a soft glow wash with a faint dot grid, and a frame where the floating card sits. */
function ArtPlaceholder() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_62%_50%,color-mix(in_oklab,var(--glow)_30%,transparent),transparent_75%),radial-gradient(ellipse_35%_30%_at_40%_30%,color-mix(in_oklab,var(--highlight)_16%,transparent),transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,color-mix(in_oklab,var(--foreground)_14%,transparent)_1px,transparent_1.5px)] bg-size-[7px_7px] [mask-image:radial-gradient(ellipse_60%_60%_at_60%_50%,black,transparent_80%)]" />
      <div className="absolute top-[38%] left-1/2 aspect-[1.27] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-md bg-card shadow-[0_0_0_1px_color-mix(in_oklab,var(--foreground)_5%,transparent),0_12px_32px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:top-[44%] lg:left-[70.5%] lg:w-[22.5%]" />
    </div>
  );
}

export function ColumnHero({ badge, title, lead, primary, secondary, logos = [], media, underHeader, className }: ColumnHeroProps) {
  return (
    <section className={cn("relative overflow-clip bg-background text-foreground", underHeader && "-mt-[2.8125rem] lg:-mt-[3.875rem]", className)}>
      {/* Art: on top on phones, a full-bleed backdrop on desktop. */}
      <div className="column-hero-art relative h-[24rem] lg:absolute lg:inset-x-0 lg:top-0 lg:h-[54rem]">
        {media ? <div className="absolute inset-0 [&>*]:size-full [&>*]:object-cover">{media}</div> : <ArtPlaceholder />}
      </div>

      <div className={cn("relative mx-auto max-w-[calc(var(--page-width)+var(--page-gutter)*2)] px-gutter pb-12 lg:pb-9", underHeader ? "lg:pt-[12.625rem]" : "lg:pt-[8.75rem]")}>
        {badge && (
          <p className="column-hero-badge -mt-1 inline-flex h-[1.875rem] items-center gap-2 rounded-md bg-secondary/80 px-3 text-sm text-muted-foreground shadow-[0_0_0_1px_var(--border),0_6px_16px_color-mix(in_oklab,var(--foreground)_6%,transparent)] backdrop-blur-sm lg:h-8">
            <span className="font-display font-bold tracking-[-0.06em] text-muted-foreground">{badge.mark}</span>
            <span>{badge.label}</span>
          </p>
        )}
        <h1 className="mt-6 max-w-[30rem] font-display lg:max-w-[38rem] text-[2.125rem]/[1.08] font-semibold tracking-[-0.035em] text-balance lg:mt-16 lg:text-[3.75rem]/[0.96]">
          {title}
        </h1>
        <p className="mt-3 max-w-[27.5rem] text-base/[1.4] lg:max-w-[30rem] text-foreground lg:mt-4 lg:text-xl/[1.4]">{lead}</p>
        <div className="mt-6 flex flex-col gap-3 lg:mt-7 lg:flex-row">
          <ColumnButton href={primary.href} fullOnMobile>
            {primary.label}
          </ColumnButton>
          {secondary && (
            <ColumnButton href={secondary.href} variant="secondary" icon="none" fullOnMobile className="lg:px-4">
              {secondary.label}
            </ColumnButton>
          )}
        </div>

        {logos.length > 0 && (
          <ul className="mt-24 grid grid-cols-3 gap-x-4 gap-y-9 lg:mt-[16.5rem] lg:flex lg:justify-between lg:pl-[24rem]">
            {logos.map((l) => (
              <li key={l.name} className="flex items-center justify-center gap-1.5 font-display text-[1.1875rem] font-semibold tracking-[-0.03em] whitespace-nowrap text-foreground/90 [&_svg]:size-[1.125rem] [&_svg]:shrink-0">
                {l.icon}
                {l.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
