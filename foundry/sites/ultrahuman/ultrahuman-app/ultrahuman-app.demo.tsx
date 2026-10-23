// Sample content lives here (gallery only); the page reuses it. Kinrise is a made-up company.
import { Apple, Play } from "lucide-react";
import { UltrahumanApp, type UltrahumanAppProps } from "./ultrahuman-app";

export const appSample: UltrahumanAppProps = {
  title: "Kinrise, rebuilt from the inside.",
  body: "Made so each reading is easier to follow, and each suggestion easier to act on.",
  stores: [
    { label: "App Store", href: "#", icon: <Apple aria-hidden className="fill-current" strokeWidth={0} /> },
    { label: "Google Play", href: "#", icon: <Play aria-hidden className="fill-current" strokeWidth={0} /> },
  ],
  mediaLabel: "Film introducing the new app",
  playLabel: "Play the film",
};

export default function Demo() {
  return <UltrahumanApp {...appSample} />;
}
