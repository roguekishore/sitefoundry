import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { DiabrowserButton } from "@foundry/diabrowser-button";
import { DiabrowserHeading } from "@foundry/diabrowser-heading";
import { cn } from "@foundry/foundry-utils";
import "./diabrowser-privacy.css";

export interface DiabrowserPrivacyChip {
  /** the setting's name, in mono */
  label: string;
  /** whether it shows the on or the off value */
  on: boolean;
}

export interface DiabrowserPrivacyProps {
  /** the heading line above the chip strip */
  headingTop: ReactNode;
  /** the heading line below the chip strip */
  headingBottom: ReactNode;
  /** the settings shown as chips in a strip that runs past both edges */
  chips: DiabrowserPrivacyChip[];
  /** the words in each chip's value box */
  values?: { on: string; off: string };
  /** paragraphs under the heading */
  body: string[];
  /** the grey pill link at the end */
  link: { label: string; href: string };
  /** the icon on the box's top edge (a lock) */
  topIcon?: ReactNode;
  /** the icon on the box's bottom edge (your symbol) */
  bottomIcon?: ReactNode;
  className?: string;
}

/** A dotted-outline privacy panel: a two-line serif heading split by a drifting strip of setting chips, centred text and a pill link. */
export function DiabrowserPrivacy({ headingTop, headingBottom, chips, values = { on: "On", off: "Off" }, body, link, topIcon, bottomIcon, className }: DiabrowserPrivacyProps) {
  // three runs of the chips, so the strip overfills the widest box while it drifts
  const strip = [0, 1, 2].flatMap((run) => chips.map((chip, i) => ({ ...chip, key: `${run}-${i}`, copy: run !== 1 })));

  return (
    <section className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <div className="diabrowser-privacy-fade relative mx-auto max-w-page rounded-xl border border-dotted border-foreground/50 pt-[70px] pb-[72px] text-center">
        {topIcon && (
          <span className="absolute top-0 left-1/2 flex h-10 w-[78px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-background text-foreground [&_svg]:size-7">
            {topIcon}
          </span>
        )}

        <DiabrowserHeading>{headingTop}</DiabrowserHeading>

        <div className="mt-5 flex justify-center overflow-clip" aria-label={chips.map((c) => `${c.label}: ${c.on ? values.on : values.off}`).join(", ")}>
          <ul className="diabrowser-privacy-drift flex w-max shrink-0 gap-5" aria-hidden>
            {strip.map((chip, i) => (
              <li key={chip.key} className="flex h-[34px] shrink-0 items-center gap-3 rounded-full bg-secondary pr-[6px] pl-4">
                <span className={cn("size-2 rounded-full", i % 2 ? "bg-highlight" : "bg-glow")} />
                <span className="font-mono text-[15px] leading-none tracking-[-0.01em] text-foreground/85">{chip.label}</span>
                <span className="rounded-[3px] bg-card px-1.5 py-[3px] text-[15px] leading-4 text-foreground/85">{chip.on ? values.on : values.off}</span>
              </li>
            ))}
          </ul>
        </div>

        <DiabrowserHeading as="p" className="mt-[22px]">
          {headingBottom}
        </DiabrowserHeading>

        <div className="mx-auto mt-[44px] flex max-w-[690px] flex-col gap-2 px-6 text-[16px] leading-6 tracking-[0.005em] text-foreground/65 lg:text-[20px] lg:leading-[30px]">
          {body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <DiabrowserButton tone="soft" size="sm" href={link.href} icon={<ArrowRight strokeWidth={1.75} />} className="mt-10 gap-3 px-6 text-foreground">
          {link.label}
        </DiabrowserButton>

        {bottomIcon && (
          <span className="absolute bottom-0 left-1/2 flex h-10 w-[78px] -translate-x-1/2 translate-y-1/2 items-center justify-center bg-background text-foreground [&_svg]:size-7">
            {bottomIcon}
          </span>
        )}
      </div>
    </section>
  );
}
