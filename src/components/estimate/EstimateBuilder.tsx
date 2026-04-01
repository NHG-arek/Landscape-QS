import { useState } from 'react';
import type { CalculatedLineItem, SectionTotals, GrandTotals, EstimateSection, LineItemParams, ProjectSettings } from '../../types';
import { ProjectSettingsPanel } from '../settings/ProjectSettingsPanel';
import { SectionGroup } from './SectionGroup';
import { LineItemForm } from './LineItemForm';
import { TotalsBar } from './TotalsBar';

interface EstimateBuilderProps {
  project: ProjectSettings;
  onUpdateProject: (updates: Partial<ProjectSettings>) => void;
  items: CalculatedLineItem[];
  sectionTotals: SectionTotals[];
  grandTotals: GrandTotals;
  onAddItem: (taskCode: string, description: string, quantity: number, section: EstimateSection, params: LineItemParams) => void;
  onToggleAccepted: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

const sections: EstimateSection[] = ['hires', 'ground_prep', 'linear', 'areal'];

export function EstimateBuilder({
  project,
  onUpdateProject,
  items,
  sectionTotals,
  grandTotals,
  onAddItem,
  onToggleAccepted,
  onRemoveItem,
}: EstimateBuilderProps) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="max-w-7xl mx-auto">
      <ProjectSettingsPanel project={project} onUpdate={onUpdateProject} />

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700">Estimate Items</h2>
        <button
          onClick={() => setShowForm(true)}
          className="px-3 py-1.5 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
        >
          + Add Item
        </button>
      </div>

      {showForm && (
        <LineItemForm
          onAdd={(code, desc, qty, section, params) => {
            onAddItem(code, desc, qty, section, params);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      {items.length === 0 && !showForm && (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center text-gray-400 mb-4">
          <p className="text-lg mb-2">No estimate items yet</p>
          <p className="text-sm">Click "Add Item" to start building your estimate</p>
        </div>
      )}

      {sections.map(section => {
        const sectionItems = items.filter(i => i.section === section);
        const totals = sectionTotals.find(t => t.section === section);
        if (!totals || sectionItems.length === 0) return null;
        return (
          <SectionGroup
            key={section}
            section={section}
            items={sectionItems}
            totals={totals}
            onToggleAccepted={onToggleAccepted}
            onRemove={onRemoveItem}
          />
        );
      })}

      {items.length > 0 && <TotalsBar totals={grandTotals} />}
    </div>
  );
}
