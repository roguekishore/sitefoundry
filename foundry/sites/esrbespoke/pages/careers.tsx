// The careers page (recreating esrbespoke.au/careers), on charcoal: an opening paragraph that
// types itself on, the open roles and a photo band, built from this site's blocks with their
// demo content.
import { EsrbespokeFooter } from "@foundry/esrbespoke-footer";
import { EsrbespokeHeader } from "@foundry/esrbespoke-header";
import { EsrbespokeSmoothScroll } from "@foundry/esrbespoke-smooth-scroll";
import { footerSample } from "../esrbespoke-footer/esrbespoke-footer.demo";
import { headerSampleFor } from "../esrbespoke-header/esrbespoke-header.demo";
import { EsrbespokeMediaBand } from "@foundry/esrbespoke-media-band";
import { EsrbespokeStatement } from "@foundry/esrbespoke-statement";
import { EsrbespokeTable } from "@foundry/esrbespoke-table";
import { careersBandSample } from "../esrbespoke-media-band/esrbespoke-media-band.demo";
import { careersStatementSample } from "../esrbespoke-statement/esrbespoke-statement.demo";
import { positionsSample } from "../esrbespoke-table/esrbespoke-table.demo";

export default function CareersPage() {
  return (
    <div className="relative bg-background text-foreground">
      <EsrbespokeSmoothScroll />
      <EsrbespokeHeader {...headerSampleFor("Careers", "charcoal")} />
      <main className="relative z-10 bg-background">
        <EsrbespokeStatement {...careersStatementSample} />
        <EsrbespokeTable {...positionsSample} />
        <EsrbespokeMediaBand {...careersBandSample} className="dark" />
      </main>
      <EsrbespokeFooter {...footerSample} reveal tone="charcoal" />
    </div>
  );
}
