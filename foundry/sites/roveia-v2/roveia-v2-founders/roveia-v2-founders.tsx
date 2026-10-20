import type { CSSProperties, ReactNode } from "react";
import { Quote } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RoveiaV2Heading } from "@foundry/roveia-v2-heading";
import "./roveia-v2-founders.css";

export interface RoveiaV2Quote {
  /** what they said */
  quote: string;
  /** who said it, e.g. "Mara, founder of Brisa" */
  author: string;
  /** the colour of the soft glow in the card's corner */
  tint?: "highlight" | "primary" | "muted";
  /** a short video or picture of them; a placeholder shows when empty */
  media?: ReactNode;
}

export interface RoveiaV2FoundersProps {
  /** the ink line of the heading */
  heading: string;
  /** the blue line under it */
  accent?: string;
  /** the quote cards, in the order they fly past */
  quotes: RoveiaV2Quote[];
  className?: string;
}

const glows = {
  highlight: "var(--highlight)",
  primary: "var(--primary)",
  muted: "var(--muted-foreground)",
};

/** Card i flies across during its own slice of the pinned range; slices overlap. */
function range(i: number, n: number): CSSProperties {
  const span = 45;
  const step = n > 1 ? (100 - span) / (n - 1) : 0;
  return { "--roveia-v2-founders-range": `contain ${step * i}% contain ${step * i + span}%` } as CSSProperties;
}

export function RoveiaV2Founders({ heading, accent, quotes, className }: RoveiaV2FoundersProps) {
  return (
    <section className={cn("roveia-v2-founders relative bg-background text-foreground", className)}>
      <div className="roveia-v2-founders-stage px-gutter pt-14 pb-16 lg:pt-[7.5rem] lg:pb-[7.5rem]">
        <RoveiaV2Heading size="statement" accent={accent} accentAt="below" className="roveia-v2-founders-heading text-center">
          {heading}
        </RoveiaV2Heading>

        <ul className="roveia-v2-founders-track mt-10 space-y-10 lg:mx-auto lg:mt-16 lg:grid lg:max-w-page lg:grid-cols-3 lg:gap-6 lg:space-y-0">
          {quotes.map((q, i) => (
            <li
              key={q.author}
              className="roveia-v2-founders-card rounded-lg bg-card p-6 text-card-foreground shadow-[0_8px_30px_color-mix(in_oklab,var(--foreground)_10%,transparent)]"
              style={{
                ...range(i, quotes.length),
                backgroundImage: `radial-gradient(circle at 100% 100%, color-mix(in oklab, ${glows[q.tint ?? "highlight"]} 16%, transparent), transparent 56%)`,
              }}
            >
              <Quote aria-hidden className="size-7 rotate-180 fill-primary text-primary" strokeWidth={0} />
              <blockquote className="mt-4 text-base leading-6 tracking-[-0.03em]">{q.quote}</blockquote>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">— {q.author}</p>
              <div className="mt-6 aspect-[1.78] overflow-clip rounded-[calc(var(--radius)/3)] lg:aspect-[1.49] [&>*]:size-full [&>*]:object-cover">
                {q.media ?? <div className="bg-muted" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
