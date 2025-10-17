import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/logoped-starceva/',
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    open: true
  },
  preview: {
    open: true
  }
})