import type { HelionenergyNewsProps } from "./helionenergy-news";
import { HelionenergyNews } from "./helionenergy-news";

export const newsSample: HelionenergyNewsProps = {
  eyebrow: "Press and notes",
  title: ["From the", "floor"],
  intro: "What our teams have built, signed and switched on this year.",
  ctaLabel: "All news",
  ctaHref: "#",
  items: [
    {
      title: "Vantor Wins State Grant to Open a Second Capacitor Line in the Ohio Valley",
      date: "09/14/26",
      kind: "News",
      summary:
        "A state manufacturing grant will pay for a second capacitor line, doubling our output of the parts that store each pulse of energy and release it into the machine in a few millionths of a second.",
      href: "#",
      linkLabel: "Read about the capacitor grant",
    },
    {
      title: "Vantor Closes Its Series E to Pay for Plant Construction",
      date: "05/02/26",
      kind: "News",
      summary: "The round brings in long-term backers and funds Basin's power block, its cooling loop and the line out to the grid.",
      href: "#",
      linkLabel: "Read about the Series E",
    },
    {
      title: "Grid Weekly | Kiln Holds Its Longest Run Yet, a First for a Private Machine",
      date: "01/27/26",
      kind: "Press",
      summary: "Grid Weekly | Our seventh prototype fired steady pulses through a full shift, the longest run yet by a privately built fusion machine.",
      href: "#",
      linkLabel: "Read the Grid Weekly story",
    },
  ],
};

export default function Demo() {
  return <HelionenergyNews {...newsSample} />;
}
