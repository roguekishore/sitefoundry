// Gallery only.
import { MymindPlayLink } from "./mymind-play-link";

export default function Demo() {
  return (
    <div className="flex flex-col items-center gap-6 bg-background p-10">
      <MymindPlayLink href="#">Watch a room fill itself</MymindPlayLink>
      <MymindPlayLink href="#" icon="arrow">Read more stories</MymindPlayLink>
      <div className="bg-primary p-6">
        <MymindPlayLink href="#" inverse>See it find things</MymindPlayLink>
      </div>
    </div>
  );
}
