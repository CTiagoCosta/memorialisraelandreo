import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],  base: './',
  server: {
    port: 4000,
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
  
})

