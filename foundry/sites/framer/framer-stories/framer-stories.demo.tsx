import type { FramerStoriesProps } from "./framer-stories";
import { FramerStories } from "./framer-stories";

const read = { label: "See the story", href: "#" };

export const storiesSample: FramerStoriesProps = {
  title: "Relied on by teams\nrunning busy sites",
  action: { label: "All stories", href: "#" },
  stories: [
    { name: "Orbitly", link: read },
    { name: "northbeam", link: read },
    { name: "KESTREL", link: read },
    { name: "Pallet.io", link: read },
    { name: "lumen&co", link: read },
    { name: "Quarry", link: read },
  ],
};

export default function Demo() {
  return <FramerStories {...storiesSample} />;
}
