// Sample content (gallery only).
import { StokespaceReusability, type StokespaceReusabilityProps } from "./stokespace-reusability";

export const reusabilitySample: StokespaceReusabilityProps = {
  id: "recovery",
  eyebrow: "Recovery",
  eyebrowTone: "primary",
  title: "Every stage comes home to fly again",
  items: [
    {
      title: "Booster engine",
      body: "Nine throttling engines that relight for the trip home and land the first stage on its own legs, ready for inspection the next morning.",
    },
    {
      title: "Ceramic aft shield",
      body: "A tiled heat shield across the upper stage's base takes the heat of reentry, so the vehicle needs a wipe-down instead of a rebuild.",
    },
    {
      title: "Returning second stage",
      body: "The upper stage flies back from orbit and touches down near the pad it left from, carrying returned cargo with it.",
    },
    {
      title: "Vacuum engine",
      body: "A ring of small thrusters around the base does double duty: pushing in space and cooling the shield on the way down.",
    },
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <StokespaceReusability {...reusabilitySample} />
    </div>
  );
}
