import { WiemerV2About, type WiemerV2AboutProps } from "./wiemer-v2-about";

export const aboutSample: WiemerV2AboutProps = {
  heading: "Origin",
  subheading: "Why Ostrand exists",
  paragraphs: [
    "“I grew up between my grandmother's sewing table and my father's metal workshop. One was all care, the other all precision, and both made things that outlived the people who bought them.",
    "Ostrand is my attempt to bring the two together: a few pieces of furniture, made slowly from honest metal, that you choose once and keep for decades.",
    "Ilse is the first. She carries my grandmother's name, because she would have put a plant on her and never thought about her again.”",
  ],
  link: { label: "Follow the workshop", href: "#instagram" },
  mediaLabel: "Founder Jonte Ruhland",
};

export default function Demo() {
  return <WiemerV2About {...aboutSample} />;
}
