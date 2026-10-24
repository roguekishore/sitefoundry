import type { ReactNode } from "react";
import { cn } from "@foundry/foundry-utils";
import { ImpulsespacePlaceholder } from "@foundry/impulsespace-placeholder";

export interface ImpulsespaceVehicle {
  /** the vehicle's name */
  name: string;
  /** its role in a few words */
  role: string;
  /** the vehicle's page */
  href: string;
  /** a cut-out render of the vehicle (contain); empty: a placeholder */
  media?: ReactNode;
  /** what the render shows, for screen readers while it is a placeholder */
  mediaLabel?: string;
}

export interface ImpulsespaceVehiclesProps {
  /** the section heading */
  title: string;
  /** three vehicles work best */
  vehicles: ImpulsespaceVehicle[];
  /** anchor id for the section */
  id?: string;
  className?: string;
}

/** Three tall off-white product cards; hover wells up a glow and settles the render. */
export function ImpulsespaceVehicles({ title, vehicles, id, className }: ImpulsespaceVehiclesProps) {
  return (
    <section id={id} className={cn("bg-background px-gutter py-section text-foreground", className)}>
      <h2 className="font-display text-[2.5rem] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h2>
      <ul className="mt-12 grid gap-8 lg:mt-20 lg:grid-cols-3">
        {vehicles.map((v) => (
          <li key={v.name}>
            <a
              href={v.href}
              className="group relative isolate flex aspect-[0.66] flex-col overflow-clip rounded-lg bg-card text-card-foreground lg:aspect-[0.8]"
            >
              {/* the glow that wells up on hover (the original's canvas light) */}
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(70%_55%_at_50%_45%,var(--glow),transparent_75%)] opacity-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:opacity-60 motion-reduce:transition-none"
              />
              <span className="grid flex-1 place-items-center pt-6">
                <ImpulsespacePlaceholder
                  kind="render"
                  media={v.media}
                  label={v.mediaLabel}
                  className="aspect-[0.94] w-[77%] scale-[0.96] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-100 motion-reduce:transition-none lg:aspect-square lg:w-[82%] [&>img]:object-contain"
                />
              </span>
              <span className="grid gap-1 p-5">
                <span className="text-xl leading-[1.2] font-semibold">{v.name}</span>
                <span className="text-base leading-[1.4] text-muted-foreground">{v.role}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
