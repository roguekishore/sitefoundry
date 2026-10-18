// Rebuilt from React Bits' src/demo/TextAnimations/StrokeTextDemo.jsx: the component with the props its preview uses.
import StrokeText from "./StrokeText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden">
      <StrokeText text={"Draw Attention"} strokeColor={"#A78BFA"} fillMode={"wipe"} wipeFrom={"left"} ease={"power2.out"} fontFamily={"inherit"} strokeStyle={"solid"} strokeWidth={1.4} dashLength={10} drawDuration={1.6} fillDelay={0.2} stagger={0.05} fontSize={128} fontWeight={800} letterSpacing={-4} reverse={false} hoverRedraw={true} marching={false} shadow={false} trigger={"mount"} fillColor={"currentColor"} />
    </div>
  )
}
