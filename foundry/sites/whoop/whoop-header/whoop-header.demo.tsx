import { WhoopHeader, type WhoopHeaderProps } from "./whoop-header";

export const headerSample: WhoopHeaderProps = {
  brand: { name: "Kairos", href: "#" },
  announcement: { label: "Autumn membership offer is on", href: "#" },
  links: [
    { label: "Get Kairos", href: "#" },
    { label: "Base", href: "#" },
    { label: "Apex", href: "#" },
    { label: "How it works", href: "#" },
    { label: "Why Kairos", href: "#" },
    { label: "Bands & add-ons", href: "#" },
  ],
  account: { label: "Your account", href: "#" },
  bag: { label: "Your bag", href: "#" },
  menuLabels: { open: "Open the menu", close: "Close the menu" },
};

export default function Demo() {
  return (
    <div className="min-h-[60vh] bg-background">
      <WhoopHeader {...headerSample} />
    </div>
  );
}
