// Rebuilt from React Bits' src/demo/Animations/StarBorderDemo.jsx: the component with the props its preview uses.
import StarBorder from "./StarBorder"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight02Icon } from "@hugeicons/core-free-icons"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <StarBorder duration={4} direction={"clockwise"} stars={1} trailLength={0.3} thickness={1} radius={12} glow={0.6} sparkle={false} hover={"lap"} clickPulse={true} theme={"light"} backgroundColor="var(--bg-elevated)" borderColor="var(--border-primary)" style={{ height: 48, padding: "0 22px", fontSize: 15 }}>
      {"Get started"}
      <HugeiconsIcon icon={ArrowRight02Icon} size={17} strokeWidth={1.8} />
      </StarBorder>
    </div>
  )
}
