// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartBarInteractive as Main } from "./chart-bar-interactive"

export interface ShadcnChartBarInteractiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartBarInteractive({ className }: ShadcnChartBarInteractiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartBarInteractive
