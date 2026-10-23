import { LevelsButton } from "./levels-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-4">
        <LevelsButton href="#" size="lg">
          Find your starting point
        </LevelsButton>
        <LevelsButton href="#" arrow>
          Build my plan
        </LevelsButton>
        <LevelsButton size="sm">Join now</LevelsButton>
      </div>
      {/* inside a .dark band the same button turns white */}
      <div className="dark flex flex-wrap items-center gap-4 rounded-lg bg-background p-6">
        <LevelsButton href="#" size="lg">
          Build my plan
        </LevelsButton>
        <LevelsButton href="#" size="sm">
          Join now
        </LevelsButton>
      </div>
    </div>
  );
}
