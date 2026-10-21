import { DaqBackdrop } from "@foundry/daq-backdrop";
import { DaqHeader, type DaqHeaderProps } from "./daq-header";

export const headerSample: DaqHeaderProps = {
  brand: "VEKTA",
  brandSub: "Advisory",
  homeHref: "#top",
  links: [
    {
      label: "Practice",
      href: "#capabilities",
      children: [
        { label: "Pipelines", href: "#pipelines" },
        { label: "Applied AI", href: "#applied-ai" },
        { label: "Reporting", href: "#reporting" },
        { label: "Replatforming", href: "#replatforming" },
        { label: "Run & support", href: "#run" },
      ],
    },
    { label: "Results", href: "#results" },
    { label: "Studio", href: "#studio" },
    { label: "Join us", href: "#join" },
  ],
  cta: { label: "Open a brief", href: "#contact" },
  sound: { label: "Audio", on: "On", off: "Off" },
  menuLabel: "Open menu",
  closeLabel: "Close menu",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqBackdrop />
      <DaqHeader {...headerSample} />
      <div className="relative h-[200svh]" />
    </div>
  );
}
