import type { LineItem, CalculatedLineItem, MiscSettings, ProjectSettings, CostItem, TaskTemplate } from '../types';

export function calculateLineItem(
  item: LineItem,
  template: TaskTemplate,
  costItemsMap: Map<string, CostItem>,
  misc: MiscSettings,
  tariff: ProjectSettings['tariff'],
): CalculatedLineItem {
  // 1. Calculate material costs
  let materialsCost = 0;
  for (const mat of template.materials) {
    const costItem = costItemsMap.get(mat.costItemId);
    if (!costItem) continue;

    let usage = mat.usagePerUnit;
    if (mat.scalesWithThickness && item.params.thickness) {
      usage = usage * (item.params.thickness / 100);
    }

    materialsCost += usage * item.quantity * costItem.unitPrice;
  }

  // 2. Apply price range factor
  materialsCost *= misc.priceRangeFactors[item.params.priceRange];

  // 3. Calculate labour
  let labourHoursPerUnit = template.labourHoursPerUnit;
  if (template.labourScalesWithHeight && item.params.height) {
    labourHoursPerUnit = labourHoursPerUnit * (item.params.height / 600);
  }

  const labourHours = labourHoursPerUnit * item.quantity;
  const labourCost = labourHours * misc.labourHourlyRate * misc.difficultyFactors[item.params.difficulty];

  // 4. Subtotal
  const subtotal = materialsCost + labourCost;

  // 5. Apply profit factor
  const sellPrice = subtotal * misc.profitFactors[tariff];

  return {
    ...item,
    materialsCost,
    labourCost,
    labourHours,
    subtotal,
    sellPrice,
  };
}
