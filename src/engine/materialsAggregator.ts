import type { LineItem, AggregatedMaterial, CostItem, TaskTemplate } from '../types';

export function aggregateMaterials(
  acceptedItems: LineItem[],
  templatesMap: Map<string, TaskTemplate>,
  costItemsMap: Map<string, CostItem>,
): AggregatedMaterial[] {
  const aggregation = new Map<string, { totalQuantity: number }>();

  for (const item of acceptedItems) {
    const template = templatesMap.get(item.taskCode);
    if (!template) continue;

    for (const mat of template.materials) {
      let usage = mat.usagePerUnit;
      if (mat.scalesWithThickness && item.params.thickness) {
        usage = usage * (item.params.thickness / 100);
      }

      const totalQty = usage * item.quantity;
      const existing = aggregation.get(mat.costItemId);
      if (existing) {
        existing.totalQuantity += totalQty;
      } else {
        aggregation.set(mat.costItemId, { totalQuantity: totalQty });
      }
    }
  }

  const result: AggregatedMaterial[] = [];
  for (const [costItemId, data] of aggregation) {
    const costItem = costItemsMap.get(costItemId);
    if (!costItem) continue;

    result.push({
      costItemId,
      name: costItem.name,
      supplier: costItem.supplier,
      unit: costItem.unit,
      totalQuantity: Math.ceil(data.totalQuantity * 100) / 100,
      unitPrice: costItem.unitPrice,
      totalCost: data.totalQuantity * costItem.unitPrice,
    });
  }

  return result.sort((a, b) => a.name.localeCompare(b.name));
}
