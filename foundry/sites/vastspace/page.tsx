// The whole Corvane landing page (a made-up company), built only from this site's blocks,
// with each block's demo content. Light is the faithful mode.
import { VastspaceFooter } from "@foundry/vastspace-footer";
import { VastspaceHeader } from "@foundry/vastspace-header";
import { VastspaceHero } from "@foundry/vastspace-hero";
import { VastspacePress } from "@foundry/vastspace-press";
import { VastspaceProgress } from "@foundry/vastspace-progress";
import { VastspaceStation } from "@foundry/vastspace-station";
import { VastspaceStatement } from "@foundry/vastspace-statement";
import { VastspaceUpdates } from "@foundry/vastspace-updates";
import { footerSample } from "./vastspace-footer/vastspace-footer.demo";
import { headerSample } from "./vastspace-header/vastspace-header.demo";
import { heroSample } from "./vastspace-hero/vastspace-hero.demo";
import { pressSample } from "./vastspace-press/vastspace-press.demo";
import { progressSample } from "./vastspace-progress/vastspace-progress.demo";
import { stationSample } from "./vastspace-station/vastspace-station.demo";
import { statementSample } from "./vastspace-statement/vastspace-statement.demo";
import { updatesSample } from "./vastspace-updates/vastspace-updates.demo";

export default function Page() {
  return (
    <div className="bg-background">
      <VastspaceHeader {...headerSample} />
      <main>
        <VastspaceHero {...heroSample} />
        <VastspaceStatement {...statementSample} />
        <VastspaceStation {...stationSample} />
        <VastspaceProgress {...progressSample} />
        <VastspaceUpdates {...updatesSample} />
        <VastspacePress {...pressSample} />
      </main>
      <VastspaceFooter {...footerSample} />
    </div>
  );
}
