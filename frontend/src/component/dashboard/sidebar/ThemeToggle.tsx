'use client';

import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle(): React.JSX.Element {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-between p-2 bg-gray-800 bg-opacity-60 rounded-lg">
      <div className="flex items-center space-x-1">
        <Sun size={12} className="text-gray-400" />
        <span className="text-xs text-gray-400">Light</span>
      </div>
      <button
        onClick={toggleTheme}
        className={`relative w-8 h-4 rounded-full transition-colors duration-200 ${
          isDark ? 'bg-purple-600' : 'bg-gray-600'
        }`}
      >
        <div
          className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-transform duration-200 ${
            isDark ? 'translate-x-4' : 'translate-x-0.5'
          }`}
        />
      </button>
      <div className="flex items-center space-x-1">
        <Moon size={12} className="text-gray-400" />
        <span className={`text-xs ${isDark ? 'text-purple-400' : 'text-gray-400'}`}>Dark</span>
      </div>
    </div>
  );
}
