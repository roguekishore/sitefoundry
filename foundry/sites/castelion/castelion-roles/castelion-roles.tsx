import { cn } from "@foundry/foundry-utils";
import { CastelionLines } from "@foundry/castelion-lines";
import "./castelion-roles.css";

export interface CastelionRole {
  /** the role's name */
  title: string;
  /** where it is based */
  location: string;
  /** link to the posting */
  href: string;
}

export interface CastelionRolesProps {
  /** the band's title, one entry per desktop line */
  title: string[];
  /** one line of copy under the title */
  intro: string;
  /** the roles, as outlined cards in the scroll box */
  roles: CastelionRole[];
  /** screen-reader name of the scroll box, e.g. "Open roles" */
  listLabel: string;
  className?: string;
}

/** Navy band: title left, a scroll box of outlined role cards right, with a dart on a rail. */
export function CastelionRoles({ title, intro, roles, listLabel, className }: CastelionRolesProps) {
  return (
    <section className={cn("dark bg-secondary text-foreground", className)}>
      <div className="mx-auto grid max-w-page px-gutter lg:grid-cols-[1fr_auto] lg:gap-10 lg:pt-[2.3rem]">
        <div>
          <CastelionLines
            as="h2"
            lines={title}
            className="font-display text-[clamp(1.8125rem,1.279rem+2.19vw,3.25rem)]/[1.29] font-bold tracking-[0.02em]"
          />
          <p className="castelion-roles-intro mt-3 text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-medium lg:mt-4">{intro}</p>
        </div>

        <div className="castelion-roles-body mt-9 flex gap-3.5 lg:mt-0 lg:ml-auto lg:w-[41.25rem] lg:gap-[3.75rem]">
          <ul
            aria-label={listLabel}
            tabIndex={0}
            className="castelion-roles-list grid h-[21.875rem] min-w-0 flex-1 snap-y snap-mandatory content-start gap-4 overflow-y-auto overscroll-y-contain lg:h-[24.5rem]"
          >
            {roles.map((role) => (
              <li key={role.href + role.title} className="snap-start">
                <a
                  href={role.href}
                  className="flex min-h-[9.375rem] flex-col justify-between gap-6 rounded-lg border-2 border-border px-8 py-6 transition-colors duration-500 ease-[ease] hover:bg-foreground/8 motion-reduce:transition-none lg:min-h-[11.7rem] lg:px-[3.25rem] lg:py-[2.375rem]"
                >
                  <span className="font-display text-[clamp(1.125rem,1.032rem+0.381vw,1.375rem)]/[1.1] font-bold tracking-[0.02em]">
                    {role.title}
                  </span>
                  <span className="text-[clamp(0.875rem,0.829rem+0.19vw,1rem)]/[1.4] font-bold">{role.location}</span>
                </a>
              </li>
            ))}
          </ul>
          {/* the rail and its dart */}
          <div aria-hidden className="relative w-2.5 shrink-0">
            <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-foreground/80" />
            <svg viewBox="0 0 10 44" className="castelion-roles-dart absolute top-0 left-0 h-11 w-2.5 fill-foreground">
              <path d="M4 44V18L0 21v-2.5L4 14v-2.5C4 10 4.6 0 5 0s1 10 1 11.5V14l4 4.5V21l-4-3v26z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
