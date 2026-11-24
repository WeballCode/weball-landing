import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' hace que el sitio funcione tanto en
// weballcode.github.io/weball-landing/ como en un dominio propio.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  // La principal ahora es la landing de IA (v3/, ver vite.principal.config.js). Acá se compilan
  // las páginas aparte: cada una es un .html en la raíz. index.html (landing anterior) ya no se publica.
  build: {
    rollupOptions: {
      input: {
        soluciones: 'soluciones.html',
        precios: 'precios.html',
        inversores: 'inversores.html',
      },
    },
  },
})
