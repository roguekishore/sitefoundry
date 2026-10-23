import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { BridgeButton } from "@foundry/bridge-button";
import { BridgePlaceholder } from "@foundry/bridge-placeholder";

export interface BridgeHeroProps {
  /** the big one-line headline */
  title: string;
  /** the quiet mono line under it; a "\n" starts its second line on desktop */
  subtitle: string;
  /** the sky button */
  action: { label: string; href: string };
  /** a wide blurred photo behind the top of the hero, fading into the page; a soft wash when empty */
  backdrop?: ReactNode;
  /** the flow diagram under the button (wide strip on desktop, tall on phones); a flat surface when empty */
  diagram?: ReactNode;
  /** pull the hero up under a preceding bridge-header so its backdrop shows through the header */
  underHeader?: boolean;
  className?: string;
}

/** Bridge's centred hero with a fading backdrop and a diagram strip. */
export function BridgeHero({ title, subtitle, action, backdrop, diagram, underHeader, className }: BridgeHeroProps) {
  const [line1, line2] = subtitle.split("\n");
  return (
    <section className={cn("relative isolate overflow-clip bg-background text-foreground", underHeader && "-mt-[5.5rem] lg:-mt-[4.375rem]", className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-48 mask-b-from-60% mask-b-to-100% lg:h-[18.75rem] lg:mask-b-from-35% [&>*]:size-full [&>*]:object-cover">
        {backdrop ?? <BridgePlaceholder tone="sky" />}
      </div>

      <div className="mx-auto flex max-w-page flex-col items-center px-gutter pt-[16rem] text-center lg:pt-[14.25rem]">
        <h1 className="font-display text-[3.5625rem]/none font-normal tracking-[-0.05em] text-balance lg:text-[5.2rem]/none lg:tracking-[-0.0346em]">
          {title}
        </h1>
        <p className="mt-7 max-w-[30rem] font-mono text-[0.9rem]/[1.4] tracking-[-0.01em] text-muted-foreground lg:mt-8">
          {line1}
          {line2 && (
            <>
              {" "}
              <br className="hidden lg:block" />
              {line2}
            </>
          )}
        </p>
        <BridgeButton href={action.href} className="mt-8">
          {action.label}
        </BridgeButton>
      </div>

      <div className="mx-auto mt-16 max-w-page px-gutter pb-[8.5rem] lg:mt-4 lg:px-[12.25rem] lg:pb-[6.5rem] [&>*]:h-[36rem] [&>*]:w-full [&>*]:object-cover lg:[&>*]:h-72">
        {diagram ?? <BridgePlaceholder tone="flat" className="rounded-sm" />}
      </div>
    </section>
  );
}
