import { procesos, procesoHref } from '../procesos.js'

export default function Footer() {
  return (
    <footer className="border-t border-linea bg-marino">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 text-sm text-bruma sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <img src="./logo-blanco.png" alt="Weball" className="h-9 w-auto self-start" />
          <p className="font-medium uppercase tracking-[0.2em]">El sistema de las grandes ligas</p>
          <p>© {new Date().getFullYear()} Weball Inc.</p>
        </div>
        {/* Los 8 procesos, a mano desde cualquier página */}
        <nav aria-label="Procesos">
          <p className="font-bold uppercase tracking-wide text-blanco">Procesos</p>
          <ul className="mt-3 flex flex-col gap-2">
            {procesos.map((p) => (
              <li key={p.slug}>
                <a href={procesoHref(p.slug)} className="transition hover:text-blanco">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Weball">
          <p className="font-bold uppercase tracking-wide text-blanco">Weball</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li><a href="./soluciones.html" className="transition hover:text-blanco">Todos los procesos</a></li>
            <li><a href="./ligas.html" className="transition hover:text-blanco">Ligas que usan Weball</a></li>
            <li><a href="./precios.html" className="transition hover:text-blanco">Precios</a></li>
            <li><a href="./inversores.html" className="transition hover:text-blanco">Inversores</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
