import { Play } from "lucide-react";
import { EzraScan, type EzraScanProps } from "./ezra-scan";

export const scanSample: EzraScanProps = {
  eyebrow: "The scan",
  title: "One in sixteen of our members learned something worth acting on.",
  body: "In under half an hour, one MRI looks for early signs of cancer and hundreds of other conditions across up to fourteen organs.",
  actions: [
    { label: "The full-body scan", href: "#" },
    { label: "See the visit", href: "#", icon: <Play aria-hidden className="size-4 fill-current" /> },
  ],
  result: {
    title: "What we found",
    label: "Early gallstones",
    text: "Small stones caught before they hurt. A few changes to diet and a follow-up scan next year.",
  },
};

export default function Demo() {
  return <EzraScan {...scanSample} />;
}
