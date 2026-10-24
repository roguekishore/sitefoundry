import type { FramerCommunityProps } from "./framer-community";
import { FramerCommunity } from "./framer-community";

export const communitySample: FramerCommunityProps = {
  title: "Backed by a crowd of makers\nwho keep showing up",
  count: "18,430 resources",
  action: { label: "Visit the forum", href: "#" },
  mediaLabel: "Community feed window",
};

export default function Demo() {
  return <FramerCommunity {...communitySample} />;
}
