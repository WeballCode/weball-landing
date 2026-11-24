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

**Ojo con master:** sólo la rama de trabajo tiene permiso para publicar en GitHub Pages. Un push a master
también dispara el workflow, que falla y además **cancela** la publicación de la rama si está en curso.
Por eso: pusheá primero la rama, esperá a que la publicación termine bien y recién ahí pusheá a master.

## Stack

- **React 19 + Vite** (JavaScript, archivos `.jsx`). Sin TypeScript.
- **Tailwind CSS v4** para estilos (clases en el JSX). Colores de marca en `src/index.css`
  dentro de `@theme` (`bg-brand`, `text-brand`, etc.).
- `vite.config.js` usa `base: './'` para que funcione bajo `/weball-landing/`. No lo cambies.
  Referenciá archivos de `public/` con rutas relativas (`./logo.png`), no con `/logo.png`.

## Estructura

- `src/App.jsx` — arma la página principal juntando las secciones, en orden.
- Páginas aparte: `soluciones.html` (`src/soluciones.jsx`), `precios.html` (`src/precios.jsx`) e
  `inversores.html` (`src/inversores.jsx`). El precio se cambia en `src/components/pricing.js`.
  Todas usan `src/components/Page.jsx` (menú, contacto, pie). Para sumar otra página: su `.html` en la
  raíz, su `src/<nombre>.jsx`, y agregarla en `build.rollupOptions.input` de `vite.config.js`.
- `src/components/` — una sección por archivo (`Hero.jsx`, `Footer.jsx`, ...). Para agregar
  una sección nueva, creá su archivo acá y sumala en `App.jsx`.
- `public/` — imágenes, logos, favicon.

## Criterios

- Diseño **mobile-first** y responsive: la mayoría lo va a ver desde el celular.
- Que se vea profesional y moderno: buen espaciado, tipografía grande en títulos, contraste.
- Sin router. En la principal se navega con anclas (`#seccion`); desde otra página, con `./#seccion`.
- No agregues dependencias si no hacen falta. Si agregás una, usá `npm install` para que
  se actualice `package-lock.json` (el deploy usa `npm ci` y falla si no coinciden).
- Formularios: no hay backend. Si piden un formulario de contacto, usá un servicio externo
  (por ejemplo Formspree) o un link a WhatsApp / mailto, y explicá qué hace falta.

## Versión 2 (carpeta `v2/`)

En `v2/` está la nueva versión del sitio ("el sistema de las grandes ligas", con una página por cada uno
de los 8 procesos). Se publica aparte, en la ruta **`/v2/`**, y no toca nada de la raíz: tiene su propio
código (`v2/src/`), sus páginas (`v2/*.html`) y sus imágenes (`v2/public/`).

- Si te piden cambios en "la versión nueva", "la V2" o en `/v2/`, trabajá **sólo** dentro de `v2/`
  (sus instrucciones están en `v2/CLAUDE.md`). Si no, no la toques.
- `npm run dev:v2` la levanta en local; `npm run build` compila las dos (la raíz y `dist/v2`).

## Versión 3 (carpeta `v3/`)

Landing **"Organizá tu liga con tu IA favorita"**. **Es la página principal del sitio** (se compila en la raíz con `vite.principal.config.js`) y además sigue en **`/v3/`**. El `index.html` / `src/App.jsx` de la raíz es la landing anterior y ya no se publica; las páginas aparte (soluciones, precios, inversores) siguen igual. Si piden cambios en "la página principal", es la V3. Mismo esquema que la V2:
si piden cambios en "la landing de IA", "la V3" o `/v3/`, trabajá sólo dentro de `v3/` (ver `v3/CLAUDE.md`).
