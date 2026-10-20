// Sample content lives here (gallery only); the page reuses it. Every client is made up.
import { RoveiaCases, type RoveiaCasesProps } from "./roveia-cases";

export const casesSample: RoveiaCasesProps = {
  linkLabel: "Read the full story",
  cases: [
    { name: "Fennel Labs", description: "Fennel Labs makes clinically tested fibre blends for everyday gut health. To move beyond word of mouth, the team asked Northvane to rebuild its paid social, simplify its offer pages and set up testing that told them what was actually selling." },
    { name: "Moorfield", description: "Moorfield runs a doctor-led weight programme online and needed patients who stayed beyond the first month. We reworked targeting and onboarding around long-term fit." },
    { name: "Alder Clinic", description: "Alder, an online sleep clinic, had demand but a leaky booking flow. Together we rebuilt the path from first ad to first consult and shaped campaigns around the questions people really ask before they book." },
    { name: "Juniper Rx", description: "Juniper prescribes personalised skincare and wanted a lower cost per new patient from its photo-consult quiz. We tested hooks, trimmed the quiz and doubled down on what converted." },
    { name: "Calder Care", description: "Calder's coaching app was launching paid campaigns for the first time. We set up the measurement, wrote the first round of creative and grew weekly sign-ups across its three core programmes." },
  ],
};

export default function Demo() {
  return <RoveiaCases {...casesSample} />;
}
