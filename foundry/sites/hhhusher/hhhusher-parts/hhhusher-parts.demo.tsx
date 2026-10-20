import { HhhusherParts, type HhhusherPartsProps } from "./hhhusher-parts";

export const partsSample: HhhusherPartsProps = {
  id: "parts",
  parts: [
    { index: "01", name: "Curved Shield Shell" },
    { index: "02", name: "Wool Felt Skirt" },
    { index: "03", name: "Foam Core Lining" },
    { index: "04", name: "Hook-and-Loop Track" },
    { index: "05", name: "Side Mic Port Cover" },
    { index: "06", name: "Sprung Rim Clip" },
    { index: "07", name: "Thumb Screw" },
    { index: "08", name: "Rubber Hoop Pads" },
    { index: "09", name: "12″ and 13″ Spacers" },
  ],
};

export default function Demo() {
  return <HhhusherParts {...partsSample} />;
}
