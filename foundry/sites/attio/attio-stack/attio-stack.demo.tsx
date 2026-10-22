// Sample content lives here (gallery only); the page reuses it. All apps are made up.
import { Asterisk, Bird, Box, Cloud, Hash, Infinity as Loop, Mail, Sparkle, WavesHorizontal as Waves, Zap, Cog, Layers } from "lucide-react";
import { AttioStack, type AttioStackProps } from "./attio-stack";

export const stackSample: AttioStackProps = {
  badge: "Integrations",
  title: "Every tool, wired in.",
  text: "Your notes app, your chat, your data warehouse and whatever your agents lean on next.",
  action: { label: "Browse integrations", href: "#integrations" },
  apps: [
    { name: "Burst", icon: <Asterisk /> },
    { name: "Boxwell", icon: <Box /> },
    { name: "Sparkly", icon: <Sparkle /> },
    { name: "Stratum", icon: <Layers /> },
    { name: "Hashline", icon: <Hash /> },
    { name: "Postbox", icon: <Mail /> },
    { name: "Tidepool", icon: <Waves /> },
    { name: "Gearworks", icon: <Cog /> },
    { name: "Loopwise", icon: <Loop /> },
    { name: "Voltage", icon: <Zap /> },
    { name: "Nimbus", icon: <Cloud /> },
    { name: "Finch", icon: <Bird /> },
  ],
};

export default function Demo() {
  return <AttioStack {...stackSample} />;
}
