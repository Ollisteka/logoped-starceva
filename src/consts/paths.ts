import { ROUTE_PATHS } from '../../vite-build-constants';

// Базовый путь для GitHub Pages
export const BASE_PATH = import.meta.env.BASE_URL || '';

// Константы путей для навигации (реэкспорт из vite-build-constants.ts)
export const PATHS = ROUTE_PATHS;

// Названия разделов для отображения
export const SECTION_NAMES = {
  PROFILE: 'Профиль',
  PUBLICATIONS: 'Публикации',
  PEDKOPILKA: 'Педкопилка',
  MENTORSHIP: 'Наставничество',
  SPORTS: 'Спортивные мероприятия',
  COMPETITIONS: 'Конкурсы',
  COURSES: 'Курсы',
  EXTRACURRICULAR: 'Внеклассная работа',
} as const;

// Массив всех разделов для итерации
export const NAVIGATION_SECTIONS = [
  { key: 'profile', path: PATHS.PROFILE, name: SECTION_NAMES.PROFILE },
  { key: 'publications', path: PATHS.PUBLICATIONS, name: SECTION_NAMES.PUBLICATIONS },
  { key: 'pedkopilka', path: PATHS.PEDKOPILKA, name: SECTION_NAMES.PEDKOPILKA },
  { key: 'mentorship', path: PATHS.MENTORSHIP, name: SECTION_NAMES.MENTORSHIP },
  { key: 'sports', path: PATHS.SPORTS, name: SECTION_NAMES.SPORTS },
  { key: 'competitions', path: PATHS.COMPETITIONS, name: SECTION_NAMES.COMPETITIONS },
  { key: 'courses', path: PATHS.COURSES, name: SECTION_NAMES.COURSES },
  { key: 'extracurricular', path: PATHS.EXTRACURRICULAR, name: SECTION_NAMES.EXTRACURRICULAR },
] as const;
