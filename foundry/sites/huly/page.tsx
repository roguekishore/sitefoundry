// The whole Huly recreation, built only from this site's blocks, with each block's demo content.
// Shown in the gallery as "huly — full page". Light is the faithful mode: the dark bands force
// themselves dark.
import { HulyHeader } from "@foundry/huly-header";
import { HulyHero } from "@foundry/huly-hero";
import { headerSample } from "./huly-header/huly-header.demo";
import { heroSample } from "./huly-hero/huly-hero.demo";

export default function Page() {
  return (
    <div className="relative">
      <HulyHeader {...headerSample} />
      <HulyHero {...heroSample} />
    </div>
  );
}
