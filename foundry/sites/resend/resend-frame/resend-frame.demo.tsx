import { ResendFrame } from "./resend-frame";

export default function Demo() {
  return (
    <div className="space-y-16 bg-background py-16">
      <ResendFrame>
        <p className="py-24 text-center text-muted-foreground">Content inside the frame</p>
      </ResendFrame>
      <ResendFrame glow="end">
        <p className="py-24 text-center text-muted-foreground">Light towards the end</p>
      </ResendFrame>
      <ResendFrame edge="line">
        <p className="py-24 text-center text-muted-foreground">A straight hairline</p>
      </ResendFrame>
    </div>
  );
}
