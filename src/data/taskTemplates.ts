import type { TaskTemplate } from '../types';

export const taskTemplates: TaskTemplate[] = [
  // === HIRES (T1.xx) ===
  {
    code: 'T1.01', name: 'Skip Hire', section: 'hires', unit: 'week',
    materials: [{ costItemId: 'HIR001', usagePerUnit: 1 }],
    labourHoursPerUnit: 0.5,
  },
  {
    code: 'T1.02', name: 'Mini Digger Hire', section: 'hires', unit: 'day',
    materials: [{ costItemId: 'HIR002', usagePerUnit: 1 }],
    labourHoursPerUnit: 0,
  },
  {
    code: 'T1.03', name: 'Dumper Hire', section: 'hires', unit: 'day',
    materials: [{ costItemId: 'HIR003', usagePerUnit: 1 }],
    labourHoursPerUnit: 0,
  },
  {
    code: 'T1.04', name: 'Scaffold Tower Hire', section: 'hires', unit: 'week',
    materials: [{ costItemId: 'HIR004', usagePerUnit: 1 }],
    labourHoursPerUnit: 1,
  },
  {
    code: 'T1.05', name: 'Plate Compactor Hire', section: 'hires', unit: 'day',
    materials: [{ costItemId: 'HIR005', usagePerUnit: 1 }],
    labourHoursPerUnit: 0,
  },

  // === GROUND PREP (T2.xx - T4.xx) ===
  {
    code: 'T2.01', name: 'Excavation & Soil Removal', section: 'ground_prep', unit: 'm3',
    materials: [],
    labourHoursPerUnit: 0.8,
  },
  {
    code: 'T2.02', name: 'Site Clearance', section: 'ground_prep', unit: 'm2',
    materials: [],
    labourHoursPerUnit: 0.15,
  },
  {
    code: 'T3.01', name: 'Sub-base (MOT Type 1)', section: 'ground_prep', unit: 'm2',
    materials: [
      { costItemId: 'AGG002', usagePerUnit: 0.1, scalesWithThickness: true },
      { costItemId: 'FIX004', usagePerUnit: 0.005 },
    ],
    labourHoursPerUnit: 0.12,
    parameterOptions: { thickness: [50, 75, 100, 150] },
  },
  {
    code: 'T3.02', name: 'Gravel Bed', section: 'ground_prep', unit: 'm2',
    materials: [
      { costItemId: 'AGG004', usagePerUnit: 0.08, scalesWithThickness: true },
      { costItemId: 'LAN002', usagePerUnit: 1.05 },
    ],
    labourHoursPerUnit: 0.1,
    parameterOptions: { thickness: [50, 75, 100] },
  },
  {
    code: 'T3.03', name: 'Topsoil Supply & Spread', section: 'ground_prep', unit: 'm2',
    materials: [
      { costItemId: 'AGG003', usagePerUnit: 0.1, scalesWithThickness: true },
    ],
    labourHoursPerUnit: 0.08,
    parameterOptions: { thickness: [50, 75, 100, 150] },
  },
  {
    code: 'T4.01', name: 'Land Drainage Run', section: 'ground_prep', unit: 'lm',
    materials: [
      { costItemId: 'DRN001', usagePerUnit: 0.04 },
      { costItemId: 'AGG004', usagePerUnit: 0.06 },
    ],
    labourHoursPerUnit: 0.25,
  },
  {
    code: 'T4.02', name: 'Drainage Channel Install', section: 'ground_prep', unit: 'lm',
    materials: [
      { costItemId: 'DRN002', usagePerUnit: 1 },
      { costItemId: 'CON003', usagePerUnit: 0.02 },
    ],
    labourHoursPerUnit: 0.35,
  },
  {
    code: 'T4.03', name: 'Inspection Chamber', section: 'ground_prep', unit: 'each',
    materials: [
      { costItemId: 'DRN003', usagePerUnit: 1 },
      { costItemId: 'CON003', usagePerUnit: 0.15 },
    ],
    labourHoursPerUnit: 3,
  },

  // === LINEAR (T5.xx - T8.xx) ===
  {
    code: 'T5.01', name: 'Close Board Fencing', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'TIM001', usagePerUnit: 0.55 },
      { costItemId: 'TIM002', usagePerUnit: 0.55 },
      { costItemId: 'TIM003', usagePerUnit: 0.55 },
      { costItemId: 'CON002', usagePerUnit: 0.55 },
      { costItemId: 'FIX002', usagePerUnit: 0.55 },
    ],
    labourHoursPerUnit: 0.45,
    labourScalesWithHeight: true,
    parameterOptions: { height: [900, 1200, 1500, 1800] },
  },
  {
    code: 'T5.02', name: 'Fence Panel Erection', section: 'linear', unit: 'panel',
    materials: [
      { costItemId: 'TIM001', usagePerUnit: 1.1 },
      { costItemId: 'TIM002', usagePerUnit: 1 },
      { costItemId: 'TIM003', usagePerUnit: 1 },
      { costItemId: 'CON002', usagePerUnit: 1.1 },
      { costItemId: 'TIM008', usagePerUnit: 1.1 },
      { costItemId: 'FIX002', usagePerUnit: 1 },
    ],
    labourHoursPerUnit: 0.75,
    labourScalesWithHeight: true,
    parameterOptions: { height: [900, 1200, 1500, 1800] },
  },
  {
    code: 'T5.03', name: 'Trellis on Posts', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'TIM001', usagePerUnit: 0.55 },
      { costItemId: 'TIM007', usagePerUnit: 0.55 },
      { costItemId: 'CON002', usagePerUnit: 0.55 },
      { costItemId: 'TIM008', usagePerUnit: 0.55 },
    ],
    labourHoursPerUnit: 0.35,
  },
  {
    code: 'T6.01', name: 'Edging Kerb', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'PAV004', usagePerUnit: 1.1 },
      { costItemId: 'CON001', usagePerUnit: 0.15 },
      { costItemId: 'AGG001', usagePerUnit: 0.01 },
    ],
    labourHoursPerUnit: 0.2,
  },
  {
    code: 'T6.02', name: 'Sleeper Edging', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'TIM006', usagePerUnit: 0.42 },
      { costItemId: 'CON003', usagePerUnit: 0.01 },
    ],
    labourHoursPerUnit: 0.3,
    labourScalesWithHeight: true,
    parameterOptions: { height: [600, 900, 1200] },
  },
  {
    code: 'T7.01', name: 'Block Wall', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'WAL001', usagePerUnit: 5 },
      { costItemId: 'WAL003', usagePerUnit: 0.4 },
      { costItemId: 'CON003', usagePerUnit: 0.03 },
    ],
    labourHoursPerUnit: 0.8,
    labourScalesWithHeight: true,
    parameterOptions: { height: [600, 900, 1200, 1500] },
  },
  {
    code: 'T7.02', name: 'Wall Coping', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'WAL002', usagePerUnit: 1.7 },
      { costItemId: 'WAL003', usagePerUnit: 0.1 },
    ],
    labourHoursPerUnit: 0.25,
  },
  {
    code: 'T8.01', name: 'Retaining Wall (Sleepers)', section: 'linear', unit: 'lm',
    materials: [
      { costItemId: 'TIM006', usagePerUnit: 0.42 },
      { costItemId: 'CON003', usagePerUnit: 0.04 },
      { costItemId: 'FIX003', usagePerUnit: 0.02 },
    ],
    labourHoursPerUnit: 0.6,
    labourScalesWithHeight: true,
    parameterOptions: { height: [600, 900, 1200] },
  },

  // === AREAL (T9.xx - T12.xx) ===
  {
    code: 'T9.01', name: 'Slab Paving', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'PAV001', usagePerUnit: 1.05 },
      { costItemId: 'AGG001', usagePerUnit: 0.04 },
      { costItemId: 'CON001', usagePerUnit: 0.2 },
      { costItemId: 'PAV006', usagePerUnit: 0.1 },
    ],
    labourHoursPerUnit: 0.45,
  },
  {
    code: 'T9.02', name: 'Block Paving', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'PAV002', usagePerUnit: 1.05 },
      { costItemId: 'AGG001', usagePerUnit: 0.04 },
      { costItemId: 'PAV006', usagePerUnit: 0.15 },
    ],
    labourHoursPerUnit: 0.55,
  },
  {
    code: 'T9.03', name: 'Porcelain Paving', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'PAV003', usagePerUnit: 1.05 },
      { costItemId: 'AGG001', usagePerUnit: 0.04 },
      { costItemId: 'CON001', usagePerUnit: 0.25 },
      { costItemId: 'PAV005', usagePerUnit: 0.04 },
    ],
    labourHoursPerUnit: 0.6,
  },
  {
    code: 'T10.01', name: 'Timber Decking', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'TIM004', usagePerUnit: 1.85 },
      { costItemId: 'TIM005', usagePerUnit: 0.7 },
      { costItemId: 'FIX001', usagePerUnit: 0.05 },
    ],
    labourHoursPerUnit: 0.65,
  },
  {
    code: 'T11.01', name: 'Lay Turf', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'LAN001', usagePerUnit: 1.05 },
      { costItemId: 'AGG003', usagePerUnit: 0.03 },
      { costItemId: 'LAN006', usagePerUnit: 0.005 },
    ],
    labourHoursPerUnit: 0.08,
  },
  {
    code: 'T11.02', name: 'Lawn from Seed', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'LAN004', usagePerUnit: 0.035 },
      { costItemId: 'AGG003', usagePerUnit: 0.03 },
      { costItemId: 'LAN005', usagePerUnit: 0.015 },
    ],
    labourHoursPerUnit: 0.06,
  },
  {
    code: 'T12.01', name: 'Planting Bed Preparation', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'LAN005', usagePerUnit: 0.07 },
      { costItemId: 'LAN003', usagePerUnit: 0.05 },
      { costItemId: 'LAN002', usagePerUnit: 1.05 },
    ],
    labourHoursPerUnit: 0.2,
  },
  {
    code: 'T12.02', name: 'Bark Mulch Coverage', section: 'areal', unit: 'm2',
    materials: [
      { costItemId: 'LAN003', usagePerUnit: 0.075, scalesWithThickness: true },
      { costItemId: 'LAN002', usagePerUnit: 1.05 },
    ],
    labourHoursPerUnit: 0.08,
    parameterOptions: { thickness: [50, 75, 100] },
  },
];

export const taskTemplatesMap = new Map(taskTemplates.map(t => [t.code, t]));

export const tasksBySection = {
  hires: taskTemplates.filter(t => t.section === 'hires'),
  ground_prep: taskTemplates.filter(t => t.section === 'ground_prep'),
  linear: taskTemplates.filter(t => t.section === 'linear'),
  areal: taskTemplates.filter(t => t.section === 'areal'),
};
