// Sample content (gallery only); the page reuses it. Tessel is a made-up launcher.
import { Command, Download } from "lucide-react";
import { RaycastHeader, type RaycastHeaderProps } from "./raycast-header";

export const headerSample: RaycastHeaderProps = {
  brand: (
    <>
      <Command strokeWidth={2.25} />
      Tessel
    </>
  ),
  links: ["Library", "Studio", "AI", "Mobile", "Desktop", "Crews", "Teams", "Journal", "Plans"].map((label) => ({ label, href: "#" })),
  login: { label: "Sign in", href: "#" },
  cta: { label: "Get Tessel", href: "#", icon: <Download /> },
  menuLabel: "Open the menu",
};

export default function Demo() {
  return (
    <div className="relative h-40 bg-background">
      <RaycastHeader {...headerSample} className="absolute" />
    </div>
  );
}
