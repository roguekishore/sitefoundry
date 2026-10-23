import { VastspaceWordmark } from "@foundry/vastspace-wordmark";
import { VastspaceHeader, type VastspaceHeaderProps } from "./vastspace-header";

export const headerSample: VastspaceHeaderProps = {
  brand: <VastspaceWordmark name="Corvane" />,
  links: [
    { label: "Stations", href: "#" },
    { label: "Satellites", href: "#" },
    { label: "Updates", href: "#" },
    { label: "About us", href: "#" },
  ],
  extra: { label: "Shop", href: "#" },
  cta: { label: "Plan your mission", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="h-[70svh] bg-muted">
      <VastspaceHeader {...headerSample} />
    </div>
  );
}
