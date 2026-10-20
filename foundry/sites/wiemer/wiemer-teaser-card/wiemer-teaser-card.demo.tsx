import { WiemerTeaserCard, type WiemerTeaserCardProps } from "./wiemer-teaser-card";

export const teaserSample: WiemerTeaserCardProps = {
  tag: "Arriving 2028",
  text: "Get on the list and hear first the day the Raster is ready to ship.",
  link: { label: "Join the list", href: "#waitlist" },
};

export default function Demo() {
  return (
    <div className="bg-muted p-8">
      <WiemerTeaserCard {...teaserSample} className="max-w-[28rem]" />
    </div>
  );
}
