// Sample content lives here (gallery only); the page reuses it.
import { AndurilPlatforms, type AndurilPlatformsProps } from "./anduril-platforms";

export const platformsSample: AndurilPlatformsProps = {
  rows: [
    { title: "Yardline OS™", kicker: "One schedule for every line, bay and supplier", linkLabel: "Yardline OS™", href: "#" },
    { title: "Works One", kicker: "A plant drawn around the product, not the other way", linkLabel: "Works One", href: "#" },
  ],
};

export default function Demo() {
  return <AndurilPlatforms {...platformsSample} />;
}
