import { AlignJustify, Columns2, GalleryHorizontal, MessagesSquare, Newspaper, PanelsTopLeft } from "lucide-react";
import { PlumeformV2Looks, type PlumeformV2LooksProps } from "./plumeform-v2-looks";

export const looksSample: PlumeformV2LooksProps = {
  eyebrow: "Your colours",
  title: "A questionnaire that looks like you made it.",
  body: "Pick a page layout, then tune its colours and type. Add your logo and name so people know who is asking. Plain and the standard look are free; the other layouts, themes and your own brand are on Plus, and you can preview all of them first.",
  layouts: [
    {
      name: "Plain",
      icon: <AlignJustify />,
      plan: "Free",
      free: true,
      description: "A single tidy column. The standard layout, and the one included on Free.",
      bullets: ["Progress on a small floating tab", "One question per screen, or all on one page", "Your typeface, your accent, your corners"],
    },
    {
      name: "Journal",
      icon: <Newspaper />,
      plan: "Plus",
      description: "A wide masthead and generous serif-like spacing, for questionnaires that read like a letter.",
      bullets: ["Large title area with your logo", "Long questions stay comfortable to read", "Works with every theme"],
    },
    {
      name: "Ribbed",
      icon: <GalleryHorizontal />,
      plan: "Plus",
      description: "Questions float on a softly lit backdrop, for launches and events.",
      bullets: ["A moving backdrop behind the card", "Contrast checked against every theme", "Calmer on phones"],
    },
    {
      name: "Split",
      icon: <Columns2 />,
      plan: "Plus",
      description: "A picture or colour field on one side, the questions on the other.",
      bullets: ["Your own photo or a gradient", "Stacks on phones", "Keeps the progress tab"],
    },
    {
      name: "Showcase",
      icon: <PanelsTopLeft />,
      plan: "Plus",
      description: "Big picture answers in a grid, made for choosing between options you can see.",
      bullets: ["Picture choice front and centre", "Grids adapt to the screen", "Captions under each picture"],
    },
    {
      name: "Chat",
      icon: <MessagesSquare />,
      plan: "Plus",
      description: "Questions arrive one by one like messages in a conversation.",
      bullets: ["Replies appear as bubbles", "Feels short even when it isn't", "Your name on every message"],
    },
  ],
  stat: {
    label: "Layout × theme",
    value: "48",
    text: "Every layout is checked against every built-in theme for contrast, and so are awkward custom colour pairs. Text and progress colours adjust to the background.",
  },
  themes: {
    title: "Eight themes, or a look of your own.",
    text: "A theme sets the colours and type and keeps your logo and wording. You can then choose your own colours, a gradient or a photo, and any of six typefaces. Themes and custom looks are on Plus; the standard look is free.",
    items: [
      { name: "Lagoon", swatch: ["chart-2", "chart-1", "background"] },
      { name: "Apricot", swatch: ["chart-4", "highlight", "background"] },
      { name: "Bluebell", swatch: ["chart-3", "primary", "background"] },
      { name: "Butter", swatch: ["chart-5", "chart-4", "foreground"] },
      { name: "Graphite", swatch: ["foreground", "muted", "background"] },
      { name: "Mint", swatch: ["highlight", "chart-1", "background"] },
      { name: "Harbour", swatch: ["chart-3", "chart-2", "foreground"] },
      { name: "Fog", swatch: ["muted", "muted-foreground", "background"] },
    ],
  },
  points: [
    { eyebrow: "Contrast", text: "Questions, options, progress and small print are checked for readable contrast across the built-in combinations." },
    { eyebrow: "Fit", text: "Each layout is opened at phone and desktop widths and checked for anything that spills sideways." },
    { eyebrow: "Colours that adjust", text: "Text turns light on a dark background, and labels on pale accents darken so they stay readable." },
  ],
  link: { label: "How we approach accessibility", href: "#accessibility" },
};

export default function Demo() {
  return <PlumeformV2Looks {...looksSample} />;
}
