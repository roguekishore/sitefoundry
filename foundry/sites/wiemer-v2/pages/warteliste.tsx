// The waitlist page: solid header, the waitlist band with its form, and the footer.
import { WiemerV2Footer } from "@foundry/wiemer-v2-footer";
import { WiemerV2Header } from "@foundry/wiemer-v2-header";
import { WiemerV2SmoothScroll } from "@foundry/wiemer-v2-smooth-scroll";
import { WiemerV2Waitlist } from "@foundry/wiemer-v2-waitlist";
import { footerSample } from "../wiemer-v2-footer/wiemer-v2-footer.demo";
import { headerSample } from "../wiemer-v2-header/wiemer-v2-header.demo";
import { waitlistSample } from "../wiemer-v2-waitlist/wiemer-v2-waitlist.demo";

export default function Warteliste() {
  return (
    <div className="bg-background text-foreground">
      <WiemerV2SmoothScroll />
      <WiemerV2Header {...headerSample} variant="solid" />
      <WiemerV2Waitlist {...waitlistSample} className="pt-14! lg:pt-22!" />
      <WiemerV2Footer {...footerSample} />
    </div>
  );
}
