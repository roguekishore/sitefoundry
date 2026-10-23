import { ZettaJouleReactor, type ZettaJouleReactorProps } from "./zetta-joule-reactor";

export const reactorSample: ZettaJouleReactorProps = {
  label: "Smarter Plants",
  statement: "Our design pairs machine learning with a digital twin of every plant to streamline operations, trim costs, speed up delivery and cut human error.",
  tag: "HG REACTOR",
  specs: [
    { label: "Reactor type", value: "HTGR" },
    { label: "Thermal output", value: "30 MWth" },
    { label: "Heat output", value: "Up to 950 °C" },
  ],
  features: [
    { title: "Heat", text: "High-temperature heat opens up the widest range of uses, from chemicals to steelmaking and district heating." },
    { title: "Heat & Power", text: "Can supply heat and electricity together to mines, refineries and other industrial sites." },
    { title: "Hydrogen", text: "Efficient hydrogen production for fertiliser, e-fuels, refining and sustainable aviation fuel." },
    { title: "Electricity", text: "Designed to deliver round-the-clock clean power for data centres, microgrids and communities." },
  ],
};

export default function Demo() {
  return <ZettaJouleReactor {...reactorSample} />;
}
