import { RiopropertyFooter, type RiopropertyFooterProps } from "./rioproperty-footer";

export const footerSample: RiopropertyFooterProps = {
  email: { label: "desk@fenwickyard.co", href: "mailto:desk@fenwickyard.co" },
  phone: { label: "+00 41 555 0187", href: "tel:+00415550187" },
  address: ["Cordage House, 9 Rope Walk", "Old Docks", "Salt Bay", "4410"],
  links: [
    { label: "Home", href: "#" },
    { label: "The people", href: "#people" },
    { label: "Closed deals", href: "#deals" },
    { label: "What we do", href: "#services" },
    { label: "Talk to us", href: "#contact" },
  ],
  socials: [{ label: "Our profile", href: "#profile" }],
  brand: "Fenwick Yard",
  tagline: "Commercial property sold, let and valued, street by street in Salt Bay.",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[70vh]" />
      <RiopropertyFooter {...footerSample} />
    </div>
  );
}
