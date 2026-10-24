// Sample content lives here (gallery only); the page reuses it. Aldervane and its partners are made up.
import type { HermeusNewsGridProps } from "./hermeus-news-grid";
import { HermeusNewsGrid } from "./hermeus-news-grid";

export const newsGridSample: HermeusNewsGridProps = {
  index: "04",
  label: "Latest",
  action: { label: "All news", href: "#" },
  items: [
    {
      title: "Kestrel Rolls Out of the Paint Shop Ahead of Its First Taxi Trials",
      href: "#",
      category: "News",
      date: "October 2, 2026",
      mediaLabel: "Photo: the testbed on a cradle in the hangar",
    },
    {
      title: "Aldervane Extends Its Flight-Test Agreement With the Western Range Authority",
      href: "#",
      category: "News",
      date: "August 14, 2026",
      mediaLabel: "Photo: the testbed lifting off a dry lake bed",
    },
    {
      title: "Why We Fly Small Before We Fly Fast",
      href: "#",
      category: "Notes",
      tone: "muted",
      mediaLabel: "Graphic: two partner wordmarks on black",
    },
  ],
};

export default function Demo() {
  return <HermeusNewsGrid {...newsGridSample} />;
}
