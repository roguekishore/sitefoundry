// Sample content lives here (gallery only); the page reuses it. Tidewell is made up.
import { PlumeformEmbed, type PlumeformEmbedProps } from "./plumeform-embed";

export const embedSample: PlumeformEmbedProps = {
  eyebrow: "On your class page",
  title: "Let students answer where they already are.",
  body: "Put a quiz on your class site, blog or learning page. Students answer it there, and their marks land in your Tidewell gradebook.",
  highlight: "In the page, in a pop-up, or as a corner button. On every plan.",
  link: { label: "See how to place a quiz", href: "#embed" },
  footnote: "A working example with made-up marks. Nothing is sent or stored.",
};

export default function Demo() {
  return <PlumeformEmbed {...embedSample} />;
}
