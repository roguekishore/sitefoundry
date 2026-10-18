// Rebuilt from React Bits' src/demo/TextAnimations/TextLoopDemo.jsx: the component with the props its preview uses.
import TextLoop from "./TextLoop"

export default function Demo() {
  return (
    <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden">
      <TextLoop text={"React ✦ Bits"} separator={"✦"} direction={"forward"} ribbonColor={"#5227FF"} shape={"wave"} speed={90} scrollBoost={0} draggable={false} curviness={90} tilt={0} cross={false} crossAngle={16} ribbon={true} ribbonWidth={86} edgeFade={0} fontSize={46} fontWeight={800} letterSpacing={2} uppercase={true} outline={false} outlineWidth={1.5} pauseOnHover={true} />
    </div>
  )
}
