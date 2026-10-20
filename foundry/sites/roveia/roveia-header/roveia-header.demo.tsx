// Sample content lives here (gallery only); the page reuses it. The company is made up.
import { Plus } from "lucide-react";
import { RoveiaHeader, type RoveiaHeaderProps } from "./roveia-header";

export const headerSample: RoveiaHeaderProps = {
  brand: "Northvane",
  brandMark: <Plus strokeWidth={2} />,
  links: [
    { label: "Sectors", href: "#", menu: true },
    { label: "Results", href: "#" },
    { label: "Library", href: "#", menu: true },
    { label: "Studio", href: "#" },
    { label: "Allies", href: "#", menu: true },
  ],
  cta: { label: "Book a call", href: "#" },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-muted pb-40">
      <RoveiaHeader {...headerSample} position="static" />
    </div>
  );
}
