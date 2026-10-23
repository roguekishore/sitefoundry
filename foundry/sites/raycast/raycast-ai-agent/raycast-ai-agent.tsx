import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastEyebrow } from "@foundry/raycast-eyebrow";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";
import "./raycast-ai-agent.css";

export interface RaycastAiCard {
  /** the card's title */
  title: ReactNode;
  /** the grey sentence under it */
  description: ReactNode;
  /** the media slot (window shot, panel); a token placeholder when empty */
  media?: ReactNode;
}

export interface RaycastAiQuick {
  /** the title under the prompt box */
  title: ReactNode;
  /** the sentence under it */
  description: ReactNode;
  /** a small icon at the left of the prompt box */
  icon: ReactNode;
  /** the prompt text, typed with a blinking cursor */
  prompt: ReactNode;
  /** the small label at the right of the box */
  hint: ReactNode;
  /** the icon on the little key beside the hint */
  hintIcon: ReactNode;
  /** suggestions listed under the box; each is fainter than the one above */
  suggestions: ReactNode[];
}

export interface RaycastAiAgentProps {
  /** the mono eyebrow */
  eyebrow: ReactNode;
  /** the title */
  title: ReactNode;
  /** the grey lead (two lines) */
  lead: ReactNode;
  /** the wide card at the top (a chat window) */
  chat: RaycastAiCard;
  /** the left card of the pair (prompt box) */
  quick: RaycastAiQuick;
  /** the right card of the pair (empty framed panel) */
  extensions: RaycastAiCard;
  /** the link under the cards */
  link: { label: ReactNode; href: string };
  className?: string;
}

const card = "relative flex min-w-0 flex-col overflow-clip rounded-3xl bg-linear-to-b from-foreground/[0.05] to-foreground/[0.015] p-4 ring-1 ring-foreground/[0.08] lg:rounded-[2.5rem] lg:p-6";

function CardText({ title, description }: { title: ReactNode; description: ReactNode }) {
  return (
    <div className="mt-auto pt-4 lg:pt-6">
      <h3 className="text-base font-semibold tracking-[0.2px] lg:text-base">{title}</h3>
      <p className="mt-2 max-w-[28rem] text-sm leading-[1.6] font-medium tracking-[0.2px] text-muted-foreground lg:text-base lg:leading-[1.4]">{description}</p>
    </div>
  );
}

/** Intro plus a bento of three big cards: chat window, prompt box, empty panel. */
export function RaycastAiAgent({ eyebrow, title, lead, chat, quick, extensions, link, className }: RaycastAiAgentProps) {
  return (
    <section className={cn("bg-background px-gutter pt-16 pb-3 text-foreground lg:pt-[4.5rem] lg:pb-3", className)}>
      <div className="mx-auto flex max-w-[63.75rem] flex-col items-center text-center">
        <RaycastEyebrow>{eyebrow}</RaycastEyebrow>
        <h2 className="mt-3 max-w-[19rem] text-[2rem] leading-[1.15] font-semibold tracking-[-0.01em] text-balance lg:mt-2 lg:max-w-none lg:text-[2rem]">{title}</h2>
        <p className="mt-5 max-w-[17rem] text-base leading-[1.7] font-medium tracking-[0.2px] text-balance text-muted-foreground lg:mt-7 lg:max-w-[24rem] lg:text-lg lg:leading-[1.5]">{lead}</p>

        <div className="mt-12 grid w-full gap-4 text-left lg:mt-[4.5rem] lg:grid-cols-2 lg:gap-[1.875rem]">
          <div className={cn(card, "lg:col-span-2 lg:h-[29.75rem]")}>
            <div className="h-[9.5rem] overflow-clip rounded-t-xl [mask-image:linear-gradient(to_bottom,black_55%,transparent)] lg:h-[22rem] [&>*]:size-full">
              {chat.media ?? <RaycastPlaceholder tone="panel" className="rounded-t-xl" />}
            </div>
            <CardText title={chat.title} description={chat.description} />
          </div>

          <div className={cn(card, "h-[21.25rem] lg:h-[32rem]")}>
            <div className="flex items-center gap-3 rounded-2xl bg-background/60 px-3.5 py-3 ring-1 ring-foreground/10 lg:rounded-[1.5rem] lg:px-5 lg:py-4">
              <span className="text-muted-foreground [&_svg]:size-6">{quick.icon}</span>
              <span className="min-w-0 flex-1 truncate text-base font-medium tracking-[0.2px] lg:text-xl">
                {quick.prompt}
                <span aria-hidden className="raycast-ai-cursor ml-px inline-block h-[1.1em] w-px translate-y-[0.2em] bg-foreground" />
              </span>
              <span className="flex shrink-0 items-center gap-2 text-xs font-medium text-muted-foreground">
                {quick.hint}
                <span className="flex size-6 items-center justify-center rounded-md ring-1 ring-foreground/20 [&_svg]:size-3">{quick.hintIcon}</span>
              </span>
            </div>
            <ul className="mt-4 flex flex-col gap-2.5 pl-12 [mask-image:linear-gradient(to_bottom,black_30%,transparent_85%)] lg:mt-5 lg:gap-3 lg:pl-14">
              {quick.suggestions.map((s, i) => (
                <li key={i} className="truncate text-sm font-medium tracking-[0.2px] text-muted-foreground lg:text-xl" style={{ opacity: Math.max(0.2, 0.75 - i * 0.12) }}>
                  {s}
                </li>
              ))}
            </ul>
            <CardText title={quick.title} description={quick.description} />
          </div>

          <div className={cn(card, "h-[30rem] lg:h-[32rem]")}>
            <div className="min-h-0 flex-1 overflow-clip rounded-2xl ring-1 ring-foreground/10 lg:rounded-[1.75rem] [&>*]:size-full">
              {extensions.media ?? <RaycastPlaceholder tone="panel" className="bg-foreground/[0.02]" />}
            </div>
            <CardText title={extensions.title} description={extensions.description} />
          </div>
        </div>

        <a href={link.href} className="mt-10 inline-flex items-center gap-1.5 text-base font-medium tracking-[0.2px] text-muted-foreground transition-colors duration-300 hover:text-foreground lg:mt-16 lg:text-lg [&_svg]:size-4">
          {link.label}
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
