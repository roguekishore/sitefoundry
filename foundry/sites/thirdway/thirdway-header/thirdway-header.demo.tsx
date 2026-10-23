import { ThirdwayHeader, type ThirdwayHeaderProps } from "./thirdway-header";

export const headerSample: ThirdwayHeaderProps = {
  brand: "Hollin",
  mark: "tm",
  links: [
    { label: "Approach", href: "#" },
    { label: "Services", href: "#" },
    { label: "People", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Journal", href: "#" },
  ],
  cta: { label: "Let's talk", href: "#" },
  menuLabel: "Open menu",
  zoneLabel: "GMT",
};

export default function Demo() {
  return (
    <div className="bg-linear-to-b from-accent to-secondary">
      <ThirdwayHeader {...headerSample} />
      <div className="h-[100svh]" />
    </div>
  );
}
