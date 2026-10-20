import { HhhusherV2MicSetups, type HhhusherV2MicSetupsProps } from "./hhhusher-v2-mic-setups";

export const micSetupsSample: HhhusherV2MicSetupsProps = {
  id: "setups",
  heading: "Mic Placements",
  buy: { label: "Buy", href: "#buy" },
  setups: [
    { label: "Under the hood", text: "A small condenser sits in the pocket beneath the hood, aimed at the batter head. Condensers hear more of the room than dynamics do, and more of the hats, which is exactly why they sound best tucked under the shield." },
    { label: "Classic top dynamic", text: "The usual dynamic on the top head, angled away from the hats. With the hood on you can bring it closer to the rim without the hats taking over." },
    { label: "Top and side pair", text: "A dynamic on top and a second mic at the shell side. The hood keeps both free of wash, so the blend is about the drum, not the cymbals." },
    { label: "Two angles", text: "Two mics from two angles for a wider snare. The hood keeps their phase story simple by leaving the hats out of both." },
    { label: "Dynamic and pencil", text: "A dynamic for the crack and a pencil condenser for the air. The hood turns the condenser from a cymbal mic back into a snare mic." },
    { label: "Stereo snare", text: "A small stereo pair over the snare for a spread image, kept clear of the hats by the shield above it." },
  ],
};

export default function Demo() {
  return <HhhusherV2MicSetups {...micSetupsSample} />;
}
