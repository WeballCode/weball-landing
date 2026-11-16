import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' hace que el sitio funcione tanto en
// weballcode.github.io/weball-landing/ como en un dominio propio.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  // Además de la principal, el sitio tiene páginas aparte: cada una es un .html en la raíz
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        soluciones: 'soluciones.html',
        inversores: 'inversores.html',
      },
    },
  },
})
