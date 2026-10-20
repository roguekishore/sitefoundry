// Sample content lives here (gallery only); the page reuses it. The firm is made up.
import { ReckonerAbout, type ReckonerAboutProps } from "./reckoner-about";

export const aboutSample: ReckonerAboutProps = {
  id: "firm",
  eyebrow: "Our firm",
  statement:
    "Wexmoor was started by credit analysts who had seen enough cycles to distrust easy money. We read every covenant, stress every balance sheet and report to investors in plain numbers, every quarter",
  items: [
    {
      title: "Judgement",
      text: "Thirty years across leveraged loans, bonds and privately arranged deals",
    },
    {
      title: "Restraint",
      text: "We pass on far more loans than we make, because the ones we skip can never default on us",
    },
    {
      title: "Access",
      text: "Advisers and institutions speak with the portfolio managers themselves, not a sales desk, whenever a question comes up",
    },
  ],
};

export default function Demo() {
  return <ReckonerAbout {...aboutSample} />;
}
