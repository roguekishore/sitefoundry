import { HalodentalVagueFlashMark } from "./halodental-vague-flash-mark";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-8 bg-background p-8 text-foreground">
      <HalodentalVagueFlashMark name="Sola" href="#" />
      <div className="dark rounded-lg bg-background p-6 text-foreground">
        <HalodentalVagueFlashMark name="Sola" href="#" />
      </div>
    </div>
  );
}
