import { Scale } from "lucide-react";
import { LeomeAndPartnersFooter, type LeomeAndPartnersFooterProps } from "./leome-and-partners-footer";

export const footerSample: LeomeAndPartnersFooterProps = {
  mark: <Scale strokeWidth={1.5} />,
  links: [
    { label: "Practice", href: "#practice" },
    { label: "People", href: "#people" },
    { label: "The firm", href: "#firm" },
    { label: "Notes", href: "#notes" },
    { label: "Contact", href: "#contact" },
  ],
  hours: { title: "Office hours:", lines: ["Monday to Friday", "08:30 – 17:30"] },
  wordmark: "Marlow Kessler",
  credit: "Site: in-house studio",
  legal: [
    { label: "Privacy", href: "#privacy" },
    { label: "Imprint", href: "#imprint" },
  ],
  note: "2026",
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <div className="h-[40svh]" />
      <LeomeAndPartnersFooter {...footerSample} />
    </div>
  );
}
