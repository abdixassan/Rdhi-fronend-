import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // waa in la kordhiyo limit-ka 500KB -> 2000KB
  },
})
