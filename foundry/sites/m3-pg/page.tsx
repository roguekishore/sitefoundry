// The Steinach Architekten landing page (recreating m3-pg.de), built only from this site's
// blocks with their demo content. Light is the faithful mode. The sticky band is wrapped with
// the sections after it, like the original's <main>, so it stays pinned while they slide over.
import { M3PgBand } from "@foundry/m3-pg-band";
import { M3PgFooter } from "@foundry/m3-pg-footer";
import { M3PgHeader } from "@foundry/m3-pg-header";
import { M3PgHero } from "@foundry/m3-pg-hero";
import { M3PgPrinciples } from "@foundry/m3-pg-principles";
import { M3PgProjects } from "@foundry/m3-pg-projects";
import { M3PgStatement } from "@foundry/m3-pg-statement";
import { bandSample } from "./m3-pg-band/m3-pg-band.demo";
import { footerSample } from "./m3-pg-footer/m3-pg-footer.demo";
import { headerSample } from "./m3-pg-header/m3-pg-header.demo";
import { heroSample } from "./m3-pg-hero/m3-pg-hero.demo";
import { principlesSample } from "./m3-pg-principles/m3-pg-principles.demo";
import { projectsSample } from "./m3-pg-projects/m3-pg-projects.demo";
import { statementSample } from "./m3-pg-statement/m3-pg-statement.demo";

export default function Page() {
  return (
    <div className="bg-background text-foreground">
      <M3PgHeader {...headerSample} />
      <main>
        <M3PgHero {...heroSample} />
        <M3PgPrinciples {...principlesSample} />
        <div>
          <M3PgBand {...bandSample} />
          <M3PgProjects {...projectsSample} />
          <M3PgStatement {...statementSample} />
        </div>
      </main>
      <M3PgFooter {...footerSample} />
    </div>
  );
}
