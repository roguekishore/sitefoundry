import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ReflectHeading } from "@foundry/reflect-heading";
import { ReflectMedia } from "@foundry/reflect-media";
import { ReflectStarfield } from "@foundry/reflect-starfield";
import "./reflect-ai.css";

export interface ReflectAiCapability {
  /** a 32px line icon */
  icon: ReactNode;
  /** first line, in ink */
  title: string;
  /** second line, muted */
  text: string;
}

export interface ReflectAiProps {
  eyebrow?: string;
  /** "\n" breaks the line on desktop only */
  title: string;
  lead?: string;
  /** the showcase card: a note title… */
  noteTitle: string;
  /** …and the bulleted line under it */
  noteLine: string;
  /** the shimmering button in the card */
  magic: { label: string; href: string; icon?: ReactNode };
  /** the light beam and glowing floor behind the card (an image in the original); a glow wash when empty */
  media?: ReactNode;
  mediaLabel?: string;
  /** the smaller heading over the list */
  listTitle: string;
  /** what the assistant can do: three across, then the rest centred under them */
  items: ReflectAiCapability[];
  className?: string;
}

const cellGlow =
  "pointer-events-none absolute inset-0 bg-[radial-gradient(60%_130%_at_50%_-35%,color-mix(in_oklab,var(--glow)_16%,transparent),transparent),linear-gradient(180deg,transparent_55%,color-mix(in_oklab,var(--foreground)_4%,transparent))] opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] group-hover:opacity-100 motion-reduce:transition-none";

/** The assistant section: heading, a shimmering note card over a beam of light, then a ruled list. */
export function ReflectAi({
  eyebrow,
  title,
  lead,
  noteTitle,
  noteLine,
  magic,
  media,
  mediaLabel,
  listTitle,
  items,
  className,
}: ReflectAiProps) {
  const first = items.slice(0, 3);
  const rest = items.slice(3);
  return (
    <section className={cn("relative isolate overflow-clip bg-background py-section text-foreground", className)}>
      <ReflectStarfield size={900} count={50} seed={11} strength={55} className="top-[18rem] h-[30rem]" />
      <div className="relative px-gutter">
        <ReflectHeading eyebrow={eyebrow} title={title} lead={lead} leadClassName="max-w-[18.5rem] sm:max-w-[38.75rem]" />
      </div>

      {/* showcase: the card floats in a beam of light */}
      <div className="relative mt-[9rem] px-gutter">
        <ReflectMedia
          tone="glow"
          reveal
          label={mediaLabel}
          className="absolute -top-[9.5rem] left-1/2 -z-10 h-[52rem] w-[90rem] -translate-x-1/2"
        >
          {media}
        </ReflectMedia>
        <div className="group relative mx-auto max-w-[36rem] rounded-[1.5rem] border border-foreground/10 bg-foreground/[0.02] p-2 backdrop-blur-sm transition-colors duration-[450ms] ease-[cubic-bezier(0.6,0.6,0,1)] hover:border-foreground/16 hover:bg-foreground/5 motion-reduce:transition-none">
          <span aria-hidden className="absolute top-0 left-6 h-[40%] w-px overflow-clip">
            <span className="reflect-ai-streak-y block h-1/2 w-px bg-[linear-gradient(180deg,transparent,var(--highlight),transparent)]" />
          </span>
          <div className="relative overflow-clip rounded-2xl border border-foreground/10 bg-background/70 px-6 pt-7 pb-6 transition-colors duration-[450ms] group-hover:border-foreground/16 lg:px-8 lg:pt-8 lg:pb-7">
            <span aria-hidden className="absolute inset-x-0 top-0 h-px overflow-clip">
              <span className="reflect-ai-streak-x block h-px w-1/4 bg-[linear-gradient(90deg,transparent,var(--foreground),transparent)]" />
            </span>
            <div className="flex items-start justify-between gap-4">
              <p className="text-[0.9375rem]/6 font-medium">{noteTitle}</p>
              <a
                href={magic.href}
                aria-label={magic.label}
                className="reflect-ai-hue flex shrink-0 items-center gap-1.5 text-sm/6 text-highlight transition-opacity duration-300 hover:opacity-80 max-lg:absolute max-lg:right-4 max-lg:bottom-4 max-lg:grid max-lg:size-8 max-lg:place-items-center max-lg:rounded-lg max-lg:bg-highlight/15 [&_svg]:size-4"
              >
                {magic.icon}
                <span className="bg-linear-to-r from-chart-2 to-highlight bg-clip-text text-transparent max-lg:hidden">
                  {magic.label}
                </span>
              </a>
            </div>
            <ul className="mt-5 list-disc pl-5 text-sm/6 marker:text-foreground/30 max-lg:pr-10">
              <li>{noteLine}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* what it can do */}
      <div className="relative mx-auto mt-[12rem] max-w-[56.25rem] px-gutter lg:px-0">
        <h3 className="font-display text-[2rem]/[2.5rem] font-[560] lg:text-center">{listTitle}</h3>
        <ul className="mt-10 border-l border-border lg:mt-11 lg:grid lg:grid-cols-3 lg:border-l-0">
          {first.map((item) => (
            <Capability key={item.title} item={item} className="lg:[&:not(:first-child)]:border-l" />
          ))}
        </ul>
        {rest.length > 0 && (
          <ul className="border-l border-border lg:mx-auto lg:grid lg:max-w-[37.5rem] lg:grid-cols-2 lg:border-t lg:border-l-0">
            {rest.map((item) => (
              <Capability key={item.title} item={item} className="lg:[&:not(:first-child)]:border-l" />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

function Capability({ item, className }: { item: ReflectAiCapability; className?: string }) {
  return (
    <li
      className={cn(
        "group relative border-b border-border px-6 pt-7 pb-6 last:border-b-0 lg:border-b-0 lg:px-4 lg:pt-7 lg:pb-8 lg:text-center",
        className,
      )}
    >
      <span aria-hidden className={cellGlow} />
      <div className="relative grid size-8 place-items-center lg:mx-auto [&_svg]:size-8">{item.icon}</div>
      <p className="relative mt-7 text-base/6 lg:mt-5">{item.title}</p>
      <p className="relative text-base/6 text-muted-foreground">{item.text}</p>
    </li>
  );
}
