import type { CalculatedLineItem } from '../../types';
import { formatCurrency } from '../../lib/formatters';
import { cn } from '../../lib/cn';

interface LineItemRowProps {
  item: CalculatedLineItem;
  onToggleAccepted: () => void;
  onRemove: () => void;
}

export function LineItemRow({ item, onToggleAccepted, onRemove }: LineItemRowProps) {
  return (
    <tr className={cn('border-b border-gray-100 hover:bg-gray-50 transition-colors', !item.accepted && 'opacity-40')}>
      <td className="py-2 px-2">
        <input
          type="checkbox"
          checked={item.accepted}
          onChange={onToggleAccepted}
          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
      </td>
      <td className="py-2 px-2 text-xs font-mono text-gray-500">{item.taskCode}</td>
      <td className="py-2 px-2 text-sm text-gray-900">{item.description}</td>
      <td className="py-2 px-2 text-sm text-right tabular-nums">{item.quantity}</td>
      <td className="py-2 px-2">
        <div className="flex gap-1 flex-wrap">
          <span className="inline-block px-1.5 py-0.5 text-xs rounded bg-gray-100 text-gray-600">{item.params.difficulty}</span>
          <span className="inline-block px-1.5 py-0.5 text-xs rounded bg-gray-100 text-gray-600">{item.params.priceRange}</span>
          {item.params.thickness && <span className="inline-block px-1.5 py-0.5 text-xs rounded bg-blue-50 text-blue-700">{item.params.thickness}mm</span>}
          {item.params.height && <span className="inline-block px-1.5 py-0.5 text-xs rounded bg-blue-50 text-blue-700">{item.params.height}mm h</span>}
        </div>
      </td>
      <td className="py-2 px-2 text-sm text-right tabular-nums">{formatCurrency(item.materialsCost)}</td>
      <td className="py-2 px-2 text-sm text-right tabular-nums">{formatCurrency(item.labourCost)}</td>
      <td className="py-2 px-2 text-sm text-right tabular-nums font-medium">{formatCurrency(item.sellPrice)}</td>
      <td className="py-2 px-2">
        <button onClick={onRemove} className="text-gray-400 hover:text-danger-500 text-sm transition-colors">
          &times;
        </button>
      </td>
    </tr>
  );
}
