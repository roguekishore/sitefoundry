// Rebuilt from React Bits' src/demo/Micro/WarmTooltipDemo.jsx: the component with the props its preview uses.
import WarmTooltip from "./WarmTooltip"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <WarmTooltip side={"top"} surfaceColor={"#18181b"} inkColor={"#ffffff"} size={"md"} radius={8} gap={8} arrow={true} popDuration={160} popScale={0.94} popBlur={4} showFuse={false}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </WarmTooltip>
    </div>
  )
}
