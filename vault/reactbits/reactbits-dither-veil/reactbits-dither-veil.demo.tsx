// Rebuilt from React Bits' src/demo/Animations/DitherVeilDemo.jsx: the component with the props its preview uses.
import DitherVeil from "./DitherVeil"

export default function Demo() {
  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
      <DitherVeil fit={"contain"} inkColor={"#ffffff"} paperColor={"#18181b"} rimColor={"#7c3aed"} pattern={"floyd"} palette={"duotone"} pixelSize={2} levels={2} contrast={1.15} brightness={0} revealRadius={200} softness={0.6} linger={1} rim={0} reverse={false} wander={false} clickBurst={true} />
    </div>
  )
}
