import { BadgeCheck, MapPin, ShieldPlus, Stethoscope, TestTubes } from "lucide-react";
import type { ParsleyhealthTrustProps } from "./parsleyhealth-trust";
import { ParsleyhealthTrust } from "./parsleyhealth-trust";

export const trustSample: ParsleyhealthTrustProps = {
  items: [
    { label: "Most plans covered", icon: <ShieldPlus /> },
    { label: "Licensed physicians", icon: <Stethoscope /> },
    { label: "In-depth blood work", icon: <TestTubes /> },
    { label: "Visits from home", icon: <MapPin /> },
    { label: "Pay with HSA or FSA", icon: <BadgeCheck /> },
  ],
};

export default function Demo() {
  return <ParsleyhealthTrust {...trustSample} />;
}
