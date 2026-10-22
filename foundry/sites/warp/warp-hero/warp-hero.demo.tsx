// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpHero, type WarpHeroProps } from "./warp-hero";

export const heroSample: WarpHeroProps = {
  title: "An open floor for fleets of cloud coding agents",
  lead: "Run on Lathe: lines as config, bring any model or agent, with scoring, test runs, and steady tuning included.",
  primary: { label: "Join the beta", href: "#" },
  secondary: { label: "Get the desktop app", href: "#" },
  caption: "fig. 1 — the floor",
  figureLabel: "fig. a1 · the floor",
  figureMeta: "8 × 28 · live",
  legend: { queued: "queued", working: "running", waiting: "blocked", done: "merged" },
  totals: ["224 jobs", "41 running", "1,702 merges"],
};

export default function Demo() {
  return <WarpHero {...heroSample} />;
}
