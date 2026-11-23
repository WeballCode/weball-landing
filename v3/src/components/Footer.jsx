export default function Footer() {
  return (
    <footer className="border-t border-linea bg-marino-hondo">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-bruma sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
          <img src="./logo-blanco.png" alt="Weball" className="h-7 w-auto" />
          <span className="hidden h-5 w-px bg-linea sm:block" />
          <span>Organizá tu liga con tu IA favorita</span>
        </div>
        <p>© {new Date().getFullYear()} Weball Inc.</p>
      </div>
    </footer>
  )
}
