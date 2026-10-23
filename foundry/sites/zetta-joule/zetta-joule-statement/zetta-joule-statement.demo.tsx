import { ZettaJouleButton } from "@foundry/zetta-joule-button";
import { ZettaJouleStatement } from "./zetta-joule-statement";

export default function Demo() {
  return (
    <div className="grid gap-16 px-gutter py-16 lg:px-10">
      <div className="bg-background text-foreground">
        <ZettaJouleStatement
          label="Why the name"
          statement="Forecasts for the middle of the century put global energy demand at one billion times one trillion joules a year, and most of it is heat."
        >
          <ZettaJouleButton label="Read the story" />
        </ZettaJouleStatement>
      </div>
      <div className="bg-secondary py-10">
        <ZettaJouleStatement
          tone="accent"
          label={"Smarter plant,\nsimpler operations"}
          statement="Digital twins rehearse every shift before it happens, so crews spend their time on the plant and not on paperwork."
        />
      </div>
    </div>
  );
}
