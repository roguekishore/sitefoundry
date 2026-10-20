import { HhhusherV2Features, type HhhusherV2FeaturesProps } from "./hhhusher-v2-features";

const buy = { label: "Buy", href: "#buy" };
const link = { label: "Read more", href: "#details" };

export const featuresSample: HhhusherV2FeaturesProps = {
  id: "features",
  panels: [
    {
      heading: "Built Around the Kit",
      text: "Two years of prototypes went into a shield that suits every way of sitting at a kit, and leaves engineers free to put the snare mic wherever they like it.",
      buy,
      link,
    },
    {
      heading: "Adjustable Felt Skirt",
      text: "Nobody sits at a kit the same way. So the hood's lower edge is a felt skirt held by hook-and-loop strips: pull it down, tuck it up, or trim it to clear your stick height and your engineer's favourite mic angle.",
      buy,
      link,
    },
    {
      heading: "Room for the Mic",
      text: "Plenty of engineers tuck the snare mic right under the hats. A hinged flap in the hood makes space for it there, and still blocks the wash from above.",
      buy,
      link,
    },
    {
      heading: "Fits 13″ to 16″ Hats",
      text: "A set of snap-in spacers resizes the hood for any common hi-hat size, with no tools and nothing to lose.",
      buy,
      link,
    },
  ],
};

export default function Demo() {
  return <HhhusherV2Features {...featuresSample} />;
}
