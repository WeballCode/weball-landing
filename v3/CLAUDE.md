# Weball — Landing V3 (ruta /v3/)

Landing de **"Organizá tu liga con tu IA favorita"**: Weball conectado a la IA de la liga para
1) inscribir equipos y fichar jugadores, 2) armar torneos y fixtures, 3) programar partidos y
4) cargar y publicar resultados. Mensaje central: menos tiempo de gestión = menos plata.
Las reglas generales (idioma, cómo publicar, diseño) están en el `CLAUDE.md` de la raíz.

- `src/App.jsx` — orden de las secciones.
- `src/tareas.js` — **textos de las 4 tareas y datos de los mockups** (clubes, filas del panel, chat). Los usan `Showcase.jsx` (notebook + celular de la portada) y `Tareas.jsx`.
- La calculadora de ahorro (`components/Ahorro.jsx`) usa los números que pone cada liga; no promete un porcentaje.
- Imágenes en `v3/public/`. Se compila con `vite.v3.config.js` (en la raíz); `npm run dev:v3` la levanta en local.
- Lleva `noindex` mientras conviva con el sitio de la raíz.

## Manual de marca (manda sobre todo lo demás)

https://claude.ai/artifact/98BMzgJu3MJgY88pFkHcWi — la estructura es tipo Apple (mockups grandes, mucho aire), pero se respeta el manual:
- **Roboto** sola. Títulos peso 800 en MAYÚSCULAS, a la izquierda y en dos líneas como mucho (la portada, que es tapa, va centrada). Etiquetas en peso 500, mayúsculas espaciadas.
- **Marino 70 %, blanco 20 %, celeste 10 %.** Fondos marino y niebla alternados; un solo bloque celeste destacado por sección. **Sin degradados** y sin sombras.
- Palabra destacada: celeste sobre marino, celeste profundo sobre claro. Texto sobre celeste, siempre marino.
- Logo: blanco sobre marino; nunca menos de **96 px** de ancho.
- **Sin escudos de clubes de primera**, ni de AFA o CONMEBOL. Capturas del producto, sin pantallas inventadas.
- Voz: voseo, verbo primero, frases cortas. No decir "gratis", "en minutos" ni "para todo tipo de liga". Cada número, con fuente y fecha.
- El panel replicado (`Panel.jsx`) usa los colores del sistema del manual: marino por defecto, estados en verde #419C3B, bordes #E3E8EC.
