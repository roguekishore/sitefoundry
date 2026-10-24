import type { CSSProperties, ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ResendFrame } from "@foundry/resend-frame";
import { ResendHeading } from "@foundry/resend-heading";
import "./resend-deliverability.css";

export interface ResendDeliverabilityItem {
  /** a small line icon (lucide) */
  icon: ReactNode;
  title: string;
  /** the copy; may hold underlined links */
  text: ReactNode;
}

export interface ResendDeliverabilityProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** nine items, three per row on wide screens */
  items: ResendDeliverabilityItem[];
  className?: string;
}

export function ResendDeliverability({ title, items, className }: ResendDeliverabilityProps) {
  return (
    <section className={cn("bg-background text-foreground lg:px-gutter", className)}>
      <ResendFrame glow="end">
        <div className="px-gutter pt-[4.5rem] pb-16 lg:px-6 lg:pt-24 lg:pb-24">
          <ResendHeading align="start" title={title} className="max-w-[30rem]" />
          <ul className="mt-12 grid gap-y-14 lg:mt-16 lg:grid-cols-3 lg:gap-x-[4.75rem] lg:gap-y-[5.25rem]">
            {items.map((item, i) => (
              <li
                key={item.title}
                className="resend-deliverability-item"
                style={{ "--resend-col": i % 3 } as CSSProperties}
              >
                <div className="flex items-center gap-3 lg:block">
                  <span className="flex text-foreground [&_svg]:size-5">{item.icon}</span>
                  <h3 className="font-display text-xl leading-[1.3] tracking-[0.01em] text-foreground lg:mt-3.5">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-[1.6] text-muted-foreground lg:mt-2 [&_a]:text-foreground [&_a]:underline [&_a]:decoration-foreground/40 [&_a]:underline-offset-2 [&_a]:transition-colors [&_a:hover]:decoration-foreground">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </ResendFrame>
    </section>
  );
}
