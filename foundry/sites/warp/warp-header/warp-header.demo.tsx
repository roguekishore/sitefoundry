// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpHeader, type WarpHeaderProps } from "./warp-header";

export const headerSample: WarpHeaderProps = {
  mark: { name: "lathe", href: "#" },
  links: [
    { label: "Platform", href: "#", menu: true },
    { label: "Use cases", href: "#", menu: true },
    { label: "Learn", href: "#", menu: true },
    { label: "Teams", href: "#", menu: true },
    { label: "Plans", href: "#" },
  ],
  signIn: { label: "Log in", href: "#" },
  demo: { label: "Talk to us", href: "#" },
  cta: { label: "Start free", href: "#" },
  jumps: [
    { key: "C", label: "Config", href: "#config" },
    { key: "L", label: "Lifecycle", href: "#lifecycle" },
    { key: "S", label: "Scoring", href: "#scoring" },
    { key: "T", label: "Teams", href: "#teams" },
    { key: "P", label: "Portable", href: "#portable" },
    { key: "O", label: "Oversight", href: "#oversight" },
    { key: "Q", label: "Questions", href: "#questions" },
  ],
  jumpCta: { label: "Join the beta", href: "#" },
  marginNote: "lathe · home · 2026",
  menuLabel: "Open menu",
};

export default function Demo() {
  return (
    <div className="min-h-[200svh] bg-background">
      <WarpHeader {...headerSample} />
    </div>
  );
}
