// Rebuilt from React Bits' src/demo/Animations/PixelTransitionDemo.jsx: the component with the props its preview uses.
import PixelTransition from "./PixelTransition"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <PixelTransition firstContent={<img src="https://picsum.photos/seed/foundry-day-portrait/900/1200" alt="" draggable={false} className="block h-full w-full object-cover" />} secondContent={<img src="https://picsum.photos/seed/foundry-night-portrait/900/1200" alt="" draggable={false} className="block h-full w-full object-cover" />} pixelColor={"#120f17"} mosaic={0} gridSize={10} pixelShape={"square"} gap={0} pattern={"random"} pixelAnimation={"pop"} randomness={0.3} animationStepDuration={0.4} fps={0} trigger={"hover"} once={false} aspectRatio="125%" style={{ width: 300 }} />
    </div>
  )
}
