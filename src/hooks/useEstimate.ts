import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type {
  LineItem,
  LineItemParams,
  CalculatedLineItem,
  SectionTotals,
  GrandTotals,
  EstimateSection,
  MiscSettings,
  ProjectSettings,
  AggregatedMaterial,
} from '../types';
import { usePersistedState } from './usePersistedState';
import { calculateLineItem } from '../engine/pricing';
import { aggregateMaterials } from '../engine/materialsAggregator';
import { calculateDuration } from '../engine/duration';
import { costItemsMap } from '../data/costItems';
import { taskTemplatesMap } from '../data/taskTemplates';

export function useEstimate(misc: MiscSettings, tariff: ProjectSettings['tariff'], teamSize: number) {
  const [items, setItems] = usePersistedState<LineItem[]>('lqs-items', []);

  const addItem = (taskCode: string, description: string, quantity: number, section: EstimateSection, params: LineItemParams) => {
    const newItem: LineItem = {
      id: uuidv4(),
      taskCode,
      description,
      quantity,
      section,
      params,
      accepted: true,
    };
    setItems(prev => [...prev, newItem]);
  };

  const updateItem = (id: string, updates: Partial<Omit<LineItem, 'id'>>) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const toggleAccepted = (id: string) => {
    setItems(prev => prev.map(item => item.id === id ? { ...item, accepted: !item.accepted } : item));
  };

  const calculatedItems: CalculatedLineItem[] = useMemo(() => {
    return items.map(item => {
      const template = taskTemplatesMap.get(item.taskCode);
      if (!template) {
        return { ...item, materialsCost: 0, labourCost: 0, labourHours: 0, subtotal: 0, sellPrice: 0 };
      }
      return calculateLineItem(item, template, costItemsMap, misc, tariff);
    });
  }, [items, misc, tariff]);

  const sectionTotals: SectionTotals[] = useMemo(() => {
    const sections: EstimateSection[] = ['hires', 'ground_prep', 'linear', 'areal'];
    return sections.map(section => {
      const sectionItems = calculatedItems.filter(i => i.section === section);
      const accepted = sectionItems.filter(i => i.accepted);
      return {
        section,
        materialsCost: accepted.reduce((sum, i) => sum + i.materialsCost, 0),
        labourCost: accepted.reduce((sum, i) => sum + i.labourCost, 0),
        labourHours: accepted.reduce((sum, i) => sum + i.labourHours, 0),
        sellPrice: accepted.reduce((sum, i) => sum + i.sellPrice, 0),
        itemCount: sectionItems.length,
        acceptedCount: accepted.length,
      };
    });
  }, [calculatedItems]);

  const grandTotals: GrandTotals = useMemo(() => {
    const totals = sectionTotals.reduce(
      (acc, s) => ({
        materialsCost: acc.materialsCost + s.materialsCost,
        labourCost: acc.labourCost + s.labourCost,
        labourHours: acc.labourHours + s.labourHours,
        sellPrice: acc.sellPrice + s.sellPrice,
      }),
      { materialsCost: 0, labourCost: 0, labourHours: 0, sellPrice: 0 },
    );
    const { days } = calculateDuration(totals.labourHours, teamSize, misc.hoursPerDay);
    return { ...totals, estimatedDays: days };
  }, [sectionTotals, teamSize, misc.hoursPerDay]);

  const materialsList: AggregatedMaterial[] = useMemo(() => {
    const accepted = items.filter(i => i.accepted);
    return aggregateMaterials(accepted, taskTemplatesMap, costItemsMap);
  }, [items]);

  return {
    items: calculatedItems,
    sectionTotals,
    grandTotals,
    materialsList,
    addItem,
    updateItem,
    removeItem,
    toggleAccepted,
  };
}
