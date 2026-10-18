// Rebuilt from React Bits' src/demo/Components/StackDemo.jsx: the component with the props its preview uses.
import Stack from "./Stack"

export default function Demo() {
  return (
    <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden">
      <Stack cards={[<img key={"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format"} alt={"Card 1"} draggable={false} />, <img key={"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format"} alt={"Card 2"} draggable={false} />, <img key={"https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format"} alt={"Card 3"} draggable={false} />, <img key={"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format"} alt={"Card 4"} draggable={false} />, <img key={"https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1782977389500-dd7adad33ebe?q=80&w=500&auto=format"} alt={"Card 5"} draggable={false} />, <img key={"https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=500&auto=format"} src={"https://images.unsplash.com/photo-1781242629922-6f39cc3671cd?q=80&w=500&auto=format"} alt={"Card 6"} draggable={false} />]} layout={"fan"} visible={4} spread={0.5} depth={0.5} radius={16} frame={0} frameColor={"#ffffff"} shadow={true} tilt={30} threshold={90} speed={1} sendToBackOnClick={false} autoplay={false} autoplayDelay={3000} pauseOnHover={false} />
    </div>
  )
}
