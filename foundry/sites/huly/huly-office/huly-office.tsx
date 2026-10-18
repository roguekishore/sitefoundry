import type { ComponentType } from "react";
import { Maximize2, Mic, MicOff, PhoneOff, ScreenShare, Users, VideoOff } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { HulyHeading } from "@foundry/huly-heading";

export interface HulyOfficePerson {
  name: string;
  initials: string;
  /** shows the lit microphone badge */
  speaking?: boolean;
}

export interface HulyOfficeProps {
  title: string | string[];
  text?: string;
  /** the video call shown under the heading */
  call: {
    title: string;
    /** small line under the call title, e.g. "4 people" */
    subtitle?: string;
    /** the person filling the main tile */
    speaker: HulyOfficePerson;
    /** up to three people in the side tiles */
    people: HulyOfficePerson[];
  };
  /** larger paragraph after the call */
  lead?: string;
  /** three short points with icons */
  features: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; text: string }[];
  className?: string;
}

const TILE = [
  "from-chart-3/60 via-glow/30 to-chart-5/50",
  "from-highlight/50 via-chart-4/30 to-chart-1/40",
  "from-chart-2/50 via-chart-3/30 to-glow/40",
];

/** A person drawn as a soft silhouette: head and shoulders, with initials on the chest. */
function Silhouette({ initials, className }: { initials: string; className?: string }) {
  return (
    <div className={cn("absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center", className)}>
      <div className="aspect-square w-[42%] rounded-full bg-linear-to-b from-foreground/45 to-foreground/25" />
      <div className="-mt-[6%] flex aspect-[2/1] w-full items-center justify-center rounded-t-full bg-linear-to-b from-foreground/40 to-foreground/15 pt-[8%]">
        <span className="text-[0.7em] font-semibold tracking-wide text-foreground/90">{initials}</span>
      </div>
    </div>
  );
}

function MicBadge({ on }: { on?: boolean }) {
  return (
    <span className={cn("flex size-5 items-center justify-center rounded-full lg:size-6", on ? "bg-glow text-foreground" : "bg-foreground/40 text-background")}>
      <Mic className="size-3 lg:size-3.5" />
    </span>
  );
}

export function HulyOffice({ title, text, call, lead, features, className }: HulyOfficeProps) {
  const controls = [ScreenShare, MicOff, PhoneOff, VideoOff, Maximize2];
  return (
    <section className={cn("bg-background py-section text-foreground lg:py-40", className)}>
      <div className="mx-auto max-w-page px-gutter">
        <div className="lg:pl-[18rem]">
          <HulyHeading title={title} text={text} textClassName="max-w-[34rem]" />

          {/* the call: always dark, like a video frame */}
          <div aria-hidden className="dark relative mt-8 aspect-[16/9] overflow-hidden rounded-xl bg-background text-foreground lg:mt-12 lg:rounded-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-highlight/45 via-chart-4/20 to-glow/40" />
            <div className="absolute top-[-10%] left-[20%] h-[70%] w-[30%] rounded-full bg-foreground/25 blur-3xl" />
            <Silhouette initials={call.speaker.initials} className="left-[30%] w-[34%] text-[clamp(0.75rem,3vw,2rem)]" />

            <div className="absolute top-[5%] left-[3%]">
              <p className="text-sm font-semibold lg:text-xl">{call.title}</p>
              {call.subtitle && (
                <p className="mt-0.5 flex items-center gap-1 text-[0.625rem] text-foreground/75 lg:text-xs">
                  <Users className="size-3" />
                  {call.subtitle}
                </p>
              )}
            </div>

            <div className="absolute top-[4%] right-[2%] bottom-[4%] flex w-[22%] flex-col gap-[3%]">
              {call.people.slice(0, 3).map((p, i) => (
                <div key={p.name} className={cn("relative flex-1 overflow-hidden rounded-md bg-linear-to-br lg:rounded-lg", TILE[i % TILE.length])}>
                  <Silhouette initials={p.initials} className="w-[46%] text-[clamp(0.4rem,1vw,0.75rem)]" />
                  <span className="absolute top-[8%] right-[6%]">
                    <MicBadge on={p.speaking} />
                  </span>
                  <span className="absolute bottom-[8%] left-[6%] flex items-center gap-1 text-[0.5rem] text-foreground/85 lg:text-[0.6875rem]">
                    <Users className="size-2.5" />
                    {p.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="absolute bottom-[4%] left-1/2 flex -translate-x-1/2 gap-1.5 lg:gap-3">
              {controls.map((Icon, i) => (
                <span
                  key={i}
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full shadow-lg shadow-background/30 lg:size-11",
                    i === 2 ? "bg-destructive text-destructive-foreground" : "bg-background/60 text-foreground backdrop-blur",
                  )}
                >
                  <Icon className="size-3 lg:size-5" strokeWidth={1.75} />
                </span>
              ))}
            </div>
          </div>

          {lead && (
            <p className="mt-10 max-w-[42rem] text-lg leading-[1.35] font-medium tracking-[-0.02em] text-foreground/85 text-pretty lg:mt-14 lg:text-[1.375rem]">
              {lead}
            </p>
          )}

          <div className="mt-10 grid gap-9 sm:grid-cols-3 sm:gap-8 lg:mt-12">
            {features.map(({ icon: Icon, title: t, text: body }) => (
              <div key={t}>
                <span className="flex size-10 items-center justify-center rounded-lg bg-linear-to-br from-glow/20 to-chart-3/10 text-glow">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-3 font-display text-[1.375rem] leading-none tracking-[-0.02em] text-balance lg:mt-4 lg:max-w-[8em] lg:text-[1.75rem]">{t}</h3>
                <p className="mt-2 max-w-[17rem] text-[0.9375rem] leading-snug text-foreground/75 lg:mt-3 lg:text-base">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
