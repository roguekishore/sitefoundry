// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { AlignJustify, Columns2, GalleryHorizontal, LayoutPanelLeft, MessagesSquare, Newspaper } from "lucide-react";
import { PlumeformLooks, type PlumeformLooksProps } from "./plumeform-looks";

export const looksSample: PlumeformLooksProps = {
  eyebrow: "Your classroom, your look",
  title: "A quiz that feels like your room.",
  body: "Pick a page layout, then set its colours and type. Add your school's crest and name so students know who is asking. Plain and the default look are free; the other layouts, palettes and your own crest are on Plus to publish, and you can try every one first.",
  layouts: [
    { name: "Plain", icon: <AlignJustify />, tag: "Free", text: "A single tidy column. The default, and the one layout on Free.", bullets: ["Progress on a small floating bar", "One card at a time, or the whole sheet", "Your font, your colour, your corners"] },
    { name: "Notebook", icon: <Newspaper />, tag: "Plus", text: "Ruled lines and a margin, like an exercise book.", bullets: ["Question numbers in the margin", "Room for working out", "Prints neatly"] },
    { name: "Frosted", icon: <GalleryHorizontal />, tag: "Plus", text: "Questions on a frosted card over your own picture.", bullets: ["Any photo or gradient behind", "Text stays readable over it", "Soft, calm motion"] },
    { name: "Side by side", icon: <Columns2 />, tag: "Plus", text: "A picture or passage on one side, the question on the other.", bullets: ["Good for reading tasks", "The passage stays put", "Stacks on phones"] },
    { name: "Picture board", icon: <LayoutPanelLeft />, tag: "Plus", text: "Large picture choices laid out in a grid.", bullets: ["Big tap targets", "Captions under each picture", "Great for younger classes"] },
    { name: "Chat", icon: <MessagesSquare />, tag: "Plus", text: "Questions arrive one by one like messages.", bullets: ["Feels like a conversation", "Hints appear as replies", "Works well on phones"] },
  ],
  stat: {
    label: "Layout × palette",
    value: "48",
    text: "Contrast is checked for every layout with every preset palette, and with awkward custom colours too. Text and progress colours adjust to the background.",
  },
  themes: {
    title: "Eight palettes, or mix your own",
    text: "Each palette sets the colours and type while keeping your crest and wording. You can then pick your own colours, a gradient or a photo, and any of the six fonts. Palettes and custom looks are on Plus to publish; the default look is free.",
    swatches: [
      { name: "Lagoon", colours: ["chart-1", "foreground", "glow"] },
      { name: "Marigold", colours: ["chart-4", "chart-3", "foreground"] },
      { name: "Harbour", colours: ["chart-2", "chart-1", "foreground"] },
      { name: "Heather", colours: ["chart-3", "muted", "foreground"] },
      { name: "Chalk", colours: ["muted", "foreground", "accent"] },
      { name: "Fern", colours: ["glow", "chart-1", "foreground"] },
      { name: "Ember", colours: ["chart-3", "chart-4", "chart-2"] },
      { name: "Slate", colours: ["muted", "chart-2", "foreground"] },
    ],
  },
  notes: [
    { eyebrow: "Contrast", text: "Questions, choices, progress and small print are all checked against readable-text contrast across the preset palettes." },
    { eyebrow: "Fit", text: "Every layout is loaded at phone and desktop widths and checked for anything that runs off the side." },
    { eyebrow: "Colours that adjust", text: "Text turns light on a dark background, and labels on pale colours darken so they stay readable." },
  ],
  link: { label: "Our accessibility promise", href: "#accessibility" },
};

export default function Demo() {
  return <PlumeformLooks {...looksSample} />;
}
