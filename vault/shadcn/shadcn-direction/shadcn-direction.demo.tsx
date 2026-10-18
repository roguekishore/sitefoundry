import { DirectionProvider } from "./direction"

export default function Demo() {
  return (
    <div className="flex min-h-48 items-center justify-center p-6">
      <DirectionProvider>Sample content</DirectionProvider>
    </div>
  )
}
