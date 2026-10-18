// Rebuilt from React Bits' src/demo/Components/BubbleMenuDemo.jsx: the component with the props its preview uses.
import BubbleMenu from "./BubbleMenu"

export default function Demo() {
  return (
    <div className="relative flex h-[720px] w-full items-center justify-center overflow-hidden">
      <BubbleMenu menuBg={"#ffffff"} menuContentColor={"#111111"} animationEase={"back.out(1.5)"} animationDuration={0.5} staggerDelay={0.12} />
    </div>
  )
}
