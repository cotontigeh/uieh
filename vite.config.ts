import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: {
        uieh: path.resolve(__dirname, 'src/ui/index.ts'),
        utils: path.resolve(__dirname, 'src/lib/utils.js')
      },
      name: 'uieh'
    },
    rollupOptions: {
      external: ['react', '@headlessui/react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
