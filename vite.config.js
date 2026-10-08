import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base './' hace que el sitio funcione tanto en
// weballcode.github.io/weball-landing/ como en un dominio propio.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
