import { UnitLogos, type UnitLogosProps } from "./unit-logos";

export const logosSample: UnitLogosProps = {
  label: "Teams building on Corbel",
  logos: [
    { name: "Ferrow", next: "Palisade", style: "italic", href: "#" },
    { name: "Northgate", next: "Quillby", style: "bold", href: "#" },
    { name: "LOOMA", style: "caps", href: "#" },
    { name: "HOLDFAST", next: "Brightwell", style: "caps", href: "#" },
    { name: "Tallyho", style: "bold", href: "#" },
    { name: "Marrow", next: "Kestrel", style: "regular", href: "#" },
    { name: "Ruddock", style: "bold", href: "#" },
    { name: "tidepool", next: "Ostra", style: "mono" },
    { name: "Cinderly", style: "regular", href: "#" },
    { name: "ODD•BAY", next: "Halyard", style: "caps", href: "#" },
    { name: "Wrenfield", style: "regular", href: "#" },
    { name: "plume", style: "bold" },
  ],
};

export default function Demo() {
  return <UnitLogos {...logosSample} />;
}
