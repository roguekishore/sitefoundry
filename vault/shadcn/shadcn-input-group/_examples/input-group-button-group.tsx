import { Link2Icon } from "lucide-react"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@foundry/shadcn-button-group"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@foundry/shadcn-input-group"
import { Label } from "@foundry/shadcn-label"

export default function InputGroupButtonGroup() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url" />
          <InputGroupAddon align="inline-end">
            <Link2Icon />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
