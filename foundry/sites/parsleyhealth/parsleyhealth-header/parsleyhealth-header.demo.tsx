import type { ParsleyhealthHeaderProps } from "./parsleyhealth-header";
import { ParsleyhealthHeader } from "./parsleyhealth-header";

export const headerSample: ParsleyhealthHeaderProps = {
  brand: "Halden Health",
  monogram: "Hh",
  announcement: {
    text: "Halden is covered by most major plans in all 50 states.",
    action: { label: "Check my plan", href: "#" },
  },
  closeLabel: "Close announcement",
  links: [
    { label: "Full Circle Membership", href: "#" },
    { label: "Lab Readout", href: "#" },
    { label: "Cost & Coverage", href: "#" },
    { label: "Conditions", href: "#" },
    { label: "Shop", href: "#" },
  ],
  action: { label: "Get started", href: "#" },
  secondary: { label: "Sign in", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[30rem] bg-background">
      <ParsleyhealthHeader {...headerSample} />
    </div>
  );
}
