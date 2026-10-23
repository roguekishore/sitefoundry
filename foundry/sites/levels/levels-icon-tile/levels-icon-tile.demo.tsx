import { Activity, FlaskConical, Sparkles } from "lucide-react";
import { LevelsIconTile } from "./levels-icon-tile";

export default function Demo() {
  return (
    <div className="flex gap-4 bg-background p-8">
      <LevelsIconTile>
        <Sparkles />
      </LevelsIconTile>
      <LevelsIconTile>
        <Activity />
      </LevelsIconTile>
      <LevelsIconTile>
        <FlaskConical />
      </LevelsIconTile>
    </div>
  );
}
