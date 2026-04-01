import { useState } from 'react';
import type { EstimateSection, LineItemParams } from '../../types';
import { tasksBySection, taskTemplatesMap } from '../../data/taskTemplates';
import { difficultyOptions, priceRangeOptions, sectionLabels } from '../../data/rollups';
import { Select } from '../shared/Select';
import { NumberInput } from '../shared/NumberInput';

interface LineItemFormProps {
  onAdd: (taskCode: string, description: string, quantity: number, section: EstimateSection, params: LineItemParams) => void;
  onCancel: () => void;
  defaultSection?: EstimateSection;
}

export function LineItemForm({ onAdd, onCancel, defaultSection = 'areal' }: LineItemFormProps) {
  const [section, setSection] = useState<EstimateSection>(defaultSection);
  const sectionTasks = tasksBySection[section];
  const [taskCode, setTaskCode] = useState(sectionTasks[0]?.code ?? '');
  const [quantity, setQuantity] = useState(1);
  const [difficulty, setDifficulty] = useState<LineItemParams['difficulty']>('standard');
  const [priceRange, setPriceRange] = useState<LineItemParams['priceRange']>('standard');
  const [thickness, setThickness] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);

  const template = taskTemplatesMap.get(taskCode);

  const handleSectionChange = (s: EstimateSection) => {
    setSection(s);
    const tasks = tasksBySection[s];
    if (tasks.length > 0) setTaskCode(tasks[0].code);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!template || quantity <= 0) return;
    onAdd(taskCode, template.name, quantity, section, {
      difficulty,
      priceRange,
      thickness: template.parameterOptions?.thickness ? thickness : undefined,
      height: template.parameterOptions?.height ? height : undefined,
    });
  };

  const sectionOptions = Object.entries(sectionLabels).map(([value, label]) => ({ value: value as EstimateSection, label }));
  const taskOptions = sectionTasks.map(t => ({ value: t.code, label: `${t.code} - ${t.name}` }));

  return (
    <form onSubmit={handleSubmit} className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-3">
        <Select label="Section" value={section} onChange={handleSectionChange} options={sectionOptions} />
        <Select label="Task Code" value={taskCode} onChange={setTaskCode} options={taskOptions} className="col-span-1 sm:col-span-2" />
        <NumberInput label={`Quantity (${template?.unit ?? 'unit'})`} value={quantity} onChange={setQuantity} min={0.01} step={0.1} />
        <Select label="Difficulty" value={difficulty} onChange={setDifficulty} options={difficultyOptions} />
        <Select label="Price Range" value={priceRange} onChange={setPriceRange} options={priceRangeOptions} />
      </div>

      {(template?.parameterOptions?.thickness || template?.parameterOptions?.height) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
          {template.parameterOptions.thickness && (
            <Select
              label="Thickness (mm)"
              value={String(thickness ?? template.parameterOptions.thickness[0])}
              onChange={(v) => setThickness(Number(v))}
              options={template.parameterOptions.thickness.map(t => ({ value: String(t), label: `${t} mm` }))}
            />
          )}
          {template.parameterOptions.height && (
            <Select
              label="Height (mm)"
              value={String(height ?? template.parameterOptions.height[0])}
              onChange={(v) => setHeight(Number(v))}
              options={template.parameterOptions.height.map(h => ({ value: String(h), label: `${h} mm` }))}
            />
          )}
        </div>
      )}

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-1.5 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 transition-colors"
        >
          Add Item
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
