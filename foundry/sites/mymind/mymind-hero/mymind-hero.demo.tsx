// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { AppWindow, Globe, Smartphone } from "lucide-react";
import { MymindHero, type MymindHeroProps } from "./mymind-hero";

export const heroSample: MymindHeroProps = {
  title: ["Keep every spark.", "Sort none of it."],
  sentence: [
    "Your",
    { tag: "jottings", tone: "chart-1" },
    { tag: "links", tone: "chart-2" },
    { tag: "moodboards", tone: "chart-3" },
    { tag: "reads", tone: "chart-4" },
    "and",
    { tag: "pictures", tone: "chart-5" },
    "in one calm room that is only yours.",
  ],
  apps: [
    { label: "Phone app", href: "#", icon: <Smartphone className="text-chart-3" strokeWidth={1.75} /> },
    { label: "Browser add-on", href: "#", icon: <Globe className="text-chart-1" strokeWidth={1.75} /> },
    { label: "Desktop app", href: "#", icon: <AppWindow className="text-highlight" strokeWidth={1.75} /> },
  ],
  phoneCta: { label: "Get nook for your phone", href: "#" },
  watchLabel: "See the first minute",
  watchHref: "#",
};

export default function Demo() {
  return <MymindHero {...heroSample} />;
}
