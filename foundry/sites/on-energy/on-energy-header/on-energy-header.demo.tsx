// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyHeader, type OnEnergyHeaderProps } from "./on-energy-header";

export const headerSample: OnEnergyHeaderProps = {
  brand: "sorrel",
  links: [
    {
      label: "Platform",
      href: "#",
      children: [
        { label: "Keel buffer", href: "#" },
        { label: "Control software", href: "#" },
        { label: "Test reports", href: "#" },
      ],
    },
    {
      label: "Use cases",
      href: "#",
      children: [
        { label: "Compute campuses", href: "#" },
        { label: "Utility interconnects", href: "#" },
      ],
    },
    { label: "Funding", href: "#" },
    {
      label: "Company",
      href: "#",
      children: [
        { label: "People", href: "#" },
        { label: "Newsroom", href: "#" },
      ],
    },
    {
      label: "Library",
      href: "#",
      children: [
        { label: "Spec sheets", href: "#" },
        { label: "Journal", href: "#" },
      ],
    },
  ],
  cta: { label: "Talk to us", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="h-[60vh] bg-muted">
      <OnEnergyHeader {...headerSample} />
    </div>
  );
}
