# Weball — Landing

Sitio publicado: **https://weballcode.github.io/weball-landing/**

## Cómo hacer cambios (sin programar)

1. Entrá a [claude.ai/code](https://claude.ai/code) y abrí una sesión con este repositorio.
2. Pedile lo que quieras en español: "agregá una sección de precios", "cambiá el color
   a verde", "poné este logo" (podés adjuntar imágenes).
3. Claude hace el cambio y lo publica solo. En ~1 minuto lo ves en el link de arriba.

## Para desarrolladores

```bash
npm install
npm run dev     # servidor local
npm run build   # compila a dist/
```

React 19 + Vite + Tailwind v4. Cada push a cualquier rama se despliega con GitHub Actions
(`.github/workflows/deploy.yml`). Las instrucciones para Claude están en `CLAUDE.md`.
