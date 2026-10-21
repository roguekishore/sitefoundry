import { tagsSample } from "../structureengineering-tags/structureengineering-tags.demo";
import { StructureengineeringWork, type StructureengineeringWorkProps } from "./structureengineering-work";

export const workSample: StructureengineeringWorkProps = {
  heading: "Selected jobs",
  lead: "A cross-section of recent projects: homes, workplaces and public pieces, each solved its own way.",
  tags: tagsSample,
  cta: { label: "All projects", href: "#projects" },
  viewLabel: "Open the project",
  projects: [
    { title: "Kangaroo Point Lookout", href: "#lookout" },
    { title: "Moorooka Sports Hall", href: "#hall" },
    { title: "Fortitude Valley Commons", href: "#commons" },
    { title: "Rosalie Laneway Homes", href: "#rosalie" },
    { title: "Riverbend Footbridge", href: "#footbridge" },
    { title: "Bulimba Boatshed", href: "#boatshed" },
  ],
};

export default function Demo() {
  return (
    <div>
      <StructureengineeringWork {...workSample} />
      <div className="h-[80vh] bg-muted" />
    </div>
  );
}
