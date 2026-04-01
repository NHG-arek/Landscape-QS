import type { ProjectSettings, MiscSettings } from '../types';
import { defaultProjectSettings, defaultMiscSettings } from '../data/defaults';
import { usePersistedState } from './usePersistedState';

export function useProject() {
  const [project, setProject] = usePersistedState<ProjectSettings>('lqs-project', defaultProjectSettings);
  const [misc, setMisc] = usePersistedState<MiscSettings>('lqs-misc', defaultMiscSettings);

  const updateProject = (updates: Partial<ProjectSettings>) => {
    setProject(prev => ({ ...prev, ...updates }));
  };

  const updateMisc = (updates: Partial<MiscSettings>) => {
    setMisc(prev => ({ ...prev, ...updates }));
  };

  return { project, misc, updateProject, updateMisc };
}
