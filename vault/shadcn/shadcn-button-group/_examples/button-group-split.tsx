import { IconPlus } from "@tabler/icons-react"

import { Button } from "@foundry/shadcn-button"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@foundry/shadcn-button-group"

export default function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <IconPlus />
      </Button>
    </ButtonGroup>
  )
}
