import { Hexagon, Sprout } from "lucide-react";
import { IncreaseQuote } from "./increase-quote";

export default function Demo() {
  return (
    <div className="space-y-12 bg-background px-gutter py-12">
      <IncreaseQuote
        quote="They knew the plumbing better than we did: return codes, cut-off times, the odd Friday batch. We shipped a quarter early and never once felt we'd cut a corner."
        name="Odile Marchetti"
        role="Head of Payments at Tessellate"
        mark={<span className="grid size-full place-items-center bg-primary text-primary-foreground"><Hexagon /></span>}
      />
      <IncreaseQuote
        size="sm"
        quote="We stopped asking what the bank allows and started asking what our customers want."
        name="Rafael Okonkwo"
        role="CTO at Greenrow"
        mark={<span className="grid size-full place-items-center bg-foreground text-background"><Sprout /></span>}
      />
    </div>
  );
}
