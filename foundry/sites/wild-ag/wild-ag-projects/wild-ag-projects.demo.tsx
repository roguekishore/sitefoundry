import { WildAgProjects, type WildAgProjectsProps } from "./wild-ag-projects";

export const projectsSample: WildAgProjectsProps = {
  id: "projects",
  title: "Projects.",
  prevLabel: "Previous project",
  nextLabel: "Next project",
  projects: [
    {
      title: "Lindenhalde, Sursee",
      facts: ["18 rental flats", "2 studios", "Ready for letting 2027"],
      cta: { label: "Project sheet", href: "#lindenhalde" },
    },
    {
      title: "Sonnrain above Zug",
      facts: ["7 hillside terrace homes", "Completion planned for 2029"],
      cta: { label: "Project sheet", href: "#sonnrain" },
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background pb-24">
      <WildAgProjects {...projectsSample} />
    </div>
  );
}
