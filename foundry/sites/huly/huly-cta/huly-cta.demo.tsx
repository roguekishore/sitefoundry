// Sample content lives here (gallery only); the page reuses it.
import { MessagesSquare } from "lucide-react";
import { TesselMark } from "../huly-window/huly-window.demo";
import { HulyCta, type HulyCtaProps } from "./huly-cta";

export const ctaSample: HulyCtaProps = {
  title: ["Make time", "for real work"],
  text: "Bring your team to one calm workspace. We're only getting started.",
  primary: { label: "Take the tour", href: "#tour" },
  secondary: { label: "Join the forum", href: "#forum", icon: <MessagesSquare /> },
  logo: <TesselMark />,
};

export default function Demo() {
  return <HulyCta {...ctaSample} />;
}
