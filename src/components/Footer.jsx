export default function Footer() {
  return (
    <footer className="bg-marino">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 text-sm text-bruma sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <img src="./logo-blanco.png" alt="Weball" className="h-9 w-auto self-start" />
        <p className="font-medium uppercase tracking-[0.2em]">Organizamos y conectamos al deporte amateur</p>
        {/* Las páginas aparte, a mano desde cualquier lado */}
        <nav className="flex gap-6 font-bold uppercase tracking-wide">
          <a href="./soluciones.html" className="transition hover:text-blanco">Soluciones</a>
          <a href="./inversores.html" className="transition hover:text-blanco">Inversores</a>
        </nav>
        <p>© {new Date().getFullYear()} Weball Inc.</p>
      </div>
    </footer>
  )
}
