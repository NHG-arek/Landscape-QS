import type { MiscSettings } from '../../types';
import { NumberInput } from '../shared/NumberInput';

interface MiscSettingsEditorProps {
  misc: MiscSettings;
  onUpdate: (updates: Partial<MiscSettings>) => void;
}

export function MiscSettingsEditor({ misc, onUpdate }: MiscSettingsEditorProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">General</h2>
        <div className="grid grid-cols-2 gap-3">
          <NumberInput
            label="Labour Hourly Rate (GBP)"
            value={misc.labourHourlyRate}
            onChange={(v) => onUpdate({ labourHourlyRate: v })}
            min={0}
            step={0.5}
          />
          <NumberInput
            label="Hours Per Day"
            value={misc.hoursPerDay}
            onChange={(v) => onUpdate({ hoursPerDay: v })}
            min={1}
            max={24}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Profit Factors (by Tariff)</h2>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(misc.profitFactors) as Array<keyof typeof misc.profitFactors>).map(key => (
            <NumberInput
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={misc.profitFactors[key]}
              onChange={(v) => onUpdate({ profitFactors: { ...misc.profitFactors, [key]: v } })}
              min={1}
              max={5}
              step={0.05}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Difficulty Factors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(Object.keys(misc.difficultyFactors) as Array<keyof typeof misc.difficultyFactors>).map(key => (
            <NumberInput
              key={key}
              label={key.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase())}
              value={misc.difficultyFactors[key]}
              onChange={(v) => onUpdate({ difficultyFactors: { ...misc.difficultyFactors, [key]: v } })}
              min={0}
              max={5}
              step={0.1}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h2 className="text-sm font-semibold text-gray-700 mb-3">Price Range Factors</h2>
        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(misc.priceRangeFactors) as Array<keyof typeof misc.priceRangeFactors>).map(key => (
            <NumberInput
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={misc.priceRangeFactors[key]}
              onChange={(v) => onUpdate({ priceRangeFactors: { ...misc.priceRangeFactors, [key]: v } })}
              min={0}
              max={5}
              step={0.05}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
