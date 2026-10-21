// The Velloro Residences landing page (recreating mrcresidencesbocaraton.com), built only from
// this site's blocks with their demo content. Light is the faithful mode. The hero is sticky:
// every block after it is position relative, so the page slides up over it.
import { MrcresidencesbocaratonBrand } from "@foundry/mrcresidencesbocaraton-brand";
import { MrcresidencesbocaratonFooter } from "@foundry/mrcresidencesbocaraton-footer";
import { MrcresidencesbocaratonHeader } from "@foundry/mrcresidencesbocaraton-header";
import { MrcresidencesbocaratonHero } from "@foundry/mrcresidencesbocaraton-hero";
import { MrcresidencesbocaratonPicture } from "@foundry/mrcresidencesbocaraton-picture";
import { MrcresidencesbocaratonRegister } from "@foundry/mrcresidencesbocaraton-register";
import { MrcresidencesbocaratonSplit } from "@foundry/mrcresidencesbocaraton-split";
import { brandSample } from "./mrcresidencesbocaraton-brand/mrcresidencesbocaraton-brand.demo";
import { footerSample } from "./mrcresidencesbocaraton-footer/mrcresidencesbocaraton-footer.demo";
import { headerSample } from "./mrcresidencesbocaraton-header/mrcresidencesbocaraton-header.demo";
import { heroSample } from "./mrcresidencesbocaraton-hero/mrcresidencesbocaraton-hero.demo";
import { facadeSample, poolSample, sailSample } from "./mrcresidencesbocaraton-picture/mrcresidencesbocaraton-picture.demo";
import { registerSample } from "./mrcresidencesbocaraton-register/mrcresidencesbocaraton-register.demo";
import { amenitiesSample, residencesSample, sarasotaSample } from "./mrcresidencesbocaraton-split/mrcresidencesbocaraton-split.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <MrcresidencesbocaratonHeader {...headerSample} />
      <MrcresidencesbocaratonHero {...heroSample} />
      <MrcresidencesbocaratonSplit {...residencesSample} />
      <MrcresidencesbocaratonPicture {...facadeSample} />
      <MrcresidencesbocaratonSplit {...amenitiesSample} />
      <MrcresidencesbocaratonPicture {...poolSample} />
      <MrcresidencesbocaratonSplit {...sarasotaSample} />
      <MrcresidencesbocaratonPicture {...sailSample} />
      <MrcresidencesbocaratonRegister {...registerSample} />
      <MrcresidencesbocaratonBrand {...brandSample} />
      <MrcresidencesbocaratonFooter {...footerSample} />
    </div>
  );
}
