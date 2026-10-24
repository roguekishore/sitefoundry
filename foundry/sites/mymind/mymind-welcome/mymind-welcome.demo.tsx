// Sample content lives here (gallery only); the page reuses it. All copy is ours.
import { Feather } from "lucide-react";
import { installTargets } from "../mymind-install-row/mymind-install-row.demo";
import { MymindWelcome, type MymindWelcomeProps } from "./mymind-welcome";

export const welcomeSample: MymindWelcomeProps = {
  line1: "Come on in",
  line2: "...it is quiet here.",
  mark: <Feather strokeWidth={1.25} />,
  cta: { label: "Step inside", href: "#" },
  targets: installTargets,
};

export default function Demo() {
  return <MymindWelcome {...welcomeSample} />;
}
