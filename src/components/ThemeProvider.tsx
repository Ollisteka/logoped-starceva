import React, { createContext, useContext } from 'react';

import { Theme, useTheme } from '../hooks/useTheme';

interface ThemeContextType {
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * Провайдер для управления темой приложения
 * Предоставляет контекст с состоянием темы и функциями для её изменения
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = useTheme();

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
}

/**
 * Хук для использования контекста темы
 */
export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
}
