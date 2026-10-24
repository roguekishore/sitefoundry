import type { K2spaceNewsProps } from "./k2space-news";
import { K2spaceNews } from "./k2space-news";

export const newsSample: K2spaceNewsProps = {
  title: "In the press",
  readLabel: "Read the story",
  previousLabel: "Previous story",
  nextLabel: "Next story",
  items: [
    {
      publication: "Orbit Ledger",
      date: "Sep 18, 2026",
      title: "Hecto ships Ironside, the most powerful bus a startup has flown",
      href: "#",
    },
    {
      publication: "Payload Weekly",
      date: "Aug 29, 2026",
      title: "Why one factory in Long Beach is betting against the small-satellite boom",
      href: "#",
    },
    {
      publication: "The Launch Desk",
      date: "Aug 2, 2026",
      title: "Hecto opens a propulsion lab and hires its first hundred test engineers",
      href: "#",
    },
    {
      publication: "Ground Track",
      date: "Jul 14, 2026",
      title: "Heavy buses, light prices: inside the plan to stack six per launch",
      href: "#",
    },
  ],
};

export default function Demo() {
  return <K2spaceNews {...newsSample} />;
}
