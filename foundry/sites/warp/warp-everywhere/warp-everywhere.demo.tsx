// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpEverywhere, type WarpEverywhereProps } from "./warp-everywhere";

export const everywhereSample: WarpEverywhereProps = {
  id: "everywhere",
  title: "Take Lathe anywhere",
  lead: "Lathe is an open platform for agent-built software, made to fit wherever and however your team works.",
  copyLabel: "Copy command",
  products: [
    {
      name: "Lines",
      text: "A delivery line that plans, writes and ships software for you.",
      mediaLabel: "Dashboard of cycle time, savings and cost per merge",
      cta: { label: "JOIN THE BETA", href: "#" },
    },
    {
      name: "Shell",
      text: "An open-source shell made for working alongside agents.",
      mediaLabel: "The desktop shell app on a textured backdrop",
      cta: { label: "download", href: "#" },
    },
    {
      name: "Agent CLI",
      text: "A capable coding agent that runs in any terminal.",
      mediaLabel: "The command-line agent's start screen",
      commands: [
        { platform: "Mac", command: "brew install lathe/tap/lathe" },
        { platform: "Linux", command: "curl -fsSL https://get.lathe.example | sh" },
        { platform: "Windows", command: "winget install Lathe.Agent" },
      ],
    },
  ],
};

export default function Demo() {
  return <WarpEverywhere {...everywhereSample} />;
}
