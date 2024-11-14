import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

interface SidebarProps {
  navigation: Array<{
    name: string;
    icon: React.ElementType;
    id: string;
  }>;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  navigation,
  activeTab,
  setActiveTab,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 transform 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700`}
    >
      <div className="h-full px-3 py-4 flex flex-col">
        <div className="mb-8 px-2">
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">CourseBoard</h1>
        </div>

        <nav className="flex-1 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center px-2 py-2 text-sm font-medium rounded-lg transition-all duration-200
                  ${
                    activeTab === item.id
                      ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
              >
                <Icon className="mr-3 h-5 w-5" />
                {item.name}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 
              hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
          >
            {isDark ? <Sun className="mr-3 h-5 w-5" /> : <Moon className="mr-3 h-5 w-5" />}
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;