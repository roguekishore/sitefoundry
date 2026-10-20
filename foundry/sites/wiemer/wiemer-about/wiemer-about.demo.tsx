import { WiemerAbout, type WiemerAboutProps } from "./wiemer-about";

export const aboutSample: WiemerAboutProps = {
  id: "studio",
  title: "Studio",
  subline: "Why Grundform exists",
  paragraphs: [
    "“Bread from the bakery round the corner instead of the supermarket shelf. A desk by the window I am glad to sit at. Rooms with a few good things in them, and space for the eye to rest.",
    "Grundform grew out of that wish for things that are made properly. Furniture you pick once, on purpose, and keep for the rest of your life.",
    "The Raster is the first of them, and it is named after the grid of holes my grandfather punched into every shelf he ever built.”",
  ],
  link: { label: "Follow the workshop", href: "#social" },
  caption: "Founder Ida Brenner",
};

export default function Demo() {
  return <WiemerAbout {...aboutSample} />;
}
