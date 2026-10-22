// Sample content lives here (gallery only); the page reuses it.
import { AndurilHero, type AndurilHeroProps } from "./anduril-hero";

export const heroSample: AndurilHeroProps = {
  caption: ["©Northwatch", "Field trials", "Season four"],
};

export default function Demo() {
  return <AndurilHero {...heroSample} />;
}
