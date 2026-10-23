import { BadgeCheck, CarFront, Landmark, PiggyBank } from "lucide-react";
import { PlaidNetwork, type PlaidNetworkProps } from "./plaid-network";

export const networkSample: PlaidNetworkProps = {
  title: "Each new link makes your product sharper",
  body: "Build on the widest web of linked accounts and each new link teaches your product something: more approvals, more people reached, and growth that compounds.",
  stats: [
    { value: "3 in 5", label: "linked adults rely on Halyard" },
    { value: "31%", label: "more sign-ups completed" },
    { value: "800K+", label: "accounts linked each day" },
    { value: "9,400", label: "banks and credit unions in 14 countries" },
  ],
  notes: [
    { app: "Ostra", time: "4m ago", message: "Rent split sent to 3 friends", icon: PiggyBank },
    { app: "Harborline", time: "2h ago", message: "Your loan offer is ready", icon: CarFront },
    { app: "Tidewell", time: "Just now", message: "Savings goal reached", icon: Landmark },
    { app: "Pebblepay", time: "9m ago", message: "Account verified", icon: BadgeCheck },
  ],
};

export default function Demo() {
  return <PlaidNetwork {...networkSample} />;
}
