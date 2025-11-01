import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';

// Инициализация темы перед рендером для предотвращения мерцания
function initializeTheme(): void {
  const THEME_STORAGE_KEY = 'theme';
  const stored = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | 'system' | null;
  const theme = stored && ['light', 'dark', 'system'].includes(stored) ? stored : 'system';

  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

initializeTheme();

createRoot(document.getElementById('root')!).render(<App />);
