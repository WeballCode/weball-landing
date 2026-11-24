import { useState } from 'react'

const links = [
  { href: '#tareas', label: 'Qué le pedís' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#ligas', label: 'Ligas' },
  { href: '#ahorro', label: 'Cuánto ahorrás' },
  { href: '#preguntas', label: 'Preguntas' },
]

// Barra marino translúcida con el logo principal (blanco sobre marino). El logo nunca mide menos de 96 px de ancho.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-marino/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#inicio" aria-label="Weball, inicio" className="block">
          <img src="./logo-blanco.png" alt="Weball" width="1101" height="513" className="h-[45px] w-[96px]" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-bruma transition hover:text-blanco">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="rounded-md bg-celeste px-4 py-2 text-sm font-medium text-marino transition hover:bg-celeste-claro">
            Probalo
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-[5px] rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-[5px] -rotate-45' : 'top-2'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-linea px-6 pt-3 pb-8 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-linea py-4 text-xl font-bold text-blanco">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
