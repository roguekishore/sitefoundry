import { HulyCard } from "./huly-card";

const art = (
  <div className="h-full w-full bg-[radial-gradient(60%_70%_at_50%_0%,color-mix(in_oklab,var(--highlight)_70%,transparent),transparent_70%)]" />
);
const art2 = (
  <div className="h-full w-full bg-[radial-gradient(70%_60%_at_80%_100%,color-mix(in_oklab,var(--glow)_80%,transparent),transparent_70%)]" />
);

export default function Demo() {
  return (
    <div className="grid gap-4 bg-background p-gutter sm:grid-cols-2">
      <HulyCard className="h-72" title="Quick actions." text="Every command one shortcut away, without leaving the keyboard." visual={art} />
      <HulyCard className="h-72" captionAt="top" title="Live rooms." text="Drop in on a teammate the way you would at their desk." visual={art2} />
    </div>
  );
}
