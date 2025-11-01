import { useEffect, useState } from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ResolvedTheme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';

/**
 * Получает системную тему пользователя
 */
function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'light';
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * Получает сохранённую тему из localStorage или системную
 */
function getStoredTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'system';
  }
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  return stored && ['light', 'dark', 'system'].includes(stored) ? stored : 'system';
}

/**
 * Получает разрешённую тему (light или dark) на основе текущей темы
 */
function getResolvedTheme(theme: Theme): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme;
}

/**
 * Применяет класс .dark к элементу html
 */
function applyThemeClass(isDark: boolean): void {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

interface UseThemeReturn {
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

/**
 * Хук для управления темой приложения
 * Поддерживает три режима: light, dark, system
 * Автоматически определяет системную тему и сохраняет выбор в localStorage
 */
export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => getResolvedTheme(theme));

  // Применяем тему при изменении
  useEffect(() => {
    const resolved = getResolvedTheme(theme);
    setResolvedTheme(resolved);
    applyThemeClass(resolved === 'dark');
  }, [theme]);

  // Отслеживаем изменения системной темы
  useEffect(() => {
    if (theme !== 'system') {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (): void => {
      const resolved = getResolvedTheme(theme);
      setResolvedTheme(resolved);
      applyThemeClass(resolved === 'dark');
    };

    // Современные браузеры поддерживают addEventListener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
    // Fallback для старых браузеров
    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, [theme]);

  /**
   * Устанавливает тему и сохраняет в localStorage
   */
  const setTheme = (newTheme: Theme): void => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  return {
    resolvedTheme,
    setTheme,
    theme,
  };
}
