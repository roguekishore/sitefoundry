// Rebuilt from React Bits' src/demo/Micro/HoldButtonDemo.jsx: the component with the props its preview uses.
import HoldButton from "./HoldButton"
import { Tick02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <HoldButton doneIcon={<HugeiconsIcon icon={Tick02Icon} size={18} strokeWidth={2.5} />} backgroundColor={"#f6f6f6"} fillColor={"#5227FF"} textColor={"#333333"} fillTextColor={"#ffffff"} size={"md"} radius={14} fillDirection={"right"} holdTime={2000} releaseTime={200} pressScale={0.97} wave={true} waveAmplitude={6} glow={true} resetAfter={1200} disabled={false}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </HoldButton>
    </div>
  )
}
