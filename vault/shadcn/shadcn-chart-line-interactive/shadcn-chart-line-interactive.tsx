// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartLineInteractive as Main } from "./chart-line-interactive"

export interface ShadcnChartLineInteractiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartLineInteractive({ className }: ShadcnChartLineInteractiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartLineInteractive
