// Sample content lives here (gallery only); the page reuses it.
import { Star } from "lucide-react";
import { TesselMark } from "../huly-window/huly-window.demo";
import { HulyHeader, type HulyHeaderProps } from "./huly-header";

export const headerSample: HulyHeaderProps = {
  brand: "tessel",
  logo: <TesselMark />,
  links: [
    { label: "Plans", href: "#plans" },
    { label: "Learn", href: "#learn", hasMenu: true },
    { label: "Community", href: "#community", hasMenu: true },
    { label: "Apps", href: "#apps" },
  ],
  star: { label: "Give a star", href: "#star", icon: <Star strokeWidth={1.5} /> },
  actions: [
    { label: "Log in", href: "#login" },
    { label: "Get started", href: "#start" },
  ],
};

export default function Demo() {
  return (
    <div className="dark min-h-80 bg-background">
      <HulyHeader {...headerSample} position="static" />
    </div>
  );
}
