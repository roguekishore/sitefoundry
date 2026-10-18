// Rebuilt from React Bits' src/demo/Components/FlowingMenuDemo.jsx: the component with the props its preview uses.
import FlowingMenu from "./FlowingMenu"

export default function Demo() {
  return (
    <div className="relative flex h-[600px] w-full items-center justify-center overflow-hidden">
      <FlowingMenu items={[{ link: "#", text: "Mojave", image: "https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=600&h=400&fit=crop&sat=-100&auto=format", meta: undefined }, { link: "#", text: "Sonoma", image: "https://images.unsplash.com/photo-1781499455083-6ccc3beb20cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format", meta: undefined }, { link: "#", text: "Monterey", image: "https://images.unsplash.com/photo-1776394254711-4a0d7345269a?q=80&w=600&h=400&fit=crop&sat=-100&auto=format", meta: undefined }, { link: "#", text: "Sequoia", image: "https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=600&h=400&fit=crop&sat=-100&auto=format", meta: undefined }]} speed={60} direction={"left"} followCursor={0.4} duration={0.5} stretch={0.6} magnet={0.25} bandInset={0} bandRadius={0} carryContent={false} dividers={true} dimInactive={false} align={"center"} showIndex={false} showArrow={false} imageShape={"pill"} intro={true} textColor={"#18181b"} bgColor={"#ffffff"} marqueeBgColor={"#18181b"} marqueeTextColor={"#ffffff"} borderColor={"rgba(24, 24, 27, 0.1)"} />
    </div>
  )
}
