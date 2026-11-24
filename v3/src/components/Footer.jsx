export default function Footer() {
  return (
    <footer className="bg-marino text-bruma">
      <div className="mx-auto max-w-6xl px-5 py-10 text-xs leading-relaxed sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo principal, blanco sobre marino, a su tamaño mínimo (96 px) o más */}
          <img src="./logo-blanco.png" alt="Weball" width="1101" height="513" className="h-[45px] w-[96px]" />
          <p className="text-sm font-medium tracking-[0.2em] uppercase">Organizamos y conectamos al deporte amateur</p>
        </div>
        <p className="mt-6 border-t-2 border-linea pt-4">
          Gemini, ChatGPT y Claude son marcas de sus respectivos dueños. Los clubes del ejemplo juegan en ligas que usan Weball; los resultados y
          horarios que se muestran son de ejemplo. © {new Date().getFullYear()} Weball Inc.
        </p>
      </div>
    </footer>
  )
}
