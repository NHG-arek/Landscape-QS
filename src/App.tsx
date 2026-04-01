import { useState } from 'react';
import { Header } from './components/layout/Header';
import { EstimateBuilder } from './components/estimate/EstimateBuilder';
import { MaterialsListView } from './components/materials/MaterialsListView';
import { MiscSettingsEditor } from './components/settings/MiscSettingsEditor';
import { useProject } from './hooks/useProject';
import { useEstimate } from './hooks/useEstimate';

type View = 'estimate' | 'materials' | 'settings';

function App() {
  const [activeView, setActiveView] = useState<View>('estimate');
  const { project, misc, updateProject, updateMisc } = useProject();
  const {
    items,
    sectionTotals,
    grandTotals,
    materialsList,
    addItem,
    toggleAccepted,
    removeItem,
  } = useEstimate(misc, project.tariff, project.teamSize);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        activeView={activeView}
        onViewChange={setActiveView}
        projectName={project.projectName}
      />
      <main className="px-4 sm:px-6 py-4">
        {activeView === 'estimate' && (
          <EstimateBuilder
            project={project}
            onUpdateProject={updateProject}
            items={items}
            sectionTotals={sectionTotals}
            grandTotals={grandTotals}
            onAddItem={addItem}
            onToggleAccepted={toggleAccepted}
            onRemoveItem={removeItem}
          />
        )}
        {activeView === 'materials' && (
          <MaterialsListView materials={materialsList} />
        )}
        {activeView === 'settings' && (
          <MiscSettingsEditor misc={misc} onUpdate={updateMisc} />
        )}
      </main>
    </div>
  );
}

export default App;
