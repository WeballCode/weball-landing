# Weball — Landing V3 (página principal del sitio, y también en /v3/)

Landing de **"Organizá tu liga con tu IA favorita"**: Weball conectado a la IA de la liga para
1) inscribir equipos y fichar jugadores, 2) armar torneos y fixtures, 3) programar partidos y
4) cargar y publicar resultados. Mensaje central: menos tiempo de gestión = menos plata.
Las reglas generales (idioma, cómo publicar, diseño) están en el `CLAUDE.md` de la raíz.

- `src/App.jsx` — orden de las secciones.
- `src/tareas.js` — **textos de las 4 tareas y datos de los mockups** (clubes, filas del panel, chat). Los usan `Showcase.jsx` (notebook + celular de la portada) y `Tareas.jsx`.
- La calculadora de ahorro (`components/Ahorro.jsx`) usa los números que pone cada liga; no promete un porcentaje.
- Imágenes en `v3/public/`. Se compila con `vite.v3.config.js` (en la raíz); `npm run dev:v3` la levanta en local.
- Lleva `noindex` mientras conviva con el sitio de la raíz.
- Estética clara inspirada en Apple pero con la **paleta de Weball** (marino, blanco #fbfbf8, niebla, celeste como acento; botones celeste con texto marino). Los colores están en `src/index.css`. El panel de Weball se replica en `Panel.jsx` con sus colores reales.
