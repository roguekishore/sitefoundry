import { CalendarDays, CloudUpload, Code2, FolderLock, Network, ScanSearch, Smartphone, SquareArrowOutUpRight } from "lucide-react";
import type { ReflectFeaturesProps } from "./reflect-features";
import { ReflectFeatures } from "./reflect-features";

const icon = { strokeWidth: 1.25, "aria-hidden": true } as const;

export const featuresSample: ReflectFeaturesProps = {
  label: "What's inside",
  items: [
    { icon: <CloudUpload {...icon} />, title: "Sync your way", text: "Through your own cloud drive or a Git remote." },
    { icon: <Network {...icon} />, title: "Linked pages", text: "Grow a web of ideas, one link at a time." },
    { icon: <Smartphone {...icon} />, title: "Pocket app", text: "Jot things down on the bus, signal or not." },
    { icon: <FolderLock {...icon} />, title: "Plain folders", text: "Every page is a file in a folder you pick." },
    { icon: <CalendarDays {...icon} />, title: "Today's page", text: "Each morning opens on a blank date." },
    { icon: <Code2 {...icon} />, title: "Open code", text: "Read and fork every line of it." },
    { icon: <SquareArrowOutUpRight {...icon} />, title: "Quick capture", text: "Clip pages and record voice memos in a tap." },
    { icon: <ScanSearch {...icon} />, title: "Find anything", text: "Search every page and idea in a blink." },
  ],
};

export default function Demo() {
  return <ReflectFeatures {...featuresSample} />;
}
