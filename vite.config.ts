import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/logoped-starceva/', // Замените на название вашего репозитория
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})