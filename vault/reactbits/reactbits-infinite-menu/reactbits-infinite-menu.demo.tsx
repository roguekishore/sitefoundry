// Rebuilt from React Bits' src/demo/Components/InfiniteMenuDemo.jsx: the component with the props its preview uses.
import InfiniteMenu from "./InfiniteMenu"

export default function Demo() {
  return (
    <div className="relative flex h-[560px] w-full items-center justify-center overflow-hidden">
      <InfiniteMenu count={160} tileSize={0.63} roundness={0.2} zoom={1.65} pullBack={1} stretch={0.6} inertia={0.6} autoplay={3} grayscale={true} dim={0.5} accentColor={"#120f17"} intro={true} showInfo={true} items={[{ image: "https://picsum.photos/seed/foundry-day-portrait/900/1200", link: "https://reactbits.dev", title: "The Pier", description: "Concrete and open water under a bright morning sky." }, { image: "https://picsum.photos/seed/foundry-night-landscape/1600/900", link: "https://reactbits.dev", title: "Moonlit Field", description: "A single pole in a field of rapeseed under the full moon." }, { image: "https://images.unsplash.com/photo-1778849097774-0ab2a873a858?w=600&q=80&auto=format&fit=crop", link: "https://reactbits.dev", title: "Afterglow", description: "Clouds catching the last light of the day." }, { image: "https://picsum.photos/seed/foundry-day-landscape/1600/900", link: "https://reactbits.dev", title: "Rapeseed", description: "The same field at noon, yellow all the way to the horizon." }, { image: "https://picsum.photos/seed/foundry-night-portrait/900/1200", link: "https://reactbits.dev", title: "Blue Hour", description: "The pier lit from below as the sky turns pink." }]} theme={"light"} />
    </div>
  )
}
