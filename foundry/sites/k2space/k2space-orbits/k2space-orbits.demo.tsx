import type { K2spaceOrbitsProps } from "./k2space-orbits";
import { K2spaceOrbits } from "./k2space-orbits";

export const orbitsSample: K2spaceOrbitsProps = {
  title: "Engineered for the orbits\nnobody else wants to fly",
  orbits: [
    {
      code: "LEO",
      body: "Close to the ground, low orbits reward speed: short signal paths and sharp imaging. Heavy power and strong thrusters let a Hecto bus hold its lane there for years, where light craft sink and burn.",
    },
    {
      code: "MEO",
      body: "Middle orbits sit inside the radiation belts. Shielded avionics and spare capacity keep navigation and relay payloads steady through doses that wear small platforms out early.",
    },
    {
      code: "GEO",
      body: "High above the equator, one bus watches a whole hemisphere. Big arrays and deep tanks turn a single Hecto launch into a decade-long post over the same spot on Earth.",
    },
  ],
};

export default function Demo() {
  return <K2spaceOrbits {...orbitsSample} />;
}
