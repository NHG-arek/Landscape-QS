export interface ProjectSettings {
  projectName: string;
  clientName: string;
  tariff: 'low' | 'medium' | 'high';
  teamSize: number;
  distanceToSite: number;
  totalArea: number;
}

export interface MiscSettings {
  labourHourlyRate: number;
  profitFactors: Record<ProjectSettings['tariff'], number>;
  difficultyFactors: Record<Difficulty, number>;
  priceRangeFactors: Record<PriceRange, number>;
  hoursPerDay: number;
}

export type Difficulty = 'easy' | 'standard' | 'difficult' | 'very_difficult';
export type PriceRange = 'budget' | 'standard' | 'premium';
