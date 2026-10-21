import { StoreyarchitectureHeader, type StoreyarchitectureHeaderProps } from "./storeyarchitecture-header";

export const headerSample: StoreyarchitectureHeaderProps = {
  brand: "Ashlar",
  homeHref: "#top",
  links: [
    { label: "Houses", href: "#houses" },
    { label: "Practice", href: "#practice" },
    { label: "Notes", href: "#notes" },
  ],
  contact: { label: "Write to us", href: "#brief" },
  menuLabel: "Menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureHeader {...headerSample} />
      <div className="h-[100svh] bg-glow" />
      <div className="h-[100svh] bg-foreground" />
      <div className="h-[100svh]" />
    </div>
  );
}
