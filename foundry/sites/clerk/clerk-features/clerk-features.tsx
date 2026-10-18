import { cn } from "@foundry/foundry-utils";
import { ClerkBand } from "@foundry/clerk-band";
import { ClerkCard, type ClerkCardProps } from "@foundry/clerk-card";
import { ClerkHeading, type ClerkHeadingProps } from "@foundry/clerk-heading";

export interface ClerkFeaturesProps {
  /** eyebrow, heading, paragraph and link above the cards */
  heading: ClerkHeadingProps;
  /** the cards, in reading order; spans fill the 3-column grid densely */
  items: ClerkCardProps[];
  /** dark: notched near-black band · light: plain section on the page colour */
  tone?: "dark" | "light";
  /** faint circuit-board lines behind the heading (dark tone) */
  circuit?: boolean;
  /** colours of the neighbouring sections, shown in the dark band's notches */
  edgeTop?: "background" | "card";
  edgeBottom?: "background" | "card";
  id?: string;
  className?: string;
}

/** Faint traces and pads, like a circuit board, fading out from the top-left. */
function Circuit() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-[36rem] w-full text-foreground/[0.07] [mask-image:radial-gradient(ellipse_70%_80%_at_25%_0%,black,transparent_75%)]"
      viewBox="0 0 1440 560"
      preserveAspectRatio="xMidYMin slice"
      fill="none"
      stroke="currentColor"
    >
      <path d="M150 0v120l40 40h220l40-40V0M410 160v120l-40 40H260M520 0v60l30 30h170M720 90v110M190 160v200l60 60h120" />
      <path d="M940 0v80l40 40h180M1160 120v140l-40 40H980M1240 0v200" />
      <path d="M300 230h60M300 250h60M300 270h60" strokeDasharray="2 4" />
      {[
        [180, 70], [400, 50], [540, 120], [700, 180], [250, 300], [980, 160], [1200, 90],
      ].map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="22" height="22" rx="3" fill="currentColor" stroke="none" />
      ))}
      {[[470, 300], [520, 250], [1100, 230]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
      ))}
    </svg>
  );
}

export function ClerkFeatures({ heading, items, tone = "dark", circuit = tone === "dark", edgeTop, edgeBottom, id, className }: ClerkFeaturesProps) {
  const content = (
    <div className={cn("relative mx-auto max-w-page px-gutter py-[calc(var(--section-y)*0.6)] lg:py-section", tone === "dark" && "lg:pb-[calc(var(--section-y)*1.25)]")}>
      <ClerkHeading
        {...heading}
        fadeText={heading.fadeText ?? (tone === "dark" && heading.align === "center")}
        textClassName={cn(heading.align === "center" && "max-w-[36rem]", heading.textClassName)}
      />
      <div className="mt-12 grid grid-flow-row-dense grid-cols-1 gap-2 md:grid-cols-2 lg:mt-16 lg:auto-rows-[16.25rem] lg:grid-cols-3">
        {items.map((item) => (
          <ClerkCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );

  if (tone === "dark") {
    return (
      <ClerkBand id={id} edgeTop={edgeTop} edgeBottom={edgeBottom} className={className}>
        {circuit && <Circuit />}
        {content}
      </ClerkBand>
    );
  }
  return (
    <section id={id} className={cn("bg-background text-foreground", className)}>
      {content}
    </section>
  );
}
