// Sample content lives here (gallery only); welcome and closing blocks reuse it.
import { AppWindow, Compass, Globe, Smartphone, TabletSmartphone } from "lucide-react";
import { MymindInstallRow, type MymindInstallTarget } from "./mymind-install-row";

export const installTargets: MymindInstallTarget[] = [
  { name: "Phone", action: "Get app", href: "#", icon: <Smartphone className="text-chart-3" strokeWidth={1.5} /> },
  { name: "Tablet", action: "Get app", href: "#", icon: <TabletSmartphone className="text-highlight" strokeWidth={1.5} /> },
  { name: "Desktop", action: "Download", href: "#", icon: <AppWindow className="text-chart-4" strokeWidth={1.5} /> },
  { name: "Browser", action: "Add it", href: "#", icon: <Globe className="text-chart-1" strokeWidth={1.5} /> },
  { name: "Explorer", action: "Add it", href: "#", icon: <Compass className="text-chart-3" strokeWidth={1.5} /> },
];

export default function Demo() {
  return (
    <div className="bg-background px-gutter py-10">
      <MymindInstallRow targets={installTargets} />
    </div>
  );
}
