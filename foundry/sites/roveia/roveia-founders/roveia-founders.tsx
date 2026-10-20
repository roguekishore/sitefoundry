import type { CSSProperties, ReactNode } from "react";
import { Quote } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import "./roveia-founders.css";

export interface RoveiaFounderQuote {
  quote: string;
  /** who said it ("Name, role, company") */
  author: string;
  /** the corner tint of the card: warm (highlight), blue (primary) or none */
  tint?: "highlight" | "primary" | "none";
  /** the 16:9 video or photo at the foot of the card; a placeholder when empty */
  media?: ReactNode;
}

export interface RoveiaFoundersProps {
  /** the first line of the heading */
  heading: string;
  /** the second, blue line */
  highlight?: string;
  quotes: RoveiaFounderQuote[];
  className?: string;
}

const tints = {
  highlight: "bg-[radial-gradient(circle_at_100%_100%,color-mix(in_oklab,var(--highlight)_16%,transparent),transparent_56%)]",
  primary: "bg-[radial-gradient(circle_at_100%_100%,color-mix(in_oklab,var(--primary)_16%,transparent),transparent_56%)]",
  none: "",
};

/**
 * Founder quotes on white cards (24px corners, soft shadow, a faint warm or blue corner tint):
 * a blue quote mark, the quote, who said it and a small 16:9 video. On desktop a big centred
 * two-line heading (second line blue) is pinned while the cards fly in one after another from
 * the right, cross the screen tilting from 10° to −10°, and leave on the left. Phones stack
 * the cards under the heading.
 */
export function RoveiaFounders({ heading, highlight, quotes, className }: RoveiaFoundersProps) {
  const steps = Math.max(quotes.length - 1, 1);
  return (
    <section className={cn("roveia-founders-track bg-background text-foreground", className)} style={{ "--steps": steps } as CSSProperties}>
      <div className="roveia-founders-stage px-5 py-16 lg:py-section">
        <h2 className="relative z-10 text-center text-[2rem] leading-[1.2] font-normal tracking-[-0.06em] lg:text-[4rem] lg:tracking-[-0.03em]">
          {heading}
          {highlight && (
            <>
              <br />
              <span className="text-primary">{highlight}</span>
            </>
          )}
        </h2>
        <ul className="roveia-founders-cards mx-auto mt-10 grid max-w-page gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {quotes.map((q, i) => (
            <li
              key={q.author}
              className={cn(
                "roveia-founders-card z-20 flex flex-col rounded-lg bg-card p-6 text-card-foreground shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)] lg:w-[21rem]",
                tints[q.tint ?? "none"],
              )}
              style={{ "--i": i } as CSSProperties}
            >
              <Quote aria-hidden className="size-7 rotate-180 fill-primary text-primary" strokeWidth={0} />
              <blockquote className="mt-4 text-base leading-6 tracking-[-0.02em]">{q.quote}</blockquote>
              <p className="mt-6 text-sm leading-6 text-muted-foreground">— {q.author}</p>
              <div className="mt-6 aspect-video overflow-clip rounded-[calc(var(--radius)/3)]">
                {q.media ?? <div className="size-full bg-muted bg-linear-to-br from-glow/25 to-muted" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
