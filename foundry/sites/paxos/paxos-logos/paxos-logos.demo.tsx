import { PaxosLogos, type PaxosLogosProps } from "./paxos-logos";

export const logosSample: PaxosLogosProps = {
  label: "Relied on by",
  items: ["Northgate Securities", "Amberlane", "fennix", "Orrery Pay", "Calder & Moss", "tidepool"],
};

export default function Demo() {
  return (
    <div className="bg-background py-6">
      <PaxosLogos {...logosSample} />
    </div>
  );
}
