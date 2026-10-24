// Sample content (gallery only); the page reuses it. Kestrel Works and Loom are made up.
import { HadrianPlatform, type HadrianPlatformProps } from "./hadrian-platform";

export const platformSample: HadrianPlatformProps = {
  id: "platform",
  eyebrow: "Loom: the control layer for self-running plants",
  text: "Every Kestrel plant runs on Loom, our end-to-end software for autonomous machining. Loom reads a part's old drawings, plans its toolpaths and checks every finished piece, so a small crew can run a whole floor at full speed and tight tolerance. That lets our plants deliver faster and leaner than the shops they replace. It also shortens the road into the trade: Loom coaches new machinists through real work, turning a first-day recruit into a floor technician in about a month.",
};

export default function Demo() {
  return <HadrianPlatform {...platformSample} />;
}
