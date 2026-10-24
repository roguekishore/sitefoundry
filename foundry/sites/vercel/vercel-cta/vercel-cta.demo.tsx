// Sample content (gallery only); the page reuses it.
import { Bot, Cpu, Sparkles } from "lucide-react";
import { VercelCta, type VercelCtaProps } from "./vercel-cta";

export const ctaSample: VercelCtaProps = {
  title: "Made by your team, or by its agents",
  primary: { label: "Start building", href: "#" },
  copy: { label: "Hand it to your agent", command: "npx halyard init --agent", copiedLabel: "Command copied" },
  icons: [<Sparkles key="a" strokeWidth={2} />, <Bot key="b" strokeWidth={2} />, <Cpu key="c" strokeWidth={2} />],
};

export default function Demo() {
  return <VercelCta {...ctaSample} />;
}
