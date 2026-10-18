// foundry wrapper around the upstream block, so it can be imported and sized as one component.
import { ChartPieInteractive as Main } from "./chart-pie-interactive"

export interface ShadcnChartPieInteractiveProps {
  /** classes for a wrapper around the block, e.g. to size or space it */
  className?: string
}

export function ShadcnChartPieInteractive({ className }: ShadcnChartPieInteractiveProps) {
  return (
    <div className={className}>
      <Main />
    </div>
  )
}

export default ShadcnChartPieInteractive
