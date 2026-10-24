// Sample content lives here (gallery only); the page reuses it. Aldervane is made up.
import type { HermeusHeaderProps } from "./hermeus-header";
import { HermeusHeader } from "./hermeus-header";

export const headerSample: HermeusHeaderProps = {
  name: "Aldervane",
  links: [
    { label: "Airframes", href: "#" },
    { label: "Engines", href: "#" },
    { label: "Missions", href: "#" },
    { label: "About", href: "#" },
    { label: "Dispatch", href: "#" },
    { label: "Jobs", href: "#" },
    { label: "Store", href: "#" },
  ],
  menuLabel: "Open menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="min-h-[160svh] bg-secondary">
      <HermeusHeader {...headerSample} />
    </div>
  );
}
