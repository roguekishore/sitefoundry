// Sample content lives here (gallery only); the page reuses it. Every person and brand is made up.
import { RoveiaV2Founders, type RoveiaV2FoundersProps } from "./roveia-v2-founders";

export const foundersSample: RoveiaV2FoundersProps = {
  heading: "Founders who grew",
  accent: "with us",
  quotes: [
    { quote: "We budgeted for patients at $240 each… we're landing them under $140. That gap paid for the whole team by month three.", author: "Fernwell leadership", tint: "highlight" },
    { quote: "Last month brought in 180+ booked consults… we used to see a dozen. And they're the right people, ready to start.", author: "Ruth, co-founder, Pellum", tint: "muted" },
    { quote: "Revenue grew six-fold in five months. We went from a side project to a real company, and those ads did most of it.", author: "Owen, founder of Quietroot", tint: "primary" },
    { quote: "Results came quickly once the campaigns went live. Within weeks our cost per lead fell, and by month two we had our best quarter yet.", author: "Dana, CEO, Northbay", tint: "highlight" },
    { quote: "We wanted growth we could plan around, not lucky months. Halden gave us a system we can read every Monday.", author: "Iris, founder of Lumara", tint: "muted" },
    { quote: "They scaled us fast and kept every ad review-safe. Not one account warning in a year.", author: "Theo, head of growth, Kindred", tint: "primary" },
  ],
};

export default function Demo() {
  return <RoveiaV2Founders {...foundersSample} />;
}
