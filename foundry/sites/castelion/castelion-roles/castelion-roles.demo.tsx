// Sample content lives here (gallery only); the page reuses it. Pellworth is made up.
import type { CastelionRolesProps } from "./castelion-roles";
import { CastelionRoles } from "./castelion-roles";

export const rolesSample: CastelionRolesProps = {
  title: ["Open Roles"],
  intro: "Find the work you want to do next at Pellworth.",
  listLabel: "Open roles",
  roles: [
    { title: "Flight Test Engineer, Telemetry", location: "Mesa Verde, NM", href: "#role-1" },
    { title: "Senior Composites Technician", location: "Mesa Verde, NM", href: "#role-2" },
    { title: "Platform Reliability Engineer", location: "Dunmore, OH, Mesa Verde, NM", href: "#role-3" },
    { title: "Lead Structures Design Engineer", location: "Mesa Verde, NM", href: "#role-4" },
    { title: "Production Planner, Final Assembly", location: "Dunmore, OH", href: "#role-5" },
  ],
};

export default function Demo() {
  return <CastelionRoles {...rolesSample} />;
}
