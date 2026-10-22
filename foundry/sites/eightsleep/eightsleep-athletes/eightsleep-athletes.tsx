import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { EightsleepHeading } from "@foundry/eightsleep-heading";
import { EightsleepMarquee } from "@foundry/eightsleep-marquee";
import { EightsleepMedia } from "@foundry/eightsleep-media";

export interface EightsleepAthlete {
  quote: ReactNode;
  name: ReactNode;
  /** a tiny line under the name */
  role?: ReactNode;
  /** the photo */
  media?: ReactNode;
}

export interface EightsleepAthletesProps {
  /** the heading; may hold a line break */
  title: ReactNode;
  /** partner names or wordmarks, three to five */
  partners?: { name: string; mark: ReactNode }[];
  athletes: EightsleepAthlete[];
  /** seconds per lap of the track */
  duration?: number;
  className?: string;
}

function Partner({ partner }: { partner: { name: string; mark: ReactNode } }) {
  return (
    <span role="img" aria-label={partner.name} className="flex h-20 items-center justify-center px-8 lg:px-14">
      {partner.mark}
    </span>
  );
}

export function EightsleepAthletes({ title, partners, athletes, duration = 70, className }: EightsleepAthletesProps) {
  return (
    <section className={cn("overflow-x-clip bg-secondary pt-[110px] pb-16 text-secondary-foreground lg:pt-[100px] lg:pb-[90px]", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <EightsleepHeading title={title} />
      </div>
      {partners && (
        <>
          <ul className="mt-12 hidden items-center justify-center lg:mt-14 lg:flex">
            {partners.map((p, i) => (
              <li key={i} className={cn(i > 0 && "border-l border-border")}>
                <Partner partner={p} />
              </li>
            ))}
          </ul>
          <EightsleepMarquee
            className="mt-12 lg:hidden"
            duration={30}
            gap="default"
            items={partners.map((p, i) => (
              <span key={i} className="block border-l border-border">
                <Partner partner={p} />
              </span>
            ))}
          />
        </>
      )}
      <EightsleepMarquee
        className="mt-11"
        duration={duration}
        items={athletes.map((a, i) => (
          <article key={i} className="dark relative h-[466px] w-[309px] overflow-clip rounded-lg bg-background text-foreground">
            <EightsleepMedia media={a.media} className="absolute inset-0 bg-muted-foreground/40" />
            <div className="absolute inset-0 bg-linear-to-b from-transparent from-48% to-background to-84%" />
            <div className="absolute inset-x-5 bottom-6">
              <blockquote className="font-[family-name:var(--eightsleep-quote,var(--typeface-display))] text-[18px] leading-[1.17] tracking-[-0.01em]">{a.quote}</blockquote>
              <p className="mt-4 text-[15px] font-medium">{a.name}</p>
              {a.role && <p className="mt-2 text-[11px] text-foreground/85">{a.role}</p>}
            </div>
          </article>
        ))}
      />
    </section>
  );
}
