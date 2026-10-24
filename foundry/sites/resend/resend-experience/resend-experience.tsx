import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ChevronDown, Clock } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ResendFeatureCard } from "@foundry/resend-feature-card";
import { ResendHeading } from "@foundry/resend-heading";

type Tone = "success" | "info" | "danger" | "warning";

const tones: Record<Tone, string> = {
  success: "bg-chart-2/12 text-chart-2",
  info: "bg-chart-1/20 text-chart-1",
  danger: "bg-destructive/18 text-destructive",
  warning: "bg-chart-3/14 text-chart-3",
};

export interface ResendWebhookEvent {
  /** the status chip (Delivered, Opened…) */
  status: string;
  tone: Tone;
  /** the icon in the square at the left of the timeline */
  icon: ReactNode;
  /** when it happened */
  time: string;
  /** label/value pairs, one list per line ("to" [address] "with subject" [subject]) */
  rows: { label: string; value: string; icon?: ReactNode }[][];
}

export interface ResendCardText {
  /** a small line icon above the title */
  icon?: ReactNode;
  title: string;
  text: ReactNode;
  link?: { label: string; href: string };
}

export interface ResendExperienceProps {
  /** the title; a list sets its desktop line breaks */
  title: string | string[];
  /** the lead; a list sets its desktop line breaks */
  text: ReactNode | ReactNode[];
  /** the sandbox card: its send bar, the log lines and its copy */
  sandbox: ResendCardText & {
    /** the status chip in the send bar */
    status: string;
    /** the address in the send bar */
    address: string;
    /** the send button's label and icon */
    send: { label: string; icon?: ReactNode };
    /** response lines; a new one fades in on top every 2s */
    lines: string[];
  };
  /** the webhook card: its events and its copy */
  webhooks: ResendCardText & {
    /** timeline events; a new one slides in on top every 3s */
    events: ResendWebhookEvent[];
  };
  className?: string;
}

/** Cycles a list: every `every` ms the last item re-enters at the top. Keys follow each
    item instance, so the others glide down instead of re-rendering. */
function useFeed<T>(items: T[], every: number) {
  const ref = useRef<HTMLUListElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!inView || reduce || items.length < 2) return;
    const id = window.setInterval(() => setStep((s) => s + 1), every);
    return () => window.clearInterval(id);
  }, [inView, reduce, every, items.length]);
  const n = items.length;
  const visible = items.map((_, k) => {
    const seq = k - step;
    return { key: seq, item: items[((seq % n) + n) % n] };
  });
  return { ref, visible };
}

function SandboxVisual({ status, address, send, lines }: ResendExperienceProps["sandbox"]) {
  const { ref, visible } = useFeed(lines, 2000);
  return (
    <div className="flex h-full flex-col items-center px-3 pt-10 lg:px-1.5 lg:pt-[6.75rem]">
      <div className="flex h-11 w-full max-w-[25.6rem] items-center gap-2 rounded-lg border border-border bg-card/50 pr-1.5 pl-2">
        <span className={cn("hidden h-7 items-center rounded-md px-2 text-xs sm:flex", tones.success)}>{status}</span>
        <span className="flex min-w-0 items-center gap-1 text-base text-foreground">
          <span className="truncate">{address}</span>
          <ChevronDown aria-hidden className="size-4 shrink-0 opacity-70" strokeWidth={1.75} />
        </span>
        <span className="ml-auto flex h-8 items-center gap-1.5 rounded-full border border-border bg-background px-3 text-base text-foreground [&_svg]:size-3.5">
          {send.icon}
          {send.label}
        </span>
      </div>
      <ul ref={ref} className="mt-10 w-full space-y-0 overflow-clip font-mono text-base leading-8 tracking-[0.06em] text-muted-foreground lg:mt-14">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map(({ key, item }) => (
            <motion.li
              key={key}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="truncate whitespace-pre"
            >
              {item}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function Chip({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <span className="inline-flex h-[1.625rem] items-center gap-1.5 rounded-md border border-border bg-background px-1.5 text-sm text-foreground [&_svg]:size-3.5">
      {icon}
      {children}
    </span>
  );
}

function WebhookVisual({ events }: { events: ResendWebhookEvent[] }) {
  const { ref, visible } = useFeed(events, 3000);
  return (
    <ul ref={ref} className="h-full overflow-clip px-6 pt-12 lg:px-8">
      <AnimatePresence initial={false} mode="popLayout">
        {visible.map(({ key, item }) => (
          <motion.li
            key={key}
            layout
            initial={{ opacity: 0.3, y: -48 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-[2.25rem_1fr] gap-x-6 lg:gap-x-12"
          >
            <div className="flex flex-col items-center">
              <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground [&_svg]:size-[1.125rem]">
                {item.icon}
              </span>
              <span aria-hidden className="w-px flex-1 bg-border" />
            </div>
            <div className="pb-8">
              <div className="flex h-9 items-center gap-6 lg:gap-12">
                <span className={cn("flex h-7 items-center rounded-md px-2 text-xs", tones[item.tone])}>{item.status}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock aria-hidden className="size-3.5" strokeWidth={1.75} />
                  {item.time}
                </span>
              </div>
              {item.rows.map((row, r) => (
                <p key={r} className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-muted-foreground">
                  {row.map((part) => (
                    <span key={part.label} className="contents">
                      <span>{part.label}</span>
                      <Chip icon={part.icon}>{part.value}</Chip>
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}

export function ResendExperience({ title, text, sandbox, webhooks, className }: ResendExperienceProps) {
  return (
    <section className={cn("bg-background py-[calc(var(--section-y)*0.5)] text-foreground lg:py-section", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <ResendHeading align="start" title={title} text={text} className="max-lg:items-center max-lg:text-center" textClassName="lg:max-w-none" />
        <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-8">
          <ResendFeatureCard visual={<SandboxVisual {...sandbox} />} icon={sandbox.icon} title={sandbox.title} text={sandbox.text} link={sandbox.link} />
          <ResendFeatureCard visual={<WebhookVisual events={webhooks.events} />} icon={webhooks.icon} title={webhooks.title} text={webhooks.text} link={webhooks.link} />
        </div>
      </div>
    </section>
  );
}
