// Waitlist page (recreating wiemer.store/warteliste): the signup section on its own.
import { WiemerFooter } from "@foundry/wiemer-footer";
import { WiemerHeader } from "@foundry/wiemer-header";
import { WiemerSmoothScroll } from "@foundry/wiemer-smooth-scroll";
import { WiemerWaitlist } from "@foundry/wiemer-waitlist";
import { footerSample } from "../wiemer-footer/wiemer-footer.demo";
import { headerSample } from "../wiemer-header/wiemer-header.demo";
import { waitlistSample } from "../wiemer-waitlist/wiemer-waitlist.demo";

export default function WartelistePage() {
  return (
    <div className="bg-background text-foreground">
      <WiemerSmoothScroll />
      <WiemerHeader {...headerSample} />
      <WiemerWaitlist {...waitlistSample} />
      <WiemerFooter {...footerSample} />
    </div>
  );
}
