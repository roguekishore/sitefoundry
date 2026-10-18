// Sample content lives here (gallery only); the page reuses it.
import { MercuryPress, type MercuryPressProps } from "./mercury-press";

export const pressSample: MercuryPressProps = {
  title: "Larkspur in the news",
  items: [
    { outlet: "Ledgr", outletStyle: "heavy", title: "Larkspur is now valued at $2.1B", href: "#", linkLabel: "Read the Ledgr story" },
    { outlet: "Quarterly", outletStyle: "spaced", title: "$240M in yearly revenue, and profitable", href: "#", linkLabel: "Read the Quarterly story" },
    { outlet: "Dispatch", outletStyle: "condensed", title: "Larkspur raises a $120M Series B", href: "#", linkLabel: "Read the Dispatch story" },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background">
      <MercuryPress {...pressSample} />
    </div>
  );
}
