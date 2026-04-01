import type { CalculatedLineItem, SectionTotals, EstimateSection } from '../../types';
import { sectionLabels } from '../../data/rollups';
import { formatCurrency, formatNumber } from '../../lib/formatters';
import { LineItemRow } from './LineItemRow';

interface SectionGroupProps {
  section: EstimateSection;
  items: CalculatedLineItem[];
  totals: SectionTotals;
  onToggleAccepted: (id: string) => void;
  onRemove: (id: string) => void;
}

export function SectionGroup({ section, items, totals, onToggleAccepted, onRemove }: SectionGroupProps) {
  if (items.length === 0) return null;

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-4">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{sectionLabels[section]}</h3>
        <div className="flex gap-4 text-xs text-gray-500">
          <span>{totals.acceptedCount}/{totals.itemCount} accepted</span>
          <span>{formatNumber(totals.labourHours, 1)} hrs</span>
          <span className="font-semibold text-gray-900">{formatCurrency(totals.sellPrice)}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="py-2 px-2 w-8"></th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500">Code</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500">Description</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500 text-right">Qty</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500">Parameters</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500 text-right">Materials</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500 text-right">Labour</th>
              <th className="py-2 px-2 text-xs font-medium text-gray-500 text-right">Sell Price</th>
              <th className="py-2 px-2 w-8"></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <LineItemRow
                key={item.id}
                item={item}
                onToggleAccepted={() => onToggleAccepted(item.id)}
                onRemove={() => onRemove(item.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
