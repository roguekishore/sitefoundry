// Sample content (gallery only); the page reuses it. Lathe is a made-up company.
import { WarpLayers, type WarpLayersProps } from "./warp-layers";

export const layersSample: WarpLayersProps = {
  id: "portable",
  tag: "Portable",
  status: "online",
  title: "Swap out any layer",
  caption: "fig. 4 · swap out any layer",
  layerWord: "layer",
  layers: [
    { title: "Bring your agent", chips: ["lathe", "open agents", "your own"], note: "Any agent that speaks the tool protocol." },
    { title: "Pick the model", chips: ["hosted", "open-weight"], note: "Hosted or open-weight, set per stage of the line." },
    { title: "Our hosts or yours", chips: ["lathe cloud", "on-prem"], note: "Lathe's cloud, or your own private network." },
    { title: "Data stays with you", chips: ["bring storage", "no retention", "your network"], note: "You keep and own everything your line makes." },
  ],
};

export default function Demo() {
  return <WarpLayers {...layersSample} />;
}
