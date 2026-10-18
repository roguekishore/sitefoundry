// Rebuilt from React Bits' src/demo/TextAnimations/CurvedLoopDemo.jsx: the component with the props its preview uses.
import CurvedLoop from "./CurvedLoop"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CurvedLoop marqueeText={"Be ✦ Creative ✦ With ✦ React ✦ Bits ✦"} shape={"arc"} separator={""} direction={"left"} speed={2} scrollBoost={0} curveAmount={400} fontSize={96} fontWeight={700} letterSpacing={0} edgeFade={0} outline={false} interactive={true} pauseOnHover={false} color={"currentColor"} />
    </div>
  )
}
