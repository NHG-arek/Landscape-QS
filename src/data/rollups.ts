import type { Difficulty, PriceRange, ProjectSettings } from '../types';

export const difficultyOptions: { value: Difficulty; label: string }[] = [
  { value: 'easy', label: 'Easy' },
  { value: 'standard', label: 'Standard' },
  { value: 'difficult', label: 'Difficult' },
  { value: 'very_difficult', label: 'Very Difficult' },
];

export const priceRangeOptions: { value: PriceRange; label: string }[] = [
  { value: 'budget', label: 'Budget' },
  { value: 'standard', label: 'Standard' },
  { value: 'premium', label: 'Premium' },
];

export const tariffOptions: { value: ProjectSettings['tariff']; label: string }[] = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

export const sectionLabels: Record<string, string> = {
  hires: 'Hires',
  ground_prep: 'Ground Preparation',
  linear: 'Linear Objects',
  areal: 'Areal Objects',
};
