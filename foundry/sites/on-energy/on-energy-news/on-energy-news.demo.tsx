// Sample content lives here (gallery only); the page reuses it. Every story, outlet and
// company is made up.
import { OnEnergyNews, type OnEnergyNewsProps } from "./on-energy-news";

export const newsSample: OnEnergyNewsProps = {
  title: "Dispatches",
  intro: "What is changing in campus power, grid stability and how new load gets connected.",
  featured: [
    {
      kind: "Announcement",
      date: "Sep 30, 2026",
      title: "Halvane and Sorrel Power agree to buffer 6 GW across four new campuses",
      excerpt: "Halvane will fit Keel at every new site in its pipeline, starting with two campuses already under way in the high plains...",
      href: "#",
    },
    {
      kind: "Coverage",
      date: "Oct 12, 2026",
      title: "The Ledger Weekly names Keel a design of the year",
      excerpt: "Campus operators know an outage costs them dearly. Fewer talk about how their own surges can shake the grid next door...",
      href: "#",
    },
  ],
  rows: [
    { title: "Why the next campus will be wired around a buffer", date: "October 9, 2026", href: "#" },
    { title: "Five shifts in compute infrastructure to watch this year", date: "October 2, 2026", href: "#" },
    { title: "Campus power is a systems problem, not a parts problem", date: "September 18, 2026", href: "#" },
    { title: "How Halvane picked a medium-voltage buffer for its new builds", date: "September 4, 2026", href: "#" },
    { title: "Storage moves from backup role to the centre of campus design as loads climb", date: "August 21, 2026", href: "#" },
  ],
  readMoreLabel: "Read more",
};

export default function Demo() {
  return <OnEnergyNews {...newsSample} />;
}
