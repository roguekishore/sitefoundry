import { Sparkles } from "lucide-react";
import { ReflectBadge } from "./reflect-badge";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <ReflectBadge href="#" icon={<Sparkles aria-hidden strokeWidth={1.5} />}>
        Say hello to Nocturne 2
      </ReflectBadge>
      <ReflectBadge>Ask your notebook</ReflectBadge>
    </div>
  );
}
