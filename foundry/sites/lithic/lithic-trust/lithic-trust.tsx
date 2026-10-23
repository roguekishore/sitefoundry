import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LithicContours } from "@foundry/lithic-contours";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";
import { LithicTextmark, type LithicTextmarkStyle } from "@foundry/lithic-textmark";

export interface LithicTrustMark {
  /** the partner's name, set as a text mark */
  name: string;
  variant?: LithicTextmarkStyle;
}

export interface LithicTrustCard {
  /** the card's heading */
  title: string;
  /** the dark-bronze line under it */
  text?: string;
  /** partner names along the bottom */
  marks?: LithicTrustMark[];
  /** show a round badge on the right (desktop): `true` for a placeholder, or the badge itself */
  badge?: ReactNode | true;
  /** faint contour rings in the top-right corner */
  contours?: boolean;
}

export interface LithicTrustProps {
  /** four cards, in phone order */
  cards: [LithicTrustCard, LithicTrustCard, LithicTrustCard, LithicTrustCard];
  className?: string;
}

function Card({ card, wide, className }: { card: LithicTrustCard; wide: boolean; className?: string }) {
  const badge = card.badge === true ? <LithicPlaceholder tone="ink" className="size-28 rounded-full bg-foreground shadow-none" /> : card.badge;
  return (
    <div className={cn("relative isolate flex overflow-clip rounded-lg bg-muted p-6 text-foreground lg:h-[13.75rem] lg:p-10", className)}>
      {card.contours && <LithicContours at="62% -10%" gap={11} className="-z-10 text-highlight/30 lg:left-[40%]" />}
      <div className="flex min-w-0 flex-1 flex-col justify-between gap-6">
        <div>
          <h3 className={cn("font-display text-xl/[1.2] font-semibold tracking-[-0.02em] lg:max-w-[14rem] lg:text-xl/[1.2]", !card.marks && "lg:max-w-[15rem]")}>
            {card.title}
          </h3>
          {card.text && <p className="mt-6 max-w-[14rem] text-sm/[1.4] font-semibold text-highlight max-lg:max-w-[20rem] lg:mt-6 lg:text-base/[1.4]">{card.text}</p>}
        </div>
        {card.marks && (
          <ul className={cn("grid grid-cols-2 items-center gap-x-6 gap-y-5 lg:flex lg:gap-12", wide && card.marks.length > 3 ? "lg:justify-between" : "max-lg:flex max-lg:gap-8")}>
            {card.marks.map((mark) => (
              <li key={mark.name} className="text-base text-foreground lg:text-lg">
                <LithicTextmark name={mark.name} variant={mark.variant} />
              </li>
            ))}
          </ul>
        )}
      </div>
      {badge && <div className="hidden shrink-0 items-center pl-6 lg:flex">{badge}</div>}
    </div>
  );
}

/** Proof in four warm cards: networks, compliance, investors, uptime. */
export function LithicTrust({ cards, className }: LithicTrustProps) {
  const [a, b, c, d] = cards;
  return (
    <section className={cn("bg-background px-gutter", className)}>
      <div className="mx-auto grid max-w-[74rem] gap-6">
        <div className="grid gap-6 lg:grid-cols-[702fr_458fr]">
          <Card card={a} wide />
          <Card card={b} wide={false} />
        </div>
        <div className="grid gap-6 lg:grid-cols-[380fr_780fr]">
          <Card card={c} wide className="lg:order-2" />
          <Card card={d} wide={false} />
        </div>
      </div>
    </section>
  );
}
