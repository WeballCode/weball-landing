import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' hace que el sitio funcione tanto en
// weballcode.github.io/weball-landing/ como en un dominio propio (weball.me).
// Cada página es un .html en la raíz. Las 8 de procesos usan la misma entrada (src/proceso.jsx)
// y dicen cuál son con data-proceso en el <div id="root">.
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
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p === 'index' ? 'main' : p, `${p}.html`])),
    },
  },
})
