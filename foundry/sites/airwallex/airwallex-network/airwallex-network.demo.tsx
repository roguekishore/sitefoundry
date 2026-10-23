// Sample content lives here (gallery only); the page reuses it. Fernhold is made up.
import { AirwallexNetwork, type AirwallexNetworkProps } from "./airwallex-network";

export const networkSample: AirwallexNetworkProps = {
  title: "Plug into a payments network that speaks local",
  body: "Fernhold runs its own web of local banking connections, a quicker, cheaper and clearer route than the old correspondent chain. Trade like a local company wherever you sell: open accounts with domestic details in minutes, take payment in the customer's currency instead of forcing a conversion, keep balances in a multi-currency wallet, convert at the mid-market rate and send money worldwide in a few taps.",
  stats: [
    { value: "60+", label: "markets where you can receive money like a resident", tone: "orange" },
    { value: "150+", label: "countries you can pay out to on local rails", tone: "magenta" },
    { value: "190B+", label: "in payments moved across the network each year", tone: "violet" },
    { value: "170+", label: "countries your customers can pay you from", tone: "purple" },
  ],
};

export default function Demo() {
  return <AirwallexNetwork {...networkSample} />;
}
