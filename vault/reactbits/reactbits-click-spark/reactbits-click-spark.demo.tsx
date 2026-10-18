// Rebuilt from React Bits' src/demo/Animations/ClickSparkDemo.jsx: the component with the props its preview uses.
import ClickSpark from "./ClickSpark"

export default function Demo() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center overflow-hidden">
      <ClickSpark shape={"line"} easing={"ease-out"} sparkCount={8} sparkSize={14} sparkWidth={2} sparkRadius={30} duration={500} randomness={0.2} gravity={0} spread={360} direction={0} glow={0} ring={false} layer={"back"}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ClickSpark>
    </div>
  )
}
