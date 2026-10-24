// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Feather } from "lucide-react";
import { installTargets } from "../mymind-install-row/mymind-install-row.demo";
import { MymindClosing, type MymindClosingProps } from "./mymind-closing";

export const closingSample: MymindClosingProps = {
  mark: <Feather strokeWidth={1.25} />,
  paragraphs: [
    "nook is a different kind of app. A slower, kinder way to hold on to the things you love. One room for all of it.",
    "Your privacy comes first.",
    "We care about calm, simple design that fits the way your mind already wanders and works.",
    "We'd like you to spend less time tending your tools, and more time on what makes you glad.",
  ],
  cta: { label: "Join for free", href: "#" },
  targets: installTargets,
  note: { text: "Using a different browser?", href: "#" },
};

export default function Demo() {
  return <MymindClosing {...closingSample} />;
}
