import { MessageScrollerProvider } from "./message-scroller"

export default function Demo() {
  return (
    <div className="flex min-h-48 items-center justify-center p-6">
      <MessageScrollerProvider>Sample content</MessageScrollerProvider>
    </div>
  )
}
