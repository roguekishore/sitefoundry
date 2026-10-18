// Rebuilt from React Bits' src/demo/TextAnimations/TechTextDemo.jsx: the component with the props its preview uses.
import TechText from "./TechText"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <TechText text={"React Bits"} fontFamily={""} fontWeight={600} letterSpacing={-0.05} accentColor={"currentColor"} reveal={"letter"} reach={200} softness={0.7} lineStyle={"dashed"} dashLength={4} dashGap={2} strokeWidth={1.5} specks={15} speed={1} bounce={0.4} selection={true} labels={true} intro={"none"} introDuration={2} guides={false} color={"currentColor"} fontSize={150} align={"center"} draggable={true} clickKick={true} sweep={true} />
    </div>
  )
}
