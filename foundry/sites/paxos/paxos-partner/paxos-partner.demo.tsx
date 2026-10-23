import { Hexagon } from "lucide-react";
import { PaxosPartner, type PaxosPartnerProps } from "./paxos-partner";

export const partnerSample: PaxosPartnerProps = {
  lockup: [
    { name: "Keelstone", icon: <Hexagon className="text-chart-1" strokeWidth={2.5} />, style: "caps" },
    { name: "Tillwave", style: "bold" },
  ],
  title: "See how Tillwave put digital dollars in forty million pockets",
  playLabel: "Play the film",
};

export default function Demo() {
  return <PaxosPartner {...partnerSample} />;
}
