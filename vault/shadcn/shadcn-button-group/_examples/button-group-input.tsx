import { SearchIcon } from "lucide-react"

import { Button } from "@foundry/shadcn-button"
import { ButtonGroup } from "@foundry/shadcn-button-group"
import { Input } from "@foundry/shadcn-input"

export default function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}
