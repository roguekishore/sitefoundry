// Sample content lives here (gallery only); the page reuses it. Every person and company is made up.
import { RoveiaFounders, type RoveiaFoundersProps } from "./roveia-founders";

export const foundersSample: RoveiaFoundersProps = {
  heading: "Words from teams",
  highlight: "we've grown",
  quotes: [
    { quote: "We planned for a new patient to cost us about $200. It settled under $110, and we were profitable by the second month.", author: "Growth Lead, Moorfield", tint: "highlight" },
    { quote: "Last month brought 240 booked consults. Before, it was thirty on a good month — and these are the right people, too.", author: "Ines, Founder, Alder Clinic", tint: "none" },
    { quote: "Revenue grew six-fold in five months. We went from a side project to a real business, and the ads did most of the lifting.", author: "Tom, Founder, Fennel Labs", tint: "primary" },
    { quote: "Results came quickly. Within weeks the right patients were booking, and the cost of each lead kept falling. Two months in we had nearly 200 new patients.", author: "Priya, CEO, Juniper Rx", tint: "none" },
    { quote: "We wanted growth we could predict and plan around. That's what we got, without cutting corners on review or tone.", author: "Leadership, Calder Care", tint: "highlight" },
    { quote: "They helped us grow fast while keeping every claim careful. That balance is rare.", author: "Sam, Founder, Tidewell", tint: "primary" },
  ],
};

export default function Demo() {
  return <RoveiaFounders {...foundersSample} />;
}
