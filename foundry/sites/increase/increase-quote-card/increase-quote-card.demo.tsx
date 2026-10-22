import { Bird, Waves } from "lucide-react";
import { IncreaseQuoteCard, type IncreaseQuoteCardProps } from "./increase-quote-card";

export const limeCard: IncreaseQuoteCardProps = {
  tone: "highlight",
  mark: <span className="grid size-full place-items-center bg-highlight text-highlight-foreground"><Bird strokeWidth={2.5} /></span>,
  quote:
    "Cairn let us ship a spend product that feels as considered as everything else we make. We see every movement of money, and we can change how it flows in an afternoon.",
  attribution: "Ines Halvorsen, VP of Engineering",
  note: "Swiftly settles thousands of vendor invoices a day on Cairn",
};

export const blueCard: IncreaseQuoteCardProps = {
  tone: "glow",
  href: "#",
  mark: <span className="grid size-full place-items-center bg-glow text-primary-foreground"><Waves strokeWidth={2.5} /></span>,
  quote:
    "We build payroll, not banking plumbing. Cairn gave us the plumbing as code, so our engineers spend their days on what our customers actually pay us for.",
  attribution: "Tomasz Weller, CEO",
  note: "Tidepool runs billions in payroll on Cairn",
};

export default function Demo() {
  return (
    <div className="space-y-6 bg-background px-gutter py-12">
      <IncreaseQuoteCard {...limeCard} />
      <IncreaseQuoteCard {...blueCard} />
    </div>
  );
}
