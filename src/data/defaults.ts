import type { ProjectSettings, MiscSettings } from '../types';

export const defaultProjectSettings: ProjectSettings = {
  projectName: '',
  clientName: '',
  tariff: 'medium',
  teamSize: 3,
  distanceToSite: 10,
  totalArea: 100,
};

export const defaultMiscSettings: MiscSettings = {
  labourHourlyRate: 35,
  profitFactors: {
    low: 1.25,
    medium: 1.45,
    high: 1.65,
  },
  difficultyFactors: {
    easy: 0.8,
    standard: 1.0,
    difficult: 1.3,
    very_difficult: 1.6,
  },
  priceRangeFactors: {
    budget: 0.85,
    standard: 1.0,
    premium: 1.3,
  },
  hoursPerDay: 8,
};
