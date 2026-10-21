import { KononenkogroupProjects, type KononenkogroupProjectsProps } from "./kononenkogroup-projects";

const work: [string, string][] = [
  ["Tidewater House", "540 m²"],
  ["Larchfield Villas", "1,120 m²"],
  ["Mill Lane Library", "2,870 m²"],
  ["The Ropeworks", "7,400 m²"],
  ["Northgate Pump Hall", "14,950 m²"],
  ["Orchard Court House", "860 m²"],
  ["Bay Terrace Hotel", "41,300 m²"],
  ["Hollin Corner House", "390 m²"],
];

export const projectsSample: KononenkogroupProjectsProps = {
  heading: ["Recent", "Buildings"],
  count: "(8+)",
  projects: work.map(([name, area]) => ({ name, area, href: "#project" })),
  visitLabel: "View",
  more: { label: "All projects", href: "#projects" },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupProjects {...projectsSample} />
    </div>
  );
}
