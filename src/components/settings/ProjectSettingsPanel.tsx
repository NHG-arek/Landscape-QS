import type { ProjectSettings } from '../../types';
import { tariffOptions } from '../../data/rollups';
import { Select } from '../shared/Select';
import { NumberInput } from '../shared/NumberInput';
import { TextInput } from '../shared/TextInput';

interface ProjectSettingsPanelProps {
  project: ProjectSettings;
  onUpdate: (updates: Partial<ProjectSettings>) => void;
}

export function ProjectSettingsPanel({ project, onUpdate }: ProjectSettingsPanelProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <h2 className="text-sm font-semibold text-gray-700 mb-3">Project Information</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <TextInput
          label="Project Name"
          value={project.projectName}
          onChange={(v) => onUpdate({ projectName: v })}
          placeholder="Enter project name"
        />
        <TextInput
          label="Client Name"
          value={project.clientName}
          onChange={(v) => onUpdate({ clientName: v })}
          placeholder="Enter client name"
        />
        <Select
          label="Tariff"
          value={project.tariff}
          onChange={(v) => onUpdate({ tariff: v })}
          options={tariffOptions}
        />
        <NumberInput
          label="Team Size"
          value={project.teamSize}
          onChange={(v) => onUpdate({ teamSize: v })}
          min={1}
          max={20}
        />
        <NumberInput
          label="Distance (km)"
          value={project.distanceToSite}
          onChange={(v) => onUpdate({ distanceToSite: v })}
          min={0}
        />
        <NumberInput
          label="Total Area (m2)"
          value={project.totalArea}
          onChange={(v) => onUpdate({ totalArea: v })}
          min={0}
        />
      </div>
    </div>
  );
}
