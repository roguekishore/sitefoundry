import type { FramerShowcaseProps } from "./framer-showcase";
import { FramerShowcase } from "./framer-showcase";

export const showcaseSample: FramerShowcaseProps = {
  title: "Launched on\nTessel",
  action: { label: "Browse live sites", href: "#" },
  rows: [
    [
      { name: "Halden Studio", shape: "landscape", href: "#" },
      { name: "Velvet Issue", shape: "portrait", href: "#" },
      { name: "Moraine Capital", shape: "landscape", href: "#" },
    ],
    [
      { name: "Pixel Field", shape: "portrait", href: "#" },
      { name: "Kickoff Club", shape: "portrait", href: "#" },
      { name: "Brief & Bench", shape: "landscape", href: "#" },
      { name: "Skyline Partners", shape: "portrait", href: "#" },
      { name: "Northwind Labs", shape: "portrait", href: "#" },
    ],
  ],
};

export default function Demo() {
  return <FramerShowcase {...showcaseSample} />;
}
