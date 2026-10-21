import { StructureengineeringHeader, type StructureengineeringHeaderProps } from "./structureengineering-header";

export const headerSample: StructureengineeringHeaderProps = {
  brand: { mark: "L", name: "Lintel Consulting Engineers", href: "#" },
  links: [
    { label: "Practice", href: "#practice" },
    { label: "Team", href: "#team" },
    { label: "Fields", href: "#fields" },
    { label: "Work", href: "#work" },
    { label: "Notes", href: "#notes" },
    { label: "Honours", href: "#honours" },
    { label: "Enquire", href: "#enquire" },
  ],
  marquee: "Good bones, built to last. ",
  contact: { label: "Enquire", href: "#enquire" },
  shortcut: { label: "Work", href: "#work" },
  menuLabel: "Menu",
  closeLabel: "Close the menu",
};

export default function Demo() {
  return (
    <div className="min-h-[140vh] bg-background">
      <StructureengineeringHeader {...headerSample} />
      <div className="h-[70vh] bg-glow" />
    </div>
  );
}
