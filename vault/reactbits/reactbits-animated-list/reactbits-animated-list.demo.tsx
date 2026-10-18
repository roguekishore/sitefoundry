// Rebuilt from React Bits' src/demo/Components/AnimatedListDemo.jsx: the component with the props its preview uses.
import AnimatedList from "./AnimatedList"

export default function Demo() {
  return (
    <div className="relative flex h-[540px] w-full items-center justify-center overflow-hidden">
      <AnimatedList animation={"pop"} width={420} maxHeight={440} radius={14} gap={8} stagger={0.05} fadeSize={56} frame={true} showGradients={true} displayScrollbar={true} selectOnHover={true} enableArrowNavigation={true} loop={false} animateOnce={false} initialSelectedIndex={-1} theme={"light"} />
    </div>
  )
}
