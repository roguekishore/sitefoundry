import { ZettaJouleButton } from "./zetta-joule-button";

export default function Demo() {
  return (
    <div className="grid gap-6 p-8">
      <div className="bg-background p-6 text-foreground">
        <ZettaJouleButton label="Explore the reactor" />
      </div>
      <div className="dark bg-background p-6 text-foreground">
        <ZettaJouleButton label="Contact our team" />
      </div>
      <div className="bg-linear-to-b from-glow to-chart-5 p-6">
        <ZettaJouleButton label="Get in touch" variant="solid" />
      </div>
    </div>
  );
}
