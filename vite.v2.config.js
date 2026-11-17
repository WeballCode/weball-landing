import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

// V2 de la landing ("el sistema de las grandes ligas"): vive entera en la carpeta v2/
// y se publica en la ruta /v2/, sin tocar el sitio de la raíz.
// `npm run build` compila primero la raíz y después esta, dentro de dist/v2.
const v2 = fileURLToPath(new URL('./v2', import.meta.url))
const pages = [
  'index',
  'soluciones',
  'fichajes',
  'fixture',
  'programacion',
  'planillas',
  'arbitros',
  'resultados',
  'tribunal',
  'comunicacion',
  'ligas',
  'precios',
  'inversores',
]

export default defineConfig({
  root: v2,
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: resolve(v2, '../dist/v2'),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p === 'index' ? 'main' : p, resolve(v2, `${p}.html`)])),
    },
  },
})
