import type { AggregatedMaterial } from '../../types';
import { formatCurrency, formatNumber } from '../../lib/formatters';

interface MaterialsListViewProps {
  materials: AggregatedMaterial[];
}

export function MaterialsListView({ materials }: MaterialsListViewProps) {
  const totalCost = materials.reduce((sum, m) => sum + m.totalCost, 0);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-gray-700">Procurement Material List</h2>
          <span className="text-sm font-semibold text-gray-900">{formatCurrency(totalCost)} total</span>
        </div>

        {materials.length === 0 ? (
          <div className="p-12 text-center text-gray-400">
            <p className="text-lg mb-2">No materials to display</p>
            <p className="text-sm">Accept estimate items to generate the material list</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="py-2 px-3 text-xs font-medium text-gray-500">Material</th>
                  <th className="py-2 px-3 text-xs font-medium text-gray-500">Supplier</th>
                  <th className="py-2 px-3 text-xs font-medium text-gray-500 text-right">Quantity</th>
                  <th className="py-2 px-3 text-xs font-medium text-gray-500">Unit</th>
                  <th className="py-2 px-3 text-xs font-medium text-gray-500 text-right">Unit Price</th>
                  <th className="py-2 px-3 text-xs font-medium text-gray-500 text-right">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                {materials.map(mat => (
                  <tr key={mat.costItemId} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-2 px-3 text-sm text-gray-900">{mat.name}</td>
                    <td className="py-2 px-3 text-sm text-gray-500">{mat.supplier}</td>
                    <td className="py-2 px-3 text-sm text-right tabular-nums">{formatNumber(mat.totalQuantity, 2)}</td>
                    <td className="py-2 px-3 text-sm text-gray-500">{mat.unit}</td>
                    <td className="py-2 px-3 text-sm text-right tabular-nums">{formatCurrency(mat.unitPrice)}</td>
                    <td className="py-2 px-3 text-sm text-right tabular-nums font-medium">{formatCurrency(mat.totalCost)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-gray-200 bg-gray-50">
                  <td colSpan={5} className="py-2 px-3 text-sm font-semibold text-gray-700 text-right">Total</td>
                  <td className="py-2 px-3 text-sm font-semibold text-right tabular-nums">{formatCurrency(totalCost)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
