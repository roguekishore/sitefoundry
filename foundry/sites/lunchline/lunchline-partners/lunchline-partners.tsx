import type { CSSProperties, ReactNode } from "react";
import { Plus } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { LunchlineLetterRise } from "@foundry/lunchline-letter-rise";
import { LunchlineScribble, LunchlineScribbleLink } from "@foundry/lunchline-scribble-link";
import "./lunchline-partners.css";

export interface LunchlinePartner {
  /** full name, set in the handwriting face */
  name: string;
  /** the small tracked label under the name */
  role: string;
  /** a short biography */
  bio: string;
  /** e.g. a profile link, shown as a scribble-underlined link */
  link?: { label: string; href: string };
  /** phones: a square portrait above the name. Empty: a placeholder. */
  portrait?: ReactNode;
  /** wide screens: the handwritten tag beside the + button, e.g. "meet theo" */
  tag: string;
  /** wide screens: where the + button sits on the group photo, in % from the left and top */
  x: number;
  y: number;
  /** wide screens: which way the tag and the bio card open from the + button */
  side: "left" | "right";
}

export interface LunchlinePartnersProps {
  /** the light heading with its scribble underline */
  heading: string;
  partners: LunchlinePartner[];
  /** wide screens: the group photo filling the section (cover). Empty: a placeholder. */
  media?: ReactNode;
  /** section id, for in-page links */
  id?: string;
  className?: string;
}

const hand = "font-[family-name:var(--typeface-hand,var(--typeface-display))]";
const ease = "duration-300 ease-[cubic-bezier(0.215,0.61,0.355,1)] motion-reduce:transition-none";

function Bio({ partner, className }: { partner: LunchlinePartner; className?: string }) {
  return (
    <div className={className}>
      <p className={cn(hand, "text-5xl leading-[0.8] tracking-[-0.05em] lg:text-[2.75rem]")}>{partner.name}</p>
      <p className="mt-1.5 text-sm leading-none font-bold tracking-[0.08em] text-primary uppercase">{partner.role}</p>
      <p className="mt-5 text-[1.0625rem] leading-[1.4]">{partner.bio}</p>
      {partner.link && (
        <LunchlineScribbleLink href={partner.link.href} external className="mt-7">
          {partner.link.label}
        </LunchlineScribbleLink>
      )}
    </div>
  );
}

export function LunchlinePartners({ heading, partners, media, id, className }: LunchlinePartnersProps) {
  return (
    <section id={id} className={cn("relative bg-background text-foreground lg:h-[max(100svh,64vw)] lg:overflow-clip", className)}>
      {/* wide screens: the group photo under everything */}
      <div className="absolute inset-0 hidden lg:block [&>img]:size-full [&>img]:object-cover">
        {media ?? <div className="size-full bg-linear-to-b from-glow/60 via-muted/70 to-highlight/80" />}
      </div>

      <div className="relative z-10 px-gutter pt-10 lg:mx-auto lg:max-w-page lg:pt-[3.1rem]">
        <div className="inline-block">
          <LunchlineLetterRise text={heading} className="font-display text-[2.375rem] leading-[1.2] font-light tracking-[-0.01em] lg:text-[3.5rem]" />
          <LunchlineScribble className="mt-1 text-border" />
        </div>
      </div>

      {/* wide screens: a + button with a handwritten tag on each person; it opens a bio card */}
      <div className="absolute inset-0 hidden lg:block">
        {partners.map((partner) => (
          <details
            key={partner.name}
            className="group absolute z-10 open:z-20"
            style={{ left: `${partner.x}%`, top: `${partner.y}%` } as CSSProperties}
          >
            <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className={cn("grid size-10 place-items-center border border-background bg-foreground/25 text-background transition-colors hover:bg-accent/50", ease)}>
                <Plus className={cn("size-6 transition-transform group-open:rotate-45", ease)} strokeWidth={1.75} />
              </span>
              <span
                className={cn(
                  hand,
                  "absolute top-full bg-background px-4 pt-2 pb-1.5 text-[2rem] leading-none whitespace-nowrap text-foreground",
                  partner.side === "left" ? "right-full" : "left-full",
                )}
              >
                {partner.tag}
              </span>
            </summary>
            <Bio
              partner={partner}
              className={cn(
                "lunchline-partners-card absolute top-full w-[26.25rem] bg-background p-6 pt-7 text-foreground",
                partner.side === "left" ? "right-full" : "left-full",
              )}
            />
          </details>
        ))}
      </div>

      {/* phones: each partner stacked, portrait first */}
      <ul className="mt-9 lg:hidden">
        {partners.map((partner) => (
          <li key={partner.name}>
            <div className="aspect-square w-full overflow-clip [&>img]:size-full [&>img]:object-cover">
              {partner.portrait ?? <div className="size-full bg-linear-to-b from-glow/60 to-muted" />}
            </div>
            <Bio partner={partner} className="px-gutter pt-9 pb-8" />
          </li>
        ))}
      </ul>
    </section>
  );
}
