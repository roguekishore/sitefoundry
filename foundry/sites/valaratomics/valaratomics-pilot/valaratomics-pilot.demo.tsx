// Sample content (gallery only); the page reuses it. Tallgrass Fission and its partners are made up.
import { ValaratomicsPilot, type ValaratomicsPilotProps } from "./valaratomics-pilot";

export const pilotSample: ValaratomicsPilotProps = {
  title: "Prairie One",
  partners: ["Tallgrass", "Kansas Heat Office", "Smoky Hill Co-op", "Plains Test Range"],
  body: "Our first unit goes critical on a sorghum farm outside Salina next spring. The state heat office, the growers' co-op and an old army test range are running it with us, and its steam will dry this year's harvest.",
  cta: { label: "Follow the build", href: "#prairie-one" },
};

export default function Demo() {
  return <ValaratomicsPilot {...pilotSample} />;
}
