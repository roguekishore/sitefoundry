// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieLabel as Main } from "./chart-pie-label"

export interface ShadcnChartPieLabelProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieLabel({ className }: ShadcnChartPieLabelProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieLabel
