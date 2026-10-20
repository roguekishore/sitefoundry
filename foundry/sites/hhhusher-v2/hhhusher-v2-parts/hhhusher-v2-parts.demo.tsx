import { HhhusherV2Parts, type HhhusherV2PartsProps } from "./hhhusher-v2-parts";

export const partsSample: HhhusherV2PartsProps = {
  id: "parts",
  parts: [
    { name: "Moulded Fibre Shell" },
    { name: "Wool Felt Lining" },
    { name: "Adjustable Felt Skirt" },
    { name: "Hinged Mic Flap" },
    { name: "Hook-and-Loop Strips" },
    { name: "Side Clamp" },
    { name: "Thumb Screw" },
    { name: "Wing Nut" },
    { name: "Snap-in Spacers" },
  ],
};

export default function Demo() {
  return <HhhusherV2Parts {...partsSample} />;
}
