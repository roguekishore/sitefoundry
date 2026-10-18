import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HulyButton } from "@foundry/huly-button";
import { HulyHeading } from "@foundry/huly-heading";
import "./huly-hero.css";

export interface HulyHeroProps {
  /** the page title; pass a list to choose the line breaks on wide screens */
  title: string | string[];
  /** one or two sentences under the title */
  text?: string;
  /** the glowing pill */
  cta?: { label: string; href: string };
  /** what the light beam lands on: usually a product window (huly-window) */
  preview?: ReactNode;
  /** the line under the preview: a label and a list of product areas (a marquee on phones) */
  strip?: { label: string; items: string[] };
  /** dark forces the dark colours (as on the original); inherit follows the page */
  tone?: "dark" | "inherit";
  className?: string;
}

/** The light beam: a bright vertical line that lands on the top edge of the preview and spreads. */
function Beam() {
  const pulse = "animate-[huly-beam_5s_ease-in-out_infinite] motion-reduce:animate-none";
  return (
    <div aria-hidden className="pointer-events-none absolute bottom-full left-[80%] h-[23rem] w-0 lg:left-[58%] lg:h-[45rem]">
      {/* haze around the beam */}
      <div className="absolute bottom-[12%] left-1/2 h-[90%] w-[26rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_45%,transparent),transparent)] blur-2xl lg:w-[44rem]" />
      <div className="absolute bottom-0 left-1/2 h-[65%] w-[14rem] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_60%,transparent),transparent)] blur-xl lg:w-[24rem]" />
      {/* soft column and the bright core */}
      <div className={cn("absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-linear-to-b from-transparent via-glow/50 to-glow blur-lg lg:w-12", pulse)} />
      <div className={cn("absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-linear-to-b from-transparent via-foreground/80 to-foreground shadow-[0_0_14px_3px_var(--glow)]", pulse)} />
      {/* where it lands, the light spreads into a bell: a wide coloured one and a narrow white-hot one */}
      <div className="absolute bottom-0 left-1/2 h-[42%] w-[20rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_50%_100%,color-mix(in_oklab,var(--foreground)_80%,var(--glow))_0%,color-mix(in_oklab,var(--glow)_75%,transparent)_30%,transparent_72%)] lg:w-[40rem]" />
      <div className="absolute bottom-0 left-1/2 h-[30%] w-[5rem] -translate-x-1/2 bg-[radial-gradient(50%_100%_at_50%_100%,var(--foreground)_0%,color-mix(in_oklab,var(--foreground)_60%,transparent)_35%,transparent_75%)] blur-[2px] lg:w-[11rem]" />
      <div className="absolute bottom-0 left-1/2 h-px w-[24rem] -translate-x-1/2 bg-linear-to-r from-transparent via-foreground to-transparent lg:w-[56rem]" />
      {/* flare along the top edge of the preview */}
      <div className="absolute -bottom-6 left-1/2 h-12 w-[28rem] origin-center animate-[huly-flare_5s_ease-in-out_infinite] rounded-[50%] bg-[radial-gradient(closest-side,var(--foreground),color-mix(in_oklab,var(--glow)_70%,transparent)_45%,transparent)] blur-md motion-reduce:animate-none lg:w-[60rem]" />
    </div>
  );
}

export function HulyHero({ title, text, cta, preview, strip, tone = "dark", className }: HulyHeroProps) {
  return (
    <section className={cn("relative isolate overflow-hidden bg-background text-foreground", tone === "dark" && "dark", className)}>
      {/* a deep blue cast across the upper right, as in a dark room lit by the beam */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-20%] -z-10 h-[50rem] w-[70rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--glow)_16%,transparent),transparent)]"
      />

      <div className="mx-auto max-w-page px-gutter pt-[5.75rem] pb-10 lg:pt-[11.25rem] lg:pb-24">
        <div className="relative z-10">
          <HulyHeading
            as="h1"
            size="hero"
            gradient
            title={title}
            text={text}
            textClassName="max-w-[22rem] text-foreground/90 sm:max-w-[28rem]"
          />
          {cta && (
            <HulyButton href={cta.href} variant="glow" className="mt-6 w-full max-w-[14rem] lg:mt-11 lg:w-60 lg:max-w-none">
              {cta.label}
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </HulyButton>
          )}
        </div>

        {preview && (
          <div className="relative mt-[4.75rem] lg:mt-60">
            <Beam />
            <div className="relative">{preview}</div>
          </div>
        )}

        {strip && (
          <div className={cn(preview ? "mt-12 lg:mt-10" : "mt-16")}>
            <p className="text-[0.9375rem] tracking-[-0.02em] text-foreground/65">{strip.label}</p>
            <div className="mt-3 -mx-gutter overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:mx-0 lg:mt-2.5 lg:[mask-image:none]">
              <div className="flex w-max animate-[huly-marquee_26s_linear_infinite] motion-reduce:animate-none lg:w-auto lg:animate-none">
                {[0, 1].map((copy) => (
                  <ul key={copy} aria-hidden={copy === 1 || undefined} className={cn("flex shrink-0 items-center", copy === 1 && "lg:hidden")}>
                    {strip.items.map((item, i) => (
                      <li key={item} className="flex items-center text-[0.9375rem] font-semibold tracking-[-0.02em]">
                        <span className={cn("px-2.5", i === 0 && "lg:pl-0")}>{item}</span>
                        <span aria-hidden className={cn("size-[3px] rounded-full bg-foreground/45", i === strip.items.length - 1 && "lg:hidden")} />
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
