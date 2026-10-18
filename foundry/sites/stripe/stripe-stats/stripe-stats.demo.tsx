// Sample content lives here (gallery only); the page reuses it.
import { StripeStats, type StripeStatsProps } from "./stripe-stats";

export const statsSample: StripeStatsProps = {
  title: ["The quiet engine", "behind modern commerce"],
  stats: [
    { value: "140+", label: "currencies and ways to pay" },
    { value: "₹82tn", label: "moved through fernpay last year" },
    { value: "99.995%", label: "uptime across every service" },
    { value: "180m+", label: "subscriptions renewed on time" },
  ],
  toggleLabel: "Switch the band between light and dark",
};

export default function Demo() {
  return <StripeStats {...statsSample} />;
}
