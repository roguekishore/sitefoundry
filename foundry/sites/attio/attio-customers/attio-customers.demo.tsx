// Sample content lives here (gallery only); the page reuses it. All companies are made up.
import type { ReactNode } from "react";
import { Anchor, Feather, Package, Sprout } from "lucide-react";
import { AttioCustomers, type AttioCustomersProps } from "./attio-customers";

function Logo({ icon, children, className }: { icon: ReactNode; children: ReactNode; className?: string }) {
  return (
    <span className={`flex items-center gap-1.5 [&_svg]:!size-6 ${className ?? ""}`}>
      {icon}
      {children}
    </span>
  );
}

export const customersSample: AttioCustomersProps = {
  badge: "Stories",
  lead: "Chosen by 24,000 teams.",
  rest: "From the first agent to the thousandth seat.",
  action: { label: "All stories", href: "#stories" },
  stories: [
    {
      name: "Pollen",
      logo: <Logo className="font-display text-[1.375rem] font-semibold tracking-[-0.04em]" icon={<Sprout strokeWidth={2.5} />}>pollen</Logo>,
      mark: <Sprout strokeWidth={2.5} />,
      eyebrow: "Developer tools",
      lead: "Five times faster triage.",
      rest: "How Pollen routes trial sign-ups on its own.",
      href: "#pollen",
      mediaLabel: "The Pollen team at their office",
    },
    {
      name: "Harbourline",
      logo: <Logo className="text-[1.3125rem] font-bold tracking-[-0.02em]" icon={<Anchor strokeWidth={2.5} />}>Harbourline</Logo>,
      mark: <Anchor strokeWidth={2.5} />,
      eyebrow: "Logistics",
      lead: "Three CRMs became one.",
      rest: "Harbourline's sales and ops now share a page.",
      href: "#harbourline",
      mediaLabel: "A Harbourline depot at dawn",
    },
    {
      name: "Kestrel",
      logo: <Logo className="text-[1.375rem] font-medium tracking-[-0.02em]" icon={<Feather strokeWidth={2} />}>Kestrel</Logo>,
      mark: <Feather strokeWidth={2} />,
      eyebrow: "Infrastructure",
      lead: "Forecasts within two percent.",
      rest: "Kestrel retired its Friday spreadsheets.",
      href: "#kestrel",
      mediaLabel: "Kestrel's revenue team in a meeting",
    },
    {
      name: "parcelo",
      logo: <Logo className="font-display text-[1.375rem] font-medium tracking-[-0.05em]" icon={<Package strokeWidth={2} />}>parcelo</Logo>,
      mark: <Package strokeWidth={2} />,
      eyebrow: "Marketplaces",
      lead: "Every renewal on time.",
      rest: "How parcelo looks after ten thousand accounts.",
      href: "#parcelo",
      mediaLabel: "A parcelo courier on a city street",
    },
  ],
};

export default function Demo() {
  return <AttioCustomers {...customersSample} />;
}
