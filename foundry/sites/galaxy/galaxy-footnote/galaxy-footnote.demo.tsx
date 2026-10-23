import { GalaxyFootnote, type GalaxyFootnoteProps } from "./galaxy-footnote";

export const footnoteSample: GalaxyFootnoteProps = { text: "Figures on this page are as of September 2026." };

export default function Demo() {
  return <GalaxyFootnote {...footnoteSample} />;
}
