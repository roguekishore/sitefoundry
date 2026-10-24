// Sample content (gallery only).
import { FormenergyHeader } from "@foundry/formenergy-header";
import { headerSample } from "../formenergy-header/formenergy-header.demo";
import { FormenergyHero, type FormenergyHeroProps } from "./formenergy-hero";

export const heroSample: FormenergyHeroProps = {
  titleLines: ["Batteries that", "outlast the weather"],
  lead: "Tidewell Power builds grid batteries from salt and steel in the American Midwest. Our cells hold a full week of power at a time, so wind and sun can keep the lights on through the calm, dark stretches that used to need a gas plant.",
};

export default function Demo() {
  return (
    <div className="relative">
      <FormenergyHeader {...headerSample} />
      <FormenergyHero {...heroSample} />
    </div>
  );
}
