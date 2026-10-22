import { AndurilLink } from "./anduril-link";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-10 bg-card p-10 text-card-foreground">
      <AndurilLink label="Every dispatch" href="#" />
      <AndurilLink label="Keep reading" href="#" />
      <AndurilLink label="Yardline OS" href="#" underline="hover" className="opacity-60 hover:opacity-100" />
    </div>
  );
}
