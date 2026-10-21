import { MrcresidencesbocaratonHeader, type MrcresidencesbocaratonHeaderProps } from "./mrcresidencesbocaraton-header";

export const headerSample: MrcresidencesbocaratonHeaderProps = {
  name: "Velloro",
  title: "Residences",
  place: "Sarasota, FL",
  homeHref: "#",
  menuLabel: "Menu",
  closeLabel: "Close the menu",
  links: [
    { label: "Home", href: "#" },
    { label: "Our story", href: "#story" },
    { label: "Residences", href: "#residences" },
    { label: "Amenities & service", href: "#amenities" },
    { label: "Sarasota", href: "#sarasota" },
    { label: "Gallery", href: "#gallery" },
    { label: "The makers", href: "#makers" },
    { label: "Brochures", href: "#brochures" },
    { label: "Enquire", href: "#enquire" },
    { label: "Press", href: "#press" },
  ],
};

export default function Demo() {
  return (
    <div className="relative min-h-[120svh] bg-glow">
      <MrcresidencesbocaratonHeader {...headerSample} />
    </div>
  );
}
