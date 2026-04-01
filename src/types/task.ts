import type { EstimateSection } from './estimate';

export interface TaskMaterial {
  costItemId: string;
  usagePerUnit: number;
  /** If true, usage scales with thickness (usagePerUnit * thickness/100) */
  scalesWithThickness?: boolean;
}

export interface TaskTemplate {
  code: string;
  name: string;
  section: EstimateSection;
  unit: string;
  materials: TaskMaterial[];
  labourHoursPerUnit: number;
  /** If true, labour scales with height (labourHoursPerUnit * height/600) */
  labourScalesWithHeight?: boolean;
  parameterOptions?: {
    thickness?: number[];
    height?: number[];
  };
}
