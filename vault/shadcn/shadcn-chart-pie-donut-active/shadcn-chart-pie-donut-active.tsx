// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieDonutActive as Main } from "./chart-pie-donut-active"

export interface ShadcnChartPieDonutActiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieDonutActive({ className }: ShadcnChartPieDonutActiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieDonutActive
