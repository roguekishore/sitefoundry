// The terms page (recreating hhhusher.com/terms-of-use), built only from this site's blocks with
// their demo content.
import { HhhusherFooter } from "@foundry/hhhusher-footer";
import { HhhusherHeader } from "@foundry/hhhusher-header";
import { HhhusherLegal } from "@foundry/hhhusher-legal";
import { HhhusherPageTitle } from "@foundry/hhhusher-page-title";
import { HhhusherSmoothScroll } from "@foundry/hhhusher-smooth-scroll";
import { footerSample } from "../hhhusher-footer/hhhusher-footer.demo";
import { headerSample } from "../hhhusher-header/hhhusher-header.demo";
import { termsSample } from "../hhhusher-legal/hhhusher-legal.demo";
import { termsTitleSample } from "../hhhusher-page-title/hhhusher-page-title.demo";

export default function TermsOfUsePage() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherSmoothScroll />
      <HhhusherHeader {...headerSample} />
      <HhhusherPageTitle {...termsTitleSample} />
      <HhhusherLegal {...termsSample} />
      <HhhusherFooter {...footerSample} />
    </div>
  );
}
