// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { MymindExtension, type MymindExtensionProps } from "./mymind-extension";

export const extensionSample: MymindExtensionProps = {
  title: ["The one add-on built", "for the way you think."],
  text: "A single home for whatever catches your eye. Nothing to file, name or tag: it settles itself, neatly arranged and easy to find again.",
  pills: [
    { label: "Objects", tone: "chart-2" },
    { label: "Lines & passages", tone: "chart-4" },
    { label: "Reading", tone: "highlight" },
    { label: "Clips", tone: "chart-3" },
  ],
  link: { label: "Watch links sort themselves", href: "#" },
};

export default function Demo() {
  return <MymindExtension {...extensionSample} />;
}
