import { useEffect, useState, type ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { TypesomethingV2Button } from "@foundry/typesomething-v2-button";
import "./typesomething-v2-hero.css";

export interface TypesomethingV2HeroFeature {
  /** a small icon in a pink dot (lucide works well) */
  icon: ReactNode;
  title: string;
  text: string;
}

export interface TypesomethingV2HeroProps {
  /** the small pill above the headline */
  badge?: { label: string; href: string };
  /** the headline, one string per line */
  title: string[];
  /** the bold word that starts the typewriter line, e.g. "Ask" */
  typeLead: string;
  /** phrases typed after it, one after another; the first is shown without JavaScript */
  phrases: string[];
  /** the paragraph under the typewriter line */
  description: string;
  /** one or two buttons: the first lime, the rest outlined */
  actions: { label: string; href: string }[];
  /** the white strip of three features at the bottom */
  features: TypesomethingV2HeroFeature[];
  className?: string;
}

/** Types and erases each phrase in turn. Returns the visible part of the current phrase. */
function useTypewriter(phrases: string[]) {
  const [text, setText] = useState(phrases[0] ?? "");
  useEffect(() => {
    if (phrases.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let index = 0;
    let shown = phrases[0].length;
    let erasing = true;
    let timer = window.setTimeout(tick, 1800);
    function tick() {
      const phrase = phrases[index];
      if (erasing) {
        shown -= 1;
        if (shown <= 0) {
          erasing = false;
          index = (index + 1) % phrases.length;
        }
        setText(phrase.slice(0, Math.max(shown, 0)));
        timer = window.setTimeout(tick, shown <= 0 ? 320 : 38);
      } else {
        const next = phrases[index];
        shown += 1;
        setText(next.slice(0, shown));
        if (shown >= next.length) {
          erasing = true;
          timer = window.setTimeout(tick, 1800);
        } else {
          timer = window.setTimeout(tick, 72);
        }
      }
    }
    return () => window.clearTimeout(timer);
  }, [phrases]);
  return text;
}

export function TypesomethingV2Hero({ badge, title, typeLead, phrases, description, actions, features, className }: TypesomethingV2HeroProps) {
  const typed = useTypewriter(phrases);
  return (
    <section className={cn("relative overflow-clip bg-muted text-foreground", className)}>
      {/* the two soft glows behind the headline */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-40 size-[26rem] rounded-full bg-highlight opacity-80 blur-[90px] dark:opacity-30 lg:-top-40 lg:-left-24 lg:size-[34rem] lg:blur-[110px]" />
        <div className="absolute -top-16 -right-48 size-[26rem] rounded-full bg-glow opacity-55 blur-[90px] dark:opacity-25 lg:-top-32 lg:-right-20 lg:size-[38rem] lg:blur-[110px]" />
      </div>

      <div className="relative mx-auto flex max-w-page flex-col items-center px-gutter pt-[4.7rem] pb-14 text-center lg:pt-[8.75rem] lg:pb-24">
        {badge && (
          <a
            href={badge.href}
            className="inline-flex h-7 items-center gap-2 rounded-full border border-border bg-background/60 pr-2 pl-3 text-[0.72rem] font-semibold transition-[border-color] duration-[180ms] ease-[ease] hover:border-foreground motion-reduce:transition-none"
          >
            <span aria-hidden className="size-2 rounded-full bg-primary" />
            {badge.label}
            <ChevronRight aria-hidden className="size-3.5 opacity-60" strokeWidth={2} />
          </a>
        )}

        <h1 className="mt-7 font-display text-[2.4375rem] leading-[1.05] font-normal tracking-[-0.055em] lg:mt-8 lg:text-[5.5rem]">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-6 flex min-h-[1.25em] items-baseline justify-center gap-[0.3em] text-[min(2.2rem,8.5vw)] leading-[1.25] tracking-[-0.03em] whitespace-nowrap lg:mt-5 lg:text-[4rem]">
          <span className="font-bold">{typeLead}</span>
          <span className="font-light text-muted-foreground">
            {typed}
            <span aria-hidden className="typesomething-v2-hero-cursor font-light text-foreground">
              _
            </span>
          </span>
        </p>

        <p className="mt-6 max-w-[40rem] text-[1.05rem] leading-[1.5] text-muted-foreground text-pretty lg:mt-6 lg:text-[1.15rem]">{description}</p>

        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {actions.map((action, i) => (
              <TypesomethingV2Button key={action.href + action.label} href={action.href} variant={i === 0 ? "primary" : "outline"} className="max-sm:h-11 max-sm:px-4 max-sm:text-[0.92rem]">
                {action.label}
              </TypesomethingV2Button>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <ul className="mt-14 grid w-full max-w-[71.75rem] divide-y divide-border rounded-lg border border-border bg-card text-left shadow-[0_28px_80px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:mt-11 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-3 px-5 py-5 lg:px-6">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-highlight text-highlight-foreground [&_svg]:size-3.5">{feature.icon}</span>
                <div>
                  <h3 className="text-[0.95rem] leading-7 font-bold">{feature.title}</h3>
                  <p className="mt-0.5 text-[0.78rem] leading-[1.55] text-muted-foreground">{feature.text}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
