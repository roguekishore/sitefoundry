// Rebuilt from React Bits' src/demo/TextAnimations/FoldTextDemo.jsx: the component with the props its preview uses.
import FoldText from "./FoldText"

export default function Demo() {
  return (
    <div className="relative flex min-h-[430px] w-full items-center justify-center overflow-hidden">
      <FoldText text={"Design unfolds"} foldStyle={"paper"} trigger={"mount"} splitBy={"char"} hinge={"top"} staggerFrom={"start"} ease={"power3.out"} foldAngle={92} duration={0.65} stagger={0.045} loopDelay={1.4} hoverRefold={true} refoldRadius={140} refoldAngle={45} perspective={700} creaseShading={0.55} fontSize={80} fontWeight={800} color={"currentColor"} />
    </div>
  )
}
