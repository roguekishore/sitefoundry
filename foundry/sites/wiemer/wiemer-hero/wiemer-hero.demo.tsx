import { teaserSample } from "../wiemer-teaser-card/wiemer-teaser-card.demo";
import { WiemerHero, type WiemerHeroProps } from "./wiemer-hero";

export const heroSample: WiemerHeroProps = {
  title: "Grundform",
  subline: "Quiet furniture in brushed steel and anodised aluminium. Made by hand in Saxony.",
  note: "The first piece of the family: the Raster.\nShipping from spring 2028.",
  card: teaserSample,
};

export default function Demo() {
  return <WiemerHero {...heroSample} />;
}
