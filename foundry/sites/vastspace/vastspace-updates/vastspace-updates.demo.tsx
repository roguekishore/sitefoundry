import { VastspaceUpdates, type VastspaceUpdatesProps } from "./vastspace-updates";

export const updatesSample: VastspaceUpdatesProps = {
  title: "Updates",
  action: { label: "More updates", href: "#" },
  items: [
    { category: "Press release", date: "October 6, 2028", href: "#", title: "Corvane and the Northern Space Agency Extend Their Research Partnership Into the Next Decade" },
    { category: "Press release", date: "September 23, 2028", href: "#", title: "Corvane Opens a Surface Systems Division to Adapt Station Hardware for Moon Bases" },
    { category: "Press release", date: "September 9, 2028", href: "#", title: "Agency Signs Seat Agreement With Corvane for the First Nordic Astronaut Flight to Orbit, in Partnership With Two Launch Providers" },
    { category: "Lumen-1", date: "August 7, 2028", href: "#", title: "Designing Lumen-1: Our Crew-First Approach" },
    { category: "Press release", date: "July 22, 2028", href: "#", title: "Corvane Names Former Launch Executive to Lead New Special Programs Division" },
    { category: "Press release", date: "June 30, 2028", href: "#", title: "Retired Flight Director and Space Agency Veteran Joins Corvane as Advisor" },
  ],
};

export default function Demo() {
  return <VastspaceUpdates {...updatesSample} />;
}
