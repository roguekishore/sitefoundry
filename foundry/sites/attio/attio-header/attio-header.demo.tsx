// Sample content lives here (gallery only); the page reuses it. Tessel is a made-up CRM.
import { Hexagon } from "lucide-react";
import { AttioHeader, type AttioHeaderProps } from "./attio-header";

export const wordmark = (
  <span className="flex items-center gap-1.5 font-display text-[1.4375rem] leading-none font-semibold tracking-[-0.045em]">
    <Hexagon aria-hidden strokeWidth={2.75} className="!size-[1.375rem]" />
    tessel
  </span>
);

export const headerSample: AttioHeaderProps = {
  brand: "Tessel",
  logo: wordmark,
  announcement: { label: "Tessel Autopilot is out: agents that work your whole funnel", href: "#autopilot" },
  links: [
    { label: "Product", href: "#product", menu: true },
    { label: "Learn", href: "#learn", menu: true },
    { label: "Build", href: "#build" },
    { label: "Stories", href: "#stories" },
    { label: "Plans", href: "#plans" },
  ],
  secondary: { label: "Log in", href: "#login" },
  primary: { label: "Try it free", href: "#start" },
};

export default function Demo() {
  return (
    <div className="min-h-[40vh] bg-background">
      <AttioHeader {...headerSample} />
    </div>
  );
}
