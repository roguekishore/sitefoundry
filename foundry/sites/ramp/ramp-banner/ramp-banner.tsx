import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RampButton } from "@foundry/ramp-button";

export interface RampBannerProps {
  /** the short ink title */
  title: string;
  /** the grey line under it */
  text?: string;
  /** the near-black button */
  cta: { label: string; href: string };
  /** art for the right side; empty shows soft diagonal bands of glow */
  art?: ReactNode;
  className?: string;
}

/** Ramp's in-between demo strip. */
export function RampBanner({ title, text, cta, art, className }: RampBannerProps) {
  return (
    <section className={cn("bg-background text-foreground", className)}>
      <div className="mx-auto max-w-page px-gutter lg:px-[calc(var(--page-gutter)*4)]">
        <div className="relative isolate overflow-clip rounded-lg bg-muted px-6 py-6 lg:flex lg:min-h-[11.1875rem] lg:items-center lg:justify-between lg:px-16">
          <div aria-hidden className="absolute inset-y-0 right-0 -z-10 w-full lg:w-1/2">
            {art ?? (
              <div className="size-full bg-[repeating-linear-gradient(118deg,transparent_0_2.5rem,color-mix(in_oklab,var(--glow)_45%,transparent)_2.5rem_4.5rem)] [mask-image:linear-gradient(to_right,transparent_10%,black_95%)]" />
            )}
          </div>
          <div>
            <h2 className="font-display text-lg/6 lg:text-xl/6">{title}</h2>
            {text && <p className="mt-2 text-base/[1.4] text-muted-foreground">{text}</p>}
          </div>
          <RampButton href={cta.href} variant="solid" size="lg" className="mt-6 lg:mt-0">
            {cta.label}
          </RampButton>
        </div>
      </div>
    </section>
  );
}
