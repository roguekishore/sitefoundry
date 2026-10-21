import { AatArchitectenProjects, type AatArchitectenProjectsProps } from "./aat-architecten-projects";

export const projectsSample: AatArchitectenProjectsProps = {
  id: "work",
  heading: "Work",
  allLabel: "All work",
  allHref: "#work",
  projects: [
    { title: "Mill Yard Offices", category: "Workplace", href: "#mill-yard", shape: "portrait" },
    { title: "Linden Row Primary", category: "Education", href: "#linden-row", shape: "landscape" },
    { title: "House on the Dyke", category: "Residential", href: "#dyke-house", shape: "portrait" },
    { title: "Peat Museum Annex", category: "Public", href: "#peat-museum", shape: "portrait" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <AatArchitectenProjects {...projectsSample} />
    </div>
  );
}
