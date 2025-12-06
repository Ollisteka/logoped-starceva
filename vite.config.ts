import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';
import { ROUTE_PATHS } from './vite-build-constants';

/**
 * Создает HTML файлы для каждого роута после сборки
 * Это необходимо для GitHub Pages, чтобы избежать 404 при прямых переходах на роуты
 */
function createRouteHtmlFiles(): Plugin {
  return {
    name: 'create-route-html-files',
    writeBundle(outputOptions) {
      const outDir = outputOptions.dir || 'dist';
      const indexHtmlPath = join(outDir, 'index.html');

      if (!existsSync(indexHtmlPath)) {
        throw new Error(`index.html not found at ${indexHtmlPath}`);
      }

      const indexHtml = readFileSync(indexHtmlPath, 'utf-8');

      const routes = new Set(
        Object.values(ROUTE_PATHS)
          .map((path) => path.replace(/^\//, '')) // Убираем начальный слеш
          .filter((path) => path !== ''), // Убираем пустые строки
      );

      routes.forEach((route) => {
        const filePath = join(outDir, `${route}.html`);
        writeFileSync(filePath, indexHtml, 'utf-8');
        console.log(`Created ${route}.html`);
      });

      console.log(`Created ${routes.size} route HTML files`);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createRouteHtmlFiles()],
  base: '/logoped-starceva/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    open: true,
  },
  preview: {
    open: true,
  },
});