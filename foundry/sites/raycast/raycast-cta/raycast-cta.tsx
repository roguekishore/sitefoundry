import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RaycastButton } from "@foundry/raycast-button";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastKeyboard, type RaycastKeyboardRow } from "@foundry/raycast-keyboard";

export interface RaycastCtaProps {
  /** the white claim */
  title: ReactNode;
  /** the grey follow-up */
  subtitle?: ReactNode;
  /** the light button (desktop only) */
  cta?: { label: ReactNode; href: string; icon?: ReactNode };
  /** two small mono lines under the button (desktop only) */
  notes?: ReactNode[];
  /** the keyboard rows; keys with `lit: true` glow red */
  keys: RaycastKeyboardRow[];
  className?: string;
}

/** A cropped keyboard that fades up into the page, two glowing keys, and the closing heading and button. */
export function RaycastCta({ title, subtitle, cta, notes = [], keys, className }: RaycastCtaProps) {
  return (
    <section className={cn("bg-background pb-[21rem] text-foreground lg:pb-52", className)}>
      <div className="relative h-[14.5rem] overflow-clip [mask-image:linear-gradient(to_bottom,transparent,black_30%,black)] lg:h-[48rem] lg:[mask-image:linear-gradient(to_bottom,transparent,black_25%)]">
        <RaycastKeyboard rows={keys} className="top-2 origin-top scale-[0.41] lg:top-[7.625rem] lg:scale-100" />
      </div>
      <div className="relative mt-24 flex flex-col items-center px-gutter text-center lg:mt-10">
        <RaycastHeading title={title} subtitle={subtitle} />
        {cta && (
          <div className="mt-[5.25rem] hidden flex-col items-center lg:flex">
            <RaycastButton label={cta.label} href={cta.href} icon={cta.icon} />
            {notes.map((note, i) => (
              <p key={i} className={cn("font-mono text-xs tracking-[0.1px] text-muted-foreground/70", i === 0 ? "mt-6" : "mt-3")}>
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
