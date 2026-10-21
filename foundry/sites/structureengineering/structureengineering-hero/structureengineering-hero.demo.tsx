import { tagsSample } from "../structureengineering-tags/structureengineering-tags.demo";
import { StructureengineeringHero, type StructureengineeringHeroProps } from "./structureengineering-hero";

export const heroSample: StructureengineeringHeroProps = {
  heading: "Engineering that clears the way for bolder architecture",
  exploreLabel: "Browse the work",
  tags: tagsSample,
  latestLabel: "Just finished",
  cards: [
    { category: "Homes", title: "Paddington Terrace", href: "#paddington" },
    { category: "Homes", title: "Ridgeline Pavilion", href: "#ridgeline" },
    { category: "Civic", title: "Woolloongabba Library", href: "#library" },
  ],
  placeholderSlides: 4,
};

export default function Demo() {
  return <StructureengineeringHero {...heroSample} />;
}
