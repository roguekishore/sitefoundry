import { CalendarCheck, ShieldCheck, Truck } from "lucide-react";
import { EightsleepGuarantees, type EightsleepGuaranteesProps } from "./eightsleep-guarantees";

export const guaranteesSample: EightsleepGuaranteesProps = {
  items: [
    { icon: <CalendarCheck />, title: "Sleep on it for 45 nights", text: "Try the Mantle at home. If it is not for you, send it back for a full refund." },
    { icon: <Truck />, title: "Free delivery and returns", text: "Delivered free, and collected free if you change your mind." },
    { icon: <ShieldCheck />, title: "Covered for years", text: "Every Mantle comes with a warranty that keeps going after the trial ends." },
  ],
  note: "We deliver to Australia, Canada, the European Union, Japan, New Zealand, Norway, Singapore, Switzerland, the United Kingdom and the United States (mainland only).",
};

export default function Demo() {
  return <EightsleepGuarantees {...guaranteesSample} />;
}
