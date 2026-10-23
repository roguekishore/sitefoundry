import { GalaxyHeader, type GalaxyHeaderProps } from "./galaxy-header";

export const headerSample: GalaxyHeaderProps = {
  brand: "brightrail",
  links: [
    { label: "Onchain Money", href: "#" },
    { label: "Compute", href: "#" },
    { label: "Research", href: "#" },
    { label: "About", href: "#" },
  ],
  action: { label: "Sign in", href: "#" },
  searchLabel: "Search",
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-64 bg-background">
      <GalaxyHeader {...headerSample} />
    </div>
  );
}
