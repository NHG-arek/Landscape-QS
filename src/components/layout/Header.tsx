import { cn } from '../../lib/cn';

type View = 'estimate' | 'materials' | 'settings';

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  projectName: string;
}

const tabs: { key: View; label: string }[] = [
  { key: 'estimate', label: 'Estimate Builder' },
  { key: 'materials', label: 'Materials List' },
  { key: 'settings', label: 'Settings' },
];

export function Header({ activeView, onViewChange, projectName }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-semibold text-gray-900">Landscape QS</h1>
            {projectName && (
              <span className="text-sm text-gray-500">/ {projectName}</span>
            )}
          </div>
        </div>
        <nav className="flex gap-0 -mb-px">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => onViewChange(tab.key)}
              className={cn(
                'px-4 py-2.5 text-sm font-medium border-b-2 transition-colors',
                activeView === tab.key
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
