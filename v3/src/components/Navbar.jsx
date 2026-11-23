import { useState } from 'react'

const links = [
  { href: '#tareas', label: 'Qué le pedís' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#ahorro', label: 'Cuánto ahorrás' },
  { href: '#ligas', label: 'Ligas' },
  { href: '#preguntas', label: 'Preguntas' },
]

// Barra fina, blanca translúcida, como un menú de sistema
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/[0.06] bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-12 max-w-6xl items-center justify-between px-5 sm:px-6">
        <a href="#inicio" aria-label="Weball, inicio" className="logo-marino block h-6 w-[52px]" />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-tinta/80 transition hover:text-tinta">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="rounded-full bg-accion px-3.5 py-1 text-[13px] font-medium text-white transition hover:bg-accion-hover">
            Probalo
          </a>
          <button
            type="button"
            className="grid h-8 w-8 place-items-center md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 h-[1.5px] w-4 bg-tinta transition ${open ? 'top-[5px] rotate-45' : 'top-0.5'}`} />
              <span className={`absolute left-0 h-[1.5px] w-4 bg-tinta transition ${open ? 'top-[5px] -rotate-45' : 'top-2'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/[0.06] px-8 pt-4 pb-8 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-2xl font-semibold text-tinta">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
