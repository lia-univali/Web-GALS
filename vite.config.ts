import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Web-GALS',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  define: {
	  __BUILD_DATE__: JSON.stringify(`v. ${new Date().toISOString().split('T')[0].replace(/-/g, '.')}`),
  },
})
