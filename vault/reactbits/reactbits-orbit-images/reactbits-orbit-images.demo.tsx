// Rebuilt from React Bits' src/demo/Animations/OrbitImagesDemo.jsx: the component with the props its preview uses.
import OrbitImages from "./OrbitImages"

export default function Demo() {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center overflow-hidden">
      <OrbitImages images={["https://picsum.photos/300/300?grayscale&random=1", "https://picsum.photos/300/300?grayscale&random=2", "https://picsum.photos/300/300?grayscale&random=3", "https://picsum.photos/300/300?grayscale&random=4", "https://picsum.photos/300/300?grayscale&random=5", "https://picsum.photos/300/300?grayscale&random=6"]} width="100%" height="100%" shape={"ellipse"} radiusX={340} radiusY={80} radius={160} rotation={-8} duration={30} itemSize={90} depth={0.6} itemRadius={14} shadow={0.3} hoverScale={1.08} hoverSpeed={0.3} pathDash={0} direction={"normal"} easing={"linear"} fill={true} showPath={true} alignToPath={false} draggable={true} clickToFront={true} paused={false} intro={true} />
    </div>
  )
}
