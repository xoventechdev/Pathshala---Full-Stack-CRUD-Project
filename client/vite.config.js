import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Define proxy rules here
      '/api': {
        target: 'http://localhost:5173', // Your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix when forwarding request
      },
    },
  },
})
