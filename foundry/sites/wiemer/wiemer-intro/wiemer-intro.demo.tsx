import { WiemerIntro, type WiemerIntroProps } from "./wiemer-intro";

export const introSample: WiemerIntroProps = {
  id: "raster",
  tag: "Arriving 2028",
  title: "Good morning,\nRaster.",
  subline: "One table, built to outlast the flat it stands in.",
  paragraphs: [
    "The Raster does not try to be clever. It does one plain thing very well: four brushed steel rods, two perforated plates, and nothing you will ever need to replace.",
    "It sits as easily beside a reading chair as under a record player, and it looks as if it had always been there.",
    "It goes together in a quarter of an hour with one spanner, and comes apart just as quickly for the next move. And the one after that.",
    "Made as a low side table or a three-shelf stand.",
  ],
  link: { label: "Join the list", href: "#waitlist" },
  cards: Array.from({ length: 12 }, () => ({})),
};

export default function Demo() {
  return <WiemerIntro {...introSample} />;
}
