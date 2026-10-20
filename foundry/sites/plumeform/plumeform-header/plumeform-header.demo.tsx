// Sample content lives here (gallery only); the pages reuse it. Tidewell is made up.
import { Waves } from "lucide-react";
import { PlumeformHeader, type PlumeformHeaderProps } from "./plumeform-header";

export const headerSample: PlumeformHeaderProps = {
  brand: "tidewell",
  logo: <Waves strokeWidth={2.25} />,
  links: [
    { label: "Features", href: "#features", hasMenu: true },
    { label: "Classrooms", href: "#classrooms", hasMenu: true },
    { label: "Learn", href: "#learn", hasMenu: true },
    { label: "Templates", href: "#templates" },
    { label: "Pricing", href: "#pricing" },
    { label: "Try it", href: "#try" },
  ],
  secondary: { label: "Sign in", href: "#signin" },
  cta: { label: "Try it free", href: "#start" },
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-background pb-40">
      <PlumeformHeader {...headerSample} />
    </div>
  );
}
