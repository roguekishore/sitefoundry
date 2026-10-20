// The whole Wiemer recreation (wiemer.store landing page), built only from this site's blocks
// with each block's demo content. Light is the faithful mode. The brand is made up: Grundform
// and its Raster side table.
import { WiemerAbout } from "@foundry/wiemer-about";
import { WiemerFooter } from "@foundry/wiemer-footer";
import { WiemerHeader } from "@foundry/wiemer-header";
import { WiemerHero } from "@foundry/wiemer-hero";
import { WiemerIntro } from "@foundry/wiemer-intro";
import { WiemerPhotoBand } from "@foundry/wiemer-photo-band";
import { WiemerSmoothScroll } from "@foundry/wiemer-smooth-scroll";
import { WiemerSpecs } from "@foundry/wiemer-specs";
import { WiemerVideoBand } from "@foundry/wiemer-video-band";
import { WiemerWaitlist } from "@foundry/wiemer-waitlist";
import { aboutSample } from "./wiemer-about/wiemer-about.demo";
import { footerSample } from "./wiemer-footer/wiemer-footer.demo";
import { headerSample } from "./wiemer-header/wiemer-header.demo";
import { heroSample } from "./wiemer-hero/wiemer-hero.demo";
import { introSample } from "./wiemer-intro/wiemer-intro.demo";
import { photoBandSample } from "./wiemer-photo-band/wiemer-photo-band.demo";
import { specsSample } from "./wiemer-specs/wiemer-specs.demo";
import { videoSample } from "./wiemer-video-band/wiemer-video-band.demo";
import { waitlistSample } from "./wiemer-waitlist/wiemer-waitlist.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <WiemerSmoothScroll />
      <WiemerHeader {...headerSample} overlay />
      <WiemerHero {...heroSample} />
      <WiemerIntro {...introSample} />
      <WiemerWaitlist {...waitlistSample} />
      <WiemerVideoBand {...videoSample} />
      <WiemerAbout {...aboutSample} />
      <WiemerPhotoBand {...photoBandSample} />
      <WiemerSpecs {...specsSample} />
      <WiemerFooter {...footerSample} />
    </div>
  );
}
