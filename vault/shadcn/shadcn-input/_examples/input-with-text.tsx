import { Input } from "@foundry/shadcn-input"
import { Label } from "@foundry/shadcn-label"

export default function InputWithText() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="email-2">Email</Label>
      <Input type="email" id="email-2" placeholder="Email" />
      <p className="text-sm text-muted-foreground">Enter your email address.</p>
    </div>
  )
}
