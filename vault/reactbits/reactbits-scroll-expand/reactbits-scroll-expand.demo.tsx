// Rebuilt from React Bits' src/demo/Animations/ScrollExpandDemo.jsx: the component with the props its preview uses.
import ScrollExpand from "./ScrollExpand"

export default function Demo() {
  return (
    <div className="relative flex h-[520px] w-full items-center justify-center overflow-hidden">
      <ScrollExpand src={"https://picsum.photos/seed/scroll-expand/1600/1000"} alt="Mountain range at sunrise" title={"Built to scale"} scrollHint={"Scroll inside the frame"} startWidth={42} startHeight={58} startRadius={24} endRadius={0} mediaZoom={1.35} scrollDistance={1.2} holdDistance={0.35} smoothing={0.1} overlayScrim={0.45} enabled={true}>
        <span className="px-6 py-4 text-2xl font-semibold">React Bits</span>
      </ScrollExpand>
    </div>
  )
}
