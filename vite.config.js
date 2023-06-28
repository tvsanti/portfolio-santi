import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/portfolio/",
  build: {
    chunkSizeWarningLimit: 1000
  },
  server: {
    headers: {
      'Permissions-Policy': 'interest-cohort=()',
    },
  },

})