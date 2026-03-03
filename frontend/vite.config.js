import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  optimizeDeps: {
    include: ['framer-motion', 'three', '@react-three/fiber', '@react-three/postprocessing', 'postprocessing'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('/three/') || id.includes('@react-three') || id.includes('/postprocessing/')) {
            return 'three-stack'
          }
          if (id.includes('/framer-motion/')) return 'motion'
          return undefined
        },
      },
    },
  },
})
