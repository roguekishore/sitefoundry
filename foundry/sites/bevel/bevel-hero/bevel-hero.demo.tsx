// Sample content (gallery only); the page reuses it. Juniper is a made-up health app.
import { Activity, HeartPulse, MoonStar, Smartphone } from "lucide-react";
import { BevelHero, type BevelHeroProps } from "./bevel-hero";

export const heroSample: BevelHeroProps = {
  title: "One Calm Coach for Every Signal",
  lead: "Bring your rings, watches, lab results and meals together, and see what they mean.",
  cta: { label: "Get the app", href: "#", icon: <Smartphone strokeWidth={2.25} /> },
  rating: 4.5,
  ratingLabel: "4.9 / 31.2K reviews worldwide",
  chips: [
    { icon: <MoonStar strokeWidth={2} />, label: "Rest", value: "7h 52min" },
    { icon: <Activity strokeWidth={2} />, label: "Morning, Ada", value: "Deep sleep carried your recovery; ease into a steady day." },
    { icon: <HeartPulse strokeWidth={2} />, label: "Resting pulse", value: "54 bpm" },
    { icon: <Activity strokeWidth={2} />, label: "Load", value: "38% so far" },
  ],
};

export default function Demo() {
  return <BevelHero {...heroSample} />;
}
