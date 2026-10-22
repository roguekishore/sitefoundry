// Sample content (gallery only); the page reuses it. Every name here is made up.
import { Feather, Hexagon, Orbit, Sprout } from "lucide-react";
import { ColumnHero, type ColumnHeroProps } from "./column-hero";

export const heroSample: ColumnHeroProps = {
  badge: { mark: "FDIC", label: "Tidewell N.A. · FDIC insured" },
  title: "Send, keep, and lend money at full speed",
  lead: "A chartered bank you program directly, built to launch and fund new money products",
  primary: { label: "Open an account", href: "#" },
  secondary: { label: "Read the guides", href: "#" },
  logos: [
    { name: "Parcelo", icon: <Hexagon strokeWidth={2.5} /> },
    { name: "quillpay", icon: <Feather strokeWidth={2.25} /> },
    { name: "F E N N E C" },
    { name: "larkspur" },
    { name: "orbitly", icon: <Orbit strokeWidth={2.25} /> },
    { name: "Mossgate", icon: <Sprout strokeWidth={2.25} /> },
  ],
};

export default function Demo() {
  return <ColumnHero {...heroSample} />;
}
