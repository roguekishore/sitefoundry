// Sample content lives here (gallery only); the page reuses it. Tidewell is a made-up company.
import { Waves } from "lucide-react";
import { FunctionhealthHeader, type FunctionhealthHeaderProps } from "./functionhealth-header";

export function TidewellLogo() {
  return (
    <span className="flex items-center gap-2">
      <Waves className="size-5 lg:size-9" strokeWidth={1.5} aria-hidden />
      <span className="font-sans text-[1.375rem] leading-none font-light tracking-[-0.01em] lg:text-[2.25rem]">Tidewell</span>
    </span>
  );
}

const links = [
  { label: "How it works", href: "#how" },
  { label: "What we test", href: "#test" },
  { label: "Scans", href: "#scans" },
  { label: "Questions", href: "#faq" },
  { label: "Our story", href: "#about" },
];

export const headerSample: FunctionhealthHeaderProps = {
  brand: "Tidewell",
  logo: <TidewellLogo />,
  links,
  menuLinks: [...links, { label: "Pricing", href: "#pricing" }, { label: "Gift a year", href: "#gift" }, { label: "For teams", href: "#teams" }, { label: "Press", href: "#press" }],
  login: { label: "Sign in", href: "#signin" },
  cta: { label: "Begin testing", href: "#begin" },
  announcement: { text: "Pay with your HSA or FSA card.", link: { label: "Join Tidewell", href: "#begin" } },
};

export default function Demo() {
  return (
    <div className="min-h-[60rem] bg-background">
      <FunctionhealthHeader {...headerSample} />
      <div className="h-[30rem] bg-linear-to-br from-muted-foreground to-foreground" />
    </div>
  );
}
