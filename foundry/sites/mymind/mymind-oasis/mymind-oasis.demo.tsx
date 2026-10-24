// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Smartphone, TabletSmartphone } from "lucide-react";
import { MymindOasis, type MymindOasisProps } from "./mymind-oasis";

export const oasisSample: MymindOasisProps = {
  eyebrow: "Your own quiet corner",
  title: ["A cabinet of notions,", "sparks & keepsakes"],
  cards: [
    { title: "Notes without fuss", text: "Catch a thought before it drifts off. Jot it on the move, then open a calm writing view to grow it later.", tone: "beige", span: "narrow" },
    { title: "Links that know themselves", text: "Every link is kept the way it deserves. nook tells a recipe from a review, a product from a paper, and files each to suit.", tone: "blue", span: "wide" },
    { title: "Reading, nothing else", text: "Keep whole articles to read without banners, pop-ups or clutter. nook lifts out the words and leaves the noise.", tone: "sage", span: "wide" },
    { title: "Rooms that fill up", text: "Set up rooms that gather what you keep, on your terms. nook knows which room a new find belongs in.", tone: "rose", span: "narrow" },
    {
      title: "On every screen you own",
      text: "Your notes, links, reads and pictures in one private home. With you wherever you are, always up to date.",
      span: "full",
      photo: true,
      badge: { text: "On phones and tablets alike.", icons: [<Smartphone key="p" />, <TabletSmartphone key="t" />] },
    },
    { title: "Short versions", text: "nook writes a brief summary of what you keep and adds context, so it is easier to find again.", tone: "peach", span: "narrow" },
    { title: "Threads between notes", text: "Tie notes together while you dig and build up an idea. No stopping to sort; your nook grows into a web of what you know.", tone: "beige", span: "wide" },
    { title: "Happy accidents", text: "A slow, unhurried view that brings back things you had forgotten, so you can keep them or let them go.", tone: "blue", span: "wide" },
    { title: "Front of mind", text: "A little space for what matters this week, so it greets you each time you open your nook.", tone: "grey", span: "narrow" },
  ],
};

export default function Demo() {
  return <MymindOasis {...oasisSample} />;
}
