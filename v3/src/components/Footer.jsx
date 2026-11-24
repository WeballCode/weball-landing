export default function Footer() {
  return (
    <footer className="bg-fondo">
      <div className="mx-auto max-w-6xl px-5 py-8 text-xs leading-relaxed text-gris sm:px-6">
        <p className="border-b border-borde pb-4">
          Gemini, ChatGPT y Claude son marcas de sus respectivos dueños. Los clubes del ejemplo juegan en ligas que usan Weball; los resultados y
          horarios que se muestran son ilustrativos.
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="logo-marino block h-5 w-[43px]" aria-label="Weball" role="img" />
          <p>© {new Date().getFullYear()} Weball Inc. Organizá tu liga con tu IA favorita.</p>
        </div>
      </div>
    </footer>
  )
}
