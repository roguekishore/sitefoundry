import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { HhhusherV2Button } from "@foundry/hhhusher-v2-button";
import { HhhusherV2RevealText, hhhusherV2Reveal } from "@foundry/hhhusher-v2-reveal";
import "./hhhusher-v2-features.css";

export interface HhhusherV2FeaturePanel {
  heading: string;
  text: string;
  /** the yellow button */
  buy?: { label: string; href: string };
  /** the caps read-more link beside it */
  link?: { label: string; href: string };
}

export interface HhhusherV2FeaturesProps {
  /** the panels, about a window apart: the first is the section's big intro (left third), the rest sit in the right column */
  panels: HhhusherV2FeaturePanel[];
  /** what stays pinned in the window: the 3D scene, a video or a cut-out picture */
  media?: ReactNode;
  id?: string;
  className?: string;
}

function Actions({ buy, link }: Pick<HhhusherV2FeaturePanel, "buy" | "link">) {
  if (!buy && !link) return null;
  return (
    <div className="mt-6 flex items-center gap-7">
      {buy && <HhhusherV2Button href={buy.href}>{buy.label}</HhhusherV2Button>}
      {link && (
        <HhhusherV2Button variant="link" href={link.href}>
          {link.label}
        </HhhusherV2Button>
      )}
    </div>
  );
}

export function HhhusherV2Features({ panels, media, id, className }: HhhusherV2FeaturesProps) {
  const [intro, ...rest] = panels;
  return (
    <section id={id} className={cn("hhhusher-v2-features relative bg-background text-foreground", className)}>
      {/* the pinned stage: as tall as the window, stuck for the whole section */}
      <div className="sticky top-0 -mb-[100svh] h-svh overflow-clip">
        {media ? (
          <div className="hhhusher-v2-features-stage absolute inset-0 [&>*]:size-full [&>*]:object-contain">{media}</div>
        ) : (
          <div className="hhhusher-v2-features-stage absolute top-[24%] right-[-6%] left-[22%] h-[34%] rounded-2xl bg-muted lg:top-[5%] lg:right-[30%] lg:left-[24%] lg:h-[92%]" />
        )}
      </div>

      <div className="relative mx-auto max-w-page px-gutter">
        {intro && (
          <div className="flex min-h-[110svh] flex-col pt-[20rem] lg:min-h-[112svh] lg:pt-[10.3rem]">
            <HhhusherV2RevealText
              as="h2"
              text={intro.heading}
              className="max-w-[36rem] font-display text-[2.08rem] leading-[1.1] font-[570] tracking-[-0.02em] lg:text-[4.25rem] lg:leading-[1.1]"
            />
            <div className={cn(hhhusherV2Reveal("fade"), "mt-[6.5rem] max-w-[22rem] lg:mt-[17rem] lg:max-w-[19.5rem]")}>
              <p className="font-display text-[1.04rem] leading-[1.3] font-[570] tracking-[-0.02em] lg:text-base lg:leading-[1.3]">{intro.text}</p>
              <Actions buy={intro.buy} link={intro.link} />
            </div>
          </div>
        )}
        {rest.map((panel, i) => (
          <div key={panel.heading} className={cn("flex flex-col lg:ml-[63.5%]", i === rest.length - 1 ? "min-h-[80svh] lg:min-h-[70svh]" : "min-h-[110svh] lg:min-h-[105svh]")}>
            <HhhusherV2RevealText
              as="h3"
              text={panel.heading}
              className="font-display text-[2.08rem] leading-[1.05] font-[570] tracking-[-0.02em] lg:text-[3.5625rem] lg:leading-[1.05]"
            />
            <div className={cn(hhhusherV2Reveal("fade"), "mt-6 lg:mt-8")}>
              <p className="font-display text-[1.3rem] leading-[1.3] font-[570] tracking-[-0.02em] lg:text-[1.25rem] lg:leading-[1.3]">{panel.text}</p>
              <Actions buy={panel.buy} link={panel.link} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
