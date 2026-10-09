import { useState } from 'react'

const links = [
  { href: '#para-quien', label: 'Para quién' },
  { href: '#producto', label: 'Producto' },
  { href: '#competiciones', label: 'Competiciones' },
  { href: '#inversores', label: 'Inversores' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-linea bg-marino">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Weball, inicio">
          <img src="./logo-blanco.png" alt="Weball" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-bruma transition hover:text-blanco">
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="bg-celeste px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-marino transition hover:bg-celeste-claro"
          >
            Contactanos
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-linea md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-linea bg-marino px-4 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-linea py-4 text-lg font-bold uppercase text-blanco"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 block bg-celeste py-3.5 text-center font-bold uppercase tracking-wide text-marino"
          >
            Contactanos
          </a>
        </div>
      )}
    </header>
  )
}
