import { Scale } from "lucide-react";
import { LeomeAndPartnersHeader, type LeomeAndPartnersHeaderProps } from "./leome-and-partners-header";

export const headerSample: LeomeAndPartnersHeaderProps = {
  wordmark: ["Marlow", "Kessler"],
  mark: <Scale strokeWidth={1.75} />,
  homeHref: "#",
  menuLabel: "Menu",
  closeLabel: "Close",
  links: [
    { label: "Home", href: "#home" },
    { label: "Practice", href: "#practice" },
    { label: "People", href: "#people" },
    { label: "Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ],
  menuFootnote: ["14 Ferrier Row, Harlow Quay", "+44 20 7946 0318", "desk@marlowkessler.example"],
};

export default function Demo() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <LeomeAndPartnersHeader {...headerSample} />
    </div>
  );
}
