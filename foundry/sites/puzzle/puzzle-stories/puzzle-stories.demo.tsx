import { PuzzleStories, type PuzzleStoriesProps } from "./puzzle-stories";

export const storiesSample: PuzzleStoriesProps = {
  title: "What would you build with your Fridays back?",
  text: "Teams that moved their books to Oakbook.",
  stories: [
    { tag: "Retail", title: "How Larkspur Florists runs a lean, live finance desk", href: "#" },
    { tag: "Software", title: "How Tinmouth Labs got one view of every account", href: "#" },
    { tag: "Agency", title: "How Northgate Studio won back three days a month", href: "#" },
    { tag: "Property", title: "How Quayside Lets closes its books 80% faster", href: "#" },
    { tag: "Health", title: "How Brightwell Clinics stopped chasing receipts", href: "#" },
    { tag: "Software", title: "How Pellmell moved off spreadsheets in a week", href: "#" },
    { tag: "Hospitality", title: "How Copper Kettle Cafés tracks six sites at once", href: "#" },
    { tag: "Logistics", title: "How Fairway Freight cut its close to four days", href: "#" },
  ],
  link: { label: "Read every story", href: "#" },
  prevLabel: "Previous stories",
  nextLabel: "More stories",
};

export default function Demo() {
  return <PuzzleStories {...storiesSample} />;
}
