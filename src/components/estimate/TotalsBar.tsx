import type { GrandTotals } from '../../types';
import { formatCurrency, formatNumber } from '../../lib/formatters';

interface TotalsBarProps {
  totals: GrandTotals;
}

export function TotalsBar({ totals }: TotalsBarProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-700 mb-3">Grand Totals (Accepted Items Only)</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        <div>
          <p className="text-xs text-gray-500">Materials</p>
          <p className="text-lg font-semibold tabular-nums">{formatCurrency(totals.materialsCost)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Labour</p>
          <p className="text-lg font-semibold tabular-nums">{formatCurrency(totals.labourCost)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Total Sell Price</p>
          <p className="text-lg font-semibold text-primary-700 tabular-nums">{formatCurrency(totals.sellPrice)}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Labour Hours</p>
          <p className="text-lg font-semibold tabular-nums">{formatNumber(totals.labourHours, 1)} hrs</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Estimated Duration</p>
          <p className="text-lg font-semibold tabular-nums">{totals.estimatedDays} days</p>
        </div>
      </div>
    </div>
  );
}
