import { defineConfig, mergeConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import v3 from './vite.v3.config.js'

// La landing de IA (carpeta v3/) es la página principal del sitio: se compila también en la raíz
// de dist/, junto a soluciones.html, precios.html e inversores.html. Sigue publicada en /v3/.
export default mergeConfig(
  v3,
  defineConfig({
    build: {
      outDir: fileURLToPath(new URL('./dist', import.meta.url)),
      emptyOutDir: false,
    },
  }),
)
