// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieLabelList as Main } from "./chart-pie-label-list"

export interface ShadcnChartPieLabelListProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieLabelList({ className }: ShadcnChartPieLabelListProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieLabelList
