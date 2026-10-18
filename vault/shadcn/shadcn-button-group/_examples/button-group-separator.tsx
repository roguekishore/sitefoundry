import { Button } from "@foundry/shadcn-button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@foundry/shadcn-button-group"

export default function ButtonGroupSeparatorDemo() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        Copy
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        Paste
      </Button>
    </ButtonGroup>
  )
}
