import { PlumeformV2Embed, type PlumeformV2EmbedProps } from "./plumeform-v2-embed";

export const embedSample: PlumeformV2EmbedProps = {
  eyebrow: "Put it anywhere",
  title: "Let people reply right on your own site.",
  body: "Drop a questionnaire into your website or app. People answer where they already are, and their replies show up in your Murmur results.",
  emphasis: "Inline, as a pop-up, or behind a corner button. On every plan.",
  link: { label: "How embedding works", href: "#embed" },
  panels: [
    { label: "your-shop.com / notes", note: "Your site", chrome: "browser" },
    { label: "murmur", note: "Sample results", chrome: "app" },
  ],
  caption: "A working example with made-up replies. Nothing is sent or stored.",
};

export default function Demo() {
  return <PlumeformV2Embed {...embedSample} />;
}
