import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 1. Tell Vite the name of your GitHub Repository
  base: '/NWC-Website/', 
  server: {
    port: 3000,
  }
})
