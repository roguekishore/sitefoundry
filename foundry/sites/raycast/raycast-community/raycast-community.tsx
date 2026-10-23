import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { RaycastHeading } from "@foundry/raycast-heading";
import { RaycastPlaceholder } from "@foundry/raycast-placeholder";

export interface RaycastCommunityCard {
  /** a small icon before the name (lucide) */
  icon: ReactNode;
  /** the community's name */
  name: ReactNode;
  /** the mono figure at the right ("37k members") */
  stat: ReactNode;
  /** the grey sentence */
  description: ReactNode;
  /** the bold link under it */
  link: { label: ReactNode; href: string };
}

export interface RaycastVideo {
  /** the video's title */
  title: ReactNode;
  /** where it links */
  href: string;
  /** the 230×129 thumbnail; a placeholder when empty */
  media?: ReactNode;
}

export interface RaycastCommunityProps {
  /** the white heading sentence */
  title: ReactNode;
  /** the grey heading sentence */
  subtitle?: ReactNode;
  /** the two cards */
  cards: RaycastCommunityCard[];
  /** the video thumbnails (five fit across a desktop screen) */
  videos: RaycastVideo[];
  /** the grey note under the videos */
  note: ReactNode;
  /** the channel link under the note: wordmark and arrow */
  channel: { label: ReactNode; href: string };
  /** the crimson streak art behind the cards; a soft crimson wash when empty */
  backdrop?: ReactNode;
  className?: string;
}

/** Community cards over a crimson backdrop, then a centred strip of video thumbnails. */
export function RaycastCommunity({ title, subtitle, cards, videos, note, channel, backdrop, className }: RaycastCommunityProps) {
  const strip = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = strip.current;
    if (el) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);
  return (
    <section className={cn("relative isolate overflow-clip bg-background px-gutter pt-0 pb-14 text-foreground lg:pb-16", className)}>
      <div aria-hidden className="absolute inset-x-0 top-[18%] -z-10 h-[62%] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)] [&>*]:size-full">
        {backdrop ?? <RaycastPlaceholder tone="glow" />}
      </div>

      <RaycastHeading title={title} subtitle={subtitle} className="mx-auto max-w-[17rem] lg:max-w-none" />

      <div className="mx-auto mt-14 grid max-w-[56.25rem] gap-5 lg:mt-[4.25rem] lg:grid-cols-2 lg:gap-10">
        {cards.map((c, i) => (
          <a
            key={i}
            href={c.link.href}
            className="group relative block rounded-xl bg-card/70 p-6 ring-1 ring-foreground/[0.1] backdrop-blur-sm transition-colors duration-300 hover:bg-card motion-reduce:transition-none lg:p-6"
          >
            <div className="flex items-center gap-4 [&_svg]:size-6">
              {c.icon}
              <span className="text-xl font-medium tracking-[0.2px]">{c.name}</span>
              <span className="ml-auto font-mono text-sm tracking-[0.1px] text-muted-foreground">{c.stat}</span>
            </div>
            <p className="mt-5 max-w-[21rem] text-sm leading-[1.6] font-medium tracking-[0.2px] text-muted-foreground lg:mt-6">{c.description}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold tracking-[0.2px] [&_svg]:size-3.5 [&_svg]:transition-transform group-hover:[&_svg]:translate-x-0.5">
              {c.link.label}
              <ArrowRight />
            </span>
          </a>
        ))}
      </div>

      <div
        ref={strip}
        className="mt-40 overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [scrollbar-width:none] lg:mt-[10.5rem] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="mx-auto flex w-max snap-x gap-10 px-[calc(50%-7.1875rem)] lg:px-0">
          {videos.map((v, i) => (
            <li key={i} className="w-[14.375rem] shrink-0 snap-center">
              <a href={v.href} className="group block">
                <div className="aspect-[230/129] overflow-clip rounded-xl ring-1 ring-foreground/10 transition-[filter,opacity] duration-300 group-hover:brightness-125 motion-reduce:transition-none [&>*]:size-full">
                  {v.media ?? <RaycastPlaceholder tone="muted" className="rounded-xl" />}
                </div>
                <p className="mt-3 text-sm leading-[1.35] font-semibold tracking-[0.2px] text-foreground/80 transition-colors group-hover:text-foreground">{v.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-12 flex max-w-[22rem] flex-col items-center text-center lg:mt-14">
        <p className="text-sm leading-[1.6] font-medium tracking-[0.2px] text-muted-foreground">{note}</p>
        <a href={channel.href} className="mt-8 inline-flex items-center gap-1.5 text-2xl font-semibold tracking-[-0.02em] text-foreground transition-opacity hover:opacity-80 [&_svg]:size-4 [&_svg]:text-muted-foreground">
          {channel.label}
          <ArrowRight />
        </a>
      </div>
    </section>
  );
}
