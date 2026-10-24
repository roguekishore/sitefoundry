import { ZoeDisclaimer, type ZoeDisclaimerProps } from "./zoe-disclaimer";

export const disclaimerSample: ZoeDisclaimerProps = {
  paragraphs: [
    "Tillwell products support general wellbeing. They are not designed to diagnose, treat or prevent any illness, and they are no substitute for advice from your doctor or another health professional.",
  ],
};

export default function Demo() {
  return <ZoeDisclaimer {...disclaimerSample} />;
}
