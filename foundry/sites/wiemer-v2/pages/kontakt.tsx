// The contact page: solid header, the contact form over the dot field, a plain photo band
// (the hotspots block without hotspots, 3:2) and the footer.
import { WiemerV2Footer } from "@foundry/wiemer-v2-footer";
import { WiemerV2Header } from "@foundry/wiemer-v2-header";
import { WiemerV2Hotspots } from "@foundry/wiemer-v2-hotspots";
import { WiemerV2KontaktForm } from "@foundry/wiemer-v2-kontakt-form";
import { WiemerV2SmoothScroll } from "@foundry/wiemer-v2-smooth-scroll";
import { footerSample } from "../wiemer-v2-footer/wiemer-v2-footer.demo";
import { headerSample } from "../wiemer-v2-header/wiemer-v2-header.demo";
import { photoBandSample } from "../wiemer-v2-hotspots/wiemer-v2-hotspots.demo";
import { kontaktSample } from "../wiemer-v2-kontakt-form/wiemer-v2-kontakt-form.demo";

export default function Kontakt() {
  return (
    <div className="bg-background text-foreground">
      <WiemerV2SmoothScroll />
      <WiemerV2Header {...headerSample} variant="solid" />
      <WiemerV2KontaktForm {...kontaktSample} />
      <WiemerV2Hotspots {...photoBandSample} />
      <WiemerV2Footer {...footerSample} />
    </div>
  );
}
