// Rebuilt from React Bits' src/demo/TextAnimations/TextPressureDemo.jsx: the component with the props its preview uses.
import TextPressure from "./TextPressure"

export default function Demo() {
  return (
    <div className="relative flex min-h-[240px] w-full items-center justify-center overflow-hidden">
      <TextPressure text={"Hello!"} flex={true} width={true} weight={true} italic={true} alpha={false} stroke={false} scale={false} radius={0.5} smoothing={0.5} idle={"wave"} idleSpeed={1} clickRipple={true} strokeWidth={3} strokeColor={"#ff5a1f"} textColor={"currentColor"} pressureColor={""} minFontSize={36} />
    </div>
  )
}
