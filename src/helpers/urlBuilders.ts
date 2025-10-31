import { BASE_PATH } from "../consts/paths";

/**
 * Нормализует путь, убирая ведущий слэш если он есть
 * @param path - Путь для нормализации
 * @returns Нормализованный путь без ведущего слэша
 */
function normalizePath(path: string): string {
  return path.startsWith('/') ? path.slice(1) : path;
}

/**
 * Создает полный путь к документу с автоматическим добавлением BASE_PATH
 * @param path - Относительный путь к документу (например, 'file.pdf' или 'folder/file.pdf')
 * @returns Полный путь с BASE_PATH
 */
export function getDocumentPath(path: string): string {
  const normalizedPath = normalizePath(path);
  return `${BASE_PATH}/documents/${normalizedPath}`;
}

/**
 * Создает полный путь к фото с автоматическим добавлением BASE_PATH
 * @param path - Относительный путь к фото (например, 'avatar.jpg' или 'folder/image.jpg')
 * @returns Полный путь с BASE_PATH
 */
export function getPhotoPath(path: string): string {
  const normalizedPath = normalizePath(path);
  return `${BASE_PATH}/photos/${normalizedPath}`;
}

