// Sample content lives here (gallery only); the page reuses it. The firm is made up.
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ReckonerHeader, type ReckonerHeaderProps } from "./reckoner-header";

export const headerSample: ReckonerHeaderProps = {
  brand: {
    name: "Wexmoor",
    descriptor: "Credit partners",
    icon: <ChartNoAxesColumnIncreasing strokeWidth={2.5} />,
    href: "#",
  },
  links: [
    {
      label: "Our firm",
      href: "#firm",
      children: [
        { label: "How we invest", href: "#firm" },
        { label: "People", href: "#people" },
      ],
    },
    {
      label: "Strategies",
      href: "#strategies",
      children: [
        { label: "Listed credit", href: "#listed" },
        { label: "Direct lending", href: "#direct" },
      ],
    },
    {
      label: "Funds",
      href: "#funds",
      children: [
        { label: "Fund overview", href: "#funds" },
        { label: "Documents", href: "#documents" },
      ],
    },
  ],
  cta: { label: "Speak with us", href: "#contact" },
};

export default function Demo() {
  return (
    <div className="dark relative min-h-72 bg-background">
      <ReckonerHeader {...headerSample} className="absolute" />
    </div>
  );
}
