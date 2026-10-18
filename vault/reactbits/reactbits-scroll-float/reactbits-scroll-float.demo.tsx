// Rebuilt from React Bits' src/demo/TextAnimations/ScrollFloatDemo.jsx: the component with the props its preview uses.
import ScrollFloat from "./ScrollFloat"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <ScrollFloat effect={"float"} splitBy={"chars"} direction={"up"} order={"start"} ease={"back.inOut(2)"} animationDuration={1} stagger={0.03} smoothing={0} distance={120} stretch={2.3} fromColor={"currentColor"}>
      {"React Bits"}
      </ScrollFloat>
    </div>
  )
}
