// Sample content lives here (gallery only); the page reuses it.
import { Boxes, ClipboardCheck, RefreshCcw } from "lucide-react";
import { ApexspaceIntro, type ApexspaceIntroProps } from "./apexspace-intro";

export const introSample: ApexspaceIntroProps = {
  title: "Put your constellation in orbit sooner, on buses already in production",
  pillars: [
    {
      icon: <Boxes strokeWidth={1} />,
      title: "Standard buses,\nyour mission",
      text: "Each bus is a finished design with qualified parts, so you skip years of engineering. Swap in the options your payload needs and keep everything else that has already flown.",
    },
    {
      icon: <RefreshCcw strokeWidth={1} />,
      title: "Built at\nrate",
      text: "Our line turns out buses on a steady cadence, whether you need one demonstrator or a full plane of spacecraft. Units are being assembled, tested and shipped every month.",
    },
    {
      icon: <ClipboardCheck strokeWidth={1} />,
      title: "From launch\nto handover",
      text: "One team carries the programme from design review to first light: payload fit-checks, environmental testing, launch integration and the first weeks of operations in orbit.",
    },
  ],
};

export default function Demo() {
  return <ApexspaceIntro {...introSample} />;
}
