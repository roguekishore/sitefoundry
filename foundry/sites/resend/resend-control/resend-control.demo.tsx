// Sample content (gallery only); the page reuses it.
import { ChartColumn, Globe, Mail } from "lucide-react";
import { ResendControl, type ResendControlProps } from "./resend-control";

export const controlSample: ResendControlProps = {
  title: "Every lever, one dashboard",
  text: [
    "Everything you need to run your sending, trace a problem through clear logs",
    "and keep your domain's good name, without the busywork.",
  ],
  tabs: [
    { label: "Clear reporting", icon: <ChartColumn strokeWidth={1.75} /> },
    { label: "Every message traced", icon: <Mail strokeWidth={1.75} /> },
    { label: "Domain checks", icon: <Globe strokeWidth={1.75} /> },
  ],
};

export default function Demo() {
  return <ResendControl {...controlSample} />;
}
