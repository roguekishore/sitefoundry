import { OndoHeader, type OndoHeaderProps } from "./ondo-header";

export const headerSample: OndoHeaderProps = {
  brand: "Corvane",
  links: [
    { label: "Markets", href: "#" },
    { label: "Learn", href: "#" },
    { label: "Network", href: "#" },
    { label: "Company", href: "#" },
  ],
  action: { label: "Open App", href: "#" },
  menuLabel: "Menu",
};

export default function Demo() {
  return (
    <div className="min-h-[22rem] bg-background">
      <OndoHeader {...headerSample} />
    </div>
  );
}
