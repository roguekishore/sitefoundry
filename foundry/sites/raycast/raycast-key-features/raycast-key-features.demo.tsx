import { Bug, Clock, Command, CornerDownLeft, Download, User } from "lucide-react";
import { RaycastKeyFeatures, type RaycastKeyFeaturesProps } from "./raycast-key-features";

export const keyFeaturesSample: RaycastKeyFeaturesProps = {
  title: "It isn't about being fast.",
  subtitle: "It's about never feeling slowed down.",
  cta: { label: "Get Tessel", href: "#", icon: <Download /> },
  keys: [
    {
      keys: [
        { label: "§", top: "±" },
        { label: "1", top: "!" },
        { label: "2", top: "@" },
        { label: "3", top: "#" },
        { label: "4", top: "$" },
      ],
    },
    {
      keys: [
        { label: <CornerDownLeft className="size-5" />, modifier: true, width: 1.5, desktopOnly: true },
        { tile: { icon: <Clock />, lead: "Swift.", text: "Answers in a blink." }, width: 1.5 },
        { tile: { icon: <Command />, lead: "Natural.", text: "Hands stay home." }, width: 1.5 },
      ],
    },
    {
      keys: [
        { tile: { icon: <User />, lead: "Yours.", text: "Shape it to fit you." }, width: 1.8 },
        { tile: { icon: <Bug />, lead: "Steady.", text: "99.9% of sessions run clean." }, width: 1.55 },
        { label: "S" },
        { label: "D" },
      ],
    },
    {
      keys: [
        { label: "shift", modifier: true, width: 1.2 },
        { label: "~", top: "`" },
        { label: "Z" },
        { label: "X" },
      ],
    },
    {
      keys: [{ label: "fn", modifier: true }, { label: "control", modifier: true }, { label: "option", modifier: true }, { label: "command", modifier: true }],
    },
  ],
};

export default function Demo() {
  return <RaycastKeyFeatures {...keyFeaturesSample} />;
}
