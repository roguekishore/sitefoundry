// Rebuilt from React Bits' src/demo/Animations/PixelSwapDemo.jsx: the component with the props its preview uses.
import PixelSwap from "./PixelSwap"

export default function Demo() {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden">
      <div className="w-full max-w-[560px] px-6">
      <PixelSwap firstContent={<img src="https://picsum.photos/seed/foundry-day-sky/1600/900" alt="" draggable={false} className="block h-full w-full object-cover" />} secondContent={<img src="https://picsum.photos/seed/foundry-night-sky/1600/900" alt="" draggable={false} className="block h-full w-full object-cover" />} style={{ borderRadius: 18, cursor: "default" }} pattern={"pointer"} pixelSize={48} gap={0} pixelRadius={0} pixelScale={0} pixelSpin={0} duration={400} pixelDuration={350} randomness={0.2} bounce={0.3} trigger={"hover"} intro={true} />
      </div>
    </div>
  )
}
