// Sample content lives here (gallery only); the page reuses it. Ardent Health is made up.
import { Activity } from "lucide-react";
import { NekoHeader, type NekoHeaderProps } from "./neko-header";

export const headerSample: NekoHeaderProps = {
  brand: "Ardent Health",
  logo: <Activity strokeWidth={2.25} />,
  links: [
    { label: "Body check", href: "#check" },
    { label: "Our story", href: "#story" },
    { label: "Join us", href: "#jobs" },
  ],
  cta: { label: "Book a visit", href: "#book" },
};

export default function Demo() {
  return (
    <div className="min-h-[60svh] bg-muted">
      <NekoHeader {...headerSample} />
    </div>
  );
}
