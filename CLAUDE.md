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

- `src/App.jsx` — arma la página juntando las secciones, en orden.
- `src/components/` — una sección por archivo (`Hero.jsx`, `Footer.jsx`, ...). Para agregar
  una sección nueva, creá su archivo acá y sumala en `App.jsx`.
- `public/` — imágenes, logos, favicon.

## Criterios

- Diseño **mobile-first** y responsive: la mayoría lo va a ver desde el celular.
- Que se vea profesional y moderno: buen espaciado, tipografía grande en títulos, contraste.
- Página única (landing). Navegación con anclas (`#seccion`), sin router.
- No agregues dependencias si no hacen falta. Si agregás una, usá `npm install` para que
  se actualice `package-lock.json` (el deploy usa `npm ci` y falla si no coinciden).
- Formularios: no hay backend. Si piden un formulario de contacto, usá un servicio externo
  (por ejemplo Formspree) o un link a WhatsApp / mailto, y explicá qué hace falta.
