// Contact page (recreating wiemer.store/kontakt), built from this site's blocks.
import { WiemerContact } from "@foundry/wiemer-contact";
import { WiemerFooter } from "@foundry/wiemer-footer";
import { WiemerHeader } from "@foundry/wiemer-header";
import { WiemerPhotoBand } from "@foundry/wiemer-photo-band";
import { WiemerSmoothScroll } from "@foundry/wiemer-smooth-scroll";
import { contactSample } from "../wiemer-contact/wiemer-contact.demo";
import { footerSample } from "../wiemer-footer/wiemer-footer.demo";
import { headerSample } from "../wiemer-header/wiemer-header.demo";
import { photoBandPlain } from "../wiemer-photo-band/wiemer-photo-band.demo";

export default function KontaktPage() {
  return (
    <div className="bg-background text-foreground">
      <WiemerSmoothScroll />
      <WiemerHeader {...headerSample} />
      <WiemerContact {...contactSample} />
      <WiemerPhotoBand {...photoBandPlain} />
      <WiemerFooter {...footerSample} />
    </div>
  );
}
