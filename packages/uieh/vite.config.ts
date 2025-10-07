import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: './tsconfig.lib.json',
      rollupTypes: true,
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    lib: {
      entry: {
        uieh: path.resolve(__dirname, 'src/ui/index.ts'),
        utils: path.resolve(__dirname, 'src/lib/utils.ts'),
        hooks: path.resolve(__dirname, 'src/hooks/index.ts')
      },
      name: 'uieh',
      formats: ['es', 'cjs']
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
