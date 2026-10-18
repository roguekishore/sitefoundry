// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartAreaInteractive as Main } from "./chart-area-interactive"

export interface ShadcnChartAreaInteractiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartAreaInteractive({ className }: ShadcnChartAreaInteractiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartAreaInteractive
