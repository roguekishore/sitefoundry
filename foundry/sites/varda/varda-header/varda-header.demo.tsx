// Sample content lives here (gallery only); the page reuses it. Halden Orbital Works is made up.
import { BriefcaseBusiness, Mail, Orbit } from "lucide-react";
import type { VardaHeaderProps } from "./varda-header";
import { VardaHeader } from "./varda-header";

export const headerSample: VardaHeaderProps = {
  name: "Halden",
  icon: <Orbit strokeWidth={1.5} />,
  actions: [
    { label: "Jobs", href: "#", icon: <BriefcaseBusiness /> },
    { label: "Talk to us", href: "#", icon: <Mail /> },
  ],
  menuLabel: "Menu",
  closeLabel: "Close menu",
  menu: [
    { label: "The Kiln capsule", href: "#" },
    { label: "Defense", href: "#" },
    { label: "Pharma", href: "#" },
    { label: "Research labs", href: "#" },
    { label: "About Halden", href: "#" },
    { label: "Press room", href: "#" },
    { label: "Jobs", href: "#" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[160svh] bg-background">
      <VardaHeader {...headerSample} />
    </div>
  );
}
