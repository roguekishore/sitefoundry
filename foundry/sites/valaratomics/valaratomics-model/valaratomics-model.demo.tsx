// Sample content (gallery only); the page reuses it. Tallgrass Fission is made up.
import { ValaratomicsModel, type ValaratomicsModelProps } from "./valaratomics-model";

export const modelSample: ValaratomicsModelProps = {
  title: "Reactors by the dozen",
  body: "Instead of one giant plant a decade, we build the same small reactor over and over in one yard and ship it out in a sealed box. Each one sells heat for drying, cracking and refining, and the power to run the site around it.",
  cta: { label: "See the reactor", href: "#reactor" },
};

export default function Demo() {
  return (
    <div className="bg-background py-16">
      <ValaratomicsModel {...modelSample} />
    </div>
  );
}
