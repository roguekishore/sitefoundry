// The terms page (recreating hhhusher.com/terms-of-use), built from this site's blocks: a dark
// title band under the fixed header, a cream reading column, and the curtain footer.
import { HhhusherV2Footer } from "@foundry/hhhusher-v2-footer";
import { HhhusherV2Header } from "@foundry/hhhusher-v2-header";
import { HhhusherV2Legal } from "@foundry/hhhusher-v2-legal";
import { HhhusherV2PageTitle } from "@foundry/hhhusher-v2-page-title";
import { HhhusherV2SmoothScroll } from "@foundry/hhhusher-v2-smooth-scroll";
import { footerSample } from "../hhhusher-v2-footer/hhhusher-v2-footer.demo";
import { headerSample } from "../hhhusher-v2-header/hhhusher-v2-header.demo";
import { termsSample } from "../hhhusher-v2-legal/hhhusher-v2-legal.demo";

export default function TermsOfUsePage() {
  return (
    <div className="bg-background text-foreground">
      <HhhusherV2SmoothScroll />
      <HhhusherV2Header {...headerSample} />
      <main className="relative z-10">
        <HhhusherV2PageTitle title="Terms of use" />
        <HhhusherV2Legal {...termsSample} />
      </main>
      <HhhusherV2Footer {...footerSample} reveal />
    </div>
  );
}
