import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface DockProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  items: {
    id: string;
    icon: LucideIcon;
    label: string;
  }[];
}

const Dock: React.FC<DockProps> = ({ activeSection, setActiveSection, darkMode, items }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className={`flex items-end gap-3 px-6 py-3 rounded-2xl backdrop-blur-2xl ${
        darkMode 
          ? 'bg-gray-800/80 border border-gray-700/50' 
          : 'bg-white/80 border border-gray-200/50'
      } shadow-2xl transition-all duration-300 group hover:scale-105`}>
        {items.map(({ id, icon: Icon, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`relative flex flex-col items-center transition-all duration-300 ${
                isActive ? 'scale-110 translate-y-[-8px]' : 'hover:scale-105 hover:translate-y-[-4px]'
              }`}
            >
              <div className={`p-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? darkMode
                    ? 'bg-blue-500/20 text-blue-400 shadow-lg shadow-blue-500/20'
                    : 'bg-blue-500/10 text-blue-600 shadow-lg shadow-blue-500/20'
                  : darkMode
                    ? 'text-gray-400 hover:text-gray-200'
                    : 'text-gray-600 hover:text-gray-900'
              }`}>
                <Icon size={24} />
              </div>
              <span className={`absolute -bottom-6 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {label}
              </span>
              {isActive && (
                <div className={`absolute -bottom-2 w-1 h-1 rounded-full ${
                  darkMode ? 'bg-blue-400' : 'bg-blue-600'
                }`} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Dock;