import { HhhusherButton } from "./hhhusher-button";

export default function Demo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap items-center gap-6 bg-background p-10 text-foreground">
        <HhhusherButton href="#">Order</HhhusherButton>
        <HhhusherButton href="#" variant="link">
          How it works
        </HhhusherButton>
      </div>
      <div className="dark flex flex-wrap items-center gap-3 bg-background p-10 text-foreground">
        <HhhusherButton href="#" size="sm">
          Order
        </HhhusherButton>
        <HhhusherButton href="#" variant="glass">
          Hear the difference
        </HhhusherButton>
        <HhhusherButton href="#" variant="link" className="text-primary">
          Read more
        </HhhusherButton>
        <HhhusherButton size="lg">Go to checkout</HhhusherButton>
      </div>
    </div>
  );
}
