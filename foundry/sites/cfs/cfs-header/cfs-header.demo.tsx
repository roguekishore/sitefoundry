// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Atom } from "lucide-react";
import { CfsHeader, type CfsHeaderProps } from "./cfs-header";

export const headerSample: CfsHeaderProps = {
  name: "Brightwater Fusion Works",
  homeHref: "#",
  mark: <Atom strokeWidth={1.25} />,
  links: [
    { label: "Reactor", href: "#" },
    { label: "About", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Sites", href: "#" },
    { label: "Jobs", href: "#" },
  ],
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="dark relative h-72 bg-muted">
      <CfsHeader {...headerSample} />
    </div>
  );
}
