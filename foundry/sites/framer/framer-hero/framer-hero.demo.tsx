import { ArrowDownToLine } from "lucide-react";
import type { FramerHeroProps } from "./framer-hero";
import { FramerHero } from "./framer-hero";

export const heroSample: FramerHeroProps = {
  title: "Tessel is the site studio\nwith a design partner built in",
  subtitle:
    "Ask for a change and watch it land on a canvas you can still edit by hand, with publishing, content, stats and search tools included. Free for your first site.",
  primary: { label: "Start building free", href: "#" },
  secondary: { label: "Get the app", href: "#", icon: <ArrowDownToLine strokeWidth={2} /> },
  news: { lead: "Fresh:", label: "Tessel for your editor", href: "#" },
  mediaLabel: "Product film",
};

export default function Demo() {
  return <FramerHero {...heroSample} className="pb-16" />;
}
