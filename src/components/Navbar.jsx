import { useEffect, useState } from 'react'

// Las anclas (#) son secciones de la página principal; las que terminan en .html son páginas aparte
const links = [
  { href: '#liga', label: 'Liga' },
  { href: '#tribunal', label: 'Tribunal IA' },
  { href: '#scores', label: 'Comunidad' },
  { href: '#asociacion', label: 'Asociación' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: './soluciones.html', label: 'Soluciones', page: 'soluciones' },
  { href: './inversores.html', label: 'Inversores', page: 'inversores' },
]

export default function Navbar({ page = 'inicio' }) {
  const home = page === 'inicio'
  // Desde otra página, las secciones de la principal se abren con ./#seccion
  const hrefOf = (l) => (l.href.startsWith('#') && !home ? `./${l.href}` : l.href)
  const current = (l) => l.page === page
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  // Al bajar el menú se esconde para liberar pantalla; al subir vuelve a aparecer
  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY) < 6) return
      setHidden(y > lastY && y > 80)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-linea bg-marino transition-transform duration-300 ${
        hidden && !open ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href={home ? '#inicio' : './'} aria-label="Weball, inicio">
          <img src="./logo-blanco.png" alt="Weball" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefOf(l)}
              aria-current={current(l) ? 'page' : undefined}
              className={`text-sm font-medium transition hover:text-blanco ${current(l) ? 'text-celeste' : 'text-bruma'}`}
            >
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
          className="grid h-10 w-10 place-items-center border border-linea lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {/* Tres líneas; al abrir se convierten en una X */}
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-blanco transition ${open ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-blanco transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-linea bg-marino px-4 pb-6 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={hrefOf(l)}
              aria-current={current(l) ? 'page' : undefined}
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
