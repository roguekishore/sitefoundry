import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RailwayButton } from "@foundry/railway-button";
import "./railway-cta.css";

export interface RailwayCtaProps {
  /** the heading revealed behind the doors */
  title: string;
  /** one grey line under it */
  lead: string;
  /** the glowing button */
  action: { label: string; href: string };
  /** art for the carriage body (an illustration); a plain dark surface when empty */
  carriage?: ReactNode;
  /** art for the platform floor; a plain hairline floor when empty */
  platform?: ReactNode;
  className?: string;
}

/**
 * The closing call to action as an arriving train: a long dark carriage slides in from the
 * right as the section scrolls up, stops with its doorway centred, then the two doors slide
 * apart and the heading, line and glowing button fade in behind them. Below it, a platform.
 */
export function RailwayCta({ title, lead, action, carriage, platform, className }: RailwayCtaProps) {
  return (
    <section className={cn("railway-cta relative overflow-clip text-foreground", className)}>
      <div className="relative h-[46.5rem]">
        <div className="railway-cta-train absolute inset-y-0 -inset-x-[100vw]">
          <div className="absolute inset-0">
            {carriage ?? (
              <div className="size-full border-y border-foreground/10 bg-muted">
                <div className="h-[10.5rem] border-b border-foreground/10 bg-foreground/[0.04]" />
                <div className="h-[calc(100%-10.5rem)] bg-linear-to-b from-transparent via-glow/10 to-transparent" />
              </div>
            )}
          </div>

          {/* the doorway: what sits behind the doors, and the doors that slide away */}
          <div className="absolute top-[10.75rem] left-1/2 h-[34.75rem] w-[32.5rem] -translate-x-1/2 rounded-t-2xl border border-foreground/10 p-1.5 lg:w-[43.75rem]">
            <div className="relative size-full overflow-clip rounded-t-xl bg-background">
              <div className="railway-cta-copy absolute inset-x-0 top-0 flex flex-col items-center px-gutter pt-20 text-center">
                <h2 className="max-w-[22rem] text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em] lg:max-w-[28rem]">{title}</h2>
                <p className="mt-3 max-w-[20rem] text-base leading-6 text-muted-foreground lg:max-w-[26rem]">{lead}</p>
                <RailwayButton href={action.href} variant="glow" size="md" className="mt-8 px-6">
                  {action.label}
                </RailwayButton>
              </div>
              <div className="railway-cta-door-left absolute inset-y-0 left-0 w-[calc(50%-0.3rem)] rounded-tl-xl border border-foreground/10 bg-secondary" aria-hidden />
              <div className="railway-cta-door-right absolute inset-y-0 right-0 w-[calc(50%-0.3rem)] rounded-tr-xl border border-foreground/10 bg-secondary" aria-hidden />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-[12.8rem]" aria-hidden={platform ? undefined : true}>
        {platform ?? (
          <div className="size-full border-t border-foreground/10">
            <div className="h-11 border-b border-foreground/10 bg-foreground/[0.02]" />
            <div className="h-12 border-b border-foreground/10 bg-[radial-gradient(var(--border)_1.5px,transparent_1.5px)] bg-[size:0.75rem_0.75rem]" />
          </div>
        )}
      </div>
    </section>
  );
}
