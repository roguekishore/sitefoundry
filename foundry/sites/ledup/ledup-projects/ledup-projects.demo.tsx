import { LedupProjects, type LedupProjectsProps } from "./ledup-projects";

export const projectsSample: LedupProjectsProps = {
  label: "Projects",
  title: "Rooms we have brought to light.",
  text: "Lighting schemes made to measure, shaped around how each space is used and what it needs to feel like after dark.",
  dragHint: "Drag to see more of our projects · ",
  projects: [
    { name: "Harbour office boardroom", href: "#harbour" },
    { name: "Atelier Sena boutique", href: "#sena" },
    { name: "Quinta das Pedras winery", href: "#quinta" },
    { name: "North Quay apartments", href: "#north-quay" },
  ],
};

export default function Demo() {
  return <LedupProjects {...projectsSample} />;
}
