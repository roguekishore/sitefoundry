import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, CornerDownRight, Flame } from "lucide-react";
import { cn } from "@foundry/foundry-utils";
import { ZettaJoulePlaceholder } from "@foundry/zetta-joule-placeholder";
import { ZettaJouleStatement } from "@foundry/zetta-joule-statement";
import "./zetta-joule-team.css";

export interface ZettaJouleMember {
  /** full name */
  name: string;
  /** job title */
  role: string;
  /** portrait (aspect 328:458, cropped like object-fit: cover); empty shows a placeholder */
  photo?: ReactNode;
}

export interface ZettaJouleTeamProps {
  /** small label ("\n" starts a new line) */
  label: string;
  /** the statement */
  statement: string;
  /** the people (six fit the desktop grid with the card) */
  members: ZettaJouleMember[];
  /** the pale-blue card that ends the grid */
  card: { title: string; linkLabel: string; href: string };
  /** accessible names of the arrow buttons (phones) */
  prevLabel: string;
  nextLabel: string;
  className?: string;
}

const arrow = "grid size-10 place-items-center rounded-sm bg-primary text-primary-foreground transition-opacity duration-200 disabled:opacity-40";

export function ZettaJouleTeam({ label, statement, members, card, prevLabel, nextLabel, className }: ZettaJouleTeamProps) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const update = () => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  };
  useEffect(update, []);
  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (el.firstElementChild.getBoundingClientRect().width + 16), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={cn("relative z-10 bg-secondary pt-20 pb-16 text-highlight lg:pt-[8.5rem] lg:pb-[17rem]", className)}>
      <div className="mx-auto w-full max-w-[calc(var(--page-width)+5rem)] px-gutter lg:px-10">
        <ZettaJouleStatement tone="accent" label={label} statement={statement} />
      </div>
      <div className="mx-auto mt-16 w-full max-w-[calc(var(--page-width)+5rem)] lg:mt-[4.4rem] lg:px-10">
        <ul
          ref={track}
          onScroll={update}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-pl-4 px-gutter [scrollbar-width:none] lg:grid lg:grid-cols-4 lg:gap-y-14 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {members.map((m, i) => (
            <li key={m.name} className="zetta-joule-team-item w-[calc(100%-2rem)] shrink-0 snap-start sm:w-[22rem] lg:w-auto" style={{ "--c": i % 4 } as CSSProperties}>
              <div className="aspect-[328/458] overflow-clip rounded-sm [&>*]:size-full [&>*]:object-cover">{m.photo ?? <ZettaJoulePlaceholder tone="wash" className="size-full" />}</div>
              <p className="mt-4 text-sm leading-[1.2] font-medium tracking-[-0.01em] text-foreground">{m.name}</p>
              <p className="mt-1.5 max-w-[16rem] text-sm leading-[1.2] tracking-[-0.01em] text-muted-foreground">{m.role}</p>
            </li>
          ))}
          <li
            className="zetta-joule-team-item relative flex aspect-[328/458] w-[calc(100%-2rem)] shrink-0 snap-start flex-col justify-between overflow-clip rounded-sm bg-accent p-8 text-highlight sm:w-[22rem] lg:col-span-2 lg:aspect-[672/458] lg:w-auto"
            style={{ "--c": 2 } as CSSProperties}
          >
            <Flame aria-hidden className="size-6" strokeWidth={1.25} />
            <div aria-hidden className="absolute inset-x-0 top-[22%] h-[22%] bg-[radial-gradient(var(--highlight)_1px,transparent_1.6px)] bg-[length:14px_14px] opacity-35 [mask-image:linear-gradient(to_bottom,transparent,var(--foreground)_40%,transparent)]" />
            <div className="relative">
              <p className="font-display text-2xl leading-[1.05] font-[250] tracking-[-0.03em] lg:text-[2rem]">{card.title}</p>
              <a href={card.href} className="mt-8 flex items-center gap-3 border-t border-highlight/30 pt-3 text-base tracking-[-0.01em] transition-opacity duration-200 hover:opacity-70">
                <CornerDownRight aria-hidden className="size-5" strokeWidth={1.25} />
                {card.linkLabel}
              </a>
            </div>
          </li>
        </ul>
        <div className="mt-12 flex justify-center gap-14 lg:hidden">
          <button type="button" aria-label={prevLabel} disabled={atStart} onClick={() => go(-1)} className={arrow}>
            <ArrowLeft className="size-5" strokeWidth={1.25} />
          </button>
          <button type="button" aria-label={nextLabel} disabled={atEnd} onClick={() => go(1)} className={arrow}>
            <ArrowRight className="size-5" strokeWidth={1.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
