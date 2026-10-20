import { HhhusherFeatures, type HhhusherFeaturesProps } from "./hhhusher-features";

const order = { label: "Order", href: "#shop" };
const more = { label: "How it works", href: "#questions" };

export const featuresSample: HhhusherFeaturesProps = {
  id: "features",
  title: ["Built Around", "the Kit"],
  intro: "Dozens of prototypes went into a shield that suits every way drummers sit and play, while leaving engineers free to put the snare mic exactly where they like it.",
  primary: order,
  more,
  features: [
    {
      title: ["Adjustable", "Felt Skirt"],
      text: "Every drummer hits differently. The Veil's felt skirt slides on a hook-and-loop track, so you can lower it, raise it or trim it to clear your sticks and still shade the mic from the cymbals above.",
      primary: order,
      more,
    },
    {
      title: ["Side Mic", "Port"],
      text: "Like to angle the snare mic in from the side? A port in the shield's wall lets the capsule poke through, and the felt closes round it to keep the wash out.",
      primary: order,
      more,
    },
    {
      title: ["Fits 12″, 13″", "and 14″ Snares"],
      text: "One sprung clip, three sizes. Swap the spacer in the box and the Veil sits snug on piccolos, poppy 13s and full-size snares alike.",
      primary: order,
      more,
    },
  ],
};

export default function Demo() {
  return <HhhusherFeatures {...featuresSample} />;
}
