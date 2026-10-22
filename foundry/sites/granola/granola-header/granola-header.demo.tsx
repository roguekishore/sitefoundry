import { MonitorDown, Waves } from "lucide-react";
import { GranolaHeader, type GranolaHeaderProps } from "./granola-header";

export const headerSample: GranolaHeaderProps = {
  brand: "tidemark",
  mark: <Waves />,
  homeHref: "#top",
  links: [
    { label: "Features", href: "#features" },
    { label: "Teams", href: "#teams" },
    { label: "Plans", href: "#plans" },
    { label: "Journal", href: "#journal" },
    { label: "Jobs", href: "#jobs" },
  ],
  secondaryCta: { label: "Talk to us", href: "#talk" },
  cta: { label: "Download", mobileLabel: "Get the app", href: "#download", icon: <MonitorDown /> },
};

export default function Demo() {
  return (
    <div className="min-h-[150vh] bg-background">
      <GranolaHeader {...headerSample} />
      <div className="h-svh bg-muted" />
    </div>
  );
}
