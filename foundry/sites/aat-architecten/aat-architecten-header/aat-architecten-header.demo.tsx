import { AatArchitectenHeader, type AatArchitectenHeaderProps } from "./aat-architecten-header";

export const headerSample: AatArchitectenHeaderProps = {
  brand: "Brem",
  descriptor: "Architects",
  homeHref: "#top",
  menuLabel: "Menu",
  closeLabel: "Close",
  links: [
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact", arrow: true },
  ],
};

export default function Demo() {
  return (
    <div className="relative bg-background text-foreground">
      <AatArchitectenHeader {...headerSample} />
      <div className="h-[150svh]" />
    </div>
  );
}
