import { Button } from "@foundry/shadcn-button"
import { Spinner } from "@foundry/shadcn-spinner"

export default function ButtonLoading() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  )
}
