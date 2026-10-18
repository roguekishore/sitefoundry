// Rebuilt from React Bits' src/demo/TextAnimations/EchoTextDemo.jsx: the component with the props its preview uses.
import EchoText from "./EchoText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden">
      <EchoText text={"Motion Echo"} trail={"pointer"} clickBurst={true} echoes={12} lag={0.24} offset={36} direction={"right"} fade={0.72} blur={3} echoStyle={"solid"} echoScale={1} duration={900} ease={"ease-out"} mode={"both"} cursorRadius={320} fontSize={"clamp(3rem, 9vw, 7rem)"} fontWeight={800} tint={"#7dd3fc"} color={"currentColor"} />
    </div>
  )
}
