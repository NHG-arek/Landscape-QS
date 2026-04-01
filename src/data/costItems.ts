import type { CostItem } from '../types';

export const costItems: CostItem[] = [
  // Aggregates
  { id: 'AGG001', name: 'Sharp Sand', supplier: 'BuildBase', unit: 'm3', unitPrice: 45, category: 'Aggregates' },
  { id: 'AGG002', name: 'MOT Type 1', supplier: 'BuildBase', unit: 'm3', unitPrice: 32, category: 'Aggregates' },
  { id: 'AGG003', name: 'Topsoil (screened)', supplier: 'GreenSupply', unit: 'm3', unitPrice: 38, category: 'Aggregates' },
  { id: 'AGG004', name: 'Gravel 20mm', supplier: 'BuildBase', unit: 'm3', unitPrice: 42, category: 'Aggregates' },
  { id: 'AGG005', name: 'Ballast', supplier: 'BuildBase', unit: 'm3', unitPrice: 35, category: 'Aggregates' },

  // Concrete & Cement
  { id: 'CON001', name: 'Cement (25kg bag)', supplier: 'BuildBase', unit: 'bag', unitPrice: 6.5, category: 'Concrete' },
  { id: 'CON002', name: 'Postcrete (20kg bag)', supplier: 'BuildBase', unit: 'bag', unitPrice: 5.8, category: 'Concrete' },
  { id: 'CON003', name: 'Ready Mix Concrete', supplier: 'ReadyMix Co', unit: 'm3', unitPrice: 110, category: 'Concrete' },

  // Timber
  { id: 'TIM001', name: 'Fence Post 100x100x2400', supplier: 'TimberYard', unit: 'each', unitPrice: 14, category: 'Timber' },
  { id: 'TIM002', name: 'Fence Panel 1.8x1.8m', supplier: 'TimberYard', unit: 'each', unitPrice: 28, category: 'Timber' },
  { id: 'TIM003', name: 'Gravel Board 150x22x1830', supplier: 'TimberYard', unit: 'each', unitPrice: 7.5, category: 'Timber' },
  { id: 'TIM004', name: 'Decking Board 32x150x3600', supplier: 'TimberYard', unit: 'each', unitPrice: 8.5, category: 'Timber' },
  { id: 'TIM005', name: 'Decking Joist 47x150x3600', supplier: 'TimberYard', unit: 'each', unitPrice: 12, category: 'Timber' },
  { id: 'TIM006', name: 'Sleeper 200x100x2400', supplier: 'TimberYard', unit: 'each', unitPrice: 22, category: 'Timber' },
  { id: 'TIM007', name: 'Trellis Panel 1.8x0.6m', supplier: 'TimberYard', unit: 'each', unitPrice: 18, category: 'Timber' },
  { id: 'TIM008', name: 'Post Cap 100x100', supplier: 'TimberYard', unit: 'each', unitPrice: 3.5, category: 'Timber' },

  // Paving
  { id: 'PAV001', name: 'Paving Slab 450x450x35', supplier: 'Marshalls', unit: 'm2', unitPrice: 24, category: 'Paving' },
  { id: 'PAV002', name: 'Block Paving 200x100x50', supplier: 'Marshalls', unit: 'm2', unitPrice: 18, category: 'Paving' },
  { id: 'PAV003', name: 'Porcelain Paving 600x600', supplier: 'Marshalls', unit: 'm2', unitPrice: 55, category: 'Paving' },
  { id: 'PAV004', name: 'Edging Kerb 915x150x50', supplier: 'Marshalls', unit: 'lm', unitPrice: 4.5, category: 'Paving' },
  { id: 'PAV005', name: 'Jointing Compound', supplier: 'Marshalls', unit: 'tub', unitPrice: 22, category: 'Paving' },
  { id: 'PAV006', name: 'Kiln Dried Sand', supplier: 'BuildBase', unit: 'bag', unitPrice: 4, category: 'Paving' },

  // Landscaping
  { id: 'LAN001', name: 'Turf Roll (1m2)', supplier: 'GreenSupply', unit: 'm2', unitPrice: 4.5, category: 'Landscaping' },
  { id: 'LAN002', name: 'Weed Membrane', supplier: 'GreenSupply', unit: 'm2', unitPrice: 1.2, category: 'Landscaping' },
  { id: 'LAN003', name: 'Bark Mulch', supplier: 'GreenSupply', unit: 'm3', unitPrice: 48, category: 'Landscaping' },
  { id: 'LAN004', name: 'Lawn Seed (1kg)', supplier: 'GreenSupply', unit: 'kg', unitPrice: 12, category: 'Landscaping' },
  { id: 'LAN005', name: 'Compost (70L bag)', supplier: 'GreenSupply', unit: 'bag', unitPrice: 6, category: 'Landscaping' },
  { id: 'LAN006', name: 'Lawn Feed (10kg)', supplier: 'GreenSupply', unit: 'bag', unitPrice: 18, category: 'Landscaping' },

  // Drainage
  { id: 'DRN001', name: 'Land Drain 80mm (25m roll)', supplier: 'BuildBase', unit: 'roll', unitPrice: 28, category: 'Drainage' },
  { id: 'DRN002', name: 'Drainage Channel 1m', supplier: 'BuildBase', unit: 'each', unitPrice: 32, category: 'Drainage' },
  { id: 'DRN003', name: 'Inspection Chamber 450mm', supplier: 'BuildBase', unit: 'each', unitPrice: 65, category: 'Drainage' },

  // Walling
  { id: 'WAL001', name: 'Walling Block 440x215x100', supplier: 'BuildBase', unit: 'each', unitPrice: 1.8, category: 'Walling' },
  { id: 'WAL002', name: 'Wall Coping Stone 600x280', supplier: 'Marshalls', unit: 'each', unitPrice: 12, category: 'Walling' },
  { id: 'WAL003', name: 'Mortar Mix (25kg bag)', supplier: 'BuildBase', unit: 'bag', unitPrice: 5.5, category: 'Walling' },

  // Fixings & Sundries
  { id: 'FIX001', name: 'Decking Screws (200 box)', supplier: 'BuildBase', unit: 'box', unitPrice: 12, category: 'Fixings' },
  { id: 'FIX002', name: 'Fence Clips Pack', supplier: 'BuildBase', unit: 'pack', unitPrice: 4.5, category: 'Fixings' },
  { id: 'FIX003', name: 'DPM Sheet (4x25m)', supplier: 'BuildBase', unit: 'roll', unitPrice: 35, category: 'Fixings' },
  { id: 'FIX004', name: 'Geotextile Membrane (4.5x100m)', supplier: 'BuildBase', unit: 'roll', unitPrice: 85, category: 'Fixings' },

  // Hires
  { id: 'HIR001', name: 'Skip Hire 8yd (week)', supplier: 'WasteAway', unit: 'week', unitPrice: 280, category: 'Hires' },
  { id: 'HIR002', name: 'Mini Digger Hire (day)', supplier: 'PlantHire Ltd', unit: 'day', unitPrice: 185, category: 'Hires' },
  { id: 'HIR003', name: 'Dumper Hire (day)', supplier: 'PlantHire Ltd', unit: 'day', unitPrice: 95, category: 'Hires' },
  { id: 'HIR004', name: 'Scaffold Tower (week)', supplier: 'PlantHire Ltd', unit: 'week', unitPrice: 120, category: 'Hires' },
  { id: 'HIR005', name: 'Plate Compactor (day)', supplier: 'PlantHire Ltd', unit: 'day', unitPrice: 45, category: 'Hires' },
];

export const costItemsMap = new Map(costItems.map(item => [item.id, item]));
