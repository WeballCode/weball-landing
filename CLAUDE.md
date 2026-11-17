# Weball — Landing page

## Quién te habla

La persona que chatea con vos **no sabe programar**. Es socio de Weball y arma la landing
describiendo lo que quiere en lenguaje natural. Por eso:

- Hablá siempre en **español**, simple, sin jerga técnica. Nada de "componentes", "props",
  "build" o "commit" en tus respuestas salvo que te lo pregunte.
- **No le hagas preguntas técnicas.** Decidí vos lo técnico. Preguntá solo cosas de negocio
  o de gusto (textos, colores, qué secciones quiere), y si algo es razonable, hacelo y
  contale qué elegiste para que lo cambie si no le gusta.
- Si pide algo vago ("hacelo más lindo", "más moderno"), proponé y ejecutá una mejora concreta.
- Si manda imágenes o logos, guardalos en `public/` y usalos.

## Cómo se publican los cambios (IMPORTANTE)

Cada `git push` dispara `.github/workflows/deploy.yml`, que compila y publica el sitio en:

**https://weballcode.github.io/weball-landing/**

Después de **cada** cambio que pida, sin esperar a que te lo diga:

1. Corré `npm run build` y asegurate de que compile sin errores. Si falla, arreglalo vos.
2. Si podés, levantá `npx vite preview` y sacá una captura con Playwright (Chromium ya está
   instalado) para verificar que se ve bien, en escritorio y en celular (375px de ancho).
3. Hacé commit con un mensaje claro y **push** a la rama de trabajo de la sesión.
4. Decile en una o dos frases qué cambiaste y que en ~1 minuto lo ve en el link de arriba
   (que recargue la página; si no cambió, Ctrl+Shift+R / en el celu, recargar de nuevo).

Nunca dejes cambios sin pushear: si no está pusheado, el socio no lo ve.

## Stack

- **React 19 + Vite** (JavaScript, archivos `.jsx`). Sin TypeScript.
- **Tailwind CSS v4** para estilos (clases en el JSX). Colores de marca en `src/index.css`
  dentro de `@theme` (`bg-brand`, `text-brand`, etc.).
- `vite.config.js` usa `base: './'` para que funcione bajo `/weball-landing/`. No lo cambies.
  Referenciá archivos de `public/` con rutas relativas (`./logo.png`), no con `/logo.png`.

## Estructura

El sitio se presenta como **"el sistema de las grandes ligas"** (ligas de más de 1.000 jugadores),
organizado en **8 procesos** que se pueden contratar por separado.

- `src/App.jsx` — arma la página principal juntando las secciones, en orden.
- `src/procesos.js` — la lista de los 8 procesos (nombre, ícono, frase). De acá salen el menú, la
  cadena de la principal, el pie y el selector "Contratá sólo lo que te falta" (`Modular.jsx`).
- Páginas de proceso: `fichajes.html`, `fixture.html`, `programacion.html`, `planillas.html`,
  `arbitros.html`, `resultados.html`, `tribunal.html`, `comunicacion.html`. Las 8 usan la misma
  entrada `src/proceso.jsx` (que elige su animación) y la plantilla `src/components/ProcessPage.jsx`.
  **Los textos de cada una están en `src/procesos/<nombre>.js`.**
- `ligas.html` (`src/ligas.jsx` + `src/components/Ligas.jsx`) — FUTSALA y sus filiales, BAFI,
  handball y Edmonton. **Las cifras y textos de las ligas están en `src/ligas.js`** (también las usa
  la principal). Logos en `public/ligas/`.
- Otras páginas: `soluciones.html` (los 8 procesos), `precios.html` (el precio se cambia en
  `src/components/pricing.js`) e `inversores.html`. Todas usan `src/components/Page.jsx` (menú,
  contacto, pie). Para sumar otra página: su `.html` en la raíz, su `src/<nombre>.jsx`, y agregarla a
  la lista `pages` de `vite.config.js`.
- `src/components/` — una sección por archivo (`Hero.jsx`, `Footer.jsx`, ...). Para agregar
  una sección nueva, creá su archivo acá y sumala en `App.jsx`.
- `public/` — imágenes, logos, favicon.

**Sólo lo que existe.** Los textos de procesos y ligas cuentan sólo lo que Weball hace hoy (verificado
en noviembre de 2026). Antes de sumar una función o una cifra, confirmala con el equipo técnico: no
prometas cosas que todavía no están (por ejemplo, métricas para sponsors o cobro online del fichaje).

## Criterios

- Diseño **mobile-first** y responsive: la mayoría lo va a ver desde el celular.
- Que se vea profesional y moderno: buen espaciado, tipografía grande en títulos, contraste.
- Sin router. En la principal se navega con anclas (`#seccion`); desde otra página, con `./#seccion`.
- No agregues dependencias si no hacen falta. Si agregás una, usá `npm install` para que
  se actualice `package-lock.json` (el deploy usa `npm ci` y falla si no coinciden).
- Formularios: no hay backend. Si piden un formulario de contacto, usá un servicio externo
  (por ejemplo Formspree) o un link a WhatsApp / mailto, y explicá qué hace falta.
