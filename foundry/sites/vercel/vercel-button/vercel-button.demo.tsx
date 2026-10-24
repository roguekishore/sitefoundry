import { VercelButton } from "./vercel-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-6 bg-background p-8">
      <div className="flex flex-wrap items-center gap-3">
        <VercelButton href="#">Start building</VercelButton>
        <VercelButton href="#" variant="secondary">
          Book a call
        </VercelButton>
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <VercelButton href="#" variant="secondary" shape="box">
          Book a demo
        </VercelButton>
        <VercelButton href="#" variant="secondary" shape="box">
          Sign in
        </VercelButton>
        <VercelButton href="#" shape="box">
          Get started
        </VercelButton>
      </div>
    </div>
  );
}
