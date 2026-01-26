import React from 'react';

import { useThemeContext } from './ThemeProvider';

type Theme = 'light' | 'dark' | 'system';

const themes: Theme[] = ['light', 'dark', 'system'];

const themeIcons: Record<Theme, React.ReactNode> = {
  light: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  dark: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
  system: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
};

const themeLabels: Record<Theme, string> = {
  light: 'Светлая',
  dark: 'Тёмная',
  system: 'Системная',
};

/**
 * Компонент переключения темы в виде вертикального списка опций
 */
export function ThemeToggle() {
  const { setTheme, theme } = useThemeContext();

  const handleThemeChange = (newTheme: Theme): void => {
    setTheme(newTheme);
  };

  return (
    <div role="radiogroup" aria-label="Выбор темы">
      <h3 className="text-xs text-gray-500 dark:text-gray-400 mb-2">Тема оформления</h3>
      <div className="space-y-1">
        {themes.map(themeOption => {
          const isSelected = theme === themeOption;

          return (
            <button
              key={themeOption}
              onClick={() => handleThemeChange(themeOption)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                isSelected
                  ? 'text-gray-800 dark:text-gray-100'
                  : 'hover:bg-gray-100 dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300'
              }`}
              aria-label={themeLabels[themeOption]}
              aria-checked={isSelected}
              role="radio"
            >
              <div className="flex items-center gap-3">
                <span className={isSelected ? 'text-gray-800 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'}>
                  {themeIcons[themeOption]}
                </span>
                <span className="text-sm font-medium">{themeLabels[themeOption]}</span>
              </div>
              {isSelected && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-800 dark:text-gray-100"
                >
                  <polyline points="20,6 9,17 4,12" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
