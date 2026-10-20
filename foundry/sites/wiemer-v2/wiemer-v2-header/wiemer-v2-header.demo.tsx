import { Layers2 } from "lucide-react";
import { WiemerV2Header, type WiemerV2HeaderProps } from "./wiemer-v2-header";

export const headerSample: WiemerV2HeaderProps = {
  brand: { name: "Ostrand", icon: <Layers2 strokeWidth={2.25} />, href: "#" },
  cta: { label: "Join the list", href: "#reserve" },
};

export default function Demo() {
  return (
    <div className="min-h-[220svh] bg-background">
      <WiemerV2Header {...headerSample} />
      <div className="h-[150svh] bg-foreground/80" />
    </div>
  );
}
