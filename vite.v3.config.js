import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// V3 de la landing ("organizá tu liga con tu IA favorita"): vive entera en la carpeta v3/
// y se publica en la ruta /v3/, sin tocar la raíz ni la V2.
const v3 = fileURLToPath(new URL('./v3', import.meta.url))

export default defineConfig({
  root: v3,
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(v3, '../dist/v3'),
    emptyOutDir: true,
  },
})
