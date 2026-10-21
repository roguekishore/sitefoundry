import { StoreyarchitectureProjects, type StoreyarchitectureProjectsProps } from "./storeyarchitecture-projects";

export const projectsSample: StoreyarchitectureProjectsProps = {
  projects: [
    { name: "Coldharbour House", href: "#coldharbour" },
    { name: "The Weir Barn", href: "#weir-barn" },
    { name: "Highfold", href: "#highfold" },
  ],
  hoverLabel: "Explore project",
  note: {
    heading: ["A word from", "Ashlar"],
    brand: "Ashlar",
    note: "Quiet rooms, long lives",
    labels: ["AS / FRM", "With thanks", "ashlar.studio"],
  },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StoreyarchitectureProjects {...projectsSample} />
    </div>
  );
}
