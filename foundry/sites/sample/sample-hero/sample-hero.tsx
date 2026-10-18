import { motion, useReducedMotion } from "motion/react";
import { cn } from "@foundry/foundry-utils";
import { Button } from "@foundry/sample-button";

export interface HeroAction {
  label: string;
  href: string;
}

export interface SampleHeroProps {
  /** small line above the title */
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primary: HeroAction;
  secondary?: HeroAction;
  image?: { src: string; alt: string };
  className?: string;
}

export function SampleHero({ eyebrow, title, subtitle, primary, secondary, image, className }: SampleHeroProps) {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <section className={cn("relative isolate overflow-hidden py-section", className)}>
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 size-[36rem] -translate-x-1/2 rounded-full bg-glow/25 blur-3xl"
      />
      <div className="mx-auto grid max-w-page items-center gap-10 px-gutter md:grid-cols-2">
        <div>
          {eyebrow && (
            <motion.p {...rise(0)} className="mb-4 text-sm font-medium uppercase tracking-widest text-highlight">
              {eyebrow}
            </motion.p>
          )}
          <motion.h1 {...rise(0.05)} className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p {...rise(0.12)} className="mt-5 max-w-prose text-lg text-muted-foreground text-pretty">
              {subtitle}
            </motion.p>
          )}
          <motion.div {...rise(0.2)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href} size="lg">
              {primary.label}
            </Button>
            {secondary && (
              <Button href={secondary.href} size="lg" variant="secondary">
                {secondary.label}
              </Button>
            )}
          </motion.div>
        </div>
        {image && (
          <motion.img
            {...rise(0.15)}
            src={image.src}
            alt={image.alt}
            className="aspect-[4/5] w-full rounded-2xl border object-cover md:aspect-square"
          />
        )}
      </div>
    </section>
  );
}
