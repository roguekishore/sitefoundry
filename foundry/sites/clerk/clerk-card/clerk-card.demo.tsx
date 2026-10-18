import { KeyRound } from "lucide-react";
import { ClerkCard } from "./clerk-card";

function Glyph() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted text-muted-foreground ring-1 ring-border">
        <KeyRound className="size-6" strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function Demo() {
  return (
    <div className="space-y-px">
      <div className="grid gap-2 bg-background p-6 sm:grid-cols-2 md:auto-rows-[16.25rem]">
        <ClerkCard title="Passkeys" text="Let people sign in with the fingerprint or face they already use to unlock their phone." visual={<Glyph />} />
        <ClerkCard textFirst title="Recovery codes" text="Single-use backup codes, generated and stored for every account." visual={<Glyph />} />
      </div>
      <div className="dark grid gap-2 bg-background p-6 sm:grid-cols-2 md:auto-rows-[16.25rem]">
        <ClerkCard title="Passkeys" text="Let people sign in with the fingerprint or face they already use to unlock their phone." visual={<Glyph />} />
        <ClerkCard textFirst title="Recovery codes" text="Single-use backup codes, generated and stored for every account." visual={<Glyph />} />
      </div>
    </div>
  );
}
