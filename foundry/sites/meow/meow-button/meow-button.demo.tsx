import { Sparkle } from "lucide-react";
import { MeowButton } from "./meow-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <MeowButton size="sm" arrow href="#">Open account</MeowButton>
        <MeowButton variant="invert" icon={<Sparkle />} href="#">Set up with your agent</MeowButton>
        <MeowButton variant="outline" arrow href="#">How it works</MeowButton>
        <MeowButton variant="ghost" size="sm" href="#">Log in</MeowButton>
        <MeowButton variant="link" arrow href="#">Read more</MeowButton>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <MeowButton variant="accent" size="lg">Open account</MeowButton>
        <MeowButton size="lg">Open account</MeowButton>
      </div>
    </div>
  );
}
