import { Command, Download, Option } from "lucide-react";
import { RaycastCta, type RaycastCtaProps } from "./raycast-cta";

const letters = (s: string) => s.split("").map((label) => ({ label }));

export const ctaSample: RaycastCtaProps = {
  title: "Take the quick route.",
  subtitle: "Get Tessel and use it for free.",
  cta: { label: "Get Tessel for Windows", href: "#", icon: <Download /> },
  notes: ["Windows 11 or newer (x64 or ARM64)", "Or install with winget"],
  keys: [
    { keys: [...letters("123456789")].map((k) => ({ ...k, top: "!" })) },
    { keys: letters("QWERTYUIO"), offset: 0 },
    { keys: letters("ASDFGHJKL"), offset: 0 },
    { keys: [...letters("ZXCVBNM"), { label: "<", top: "," }, { label: ">", top: "." }] },
    {
      keys: [
        { label: "fn", modifier: true },
        { label: "control", modifier: true },
        { label: "option", modifier: true, top: <Option /> },
        { label: "command", modifier: true, top: <Command />, width: 1.2, lit: true },
        { label: "", width: 5, lit: true },
        { label: "command", modifier: true, top: <Command />, width: 1.2 },
        { label: "option", modifier: true, top: <Option /> },
      ],
    },
  ],
};

export default function Demo() {
  return <RaycastCta {...ctaSample} />;
}
