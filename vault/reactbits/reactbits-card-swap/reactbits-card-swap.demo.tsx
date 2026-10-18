// Rebuilt from React Bits' src/demo/Components/CardSwapDemo.jsx: the component with the props its preview uses.
import CardSwap from "./CardSwap"

export default function Demo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden">
      <CardSwap items={[{"title":"Golden hour","image":"https://picsum.photos/seed/foundry-day-sky/1600/900"},{"title":"Canola field","image":"https://picsum.photos/seed/foundry-day-landscape/1600/900"},{"title":"The pier","image":"https://picsum.photos/seed/foundry-day-portrait/900/1200"},{"title":"Pink drift","image":"https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=900&q=80&auto=format&fit=crop"}]} cardDistance={60} verticalDistance={70} depth={90} skewAmount={6} visibleCards={4} cardRadius={18} delay={4000} speed={1} bounce={0.35} parallax={0.5} hoverSpread={0.12} dim={0.5} autoplay={true} pauseOnHover={true} draggable={true} theme={"light"} />
    </div>
  )
}
