import { RiopropertyHeader, type RiopropertyHeaderProps } from "./rioproperty-header";

export const headerSample: RiopropertyHeaderProps = {
  brand: "Fenwick Yard",
  homeHref: "#",
  menuLabel: "Open the menu",
  closeLabel: "Close the menu",
  links: [
    { label: "Home", href: "#" },
    { label: "The people", href: "#people" },
    { label: "Closed deals", href: "#deals" },
    { label: "What we do", href: "#services" },
    { label: "Talk to us", href: "#contact" },
  ],
};

export default function Demo() {
  return (
    <div className="min-h-[200vh] bg-background">
      <div className="h-svh bg-gradient-to-b from-secondary to-glow" />
      <RiopropertyHeader {...headerSample} />
    </div>
  );
}
