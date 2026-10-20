import { HhhusherHero, type HhhusherHeroProps } from "./hhhusher-hero";

export const heroSample: HhhusherHeroProps = {
  title: ["Clean Takes,", "First Time"],
  text: "Meet the Veil by Rimlock: a felt-lined shield that clips to your snare rim, keeps cymbal wash out of the snare mic and gives you a drum you can push in the mix.",
  playLabel: "Play the film",
  secondary: { label: "Hear the difference", href: "#overview" },
  primary: { label: "Order", href: "#shop" },
};

export default function Demo() {
  return <HhhusherHero {...heroSample} />;
}
