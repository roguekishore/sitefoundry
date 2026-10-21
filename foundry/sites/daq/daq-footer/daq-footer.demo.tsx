import { DaqBackdrop } from "@foundry/daq-backdrop";
import { DaqFooter, type DaqFooterProps } from "./daq-footer";

export const footerSample: DaqFooterProps = {
  lead: "Hand us the tangle.",
  payoff: "We'll ship it.",
  blurb: "Pipelines, reporting and applied AI. Say what keeps breaking and we'll scope the fix.",
  cta: { label: "Open a brief", href: "#contact" },
  columns: [
    {
      heading: "01 / Practice",
      links: [
        { label: "Pipelines", href: "#pipelines" },
        { label: "Applied AI", href: "#applied-ai" },
        { label: "Reporting", href: "#reporting" },
        { label: "Replatforming", href: "#replatforming" },
        { label: "Run & support", href: "#run" },
      ],
    },
    {
      heading: "02 / Studio",
      links: [
        { label: "Results", href: "#results" },
        { label: "Studio", href: "#studio" },
        { label: "Join us", href: "#join" },
        { label: "Network", href: "#network" },
      ],
    },
  ],
  brand: {
    heading: "03 / Vekta Advisory",
    name: "VEKTA",
    sub: "Advisory",
    href: "#top",
    tagline: "Signal",
    taglineStrong: "Engineers.",
    about: "We build the data platforms and guarded AI systems that businesses run on, and turn scattered records into numbers people trust.",
  },
  record: {
    heading: "04 / Small print",
    items: [
      { label: "© 2026 Vekta Advisory", href: "#top" },
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
    ],
    top: { label: "Back up", href: "#top" },
  },
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <DaqBackdrop />
      <div className="relative h-[40svh] bg-background" />
      <DaqFooter {...footerSample} />
    </div>
  );
}
