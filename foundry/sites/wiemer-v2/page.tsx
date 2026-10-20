// The Ostrand landing page (recreating wiemer.store's design), built only from this site's
// blocks with each block's demo content. Light is the faithful mode.
import { WiemerV2About } from "@foundry/wiemer-v2-about";
import { WiemerV2Footer } from "@foundry/wiemer-v2-footer";
import { WiemerV2Header } from "@foundry/wiemer-v2-header";
import { WiemerV2Hero } from "@foundry/wiemer-v2-hero";
import { WiemerV2Hotspots } from "@foundry/wiemer-v2-hotspots";
import { WiemerV2Intro } from "@foundry/wiemer-v2-intro";
import { WiemerV2Rail } from "@foundry/wiemer-v2-rail";
import { WiemerV2SmoothScroll } from "@foundry/wiemer-v2-smooth-scroll";
import { WiemerV2Specs } from "@foundry/wiemer-v2-specs";
import { WiemerV2Video } from "@foundry/wiemer-v2-video";
import { WiemerV2Waitlist } from "@foundry/wiemer-v2-waitlist";
import { aboutSample } from "./wiemer-v2-about/wiemer-v2-about.demo";
import { footerSample } from "./wiemer-v2-footer/wiemer-v2-footer.demo";
import { headerSample } from "./wiemer-v2-header/wiemer-v2-header.demo";
import { heroSample } from "./wiemer-v2-hero/wiemer-v2-hero.demo";
import { hotspotsSample } from "./wiemer-v2-hotspots/wiemer-v2-hotspots.demo";
import { introSample } from "./wiemer-v2-intro/wiemer-v2-intro.demo";
import { railSample } from "./wiemer-v2-rail/wiemer-v2-rail.demo";
import { specsSample } from "./wiemer-v2-specs/wiemer-v2-specs.demo";
import { videoSample } from "./wiemer-v2-video/wiemer-v2-video.demo";
import { waitlistSample } from "./wiemer-v2-waitlist/wiemer-v2-waitlist.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <WiemerV2SmoothScroll />
      <WiemerV2Header {...headerSample} />
      <WiemerV2Hero {...heroSample} />
      <WiemerV2Intro {...introSample} />
      <WiemerV2Rail {...railSample} />
      <WiemerV2Waitlist {...waitlistSample} />
      <WiemerV2Video {...videoSample} />
      <WiemerV2About {...aboutSample} />
      <WiemerV2Hotspots {...hotspotsSample} />
      <WiemerV2Specs {...specsSample} />
      <WiemerV2Footer {...footerSample} />
    </div>
  );
}
