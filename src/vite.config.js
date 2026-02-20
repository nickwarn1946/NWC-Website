import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    export default defineConfig({
  
  base: '/', 
  plugins: [react()],
})
    plugins: [react()],
    build: {
    outDir: 'dist',
  }
})
