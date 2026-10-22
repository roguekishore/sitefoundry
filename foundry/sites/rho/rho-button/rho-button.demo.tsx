import { RhoButton } from "./rho-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <RhoButton href="#">Get started</RhoButton>
        <RhoButton href="#" variant="outline">Book a call</RhoButton>
        <RhoButton href="#" variant="inverse">Try the agent</RhoButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 rounded-lg bg-background p-6 text-foreground">
        <RhoButton href="#" size="lg">Get started</RhoButton>
        <RhoButton href="#" size="lg" variant="outline">Book a call</RhoButton>
        <RhoButton href="#" size="lg" variant="inverse">Try the agent</RhoButton>
        <RhoButton href="#" size="sm">Get started</RhoButton>
      </div>
    </div>
  );
}
