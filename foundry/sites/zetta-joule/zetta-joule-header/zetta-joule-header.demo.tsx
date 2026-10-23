import { ZettaJouleHeader, type ZettaJouleHeaderProps } from "./zetta-joule-header";

export const headerSample: ZettaJouleHeaderProps = {
  brand: "Hearthgrid",
  links: [
    { label: "Company", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Applications", href: "#" },
    { label: "Our Edge", href: "#" },
    { label: "People", href: "#" },
    { label: "Investors", href: "#" },
    { label: "Newsroom", href: "#" },
  ],
  cta: { label: "Get in Touch", href: "#" },
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="bg-linear-to-b from-glow to-chart-5">
      <ZettaJouleHeader {...headerSample} />
      <div className="h-[140svh]" />
    </div>
  );
}
