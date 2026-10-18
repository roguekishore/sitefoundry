// Rebuilt from React Bits' src/demo/Animations/PixelTrailDemo.jsx: the component with the props its preview uses.
import PixelTrail from "./PixelTrail"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <PixelTrail gridSize={50} trailSize={0.1} maxAge={500} interpolate={5} color={"#A855F7"} shape={"square"} gap={0.08} decay={"fade"} flow={0} gravity={0} sparkle={0} shine={0.6} glow={0.4} clickBurst={false} trailColor={"#A855F7"} gooeyFilter={{ strength: 2 }} />
    </div>
  )
}
