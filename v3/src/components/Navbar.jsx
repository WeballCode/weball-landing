import { useEffect, useState } from 'react'

const links = [
  { href: '#tareas', label: 'Qué le pedís' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#ahorro', label: 'Cuánto ahorrás' },
  { href: '#preguntas', label: 'Preguntas' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  // Arriba de todo el menú es transparente; al bajar toma fondo
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid || open ? 'border-linea bg-marino/95 backdrop-blur' : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" aria-label="Weball, inicio">
          <img src="./logo-blanco.png" alt="Weball" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-bruma transition hover:text-blanco">
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="rounded-lg bg-celeste px-5 py-2.5 text-sm font-bold text-marino transition hover:bg-celeste-claro">
            Probalo con tu liga
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-linea lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute top-1.5 left-0 h-0.5 w-5 bg-blanco transition ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-linea px-4 pb-6 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-linea py-4 text-lg font-bold">
              {l.label}
            </a>
          ))}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-5 block rounded-lg bg-celeste py-3.5 text-center font-bold text-marino">
            Probalo con tu liga
          </a>
        </div>
      )}
    </header>
  )
}
