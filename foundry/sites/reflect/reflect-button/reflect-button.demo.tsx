import { ArrowRight } from "lucide-react";
import { ReflectButton } from "./reflect-button";

export default function Demo() {
  return (
    <div className="flex flex-wrap items-center gap-3 bg-background p-8">
      <ReflectButton href="#">Get it for Mac</ReflectButton>
      <ReflectButton href="#" variant="secondary">
        Read the field guide <ArrowRight aria-hidden />
      </ReflectButton>
      <div className="w-72">
        <ReflectButton href="#" block>
          Get it for Mac
        </ReflectButton>
      </div>
    </div>
  );
}
