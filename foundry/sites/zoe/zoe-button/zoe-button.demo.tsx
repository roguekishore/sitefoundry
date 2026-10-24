import { UserRound } from "lucide-react";
import { ZoeButton } from "./zoe-button";

export default function Demo() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="flex flex-col items-start gap-4 bg-background p-8">
        <ZoeButton href="#">Shop now</ZoeButton>
        <ZoeButton href="#" variant="ink">
          Find out more
        </ZoeButton>
        <ZoeButton variant="outline" size="sm" icon={<UserRound aria-hidden className="size-3.5" />}>
          Sign in
        </ZoeButton>
      </div>
      <div className="flex flex-col items-start gap-4 bg-secondary p-8">
        <ZoeButton variant="light" size="sm">
          Sign up
        </ZoeButton>
        <ZoeButton href="#">Start now</ZoeButton>
      </div>
    </div>
  );
}
