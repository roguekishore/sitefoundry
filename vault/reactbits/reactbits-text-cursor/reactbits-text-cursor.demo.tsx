// Rebuilt from React Bits' src/demo/TextAnimations/TextCursorDemo.jsx: the component with the props its preview uses.
import TextCursor from "./TextCursor"

export default function Demo() {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden">
      <TextCursor text={"Hello"} mode={"stamp"} fontSize={28} spacing={88} maxPoints={7} shrink={0.5} fade={0.6} smoothing={0.3} exitDuration={0.5} removalInterval={30} followMouseDirection={true} keepUpright={true} randomFloat={true} popIn={true} hideCursor={false} color={"currentColor"} />
    </div>
  )
}
