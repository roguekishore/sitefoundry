import { AndurilScramble } from "./anduril-scramble";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8 bg-background p-10 text-foreground">
      <AndurilScramble text="Decoded on load, then every time it scrolls into view" triggers={["load", "view"]} className="text-2xl" />
      <div data-scramble-host className="w-fit cursor-pointer rounded-lg bg-muted px-6 py-5">
        <AndurilScramble text="Hover this panel to decode again" triggers={["hover"]} className="text-lg" />
      </div>
    </div>
  );
}
