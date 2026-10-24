import { ReflectStarfield } from "./reflect-starfield";

export default function Demo() {
  return (
    <div className="relative h-96 bg-background">
      <ReflectStarfield size={900} count={120} />
    </div>
  );
}
