import { KononenkogroupStatement, type KononenkogroupStatementProps } from "./kononenkogroup-statement";

export const statementSample: KononenkogroupStatementProps = {
  heading: ["Measured", "Light & Structure"],
  notes: [
    "Climate planning, low-carbon materials, daylight studies, passive ventilation, whole-life costing",
    "Massing, elevations and floor plans, design development, construction drawings, renderings",
  ],
};

export default function Demo() {
  return (
    <div className="bg-background text-foreground">
      <KononenkogroupStatement {...statementSample} />
    </div>
  );
}
