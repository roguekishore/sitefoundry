import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { LithicArrowLink } from "@foundry/lithic-arrow-link";
import { LithicContours } from "@foundry/lithic-contours";
import { LithicPlaceholder } from "@foundry/lithic-placeholder";
import "./lithic-services.css";

export interface LithicService {
  /** a small icon before the title (e.g. a lucide icon); drawn in the gold highlight */
  icon?: ReactNode;
  /** the card's title */
  title: string;
  /** a bold white opening sentence */
  lead?: string;
  /** the grey body text after it */
  text: string;
  /** an arrow link at the bottom (wide cards have one) */
  link?: { label: string; href: string };
}

export interface LithicServicesProps {
  /** the headline at the top left */
  title: string;
  /** the bold white lead under it */
  lead: string;
  /** the grey paragraph */
  text: string;
  /** the headline above the cards */
  cardsTitle: string;
  /** the first row: two wide cards */
  primary: LithicService[];
  /** the second row: three narrow cards */
  secondary: LithicService[];
  /** the device render at the top right. A placeholder when empty */
  media?: ReactNode;
  className?: string;
}

function Card({ service, step }: { service: LithicService; step: number }) {
  return (
    <article
      className={cn(
        "lithic-services-card rounded-lg border border-border bg-foreground/10 p-6 lg:p-10",
        service.link && "transition-colors duration-200 ease-out hover:bg-foreground/20 motion-reduce:transition-none",
      )}
      style={{ "--lithic-services-step": step } as CSSProperties}
    >
      <h3 className="flex items-center gap-3 font-display text-base/[1.2] font-semibold tracking-[-0.01em] lg:text-xl/[1.2]">
        {service.icon && <span className="shrink-0 text-highlight [&>svg]:size-5">{service.icon}</span>}
        {service.title}
      </h3>
      <p className="mt-6 text-sm/[1.6] tracking-[0.01em] text-muted-foreground">
        {service.lead && <strong className="font-semibold text-foreground">{service.lead} </strong>}
        {service.text}
      </p>
      {service.link && (
        <LithicArrowLink href={service.link.href} tone="highlight" className="mt-8 text-sm">
          {service.link.label}
        </LithicArrowLink>
      )}
    </article>
  );
}

/** The managed-services panel: intro with a device render, then a grid of glassy cards. */
export function LithicServices({ title, lead, text, cardsTitle, primary, secondary, media, className }: LithicServicesProps) {
  return (
    <section className={cn("px-gutter lg:px-6", className)}>
      <div className="dark relative isolate overflow-clip rounded-lg bg-background pt-14 pb-14 text-foreground lg:pt-[7.4rem] lg:pb-[7.5rem]">
        <LithicContours at="45% 30%" gap={40} className="-z-10 text-highlight/25" />
        <div className="mx-auto max-w-page px-8 lg:px-gutter">
          <div className="grid lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="mx-auto max-w-[16rem] font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] lg:mx-0 lg:max-w-[25rem] lg:text-[2rem]/[1.2]">{title}</h2>
              <p className="mx-auto mt-5 max-w-[15rem] text-sm/[1.6] font-semibold tracking-[0.01em] lg:mx-0 lg:mt-12 lg:max-w-[26rem] lg:text-base/[1.75]">{lead}</p>
              <p className="mx-auto mt-4 max-w-[17rem] text-sm/[1.4] tracking-[0.01em] text-muted-foreground lg:mx-0 lg:mt-10 lg:max-w-[30rem] lg:text-sm/[1.6]">{text}</p>
            </div>
          </div>
          <div className="-mr-8 mt-12 ml-auto aspect-[736/524] w-[110%] lg:absolute lg:top-16 lg:right-0 lg:m-0 lg:w-[40%] lg:max-w-[46rem]">
            {media ?? <LithicPlaceholder tone="dim" className="size-full rounded-l-[2.5rem]" />}
          </div>
          <h2 className="mx-auto mt-16 max-w-[16rem] text-center font-display text-2xl/[1.2] font-semibold tracking-[-0.02em] lg:mt-[10.25rem] lg:max-w-[22rem] lg:text-[2rem]/[1.2]">
            {cardsTitle}
          </h2>
          <div className="mt-8 grid gap-4 lg:mt-11 lg:gap-8">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
              {primary.map((s, i) => (
                <Card key={s.title} service={s} step={i} />
              ))}
            </div>
            <div className="grid gap-4 lg:grid-cols-3 lg:gap-8">
              {secondary.map((s, i) => (
                <Card key={s.title} service={s} step={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
