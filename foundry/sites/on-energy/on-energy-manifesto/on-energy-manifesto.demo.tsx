// Sample content lives here (gallery only); the page reuses it. Sorrel Power is made up.
import { OnEnergyManifesto, type OnEnergyManifestoProps } from "./on-energy-manifesto";

export const manifestoSample: OnEnergyManifestoProps = {
  text: "Sorrel Power builds the buffer that big compute was missing. Keel sits between a campus and its utility as one medium-voltage cabinet, soaking up the faults coming in from the grid and the surges going out from the racks. Two campuses already run on it, with a third breaking ground this winter, so new capacity can connect in months, not years.",
};

export default function Demo() {
  return (
    <div className="bg-background">
      <div className="h-[70vh]" />
      <OnEnergyManifesto {...manifestoSample} />
      <div className="h-[70vh]" />
    </div>
  );
}
