import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { RaycastButton } from "@foundry/raycast-button";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastKeyboard, type RaycastKeyboardRow } from "@foundry/raycast-keyboard";

export interface RaycastKeyFeaturesProps {
  /** the white claim */
  title: ReactNode;
  /** the grey follow-up */
  subtitle?: ReactNode;
  /** the light button (desktop only) */
  cta?: { label: ReactNode; href: string; icon?: ReactNode };
  /** the keyboard rows; keys with a `tile` become feature tiles that fade in on scroll */
  keys: RaycastKeyboardRow[];
  className?: string;
}

/** Text left, a cropped dark keyboard right (above the text on phones); feature tiles light up on scroll. */
export function RaycastKeyFeatures({ title, subtitle, cta, keys, className }: RaycastKeyFeaturesProps) {
  return (
    <section className={cn("relative flex min-h-[44.3rem] items-end overflow-clip bg-background px-gutter pb-12 text-foreground lg:min-h-[45rem] lg:items-center lg:pb-0", className)}>
      <div
        className="absolute inset-y-0 right-0 left-gutter [mask-image:linear-gradient(to_bottom,black_55%,transparent_88%)] lg:left-[calc(50%-3.25rem)] lg:[mask-image:linear-gradient(to_right,black_75%,transparent)]"
      >
        <RaycastKeyboard rows={keys} anchor="left" dim className="top-[1.5rem] lg:top-[7.25rem]" />
      </div>
      <div className="relative mx-auto w-full max-w-page lg:px-6">
        <RaycastHeading title={title} subtitle={subtitle} align="left" className="max-w-[20rem] max-lg:mx-auto max-lg:text-center lg:max-w-[17.5rem]" />
        {cta && <RaycastButton label={cta.label} href={cta.href} icon={cta.icon} className="mt-10 hidden lg:inline-flex" />}
      </div>
    </section>
  );
}
