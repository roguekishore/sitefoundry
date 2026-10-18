import { Button } from "./sample-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-6">
      <Button href="#">Book a visit</Button>
      <Button href="#" variant="secondary">See prices</Button>
      <Button variant="ghost">Call us</Button>
      <Button href="#" size="lg">Get started</Button>
    </div>
  );
}
