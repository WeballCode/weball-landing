# Weball — Landing V2 (ruta /v2/)

Nueva versión del sitio: **"el sistema de las grandes ligas"**, para ligas de más de 1.000 jugadores,
organizada en **8 procesos** que se pueden contratar por separado. Convive con el sitio de la raíz y se
publica en `/v2/`. Las reglas generales (idioma, cómo publicar, criterios de diseño) están en el
`CLAUDE.md` de la raíz y valen igual acá.

## Estructura (todo dentro de `v2/`)

- `src/App.jsx` — la página principal, sección por sección.
- `src/procesos.js` — la lista de los 8 procesos (nombre, ícono, frase). De acá salen el menú, la
  cadena de la principal, el pie y el selector "Contratá sólo lo que te falta" (`Modular.jsx`).
- Páginas de proceso: `fichajes.html`, `fixture.html`, `programacion.html`, `planillas.html`,
  `arbitros.html`, `resultados.html`, `tribunal.html`, `comunicacion.html`. Las 8 usan la misma
  entrada `src/proceso.jsx` (que elige su animación) y la plantilla `src/components/ProcessPage.jsx`.
  **Los textos de cada una están en `src/procesos/<nombre>.js`.**
- `ligas.html` — FUTSALA y sus filiales, BAFI, handball y Edmonton. **Cifras y textos de las ligas en
  `src/ligas.js`** (también los usa la principal). Logos en `public/ligas/`.
- Otras páginas: `soluciones.html` (los 8 procesos), `precios.html` (precio en
  `src/components/pricing.js`) e `inversores.html`.
- Para sumar una página: su `.html` en `v2/`, su `src/<nombre>.jsx`, y agregarla a la lista `pages`
  de `vite.v2.config.js` (en la raíz del repo).
- Imágenes: en `v2/public/`, referenciadas con ruta relativa (`./logo-blanco.png`).
- Las páginas llevan `noindex` mientras convivan con el sitio de la raíz. Cuando la V2 la reemplace,
  pasar a `index, follow` y sacar el `/v2/` de las direcciones (canonical y vista previa).

## Sólo lo que existe

Los textos de procesos y ligas cuentan sólo lo que Weball hace hoy (verificado en noviembre de 2026).
Antes de sumar una función o una cifra, confirmala con el equipo técnico: no prometas cosas que
todavía no están (por ejemplo, métricas para sponsors o cobro online del fichaje).
