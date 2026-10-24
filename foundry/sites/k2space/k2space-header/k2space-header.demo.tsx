import type { K2spaceHeaderProps } from "./k2space-header";
import { K2spaceHeader } from "./k2space-header";

export const headerSample: K2spaceHeaderProps = {
  brand: { name: "Hecto", suffix: "Orbital" },
  links: [
    { label: "Home", href: "#" },
    { label: "Platforms", href: "#platforms" },
    { label: "Company", href: "#company" },
    { label: "Careers", href: "#careers" },
  ],
  clock: { since: "2026-03-02T14:20:00Z", name: "Ironside" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="dark min-h-[150vh] bg-background">
      <K2spaceHeader {...headerSample} />
      <div className="h-svh bg-muted" />
    </div>
  );
}
