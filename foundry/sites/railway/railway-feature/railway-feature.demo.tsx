// Sample content (gallery only). "Halyard" and every tool named here are made up.
import { BellRing, Eye, Gauge, GitFork, Globe, Layers, MousePointerClick, Network, Rocket, ShieldCheck, Sparkles, Split, Undo2 } from "lucide-react";
import { RailwayFeature, type RailwayFeatureProps } from "./railway-feature";

const alt = (names: string[]) => ({ label: "Instead of", icon: <Split />, names });

export const launchFeature: RailwayFeatureProps = {
  badge: "Build and launch",
  title: ["Ship any stack", "without the ceremony"],
  lead: "Point Halyard at a repository and it works out the rest. Sensible defaults, instant previews, nothing new to learn.",
  link: { label: "See how →", href: "#" },
  points: [
    { icon: <Eye />, title: "Your whole system on one canvas", text: "Lay services out visually so everyone can read the stack at a glance." },
    { icon: <Sparkles />, title: "Settings that set themselves", text: "Halyard reads your code and picks the right build and start commands." },
    { icon: <MousePointerClick />, title: "Change things where they live", text: "Edit variables and limits straight from the canvas. Config files optional." },
  ],
  alternatives: alt(["Dockyard", "Helmsman", "Kettle", "Shoreline", "Hexa"]),
  panel: "chart-5",
  frame: "window",
};

export const wiringFeature: RailwayFeatureProps = {
  badge: "Wire and connect",
  title: ["Private wiring.", "No setup."],
  lead: "Internal links, public addresses, certificates and load balancing are live the moment a service starts.",
  link: { label: "See how →", href: "#" },
  points: [
    { icon: <ShieldCheck />, title: "Private links out of the box", text: "Fast service-to-service traffic with no network plumbing." },
    { icon: <Network />, title: "Protocols spotted for you", text: "HTTP, TCP, gRPC and sockets are recognised automatically." },
  ],
  alternatives: alt(["Meshwork", "Lattice", "Hexa", "Spinnaker Bay", "Weave"]),
  layout: "split",
  tone: "chart-2",
};

export const growFeature: RailwayFeatureProps = {
  badge: "Grow and scale",
  title: ["Grow fast", "without the growing pains"],
  lead: "Go from one instance to many regions. Halyard does the scaling so your team stays on the product.",
  link: { label: "See how →", href: "#" },
  points: [
    { icon: <Layers />, title: "Take on more traffic", text: "Raise CPU and memory or add balanced replicas in a click." },
    { icon: <Globe />, title: "Get closer to your users", text: "Run each service in the regions where its people are." },
  ],
  alternatives: alt(["Hexa", "Cloudcourt", "Nimbus", "Ridgeline"]),
  layout: "split",
  tone: "chart-3",
  rule: true,
};

export const watchFeature: RailwayFeatureProps = {
  badge: "Watch and trace",
  title: ["Logs, metrics and traces together.", "Answers instead of alarms."],
  lead: "Follow a request end to end, keep an eye on resources, set alerts and search logs, all from the first launch, with everything you need to catch trouble early.",
  link: { label: "See how →", href: "#" },
  points: [
    { icon: <Gauge />, title: "One board for every metric", text: "Build dashboards from any service's numbers." },
    { icon: <BellRing />, title: "Alerts where you already are", text: "Chat, pager or email the moment a threshold trips." },
    { icon: <Eye />, title: "Debug in context", text: "Logs sit next to traces. No tab-hopping to find the cause." },
  ],
  alternatives: alt(["Barkhound", "Lumen", "Gearwheel"]),
  panel: "chart-2",
  frame: "window",
};

export const branchFeature: RailwayFeatureProps = {
  badge: "Branch and review",
  title: ["At last, a release flow", "that actually flows."],
  lead: "Spin up as many environments as you like. Every pull request gets a preview, and rolling back takes one click.",
  link: { label: "See how →", href: "#" },
  points: [
    { icon: <GitFork />, title: "Everyone ships in parallel", text: "Unlimited environments mean no one waits for a turn." },
    { icon: <Rocket />, title: "A preview for every change", text: "Each pull request gets its own copy. No surprises after merging." },
    { icon: <Undo2 />, title: "Undo in seconds", text: "Roll back to any earlier release the moment something breaks." },
  ],
  alternatives: alt(["Terrafirm", "Octoport"]),
  tone: "chart-2",
  frame: "card",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <RailwayFeature {...launchFeature} />
      <RailwayFeature {...wiringFeature} />
      <RailwayFeature {...growFeature} />
    </div>
  );
}
