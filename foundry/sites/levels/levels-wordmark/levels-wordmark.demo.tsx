import { LevelsWordmark } from "./levels-wordmark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-10 bg-background p-8">
      <LevelsWordmark brand="Ballast" href="#" className="text-foreground" />
      <div className="dark rounded-lg bg-background p-6 text-foreground">
        <LevelsWordmark brand="Ballast" size="lg" />
      </div>
    </div>
  );
}
