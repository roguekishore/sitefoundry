import { M3PgProjects, type M3PgProjectsProps } from "./m3-pg-projects";

const more = "Read more";

export const projectsSample: M3PgProjectsProps = {
  id: "work",
  heading: "Selected work",
  intro:
    "From research labs and workshops to family houses on the edge of town, our portfolio spans many uses and every scale, new builds and conversions alike. Each one carries the same attitude to form and planning.",
  allLink: { label: "All projects", href: "#all-work" },
  projects: [
    {
      title: "Quarry Hall",
      body: "On a 4,200 m² former gravel yard at the edge of Rothenbach we planned a timber-clad studio building for an engineering firm, joined by a low hall for testing rigs.",
      link: { label: more, href: "#quarry-hall" },
    },
    {
      title: "Hillside House",
      body: "A family house stepped down a steep vineyard slope, with three split levels under one folded roof.",
      link: { label: more, href: "#hillside-house" },
    },
    {
      title: "KWZ",
      body: "A small health centre that gathers four practices around one daylit waiting court.",
      link: { label: more, href: "#kwz" },
    },
    {
      title: "Mill 7 – brick meets steel",
      body: "A listed brick mill reopened as offices, with a new steel-and-glass stair tower set beside it.",
      link: { label: more, href: "#mill-7" },
    },
    {
      title: "Folded Shed",
      body: "A farm machinery shed under a single folded roof, built from local spruce.",
      link: { label: more, href: "#folded-shed" },
    },
    {
      title: "Lab Row",
      body: "Five linked laboratory units for a biotech start-up, planned to grow one bay at a time.",
      link: { label: more, href: "#lab-row" },
    },
  ],
};

export default function Demo() {
  return <M3PgProjects {...projectsSample} />;
}
