import { LinearButton } from "./linear-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <LinearButton href="#" size="lg">Start building</LinearButton>
      <LinearButton href="#" variant="secondary" size="lg">Talk to us</LinearButton>
      <LinearButton href="#" size="sm">Sign up</LinearButton>
      <LinearButton href="#" variant="ghost" size="sm">Pricing</LinearButton>
    </div>
  );
}
