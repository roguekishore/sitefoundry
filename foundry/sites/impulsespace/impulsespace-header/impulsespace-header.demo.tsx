// Sample content lives here (gallery only); the page reuses it. Halyard is made up.
import { ImpulsespaceHeader, type ImpulsespaceHeaderProps } from "./impulsespace-header";

export const headerSample: ImpulsespaceHeaderProps = {
  name: "Halyard",
  homeHref: "#",
  links: [
    { label: "Corvus", href: "#corvus" },
    { label: "Lumen", href: "#lumen" },
    { label: "Shuttle Share", href: "#shuttle" },
    { label: "Proving Ground", href: "#ground" },
    { label: "Jobs", href: "#jobs" },
    { label: "Method", href: "#method" },
  ],
  more: [
    { label: "Company", href: "#company" },
    { label: "Dispatches", href: "#dispatches" },
    { label: "Get in touch", href: "#contact" },
  ],
  moreLabel: "More pages",
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    // the transform makes this box the fixed header's frame, so it stays in the demo
    <div className="relative h-64 overflow-clip bg-background [transform:translateZ(0)]">
      <div className="dark absolute inset-x-0 top-0 h-32 bg-background" />
      <ImpulsespaceHeader {...headerSample} />
    </div>
  );
}
