import type { Difficulty, PriceRange } from './project';

export type EstimateSection = 'hires' | 'ground_prep' | 'linear' | 'areal';

export interface LineItemParams {
  difficulty: Difficulty;
  priceRange: PriceRange;
  thickness?: number;
  height?: number;
}

export interface LineItem {
  id: string;
  taskCode: string;
  description: string;
  quantity: number;
  params: LineItemParams;
  accepted: boolean;
  section: EstimateSection;
}

export interface CalculatedLineItem extends LineItem {
  materialsCost: number;
  labourCost: number;
  labourHours: number;
  subtotal: number;
  sellPrice: number;
}

export interface SectionTotals {
  section: EstimateSection;
  materialsCost: number;
  labourCost: number;
  labourHours: number;
  sellPrice: number;
  itemCount: number;
  acceptedCount: number;
}

export interface GrandTotals {
  materialsCost: number;
  labourCost: number;
  labourHours: number;
  sellPrice: number;
  estimatedDays: number;
}

export interface AggregatedMaterial {
  costItemId: string;
  name: string;
  supplier: string;
  unit: string;
  totalQuantity: number;
  unitPrice: number;
  totalCost: number;
}
