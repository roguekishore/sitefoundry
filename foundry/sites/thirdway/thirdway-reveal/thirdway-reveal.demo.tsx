import { ThirdwayReveal } from "./thirdway-reveal";

export default function Demo() {
  return (
    <div className="bg-background px-4 py-16 text-foreground">
      <div className="h-[60svh]" />
      <ThirdwayReveal className="text-2xl font-medium tracking-[-0.04em]">
        <p>Everything here rises 24px and fades in as it enters the window.</p>
      </ThirdwayReveal>
      <div className="h-[60svh]" />
    </div>
  );
}
