import { HhhusherV2Hero, type HhhusherV2HeroProps } from "./hhhusher-v2-hero";

export const heroSample: HhhusherV2HeroProps = {
  heading: "Clean Takes\nStart Here",
  text: "Meet the Quello Hood, a felt-lined shield that clamps under your hi-hats and keeps their wash out of the snare mic, so the take you print is the take you meant.",
  playLabel: "Play the film",
  link: { label: "Hear the difference", href: "#listen" },
  buy: { label: "Buy", href: "#buy" },
};

export default function Demo() {
  return <HhhusherV2Hero {...heroSample} />;
}
