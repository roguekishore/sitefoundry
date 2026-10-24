import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { FormenergyButton } from "@foundry/formenergy-button";
import { FormenergyHeading } from "@foundry/formenergy-heading";
import { FormenergyPlaceholder } from "@foundry/formenergy-placeholder";

export interface FormenergyAboutProps {
  /** anchor id */
  id?: string;
  /** the title (shown uppercase) */
  title: string;
  /** the paragraph */
  text: string;
  /** the outlined button */
  action?: { label: string; href: string };
  /** up to four photos in reading order: wide, narrow, then narrow, wide (cover); placeholders when empty */
  media?: ReactNode[];
  className?: string;
}

// The two mosaic rows: the first is wide + narrow, the second mirrors it.
const ROWS = [
  ["flex-[373]", "flex-[245]"],
  ["flex-[245]", "flex-[373]"],
];

/** Four-photo mosaic beside a ruled title, paragraph and outlined button. */
export function FormenergyAbout({ id, title, text, action, media = [], className }: FormenergyAboutProps) {
  return (
    <section id={id} className={cn("bg-secondary py-section text-foreground", className)}>
      <div className="mx-auto grid max-w-page items-center px-gutter lg:grid-cols-[49.2fr_50.8fr]">
        <div className="flex flex-col gap-2.5">
          {ROWS.map((row, r) => (
            <div key={r} className="flex aspect-[331/150] gap-2.5 lg:aspect-[628/240]">
              {row.map((size, c) => (
                <div
                  key={c}
                  className={cn("min-w-0 overflow-clip rounded-[5px] [&>img]:size-full [&>img]:object-cover", size)}
                >
                  {media[r * 2 + c] ?? <FormenergyPlaceholder />}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-[3.4rem] lg:mt-0 lg:pl-[5.75rem]">
          <FormenergyHeading title={title} />
          <p className="mt-6 text-base leading-[1.4] font-light lg:mt-[3.4rem] lg:text-xl lg:leading-[1.4]">{text}</p>
          {action && (
            <FormenergyButton label={action.label} href={action.href} className="mt-[2.3rem] w-full lg:w-auto" />
          )}
        </div>
      </div>
    </section>
  );
}
