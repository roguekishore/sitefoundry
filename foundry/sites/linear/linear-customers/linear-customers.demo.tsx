// Sample content lives here (gallery only); the page reuses it. People and companies are made up.
import { Atom, Sailboat } from "lucide-react";
import { LinearCustomers, type LinearCustomersProps } from "./linear-customers";

export const customersSample: LinearCustomersProps = {
  quotes: [
    {
      quote: "The care that went into the tool rubs off on you. Our product got sharper just from working in it every day.",
      name: "Imogen Vale",
      role: "Principal Engineer, Fieldnote",
      logo: <Atom aria-hidden strokeWidth={1.75} />,
      tone: "glow",
      href: "#fieldnote",
    },
    {
      quote: "We move fast, and Kestrel keeps us leaning towards action.",
      name: "Tomas Reyna",
      role: "VP Engineering, Harbourline",
      logo: <Sailboat aria-hidden strokeWidth={1.75} />,
      tone: "highlight",
      href: "#harbourline",
    },
  ],
  summary: (
    <>
      Kestrel runs product work at <strong>25,000</strong> teams, from two-person studios to global firms.
    </>
  ),
  link: { label: "Read their stories", href: "#stories" },
};

export default function Demo() {
  return <LinearCustomers {...customersSample} className="lg:pt-section" />;
}
