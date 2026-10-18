import { Button } from "@foundry/shadcn-button"
import { Textarea } from "@foundry/shadcn-textarea"

export default function TextareaWithButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
