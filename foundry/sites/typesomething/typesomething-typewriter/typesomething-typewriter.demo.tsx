import { TypesomethingTypewriter } from "./typesomething-typewriter";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8 font-display text-4xl tracking-[-0.04em] text-foreground">
      <p>
        <span className="font-bold">Ask </span>
        <TypesomethingTypewriter words={["new page", "menu update", "fresh photos"]} className="text-foreground/55" cursorClassName="text-primary" />
      </p>
      <p className="font-bold">
        Paper
        <TypesomethingTypewriter words={["kite"]} reserve className="font-normal text-primary" cursorClassName="text-foreground" />
      </p>
    </div>
  );
}
