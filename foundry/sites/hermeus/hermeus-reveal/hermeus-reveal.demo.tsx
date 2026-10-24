// Gallery only: scroll the frame to see each panel fade and rise in.
import { HermeusReveal } from "./hermeus-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-gutter pt-[90svh] pb-[60svh] text-foreground">
      {[1, 2, 3].map((n) => (
        <HermeusReveal key={n} className="mb-8">
          <div className="h-48 bg-muted" />
        </HermeusReveal>
      ))}
    </div>
  );
}
