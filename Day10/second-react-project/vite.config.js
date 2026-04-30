import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //below pooling is done using chatGPT
  server: {
    watch: {
      usePolling: true, // Forces Vite to check for changes
    },
  },
})
