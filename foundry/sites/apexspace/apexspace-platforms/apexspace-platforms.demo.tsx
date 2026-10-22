// Sample content lives here (gallery only); the page reuses it.
import { MapPin } from "lucide-react";
import { busCardSamples } from "../apexspace-bus-card/apexspace-bus-card.demo";
import { ApexspacePlatforms, type ApexspacePlatformsProps } from "./apexspace-platforms";

export const platformsSample: ApexspacePlatformsProps = {
  title: "The Orrery\nbus range",
  text: "Three bus sizes cover low, medium and geostationary orbits, carrying payloads from a shoebox camera to 2,500 kg of communications hardware. Each one ships with pre-qualified option kits, so a new mission is a configuration rather than a new design.",
  badge: { icon: <MapPin strokeWidth={1.5} />, label: "Assembled in Columbus, Ohio" },
  cards: busCardSamples,
  compare: { label: "Compare all buses", href: "#" },
  previousLabel: "Previous bus",
  nextLabel: "Next bus",
};

export default function Demo() {
  return <ApexspacePlatforms {...platformsSample} />;
}
