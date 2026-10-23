import { WhoopDisclaimer, type WhoopDisclaimerProps } from "./whoop-disclaimer";

export const disclaimerSample: WhoopDisclaimerProps = {
  title: "About the health features:",
  notes: [
    {
      lead: "Body age:",
      text: "Available to members aged 18 and over. It is a wellness estimate to help you build habits, not a medical measurement or diagnosis.",
    },
    {
      lead: "Cycle insights:",
      text: "Cycle predictions are estimates for general wellbeing. They are not a medical device and must not be used for contraception or to plan a pregnancy.",
    },
  ],
};

export default function Demo() {
  return <WhoopDisclaimer {...disclaimerSample} />;
}
